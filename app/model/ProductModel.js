Ext.define('InvApp.model.ProductModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Product_Code',type:'string'},
		        {name:'Product_Name',type:'string'},
		        {name:'Product_QuantityCaution',type:'int'},
		        {name:'Unit_Code',type:'string'},
		        {name:'Product_Supplier_ID',type:'string'},
		        {name:'Product_Category_Code',type:'string'},
		        {name:'Unit_Code_Ex',type:'string'},
		        {name:'Unit_Rate_Ex',type:'int'},
		        {name:'Product_QuantityCautionMax',type:'int'}
		        
		        ]
	});