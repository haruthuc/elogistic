Ext.define('InvApp.view.inventoryInput.Manage',{
		extend:'Ext.panel.Panel',
		alias:'widget.inventoryInputList',
		title:'Quản lý nhập Kho',
		id:'inventoryInputManage',
		layout: {
            type: 'border',
            padding: 5
        },
        defaults: {
            split: true
        },
        
        initComponent:function(){
         	this.tbar = ['-',{
 				xtype:'textfield',
 				fieldLabel:'Mã vạch',
 				enableKeyEvents: true ,
 				id:'findBarcodeTextfield',
 				listeners:{
 		        	afterrender: function(field) {
 		        		field.focus(false, 500);
 		        		}
 		        }
 			},'-',{
 	            xtype: 'combo',
 	            store: 'ProductSearchStore',
 	            displayField: 'Product_Name',
 	            valueField:'Product_Code',
 	            typeAhead: false,
 	            fieldLabel:'Mã,Tên Sp',
 	            width: 300,
 	            hideTrigger:true,
 	            id:'findProductTextfield',
 	            anchor: '100%',
 	            minChars :2,
 	            listConfig: {
 	                loadingText: 'Đang tìm kiếm...',
 	                emptyText: 'Không có kết quả nào trùng.',

 	                // Custom rendering template for each item
 	                getInnerTpl: function() {
 	                    return '<div class="search-item"><h3><span>Mã: {Product_Code}</h3><br /> Tên: {Product_Name}</span></div>';
 	                }
 	            }
 	        },'-',{
 				xtype:'button',
 				text:'Chờ Nhập Hàng',
 				iconCls: 'icon-search',
 				scale:'medium',
 				action:'findProductAction'
 			}
 			
 			];
 			this.callParent(arguments);
// 			Ext.getCmp('gridInventoryInput').getSelectionModel().on('selectionchange', function(selModel, selections){
// 				Ext.getCmp('addNewLot').setDisabled(selections.length === 0);
// 				//Ext.getCmp('add_productBarCode').setDisabled(selections.length === 0);
// 			});
// 			
// 			Ext.getCmp('gridLotInput').getSelectionModel().on('selectionchange', function(selModel, selections){
// 				Ext.getCmp('editLotBtn').setDisabled(selections.length === 0);
// 			//	Ext.getCmp('plusLotBtn').setDisabled(selections.length === 0);
// 			//	Ext.getCmp('reduceLotBtn').setDisabled(selections.length === 0);
// 				//Ext.getCmp('add_productBarCode').setDisabled(selections.length === 0);
// 			});
// 			
 			
         	
         	
         },
       items:[{
        	region: 'center',
            border: false,
            title:'Danh Sách Sản Phẩm Chờ Nhập Hàng',
            items:[
                   {
                	   id:'gridInventoryInput',
                	   xtype:'grid',
                	   store:'ProductLocalStore',
                	   bbar:['-',{
           				xtype:'button',
           				text:'Xóa danh sách chờ',
           				iconCls:'icon-refresh'
           				
           			}],
                	   columns:[
                	            {xtype: 'rownumberer',header:'STT'},
                		    {
                		    	header:'Mã Sản Phẩm',
                		    	dataIndex:'Product_Code',
                		    	flex:1
                		    },
                		    {
                		    	header:"Tên Sản Phẩm",
                		    	dataIndex:"Product_Name",
                		    	flex:1
                		  
                		    },
                		    {
                		    	header:"Số lượng cảnh báo",
                		    	dataIndex:"Product_QuantityCaution",
                		    	flex:1
                		  
                		    },
                		    
                		    {
                		    	header:"Nhà Cung Cấp",
                		    	dataIndex:"Product_Supplier_ID",
                		    	flex:1
                		  
                		    },
                		    {
                		    	header:"Mã Danh mục",
                		    	dataIndex:"Product_Category_Code",
                		    	flex:1
                		  
                		    }                		    
                		] 
                           
                	   
                   }
                   
                   ]
       }
    
       
       
       ]
}
);
