# Cordova MessageBox Plugin #
by [Olivier Louvignes](http://olouv.com)

## DESCRIPTION ##

* This plugin provides an unified API to use the `UIAlertView` native component from iOS.

* This plugin is built for Cordova >= v2.1.0 with ARC.

* Compared to the `iPhone/Prompt` plugin, it is more documented & simpler to understand. It does also provide new options for prompt (message, multiline, input type password).

* There is a `Sencha Touch 2.0` plugin to easily leverage this plugin [here](https://github.com/mgcrea/sencha-touch-plugins/blob/master/CordovaMessageBox.js)

[![Screenshot](https://raw.github.com/mgcrea/cordova-messagebox/master/samples/ios/sample.png)](https://github.com/mgcrea/cordova-messagebox/tree/master)

## PLUGIN SETUP FOR IOS ##

Using this plugin requires [Cordova iOS](https://github.com/apache/incubator-cordova-ios).

1. Make sure your Xcode project has been [updated for Cordova](https://github.com/apache/incubator-cordova-ios/blob/master/guides/Cordova%20Upgrade%20Guide.md)
2. Rename the `src/ios` folder to `MessageBox`, drag and drop it from Finder to your Plugins folder in XCode, using "Create groups for any added folders"
3. Add the .js files to your `www` folder on disk, and add reference(s) to the .js files using `<script>` tags in your html file(s)


    `<script type="text/javascript" src="/js/plugins/MessageBox.js"></script>`


4. Add new entry with key `MessageBox` and value `MessageBox` to `Plugins` in `Cordova.plist/Cordova.plist`

## JAVASCRIPT INTERFACE (IOS) ##

    // Alert
    window.plugins.messageBox.alert({title: 'Title', message: 'Message'}, function(button) {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log("messageBox.alert:" + JSON.stringify(args));
    });

    // Confirm
    window.plugins.messageBox.confirm({title: 'Title', message: 'Message'}, function(button) {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log("messageBox.confirm:" + JSON.stringify(args));
    });

    // Default prompt
    window.plugins.messageBox.prompt({title: 'Title', message: 'Message'}, function(button, value) {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log("messageBox.prompt:" + JSON.stringify(args));
    });

    // Prompt a password
    var options = {
        title: 'Please enter your password',
        placeholder: 'password',
        type: 'password'
    }
    window.plugins.messageBox.prompt(options, function(button, value) {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log("messageBox.prompt:" + JSON.stringify(args));
    });

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
