Ext.define('InvApp.store.SupplierStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.SupplierModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/supplier',
        reader: {
            type: 'json',
            root: 'Customer',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});