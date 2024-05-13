# BRUTEFORCE AUTHENTICATION

## Exploit

At first, we tried using some SQL injections to bypass the login form and get the flag. However, are attemps were only failures. We therefore opted for a different method using a brute force.

After research, we found Hydra : a versatile and powerful tool used for performing password brute-force attacks and online dictionary attacks against various types of remote authentication services, allowing testers to assess the strength of passwords and the robustness of authentication systems. 

We installed this tool using brew : "brew install hydra". And executed the following command using this [documentation](ohttps://github.com/gnebbia/hydra_notes) :
```
hydra -l admin -P ./Downloads/rockyou.txt -F 10.43.200.94 http-get-form '/index.php:page=signin&username=^USER^&password=^PASS^&Login=Login:F=images/WrongAnswer.gif'
```

Where :
- **-l admin** : Use "admin" as username (we simply supposed admin would be a valid login) ;
- **-P ./Downloads/rockyou.txt -F** : Try all password listed in a dictonnary of most common password suggested by this [tutorial](https://www.freecodecamp.org/news/how-to-use-hydra-pentesting-tutorial/) and exit after the first found login/password pair for any host ;
- **10.43.200.94** : The IP addresse of our website ;
- **http-get-form '/index.php:page=signin&username=^USER^&password=^PASS^&Login=Login:F=images/WrongAnswer.gif'** : We utilize http-get-form as it emulates form submission, distinguishing it from a standard HTTP request where we determine success by absence of the "WrongAnswer.gif" display on the following URL "http://10.43.200.94/?page=signin&username=admin&password=shadow&Login=Login#"

    ![alt text](ScreenshotForm.png "Form")

This command outputs the following results :

![alt text](ScreenshotHydraResult.png "Hydra Result")

And as we log in with the username "admin" and the password "shadow", the website redirect us to this page and display our flag :

![alt text](ScreenshotFlag.png "Flag").