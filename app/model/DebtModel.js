Ext.define('InvApp.model.DebtyModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Month',type:'date'},
		        {name:'Cust_ID',type:'string'},
		        {name:'Debt_First',type:'float'},
		        {name:'Debt_Add',type:'float'},
		        {name:'Debt_Minus',type:'float'},
		        {name:'Debt_Last',type:'float'}
		        
		        ]
	});