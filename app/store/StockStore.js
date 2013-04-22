Ext.define('InvApp.store.StockStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.StockModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/stock',
        reader: {
            type: 'json',
            root: 'Stock',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});