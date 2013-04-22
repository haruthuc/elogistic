Ext.define('InvApp.store.ProvinceStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.ProvinceModel',
	autoLoad: true ,
	autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/province',
        reader: {
            type: 'json',
            root: 'province',
            successProperty: 'success'
        },
        writer: {
            type: 'json'
        }
	
    }
	
});