Ext.define('InvApp.store.EmployeeSalesStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.EmployeeModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/employeesales',
        reader: {
            type: 'json',
            root: 'Employee',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});