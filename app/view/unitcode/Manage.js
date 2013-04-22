//var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
Ext.define('InvApp.view.unitcode.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.unitcodeList',
		store:'UnitCodeStore',
		title:'Quản lý Đơn Vị Tính',
		id:'unitcodeManage',
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
			                	header:'Mã Đơn Vị',
			                	dataIndex:'Unit_Code',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Đơn Vị",
			                	dataIndex:"Unit_Name",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                ];
			this.tbar = ['-',{
				text:'Thêm Đơn Vị',
				iconCls: 'icon-add',
				action:'add_unitcode',
				scale:'medium'
				//handler:function(){
				//getCategoryStore().insert(0,new CategoryModel());
				//store.insert(0,new CategoryModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				text:'Xóa Đơn Vị',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_unitcode',
				scale:'medium'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});