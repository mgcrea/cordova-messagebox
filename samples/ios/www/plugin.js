
var plugin = {
    alert: function() {
        window.plugins.messageBox.alert('Title', 'Message', function(button) {
            var args = Array.prototype.slice.call(arguments, 0);
            console.log("messageBox.alert:" + JSON.stringify(args));
        });
    },
    confirm: function() {
        window.plugins.messageBox.confirm('Title', 'Message', function(button) {
            var args = Array.prototype.slice.call(arguments, 0);
            console.log("messageBox.confirm:" + JSON.stringify(args));
        });
    },
    prompt : function() {
        window.plugins.messageBox.prompt('Title', 'Message', function(button, value) {
            var args = Array.prototype.slice.call(arguments, 0);
            console.log("messageBox.prompt:" + JSON.stringify(args));
        });
    },
    promptPassword : function() {
        window.plugins.messageBox.prompt('Please enter your password', '', function(button, value) {
            var args = Array.prototype.slice.call(arguments, 0);
            console.log("messageBox.prompt:" + JSON.stringify(args));
        }, {placeholder: 'password', type: 'password'});
    }
};
