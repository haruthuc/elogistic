Ext.define('InvApp.store.UnitCodeStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.UnitCodeModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/unitcode',
        reader: {
            type: 'json',
            root: 'UnitCode',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});