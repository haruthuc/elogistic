Ext.define('InvApp.controller.StockController',{
	extend:'Ext.app.Controller',
	views:['stock.Manage','stock.Add'],
	models:['StockModel'],
	stores:['StockStore'],
	refs: [
	       {
	         ref: 'panelStock',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao stock Controller');
	
		this.control({
			'stockList button[action=add_stock]':{
				click: this.addNewStock
		
			
			}
			
		,
			'stockAdd button[action=save_stock]':{
				click: this.saveNewStock
			},
			'stockList button[action=remove_stock]':{
				click: this.removeStock
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewStock:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('stockAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddStock');
			testClear.getForm().reset();
			//this.winAdd.formAddStock.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewStock: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getStockStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeStock: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Kho hàng này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelStock();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getStockStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});