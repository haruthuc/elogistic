//var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
Ext.define('InvApp.view.stock.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.stockList',
		store:'StockStore',
		title:'Quản lý Kho',
		id:'stockManage',
		initComponent:function(){
	
	 	this.editing = Ext.create('Ext.grid.plugin.RowEditing');

	 		Ext.apply(this, {
	 		plugins: [this.editing]
        
	 		});
			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Kho Hàng',
			                	dataIndex:'Stock_ID',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Kho Hàng",
			                	dataIndex:"Stock_Name",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Địa Chỉ Kho Hàng",
			                	dataIndex:"Stock_Address",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Điện Thoại Kho Hàng",
			                	dataIndex:"Stock_Phone",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Họ Tên Nhân Viên Kho",
			                	dataIndex:"Stock_Customer",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                },
			                {
			                	header:"Ghi Chú Kho",
			                	dataIndex:"Stock_Note",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                
			                ];
			this.tbar = ['-',{
				text:'Thêm Kho Hàng',
				iconCls: 'icon-add',
				action:'add_stock',
				scale:'medium'
				
			},'-',{
				text:'Xóa Kho Hàng',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_stock',
				scale:'medium'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});