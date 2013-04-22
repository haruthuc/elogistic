Ext.define('InvApp.controller.CustomerController',{
	extend:'Ext.app.Controller',
	views:['customer.Manage','customer.Add','customer.Update'],
	models:['CustomerModel'],
	stores:['CustomerStore'],
	refs: [
	       {
	         ref: 'panelCustomer',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao customer Controller');
	
		this.control({
				
				'customerList':{
					itemdblclick:this.editCustomer
				
				},
				'customerUpdate button[action=update_customer]':{
					
					click: this.updateCustomer
				}
				,
			
			'customerList button[action=add_customer]':{
				click: this.addNewCustomer
		
			
			}
			
		,
			'customerAdd button[action=save_customer]':{
				click: this.saveNewCustomer
			},
			'customerList button[action=remove_customer]':{
				click: this.removeCustomer
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewCustomer:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('customerAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddCustomer');
			testClear.getForm().reset();
			//this.winAdd.formAddCustomer.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewCustomer: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getCustomerStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeCustomer: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Khách hàng này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelCustomer();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getCustomerStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	},
	editCustomer: function(grid, record){
		//console.log('Double clicked on ' + record.get('name'));
		 var view = Ext.widget('customerUpdate');
	     view.down('form').loadRecord(record);
	},
	updateCustomer: function(button){
		 	var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(),
	        values = form.getValues();
		 	record.set(values);
		 	win.close();
		 	
		
	}
});