Ext.define('InvApp.store.PaymentHistoryStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.PaymentHistoryModel',
	autoLoad: true ,
	proxy: {
        type: 'rest',
        url: 'http://localhost/examin/index.php',
        reader: {
            type: 'json',
            root: 'category',
            successProperty: 'success'
        }
	
    }
	
});