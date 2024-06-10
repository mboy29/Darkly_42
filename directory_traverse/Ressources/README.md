# DIRECTORY TRAVERSE

## Exploit

As [commonly known](https://www.linuxcertif.com/doc/keyword//etc/passwd/), every nginx server stores a configuration file named "/etc/passwd" located at **http://<IP_ADDRESS>?page=/etc/passwd** in this case.

Additionally, the website returns a popup message regardless of the path, as shown below:
![Path](ScreenshotPath.png)

Our idea was to retrieve the contents of this popup on the server by traversing directories and searching until we got a different popup from the one shown above. We created this [exploit](exploit.js). 

The script exploits a directory traversal vulnerability on the web server by iteratively traversing directories, accessing files such as "/etc/passwd", and searching for HTML script tags containing the keyword "flag" to potentially retrieve sensitive information.

The exploit displays the following flag:
![Flag](ScreenshotFlag.png)


