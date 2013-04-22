Ext.define('InvApp.store.TransactionLocalStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.TransactionLocalModel',
	autoLoad: true,
    autoSync: true,
	proxy:{
        type: 'sessionstorage'
        ,id: 'transactionpreference'
    }
});