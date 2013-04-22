Ext.define('InvApp.controller.ProvinceController',{
	extend:'Ext.app.Controller',
	views:['province.Manage','province.Add'],
	models:['ProvinceModel'],
	stores:['ProvinceStore'],
	refs: [
	       {
	         ref: 'panelProvince',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
		var winAdd;
		//console.log('Khoi tao category Controller');
	
		this.control({
			'provinceList button[action=add_province]':{
				click: this.addNewProvince
		
			
			}
			
		,
			'provinceAdd button[action=save_province]':{
				click: this.saveNewProvince
			},
			'provinceList button[action=remove_province]':{
				click: this.removeProvince
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewProvince:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('provinceAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddProvince');
			testClear.getForm().reset();
			//this.winAdd.formAddCategory.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewProvince: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getProvinceStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeProvince: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Tỉnh - Thành Phố này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelProvince();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getProvinceStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});