({
    handleMessage: function (component, message, helper) {
        // Read the message argument to get the values in the message payload
        if (message != null) {
            var counter = component.get('v.counter');
            component.set('v.priorCount', counter);
            var operator = message.getParam("operator");
            var constant = message.getParam("constant");
            if (operator == 'add') {
                counter += constant;
            } else if (operator == 'subtract') {
                counter -= constant;
            } else {
                counter *= constant;
            }

            component.set('v.counter', counter);
        }
    }
})