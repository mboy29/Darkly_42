# FILE UPLOAD BYPASS

## Exploit

Upon exploring the website, we discovered an upload page located at http://<IP_ADDRESS>/?page=upload.

Initially, we attempted to upload various file types including images (.png, .jpg), scripts (.js, .sh, .php), and documents (.pdf), but encountered consistent errors displayed on the page:
![ScreenshotUploadFail](ScreenshotUploadFail.png)

After further investigation, we observed that only JPEG (.jpg) and JPG (.jpeg) images were successfully uploaded. These files were stored in the /tmp/ directory:
![ScreenshotUploadSuccess](ScreenshotUploadSuccess.png)

Realizing the server's restriction on PHP files, which are typically rejected due to their "application/octet-stream" content-type header, we devised a method to disguise a PHP script as a JPG image. By altering the content-type header, we tricked the server into accepting our malicious PHP script.

To execute this exploit, we utilized the following command:
```sh
touch /tmp/exploit.php
curl -X POST -F "Upload=Upload" -F "uploaded=@/tmp/exploit.php;type=image/jpg" "http://<IP_ADDRESS>/index.php?page=upload" | grep 'The flag is :'
```

Where:

- **touch /tmp/exploit.php**: This command creates a PHP file named exploit.php in the temporary directory.
- **curl -X POST -F "Upload=Upload" -F "uploaded=@/tmp/exploit.php;type=image/jpg" "http://<IP_ADDRESS>/index.php?page=upload"**: Sends a POST request to the server, indicating that exploit.php should be treated as a JPEG image file. Replace <IP_ADDRESS> with the vulnerable website's IP address.
- **grep 'The flag is :'**: Filters the server's response to identify the presence of the flag.


For automation purposes, we have prepared a bash script that streamlines this process. Simply provide the IP address of the vulnerable website as an argument, and it will attempt to upload exploit.php disguised as an image.

![ScreenshotFlag](ScreenshotFlag.png)

This approach successfully circumvents the server's file type restrictions, allowing execution of PHP code under the guise of a harmless image upload.