Ext.define('InvApp.view.district.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.districtList',
		store:'DistrictStore',
		title:'Quản lý Danh Mục Quận',
		id:'districtManage',
	//	plugins: [rowEditing],
		initComponent:function(){

	//Ext.FocusManager.enable(true);
	//Handle Key Ctrl + N to new District
		/*var me = this;	
		var map = Ext.create('Ext.util.KeyMap',me, [
	                                                        {
	                                                            key: Ext.EventObject.N, // E for east
	                                                            shift: false,
	                                                            ctrl: true, // explicitly set as false to avoid collisions
	                                                            fn: function() {
	                                                              //  var parentPanel = eastPanel;
	                                                               // expand(parentPanel);
	                                                        //	meController.addNewDistrict();
	                                                        	alert("Test CTRL + N");
	                                                            },
	                                                            scope:me
	                                                        }]);*/
	
	 	this.editing = Ext.create('Ext.grid.plugin.CellEditing');

	 		Ext.apply(this, {
	 		plugins: [this.editing]
        
	 		});
			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Tỉnh - Thành Phố',
			                	dataIndex:'Province_ID',
			                	flex:1,
			                	
			                    editor:{
			                    	 xtype: 'combobox',
			                         typeAhead: true,
			                         triggerAction: 'all',
			                         selectOnTab: true,
			                         store: 'ProvinceStore',
			                         lazyRender: true,
			                         displayField: 'Province_Name',
			                         valueField: 'Province_ID',
			                         name:'Province_ID'
			                    	
			                    }
			                	
			                },
			                {
			                	header:"Tên Quận",
			                	dataIndex:"District_Name",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                ];
			this.tbar = ['-',{
				text:'Thêm Quận',
				iconCls: 'icon-add',
				action:'add_district',
				scale:'medium'
				//handler:function(){
				//getDistrictStore().insert(0,new DistrictModel());
				//store.insert(0,new CategoryModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				text:'Xóa Quận',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_district',
				scale:'medium'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});