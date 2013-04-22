Ext.define('InvApp.model.EmployeeModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Staff_ID',type:'string'},
		        {name:'First_Name',type:'string'},
		        {name:'Lastname',type:'string'},
		        {name:'Address',type:'string'},
		        {name:'Homephone',type:'string'},
		        {name:'Mobiphone',type:'string'},
		        {name:'Email',type:'string'},
		        {name:'Personal_ID',type:'string'},
		        {name:'Staff_Type_ID',type:'string'},
		        {name:'Date_create',type:'date',dateFormat: "Y-m-d"},
		        {name:'Date_update',type:'date',dateFormat: "Y-m-d"}
		        ]
	});