Ext.define('InvApp.store.TransactionDetailStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.TransactionDetailStore',
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