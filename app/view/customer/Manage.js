Ext.define('InvApp.view.customer.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.customerList',
		store:'CustomerStore',
		title:'Quản lý danh mục Khách Hàng',
		id:'customerManage',
	//	plugins: [rowEditing],
		initComponent:function(){

	//Ext.FocusManager.enable(true);
	//Handle Key Ctrl + N to new Customer
		/*var me = this;	
		var map = Ext.create('Ext.util.KeyMap',me, [
	                                                        {
	                                                            key: Ext.EventObject.N, // E for east
	                                                            shift: false,
	                                                            ctrl: true, // explicitly set as false to avoid collisions
	                                                            fn: function() {
	                                                              //  var parentPanel = eastPanel;
	                                                               // expand(parentPanel);
	                                                        //	meController.addNewCustomer();
	                                                        	alert("Test CTRL + N");
	                                                            },
	                                                            scope:me
	                                                        }]);*/
	/*
	 	this.editing = Ext.create('Ext.grid.plugin.RowEditing');

	 		Ext.apply(this, {
	 		plugins: [this.editing]
        
	 		});*/
			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Khách Hàng',
			                	dataIndex:'Cust_ID',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Công Ty",
			                	dataIndex:"Cust_CompanyName",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Tên Khách Hàng",
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
			                	header:"Tuyến Đường",
			                	dataIndex:"Cust_Route_ID",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Quận",
			                	dataIndex:"Cust_District_ID",
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
				text:'Thêm Khách Hàng',
				iconCls: 'icon-add',
				scale:'medium',
				action:'add_customer'
				//handler:function(){
				//getCustomerStore().insert(0,new CustomerModel());
				//store.insert(0,new CustomerModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				xtype:'button',
				scale:'medium',
				text:'Xóa Khách Hàng',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_customer'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});