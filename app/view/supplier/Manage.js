Ext.define('InvApp.view.supplier.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.supplierList',
		store:'SupplierStore',
		title:'Quản lý danh mục Nhà Cung Cấp',
		id:'supplierManage',
		initComponent:function(){

	
			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Nhà Cung Cấp',
			                	dataIndex:'Cust_ID',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Nhà Cung Cấp",
			                	dataIndex:"Cust_CompanyName",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Tên Nhân Viên Đại Diện",
			                	dataIndex:"Cust_PersonName",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                
			                {
			                	header:"Địa Chỉ Liên Hệ",
			                	dataIndex:"Cust_Address",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Điện Thoại Công Ty",
			                	dataIndex:"Cust_Phone1",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Điện Thoại Cá Nhân",
			                	dataIndex:"Cust_Phone2",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Mã Số Thuế",
			                	dataIndex:"Cust_TaxCode",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Địa chỉ web",
			                	dataIndex:"Cust_Website",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Email",
			                	dataIndex:"Cust_Email",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Fax",
			                	dataIndex:"Cust_Fax",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Ghi chú",
			                	dataIndex:"Cust_Note",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                
			                ];
			this.tbar = ['-',{
				xtype:'button',
				text:'Thêm Nhà Cung Cấp',
				iconCls: 'icon-add',
				scale:'medium',
				action:'add_supplier'
				//handler:function(){
				//getSupplierStore().insert(0,new SupplierModel());
				//store.insert(0,new CustomerModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				xtype:'button',
				scale:'medium',
				text:'Xóa Nhà Cung Cấp',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_supplier'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});