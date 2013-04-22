Ext.define('InvApp.model.StockModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Stock_ID',type:'string'},
		        {name:'Stock_Name',type:'string'},
		        {name:'Stock_Address',type:'string'},
		        {name:'Stock_Phone',type:'int'},
		        {name:'Stock_Customer',type:'string'},
		        {name:'Stock_Note',type:'string'}
		        
		        ]
	});