Ext.define('InvApp.store.EmployeeStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.EmployeeModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/employee',
        reader: {
            type: 'json',
            root: 'Employee',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});