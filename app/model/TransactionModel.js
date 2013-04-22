Ext.define('InvApp.model.TransactionModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Transaction_ID',type:'string'},
		        {name:'Transaction_DateCreate',type:'date'},
		        {name:'Transaction_TotalPrice',type:'float'},
		        {name:'Transaction_TotalOrginalPrice',type:'float'},
		        {name:'Transaction_CustomerID',type:'string'},
		        {name:'Transaction_Status',type:'string'}, 
		        {name:'Transaction_Payment',type:'float'},
		        {name:'Transaction_EmployeeID',type:'string'},
		        {name:'Transaction_Ship_EmployeeID',type:'string'},
		        {name:'Transaction_Bonus',type:'float'},
		        {name:'Transaction_Comment',type:'string'},
		        {name:'Transaction_Type',type:'string'},
		        {name:'Supplier_ID',type:"string"}
		        
		        ]
	});