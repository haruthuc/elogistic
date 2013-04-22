Ext.define('InvApp.store.CustomerStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.CustomerModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/customer',
        reader: {
            type: 'json',
            root: 'Customer',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});