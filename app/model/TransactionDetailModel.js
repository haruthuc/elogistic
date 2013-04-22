Ext.define('InvApp.model.TransactionDetailModel',{
		extend:'Ext.data.Model',
		fields:[
		        {name:'id',type:'int'},
		        {name:'Product_ID',type:'string'},
		        {name:'Product_Name',type:'string'},
		        {name:'Transaction_id',type:'string'},
		        {name:'Stock_ID',type:'string'},
		        {name:'Product_Quantity',type:'int'},
		        {name:'Product_Current_Price',type:'float'},
		        {name:'Product_Current_PriceOrginal',type:'float'},
		        {name:'DateAdd',type:'date'},
		        {name:'Transaction_Product_Type',type:'string'},
		        {name:'Lot_ID',type:'int'},
		        {name: 'Promotion', type: 'bool'},
		        {name: 'Product_Total_Price', type: 'float',
		        	convert: function(value, record) {
		        	var totalTemp = record.get('Product_Current_Price');
		        	var totalQuantity = record.get('Product_Quantity');
		        	return totalTemp*totalQuantity;
		        	}
		        }
		        ]
	});