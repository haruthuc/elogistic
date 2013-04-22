Ext.define('InvApp.store.ProductBarCodeStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.ProductBarCodeModel',
	autoLoad: true,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/barcode',
        reader: {
            type: 'json',
            root: 'BarCode',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});