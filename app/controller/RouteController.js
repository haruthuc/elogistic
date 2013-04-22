Ext.define('InvApp.controller.RouteController',{
	extend:'Ext.app.Controller',
	views:['route.Manage','route.Add'],
	models:['RouteModel'],
	stores:['RouteStore'],
	refs: [
	       {
	         ref: 'panelRoute',
	         selector: 'grid'
	       }
	
	     ],
	init:function(){
	
		var winAdd;
		//console.log('Khoi tao category Controller');
	
		this.control({
			'routeList button[action=add_route]':{
				click: this.addNewRoute
		
			
			}
			
		,
			'routeAdd button[action=save_route]':{
				click: this.saveNewRoute
			},
			'routeList button[action=remove_route]':{
				click: this.removeRoute
			}
			
			
		
		
		});
	// khai bao cac function tai day
	},
	addNewRoute:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('routeAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddRoute');
			testClear.getForm().reset();
			//this.winAdd.formAddCategory.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	saveNewRoute: function(button){
		var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
		this.getRouteStoreStore().insert(0,values);
		//record.set(values);
		win.close();
		
	},
	removeRoute: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Tuyến Đường này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelRoute();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getRouteStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
		 //console.log(selectionIndex);
	//	 alert(selectionIndex);
	}
});