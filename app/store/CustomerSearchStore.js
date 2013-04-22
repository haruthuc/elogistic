Ext.define('InvApp.store.CustomerSearchStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.CustomerModel',
	autoLoad: true,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/customer',
        reader: {
	
            type: 'json',
            idProperty: 'id',
            root: 'Customer',
            totalProperty: 'totalCount',
            successProperty: 'success'
            	
        },writer: {
            type: 'json'
        }
	
    }
	
});