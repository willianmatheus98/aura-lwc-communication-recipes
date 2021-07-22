({
    handleChange: function (component, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");

        var scopeEvent = component.get("v.scopeEvent");
        var myEventChangeColor;

        if(scopeEvent == 'component') {
            myEventChangeColor = component.getEvent("myEventChangeColor");
        } else {
            myEventChangeColor = $A.get("e.c:trafficLightChangeColorApplication");
        }


        myEventChangeColor.setParams({
            "newColor": selectedOptionValue
        });
        myEventChangeColor.fire();

    }
})