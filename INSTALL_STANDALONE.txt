## Installing the quiz as an offline application
These are the instructions for installing the quiz as an offline application. During installation, you might need connectivity.

1. Locate and download the file `quiz.zip` from this git repository. Unpack it anywhere on your system, for example on your desktop.
2. The quiz is a web application that can run offline. After intallation, the quiz can run without network connectivity, but it requires a browser to run notheless. As Firefox has an up-to-date JavaScript engine and excellent fullscreen capability, make sure Firefox version 78 or higher is installed. If Firefox is installed, check the installed version by opening the menu item `Help -> About Firefox` (use `Alt` key to open menu). If Firefox is not installed, get it at https://www.mozilla.org/
2. Open Firefox. To run the quiz from your local machine, Firefox needs permission to open local files, which is disabled by default. Type `about:config` in the web adress input field. Accept the warranty legal slur (if you didn't pay for Firefox, you don't have a warranty anyway).
3.  In the search box on the `about:config` page, type `privacy.file_unique_origin`. Change the value to `false` by double-clicking on it. You can now close Firefox.

## Running the quiz as an offline application
Open the folder where you unpacked the quiz archive and run `quiz` by double-clicking on it if Firefox is your default browser, or else right-click on the file to show the context menu, and choose "Open with Firefox".

Once in Firefox, click `F11` to toggle fullscreen mode. Adjust the size using the `Strg+`, `Strg-` and `Strg0` keys.

## Setting the quiz to launch on startup
Once the quiz is installed and configured, it is possible to launch the quiz in fullscreen mode when the machine starts up. Instructions vary depending on your operating system. For Windows 10, see https://docs.microsoft.com/en-us/windows/configuration/kiosk-shelllauncher

## Links
The online version of the Quiz is here: https://unterwasserlaerm.museumfuernaturkunde.berlin/quiz
The quiz source code is here: https://github.com/MfN-Berlin/HIP_Quiz

## Kontakt
Technical contact: alvaro.ortiztroncoso@mfn-berlin.de
