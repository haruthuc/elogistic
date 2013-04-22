Ext.define('InvApp.store.InventoryInputStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.InventoryInputModel',
	autoLoad: true ,
    autoSync: true,
    groupField: 'Stock_ID',
	proxy: {
        type: 'rest',
        url: 'core/inventoryinput',
        reader: {
	
            type: 'json',
            idProperty: 'id',
            root:'InventoryInput',
            totalProperty: 'totalCount',
            successProperty: 'success'
            	
        },writer: {
            type: 'json'
        }
	
    }
	
});