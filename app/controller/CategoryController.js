Ext.define('InvApp.controller.CategoryController',{
	extend:'Ext.app.Controller',
	views:['category.Manage','category.Add'],
	models:['CategoryModel'],
	stores:['CategoryStore'],
	refs: [
	       {
	         ref: 'panelCategory',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao category Controller');
	
		this.control({
			'categoryList button[action=add_category]':{
				click: this.addNewCategory
		
			
			}
			
		,
			'categoryAdd button[action=save_category]':{
				click: this.saveNewCategory
			},
			'categoryList button[action=remove_category]':{
				click: this.removeCategory
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewCategory:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('categoryAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddCategory');
			testClear.getForm().reset();
			//this.winAdd.formAddCategory.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewCategory: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getCategoryStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeCategory: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa danh mục này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelCategory();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getCategoryStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});