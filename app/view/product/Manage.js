Ext.define('InvApp.view.product.Manage',{
		extend:'Ext.panel.Panel',
		alias:'widget.productList',
		title:'Quản lý danh mục Sản Phẩm',
		id:'productManage',
		layout: {
            type: 'border',
            padding: 5
        },
        defaults: {
            split: true
        },
        dockedItems: [{
	        xtype: 'pagingtoolbar',
	        store: 'ProductStore',   // same store GridPanel is using
	        dock: 'bottom',
	        displayInfo: true,
	        displayMsg: 'Đang hiển thị Kết Quả {0} - {1} Trên tổng số {2}',
            emptyMsg: "Không có kết quả nào để hiển thị"
	    }],	
       items:[{
        	region: 'center',
            layout: 'fit',
            border: false,
            items:[
                   {
                	   id:'gridProduct',
                	   xtype:'grid',
                	   store:'ProductStore',
                	   loadMask: true,
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
                		  
                		    },
                		    {
                		    	header:"Mã Đơn Vị",
                		    	dataIndex:"Unit_Code",
                		    	flex:1
                		  
                		    }
                		    ,
                		    {
                		    	header:"Tỉ lệ Qui Đổi",
                		    	dataIndex:"Unit_Rate_Ex",
                		    	flex:1
                		  
                		    },
                		    {
                		    	header:"Mã Qui Đổi",
                		    	dataIndex:"Unit_Code_Ex",
                		    	flex:1
                		  
                		    }
                		    
                		] 
                           
                	   
                   }
                   
                   ]
       },
       {
    	   
    	   region: 'east',
           collapsible: true,
           floatable: true,
           split: true,
           width: 300,
           minWidth: 120,
           minHeight: 140,
           title:'Mã Vạch Sản Phẩm',
           xtype:'productBarCodeList'
       }
       
       
       ],
       initComponent:function(){
        	this.tbar = ['-',{
				xtype:'button',
				text:'Thêm Sản Phẩm',
				iconCls: 'icon-add',
				scale:'medium',
				action:'add_product'
			},'-',{
				xtype:'button',
				scale:'medium',
				text:'Xóa Sản Phẩm',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_product'
			},'-',{
				xtype:'button',
				scale:'medium',
				text:'Thêm Mã Vạch',
				id:'add_productBarCode',
				iconCls: 'barcode_small',
				disabled: true,
				action:'add_productBarCode'
			},'-',{
				xtype:'button',
		        text: 'Hiển Thị Tất Cả',
		        enableToggle: true,
		        id:'filterProductAllButton',
		        pressed: true,
		        action:'filter_productAll'
		    },'-',{
				xtype:'button',
		        text: 'Hiển Thị Theo Nhà Cung Cấp',
		        enableToggle: true,
		        id:'filterProductBySupplierButton',
		        pressed: false,
		        action:'filter_productBySupplier'
		    },
		    {
	        	
	        	 xtype: 'combobox',
	        	 id:'filterProductBySupplierComboBox',
	             triggerAction: 'all',
	             selectOnTab: true,
	             store: 'SupplierStore',
	             lazyRender: true,
	             displayField: 'Cust_CompanyName',
	             valueField: 'Cust_ID',
	             hidden:true
	            
	        },
	        {
				xtype:'button',
		        text: 'Hiển Thị Theo Nhóm Sản Phẩm',
		        enableToggle: true,
		        id:'filterProductByCategoryButton',
		        pressed: false,
		        action:'filter_productByCategory'
		    },
		    {
	        	
	        	 xtype: 'combobox',
	        	 id:'filterProductByCategoryComboBox',
	             triggerAction: 'all',
	             selectOnTab: true,
	             store: 'CategoryStore',
	             lazyRender: true,
	             displayField: 'CategoryName',
	             valueField: 'Category_Code',
	             hidden:true
	            
	        }
			
			];
			this.callParent(arguments);
			Ext.getCmp('gridProduct').getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
				Ext.getCmp('add_productBarCode').setDisabled(selections.length === 0);
			});
			
			
        	
        	
        }
}
);
