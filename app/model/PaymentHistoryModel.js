Ext.define('InvApp.model.PaymentHistoryModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Payment_DateCreate',type:'date'},
		        {name:'Cust_ID',type:'string'},
		        {name:'Payment_Total',type:'float'},
		        {name:'Payment_Note',type:'string'},
		        {name:'Transaction_ID',type:'string'},
		        {name:'Payment_Interest',type:'float'}
		        
		        ]
	});