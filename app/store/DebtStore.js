Ext.define('InvApp.store.DebtStore',{
	extend:'Ext.data.Store',
	model:'InvApp.model.DebtModel',
	autoLoad: true ,
	proxy: {
        type: 'rest',
        url: 'http://localhost/examin/index.php',
        reader: {
            type: 'json',
            root: 'category',
            successProperty: 'success'
        }
	
    }
	
});