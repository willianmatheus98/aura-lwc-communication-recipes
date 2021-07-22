({
    handleColorChange : function(component, event, helper) {
        var newColor = event.getParam('newColor');
        component.set('v.lightParent', newColor);
    }
})