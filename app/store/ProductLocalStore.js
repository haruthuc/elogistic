Ext.define('InvApp.store.ProductLocalStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.ProductLocalModel',
	autoLoad: true,
    autoSync: true,
	proxy:{
        type: 'sessionstorage'
        ,id: 'productpreference'
    }
});