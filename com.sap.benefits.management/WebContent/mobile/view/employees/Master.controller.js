sap.ui.controller("com.sap.benefits.management.view.employees.Master", {
    onInit: function() {

    },
    onAfterRendering: function() {
        var list = this.byId("employeesList");
        appController.selectListItem(list, 0);
    },
    onItemSelected: function(oEvent) {
        appController.employeeItemSelected(oEvent);
    },
    onNavPressed: function() {
        appController.goHome();
    }
});