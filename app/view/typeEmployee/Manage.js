//var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
Ext.define('InvApp.view.typeEmployee.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.typeEmployeeList',
		store:'TypeEmployeeStore',
		title:'Quản lý Phòng Ban',
		id:'typeEmployeeManage',
	//	plugins: [rowEditing],
		initComponent:function(){

	//Ext.FocusManager.enable(true);
	//Handle Key Ctrl + N to new Category
		/*var me = this;	
		var map = Ext.create('Ext.util.KeyMap',me, [
	                                                        {
	                                                            key: Ext.EventObject.N, // E for east
	                                                            shift: false,
	                                                            ctrl: true, // explicitly set as false to avoid collisions
	                                                            fn: function() {
	                                                              //  var parentPanel = eastPanel;
	                                                               // expand(parentPanel);
	                                                        //	meController.addNewCategory();
	                                                        	alert("Test CTRL + N");
	                                                            },
	                                                            scope:me
	                                                        }]);*/
	
	 	this.editing = Ext.create('Ext.grid.plugin.RowEditing');

	 		Ext.apply(this, {
	 		plugins: [this.editing]
        
	 		});
			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Phòng Ban',
			                	dataIndex:'Staff_Type_ID',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Đơn Vị",
			                	dataIndex:"Staff_Type_Name",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                ];
			this.tbar = ['-',{
				text:'Thêm Phòng Ban',
				iconCls: 'icon-add',
				action:'add_typeEmployee',
				scale:'medium'
				//handler:function(){
				//getCategoryStore().insert(0,new CategoryModel());
				//store.insert(0,new CategoryModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				text:'Xóa Phòng Ban',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_typeEmployee',
				scale:'medium'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});