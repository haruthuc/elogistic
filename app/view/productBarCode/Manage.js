//var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
Ext.define('InvApp.view.productBarCode.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.productBarCodeList',
		store:'ProductBarCodeStore',
		title:'Quản lý danh mục',
		id:'productBarCodeManage',
	//	plugins: [rowEditing],
		initComponent:function(){

		function renderIcon(val) {
			return '<img src="barcode/img.php?code='+val+'"/> ';
		}
	//Ext.FocusManager.enable(true);
	//Handle Key Ctrl + N to new ProductBarCode
		/*var me = this;	
		var map = Ext.create('Ext.util.KeyMap',me, [
	                                                        {
	                                                            key: Ext.EventObject.N, // E for east
	                                                            shift: false,
	                                                            ctrl: true, // explicitly set as false to avoid collisions
	                                                            fn: function() {
	                                                              //  var parentPanel = eastPanel;
	                                                               // expand(parentPanel);
	                                                        //	meController.addNewProductBarCode();
	                                                        	alert("Test CTRL + N");
	                                                            },
	                                                            scope:me
	                                                        }]);*/
	
	 	this.editing = Ext.create('Ext.grid.plugin.RowEditing');

	 		Ext.apply(this, {
	 		plugins: [this.editing]
        
	 		});
			this.columns = [
			                {xtype: 'rownumberer',header:'STT',width:40},
			                
			                {
			                	header:"Mã Vạch",
			                	dataIndex:"Product_BarCode",
			                	flex:1,
			                	width:120,
			                	field: {
			                        xtype: 'textfield'
			                    },
			                    renderer:renderIcon
			              
			                }
			                ];
			this.tbar = ['-',{
				xtype:'button',
				scale:'medium',
				text:'Xóa Mã Vạch',
				id:'delete_productbarcode',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_productBarCode'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete_productbarcode').setDisabled(selections.length === 0);
				
			});
		
		}

	
	
});