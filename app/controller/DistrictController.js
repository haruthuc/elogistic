Ext.define('InvApp.controller.DistrictController',{
	extend:'Ext.app.Controller',
	views:['district.Manage','district.Add'],
	models:['DistrictModel'],
	stores:['DistrictStore','ProvinceStore'],
	refs: [
	       {
	         ref: 'panelDistrict',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao district Controller');
	
		this.control({
			'districtList button[action=add_district]':{
				click: this.addNewDistrict
		
			
			}
			
		,
			'districtAdd button[action=save_district]':{
				click: this.saveNewDistrict
			},
			'districtList button[action=remove_district]':{
				click: this.removeDistrict
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewDistrict:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('districtAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddDistrict');
			testClear.getForm().reset();
			//this.winAdd.formAddDistrict.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewDistrict: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getDistrictStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeDistrict: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa danh mục này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelDistrict();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getDistrictStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});