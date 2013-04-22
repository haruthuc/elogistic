Ext.define('InvApp.store.TransactionDetailLocalStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.TransactionDetailModel',
	autoLoad: true,
    autoSync: true,
	proxy:{
        type: 'sessionstorage'
        ,id: 'detailpreference'
    }
});