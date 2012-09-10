# Cordova MessageBox Plugin #
by [Olivier Louvignes](http://olouv.com)

## DESCRIPTION ##

* This plugin provides an unified API to use the `UIAlertView` native component from iOS. This plugin is built for Cordova >= v2.1.0 with ARC.

* Both iOS & Android (not available atm) are supported with the same javascript interface.

* Compared to the `iPhone/Prompt` plugin, it is more documented & simpler to understand. It does also provide new options for prompt (message, multiline, input type password).

* There is a `Sencha Touch 2.0` plugin to easily leverage this plugin [here](https://github.com/mgcrea/sencha-touch-plugins/blob/master/CordovaMessageBox.js)

## PLUGIN SETUP FOR IOS ##

Using this plugin requires [Cordova iOS](https://github.com/apache/incubator-cordova-ios).

1. Make sure your Xcode project has been [updated for Cordova](https://github.com/apache/incubator-cordova-ios/blob/master/guides/Cordova%20Upgrade%20Guide.md)
2. Rename the `src/ios` folder to `MessageBox`, drag and drop it from Finder to your Plugins folder in XCode, using "Create groups for any added folders"
3. Add the .js files to your `www` folder on disk, and add reference(s) to the .js files using `<script>` tags in your html file(s)


    `<script type="text/javascript" src="/js/plugins/MessageBox.js"></script>`


4. Add new entry with key `MessageBox` and value `MessageBox` to `Plugins` in `Cordova.plist/Cordova.plist`

## PLUGIN SETUP FOR ANDROID ##

Using this plugin requires [Cordova Android](https://github.com/apache/incubator-cordova-android).

1. Make sure your Android project has been [updated for Cordova](https://github.com/apache/incubator-cordova-android/blob/master/guides/Cordova%20Upgrade%20Guide.md)
2. Merge both the `libs` and `src` folder from this plugin to your projet.
3. Refresh (fn-F5), right-click on the `libs/facebook-android-sdk.jar` & select `Build path > Add to build path` (the debug version will output to the console).
3. Add the .js files to your `assets/www` folder on disk, and add reference(s) to the .js files using `<script>` tags in your html file(s)


    `<script type="text/javascript" src="/js/plugins/FacebookConnect.js"></script>`


4. Add new entry with key `FacebookConnect` and value `org.apache.cordova.plugins.FacebookConnect` to `Plugins` in `res/xml/config.xml`


    <plugin name="FacebookConnect" value="org.apache.cordova.plugins.FacebookConnect"/>


## JAVASCRIPT INTERFACE (IOS/ANDROID) ##

    // After device ready, create a local alias
    var messageBox = window.plugins.messageBox;

    // Alert
    messageBox.alert('Title', 'Message', function(button) {
        console.warn('alert(), arguments=' + Array.prototype.slice.call(arguments).join(', '));
    });

    // Confirm
    messageBox.confirm('Title', 'Message', function(button) {
        console.warn('confirm(), arguments=' + Array.prototype.slice.call(arguments).join(', '));
    });

    // Default prompt
    messageBox.prompt('Title', 'Message', function(button, value) {
        console.warn('prompt(), arguments=' + Array.prototype.slice.call(arguments).join(', '));
    });

    // Prompt a password
    messageBox.prompt('Please enter your password', '', function(button, value) {
        console.warn('prompt(), arguments=' + Array.prototype.slice.call(arguments).join(', '));
    }, {placeholder: 'password', type: 'password'});

* Check [source](https://github.com/mgcrea/cordova-facebook-connect/tree/master/FacebookConnect.js) for additional configuration.

## BUGS AND CONTRIBUTIONS ##

Patches welcome! Send a pull request. Since this is not a part of Cordova Core (which requires a CLA), this should be easier.

Post issues on [Github](https://github.com/mgcrea/cordova-messagebox/issues)

The latest code (my fork) will always be [here](https://github.com/mgcrea/cordova-messagebox/tree/master)

## LICENSE ##

    The MIT License

    Copyright (c) 2012 Olivier Louvignes

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

## CREDITS ##

Contributors :

* [Olivier Louvignes](http://olouv.com)

Inspired by :

* [Prompt Phonegap plugin](https://github.com/phonegap/phonegap-plugins/tree/master/iPhone/Prompt)

* [MessageBox Sencha Touch 2.0 class](http://docs.sencha.com/touch/2-0/#!/api/Ext.MessageBox)
