Ext.define('InvApp.controller.UnitCodeController',{
	extend:'Ext.app.Controller',
	views:['unitcode.Manage','unitcode.Add'],
	models:['UnitCodeModel'],
	stores:['UnitCodeStore'],
	refs: [
	       {
	         ref: 'panelUnit',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao category Controller');
	
		this.control({
			'unitcodeList button[action=add_unitcode]':{
				click: this.addNewUnitcode
		
			
			}
			
		,
			'unitcodeAdd button[action=save_unitcode]':{
				click: this.saveNewUnitcode
			},
			'unitcodeList button[action=remove_unitcode]':{
				click: this.removeUnitcode
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewUnitcode:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('unitcodeAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddUnitcode');
			testClear.getForm().reset();
			//this.winAdd.formAddCategory.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewUnitcode: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getUnitCodeStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeUnitcode: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Đơn vị này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelUnit();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getUnitCodeStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});