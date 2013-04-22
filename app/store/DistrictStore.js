Ext.define('InvApp.store.DistrictStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.DistrictModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/district',
        reader: {
            type: 'json',
            root: 'district',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});