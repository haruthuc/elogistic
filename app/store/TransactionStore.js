Ext.define('InvApp.store.TransactionStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.TransactionModel',
	proxy: {
        type: 'rest',
        url: 'core/transaction',
        reader: {
            type: 'json',
            root: 'Transaction',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});