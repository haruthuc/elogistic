Ext.define('InvApp.store.ProductStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.ProductModel',
	autoLoad: true ,
    autoSync: true,
    remoteFilter: true,
	proxy: {
        type: 'rest',
        url: 'core/product',
        reader: {
	
            type: 'json',
            idProperty: 'id',
            root: 'Product',
            totalProperty: 'totalCount',
            successProperty: 'success'
            	
        },writer: {
            type: 'json'
        }
	
    }
	
});