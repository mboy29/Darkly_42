# SEARCHIMG SQL INJECTION

## Exploit

On the page **searchimg** located at the following URL, **http://<IP_ADDRESS>/?page=searchimg**, there is a search images form. 

When entering any string in the form, a SQL error is displayed. We therefore suppose that we can perform a SQL injection to potentially find a new flag. 

By testing the most basic SQL injection: `1 or 1 = 1`, we received confirmation that the form is vulnerable to SQL injections :

![1 or 1 = 1](Screenshot1or1.png)

From here, we decided to try displaying different tables in the database and their corresponding columns. After some research, we found the following method to display many columns from the database, including the **list_images** table :

```sql
1 or 1=1 UNION SELECT table_name, column_name FROM information_schema.columns
```

![alt text](ScreenshotListImagesColumns.png "Users columns")

From here, we started displayed by pairs the content of each columns of the users table : id, url, title, comment. When displayed the content of url and comment as depicted below we landed on information concerning a flag.

We then displayed the content of each column of the **list_images** table in pairs: **id**, **url**, **title** & **comment**. When we displayed the content of the **url** and **comment** columns, we found information concerning a new flag:

```sql
1 or 1=1 UNION select url, comment from list_images
```

![Flag Instructions](ScreenshotFlagInstructions.png)

Therefore, we decrypted **1928e8083cf461a51303633093573c46** using [md5decrypt](https://md5decrypt.net/) and obtained the string **albatroz**.

As instructed, we then converted the string to lowercase and encrypted it using SHA256 to obtain the flag:
```sh
echo -n albatroz | shasum -a 256
f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188  -
``` 
