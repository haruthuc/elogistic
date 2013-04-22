Ext.define('InvApp.controller.TypeEmployeeController',{
	extend:'Ext.app.Controller',
	views:['typeEmployee.Manage','typeEmployee.Add'],
	models:['TypeEmployeeModel'],
	stores:['TypeEmployeeStore'],
	refs: [
	       {
	         ref: 'panelTypeEmployee',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao category Controller');
	
		this.control({
			'typeEmployeeList button[action=add_typeEmployee]':{
				click: this.addNewTypeEmployee
		
			
			}
			
		,
			'typeEmployeeAdd button[action=save_typeEmployee]':{
				click: this.saveNewTypeEmployee
			},
			'typeEmployeeList button[action=remove_typeEmployee]':{
				click: this.removeTypeEmployee
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewTypeEmployee:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('typeEmployeeAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddTypeEmployee');
			testClear.getForm().reset();
			//this.winAdd.formAddCategory.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewTypeEmployee: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getTypeEmployeeStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeTypeEmployee: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Phòng Ban này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelTypeEmployee();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getTypeEmployeeStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});