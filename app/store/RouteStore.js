Ext.define('InvApp.store.RouteStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.RouteModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/route',
        reader: {
            type: 'json',
            root: 'Route',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});