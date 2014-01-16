/*
* Copyright (c) 2013 BlackBerry Limited
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
require('../../lib/webview');

module.exports = {
	prompt: function(success, fail, args, env) {
		var params = JSON.parse(decodeURIComponent(args[0]));

		if(params.type == "password") {
			// inject DOMNodeInserted listener into overlay webview
			var to_overlay_webview = '\
			document.addEventListener("DOMNodeInserted", function(e) {\
				if(e.target.className == "dialog-content-container" &&\
				   e.target.getElementsByTagName("input").length > 0) {\
					console.log("WRITE ONCE");\
					e.target.getElementsByTagName("input")[0].type = "password";\
					this.removeEventListener("DOMNodeInserted", arguments.callee);\
				}\
			});';

			var overlay_webview = qnx.webplatform.getWebViews()[2];
			overlay_webview.executeJavaScript(to_overlay_webview);
		}

		var result = new PluginResult(args, env);
		result.ok(true,false);
	}
};
