Ext.define('InvApp.store.LotArrayStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.LotArrayModel',
	autoLoad: true,
    autoSync: true,
  //  groupField: 'Stock_ID',
	proxy:{
        type: 'sessionstorage'
        ,id: 'lotpreference'
    }
});