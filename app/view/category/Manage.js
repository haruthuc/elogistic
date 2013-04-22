//var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
Ext.define('InvApp.view.category.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.categoryList',
		store:'CategoryStore',
		title:'Quản lý danh mục',
		id:'categoryManage',
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
			                	header:'Mã Danh Mục',
			                	dataIndex:'Category_Code',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Danh Mục",
			                	dataIndex:"CategoryName",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                ];
			this.tbar = ['-',{
				xtype:'button',
				text:'Thêm Danh Mục',
				iconCls: 'icon-add',
				scale:'medium',
				action:'add_category'
				//handler:function(){
				//getCategoryStore().insert(0,new CategoryModel());
				//store.insert(0,new CategoryModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				xtype:'button',
				scale:'medium',
				text:'Xóa Danh Mục',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_category'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});