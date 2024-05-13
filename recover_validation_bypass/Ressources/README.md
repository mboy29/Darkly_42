# RECOVER INPUT VALIDATION BYPASS

## Exploit

On the page "recover" located at the following URL, http://10.43.200.94/?page=recover, is located a form to recover a password with the following fields.

Here's the following step we proceeded to do :
![alt text](ScreenshotFormPre.png "Form Pre")

By changing the "value" of the first input tag by any string (valid email addresse, random or empty string, etc.) as follows :

![alt text](ScreenshotFormPost.png "Form Post")

The page prompts a new flag

![alt text](ScreenshotFlag.png "Flag")

Such exploit is as called "Input Validation Bypass" or "Input Validation Evasion" attack. This term reflects the fact that the attacker is able to bypass the expected input validation mechanisms of the application by submitting values that are not properly handled or sanitized by the server-side code.

