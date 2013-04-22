Ext.define('InvApp.model.InventoryModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Month',type:'date'},
		        {name:'Stock_ID',type:'string'},
		        {name:'Product_Code',type:'string'},
		        {name:'Inventory_First',type:'int'},
		        {name:'Inventory_In',type:'int'},
		        {name:'Inventory_Out',type:'int'},
		        {name:'Inventory_Last',type:'int'}
		        
		        ]
	});