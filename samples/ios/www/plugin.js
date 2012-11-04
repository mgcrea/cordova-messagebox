
    var plugin = {

        alert: function() {
            window.plugins.messageBox.alert({title: 'Title', message: 'Message'}, function(button) {
                var args = Array.prototype.slice.call(arguments, 0);
                console.log("messageBox.alert:" + JSON.stringify(args));
            });
        },

        confirm: function() {
            window.plugins.messageBox.confirm({title: 'Title', message: 'Message'}, function(button) {
                var args = Array.prototype.slice.call(arguments, 0);
                console.log("messageBox.confirm:" + JSON.stringify(args));
            });
        },

        prompt : function() {
            window.plugins.messageBox.prompt({title: 'Title', message: 'Message'}, function(button, value) {
                var args = Array.prototype.slice.call(arguments, 0);
                console.log("messageBox.prompt:" + JSON.stringify(args));
            });
        },

        promptPassword : function() {

            var options = {
                title: 'Please enter your password',
                placeholder: 'password',
                type: 'password'
            }

            window.plugins.messageBox.prompt(options, function(button, value) {
                var args = Array.prototype.slice.call(arguments, 0);
                console.log("messageBox.prompt:" + JSON.stringify(args));
            });
        }

    };
