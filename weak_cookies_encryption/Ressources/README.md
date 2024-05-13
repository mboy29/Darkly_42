# WEAK COOKIES ENCRYPTION

## Exploit


When visiting the site, we looked up the storage elements and we found a cookie named "I_am_admin" with the following encrypted value :
```
b326b5062b2f0e69046810717534cb09
```

![alt text](ScreenshotCookie.png "Cookie")

Using this [encryption/decryption website](https://md5decrypt.net/), we determined that the value of this cookie was "false". We therefore, encrypted the value "true" and replaced the cookie's value with it. When refreshing the pge, the following pop up appeared, displaying a new flag as shown below.

![alt text](ScreenshotFlag.png "Flag")


