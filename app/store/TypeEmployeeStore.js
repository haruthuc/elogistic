Ext.define('InvApp.store.TypeEmployeeStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.TypeEmployeeModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/typeemployee',
        reader: {
            type: 'json',
            root: 'TypeEmployee',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});