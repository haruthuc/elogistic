Ext.define('InvApp.store.CategoryStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.CategoryModel',
	autoLoad: true ,
    autoSync: true,
	proxy: {
        type: 'rest',
        url: 'core/category',
        reader: {
            type: 'json',
            root: 'Category',
            successProperty: 'success'
        },writer: {
            type: 'json'
        }
	
    }
	
});