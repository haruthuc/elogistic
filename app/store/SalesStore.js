Ext.define('InvApp.store.SalesStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.SalesModel',
	autoLoad: false ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/sales',
        reader: {
            type: 'json',
            root: 'Sales',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});