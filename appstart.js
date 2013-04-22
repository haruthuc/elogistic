Ext.override(Ext.LoadMask, {
     onHide: function() {
          this.callParent();
     }
});

Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath('Ext.ux', 'ux');

Ext.require('*');
Ext.require('Ext.selection.CellModel');
Ext.require('Ext.ux.grid.column.ActionButtonColumn');
Ext.require('Ext.ux.CheckColumn');
Ext.require('Ext.ux.grid.BillPrinter');

Ext.application({
	name:'InvApp',
	appFolder:'app',
	controllers:['CategoryController',
	             'ProvinceController',
	             'RouteController',
	             'UnitCodeController',
	             'TypeEmployeeController',
	             'DistrictController',
	             'StockController',
	             'CustomerController',
	             'SupplierController',
	             'EmployeeController',
	             'ProductController',
	             'InventoryInputController',
	             'TransactionController'
	             ],
	launch:function(){
	
		Ext.MessageBox.msgButtons['ok'].text = Ext.MessageBox.buttonText.ok;
		Ext.MessageBox.msgButtons['cancel'].text = Ext.MessageBox.buttonText.cancel;
		Ext.MessageBox.msgButtons['yes'].text = Ext.MessageBox.buttonText.yes;
		Ext.MessageBox.msgButtons['no'].text = Ext.MessageBox.buttonText.no;
		Ext.create('Ext.container.Viewport',{
				layout:'border',
				items:[
				      
				    	   {
				    		   region: 'north',
				    		   height: 120,
				    		   split: false,
				    		   collapsible: true,
				    		   id:'menu-container',
				    		   title:'Phần Mềm Quản Lý Kho Hàng',
				    		   items:[
				    		          Ext.create('Ext.toolbar.Toolbar',{
								    		 region: 'north',
								    	 	 height:100,
								    	 	 collapsible: true,
								    	 
								    	 	 items:[
								    	 	        {
								    	 	        	xtype: 'buttongroup',
											            columns: 4,
											            title: 'Quản lý hàng hóa',
											            items:[{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'storage-input',
									    	 	        	text: 'Nhập Hàng',
									    	 	        	handler:this.inventoryInputLoad
								    	 	        	},
								    	 	        	{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'storage-output',
									    	 	        	text: 'Xuất Hàng',
									    	 	        	handler:this.transactionCreateLoad
								    	 	        	},
								    	 	        	{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'storage-caution',
									    	 	        	text: 'Báo nhập'
								    	 	        	},
								    	 	        	{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'storage-exp',
									    	 	        	text: 'Hàng tồn'
								    	 	        	}
											            ]
								    	 	        
								    	 	        },
								    	 	        
								    	 	       {
								    	 	        	xtype: 'buttongroup',
											            columns: 3,
											            title: 'Báo cáo tồn kho',
											            items:[{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'icon-customer',
									    	 	        	text: 'Tồn kho tổng hợp'
								    	 	        	},
								    	 	        	{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'icon-supplier',
									    	 	        	text: 'Thống kê Xuất'
								    	 	        	},
								    	 	        	{
									    	 	        	xtype: 'button',
									    	 	        	border: 1,
									                        height: 70,
									                        scale:'large',
									                        cls:'x-btn-as-arrow',
									                        iconAlign: 'top',
									                        iconCls:'icon-user',
									    	 	        	text: 'Thống kê Nhập'
								    	 	        	}
											            ]
								    	 	        
								    	 	        },
								    	 	       
									    	 	       {
									    	 	        	xtype: 'buttongroup',
												            columns: 4,
												            title: 'Báo cáo Doanh Số Bán Hàng',
												            items:[{
										    	 	        	xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-barcode',
										    	 	        	text: 'Tổng hợp'
									    	 	        	},
									    	 	        	{
										    	 	        	xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-barcodeman',
										    	 	        	text: 'Theo Tuyến'
										    	 	        	
									    	 	        	},
									    	 	        	{
									    	 	        		xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-barcodeman',
										    	 	        	text: 'Theo Nhân Viên'
									    	 	        	},
									    	 	        	{
									    	 	        		xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-barcodeman',
										    	 	        	text: 'Theo Thời Gian'
									    	 	        	}
												            ]
									    	 	        
									    	 	        },
									    	 	       {
									    	 	        	xtype: 'buttongroup',
												            columns: 2,
												            title: 'Công Nợ',
												            items:[{
										    	 	        	xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-report',
										    	 	        	text: 'Nhà Cung Cấp'
									    	 	        	},
												            {
														     	xtype: 'button',
														     	border: 1,
														        height: 70,
														        scale:'large',
														        cls:'x-btn-as-arrow',
														        iconAlign: 'top',
														        iconCls:'icon-debt',
														     	text: 'Khách hàng'
														 	}
									    	 	        	
									    	 	        	
												            ]
									    	 	        
									    	 	        },
									    	 	       {
									    	 	        	xtype: 'buttongroup',
												            columns: 3,
												            title: 'Quản lý hệ thống',
												            items:[{
										    	 	        	xtype: 'splitbutton',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-category',
										    	 	        	text: 'Danh mục',
										    	 	        	menu:[
										    	 	        	      {text:'Danh mục Khách Hàng',
										    	 	        	    	  iconCls:'icon-customer-small',
										    	 	        	    	  handler:this.customerLoad
										    	 	        	      		},
										    	 	        	      {text:'Danh mục Nhà Cung Cấp',
										    	 	        	      	  iconCls:'supplier-small',
										    	 	        	      	  handler:this.supplierLoad
										    	 	        	      },
										    	 	        	      {text:'Danh mục Đơn Vị Tính',
										    	 	        	    	  iconCls:'unit-small',
										    	 	        	    	  handler:this.unitcodeLoad},
										    	 	        	      {text:'Danh mục Nhóm Hàng Hóa',
										    	 	        	    	  iconCls:'product-small',
										    	 	        	    		handler:this.categoryLoad  },
										    	 	        	      {text:'Danh mục Tuyến',
										    	 	        	    		  iconCls:'channel-small',
										    	 	        	    			handler:this.routeLoad  },
										    	 	        	      {text:'Danh mục Tỉnh / Thành Phố',
										    	 	        	    			  iconCls:'city-small',
										    	 	        	    				  handler:this.provinceLoad},
										    	 	        	      {text:'Danh mục Quận',
										    	 	        	    				  iconCls:'district-small',
										    	 	        	    				  handler:this.districtLoad},
										    	 	        	      {text:'Danh mục Kho',
											    	 	        	    				  iconCls:'stock-small',
											    	 	        	    				  handler:this.stockLoad},
											    	 	        	  {text:'Danh mục Hàng Hóa',
												    	 	        	    				  iconCls:'product-small2',
												    	 	        	    				  handler:this.productLoad}  				  
										    	 	        	      
										    	 	        	      ]
									    	 	        	},
									    	 	        	{
										    	 	        	xtype: 'splitbutton',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-user',
										    	 	        	text: 'Phân Quyền',
										    	 	        	menu:[
										    	 	        	      {text:'Danh Sách Nhân Viên',
										    	 	        	    	  iconCls:'icon-employee-small',
										    	 	        	    	  handler:this.employeeLoad
										    	 	        	      		},
										    	 	        	      	 {text:'Phần Quyền Người Dùng',
												    	 	        	    	  iconCls:'icon-pass'
												    	 	        	      		},
												    	 	        	      	 {text:'Danh Mục Phòng Ban',
														    	 	        	    	  iconCls:'icon-staff-small',
																	    	 	        	handler:this.typeEmployeeLoad
														    	 	        	      		}
										    	 	        	      		
										    	 	        	      		]
										    	 	        	
									    	 	        	},
									    	 	        	{
										    	 	        	xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-backup',
										    	 	        	text: 'Sao lưu'
									    	 	        	}
									    	 	        	
												            ]
									    	 	        
									    	 	        },
									    	 	       {
									    	 	        	xtype: 'buttongroup',
												            columns: 1,
												            title: 'Thoát',
												            items:[{
										    	 	        	xtype: 'button',
										    	 	        	border: 1,
										                        height: 70,
										                        scale:'large',
										                        cls:'x-btn-as-arrow',
										                        iconAlign: 'top',
										                        iconCls:'icon-shutdown',
										    	 	        	text: 'Thoát'
									    	 	        	}
									    	 	        	
												            ]
									    	 	        
									    	 	        }
									    	 	        
									    	 	        
								    	 	        
								    	 	        
								    	 	        ]
								    		 
								    	 })
				    		          
				    		          
				    		          
				    		          ]
				    		   
				    		   
				    	   },
				    		
				    		   {
				    			  // title: 'Center Region',
				    			   id:'content-container',		  
				    			   region: 'center',
				    			   layout: 'fit'
				    		   }
				    		   
				       ]
		});
		},
		categoryLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'categoryList'
			}));
		},
		provinceLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'provinceList'
			}));
		},
		routeLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'routeList'
			}));
			
		},
		unitcodeLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'unitcodeList'
			}));
			
		},
		typeEmployeeLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'typeEmployeeList'
			}));
			
		},
		districtLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'districtList'
			}));
			
		},
		stockLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'stockList'
			}));
			
		},
		customerLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'customerList'
			}));
			
			
		},
		supplierLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'supplierList'
			}));
			
			
		},
		productLoad: function(){
			
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'productList'
			}));
			
			
		},
		employeeLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'employeeList'
			}));
			
			
		},
		inventoryInputLoad: function(){
			var content = Ext.getCmp('content-container');
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'inventoryInputList'
			}));
			
			
		},
		transactionCreateLoad: function(){
			
			var content = Ext.getCmp('content-container');
			var menu = Ext.getCmp('menu-container');
			menu.collapse();
			content.removeAll();
			content.add(Ext.ComponentMgr.create({
				 xtype: 'transactionCreate'
			}));
			
			
			
		}
		
		
		
	//begin function handle

}
		);	

