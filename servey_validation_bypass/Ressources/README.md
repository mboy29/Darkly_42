# SURVEY INPUT VALIDATION BYPASS

## Exploit

On the page **survey** located at the following URL, **http://<IP_ADDRESS>/index.php?page=survey#**, we are asked to rate a subject on a scale of 1 to 10. 

However, if we change the value of the select input to a value over 10, the page prompts a new flag.

![Flag](ScreenshotFlag.png)

These kind of exploit are known as **Input Validation Bypass** or **Input Validation Evasion** attack. This term reflects the fact that the attacker is able to bypass the expected input validation mechanisms of the application by submitting values that are not properly handled or sanitized by the server-side code.

## Demonstration 

Here are the steps we proceeded to do:

![Select Pre](ScreenshotSelectPre.png)

Exploited version:

![Select Post](ScreenshotSelectPost.png)