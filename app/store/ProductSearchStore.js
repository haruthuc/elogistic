Ext.define('InvApp.store.ProductSearchStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.ProductModel',
	autoLoad: true,
    autoSync: true,
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