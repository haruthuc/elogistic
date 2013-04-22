Ext.define('InvApp.controller.SupplierController',{
	extend:'Ext.app.Controller',
	views:['supplier.Manage','supplier.Add','supplier.Update'],
	models:['SupplierModel'],
	stores:['SupplierStore'],
	refs: [
	       {
	         ref: 'panelSupplier',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao supplier Controller');
	
		this.control({
				
				'supplierList':{
					itemdblclick:this.editSupplier
				
				},
				'supplierUpdate button[action=update_supplier]':{
					
					click: this.updateSupplier
				}
				,
			
			'supplierList button[action=add_supplier]':{
				click: this.addNewSupplier
		
			
			}
			
		,
			'supplierAdd button[action=save_supplier]':{
				click: this.saveNewSupplier
			},
			'supplierList button[action=remove_supplier]':{
				click: this.removeSupplier
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewSupplier:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('supplierAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddSupplier');
			testClear.getForm().reset();
			//this.winAdd.formAddSupplier.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewSupplier: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getSupplierStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeSupplier: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Khách hàng này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelSupplier();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getSupplierStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	},
	editSupplier: function(grid, record){
		//console.log('Double clicked on ' + record.get('name'));
		 var view = Ext.widget('supplierUpdate');
	     view.down('form').loadRecord(record);
	},
	updateSupplier: function(button){
		 	var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(),
	        values = form.getValues();
		 	record.set(values);
		 	win.close();
		 	
		
	}
});