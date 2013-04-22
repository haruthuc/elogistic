Ext.define('InvApp.controller.EmployeeController',{
	extend:'Ext.app.Controller',
	views:['employee.Manage','employee.Add','employee.Update'],
	models:['EmployeeModel'],
	stores:['EmployeeStore'],
	refs: [
	       {
	         ref: 'panelEmployee',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao employee Controller');
	
		this.control({
				
				'employeeList':{
					itemdblclick:this.editEmployee
				
				},
			'employeeUpdate button[action=update_employee]':{
					
					click: this.updateEmployee
				}
				,
			
			'employeeList button[action=add_employee]':{
				click: this.addNewEmployee
		
			
			}
			
		,
			'employeeAdd button[action=save_employee]':{
				click: this.saveNewEmployee
			},
			'employeeList button[action=remove_employee]':{
				click: this.removeEmployee
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewEmployee:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('employeeAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddEmployee');
			testClear.getForm().reset();
			//this.winAdd.formAddEmployee.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewEmployee: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getEmployeeStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeEmployee: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Nhân viên này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelEmployee();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getEmployeeStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	},
	editEmployee: function(grid, record){
		//console.log('Double clicked on ' + record.get('name'));
		 var view = Ext.widget('employeeUpdate');
	     view.down('form').loadRecord(record);
	},
	updateEmployee: function(button){
		 	var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(),
	        values = form.getValues();
		 	record.set(values);
		 	win.close();
		 	
		
	}
});