Ext.define('InvApp.controller.ProductController',{
	extend:'Ext.app.Controller',
	views:['product.Manage','product.Add','product.Update','productBarCode.Manage','productBarCode.Add'],
	models:['ProductModel','ProductBarCodeModel'],
	stores:['ProductStore','ProductBarCodeStore'],
	refs: [
	       {
	         ref: 'panelProduct',
	         selector: 'grid[id="gridProduct"]'
	       },
	       {
	    	   ref: 'panelProductBarCode',
	    	   selector: 'grid[id="productBarCodeManage"]'
	       }
	
	     ],
	init:function(){
		var meBuff = this;
		var winAdd;
		var winBarAdd;
		//console.log('Khoi tao product Controller');
	
		this.control({
				
				'productList grid[id="gridProduct"]':{
					itemdblclick:this.editProduct,
					itemclick:this.queryBarCode
				
				},
				'productUpdate button[action=update_product]':{
					
					click: this.updateProduct
				},
				'productBarCodeList button[action=remove_productBarCode]':{
					click: this.removeProductBarCode
				}
				,
			
				'productList button[action=add_product]':{
					click: this.addNewProduct
		
			
				},
				'productList combobox':{
					select: this.filterProductFunc
		
			
				}
				,
				'productList button[action=filter_productBySupplier]':{
					toggle:this.filterProductBySupplierFunc
				},
				'productList button[action=filter_productByCategory]':{
					
					toggle:this.filterProductByCategoryFunc
				}
				,
				'productList button[action=filter_productAll]':{
					toggle:this.filterProductAllFunc
				}
				,
				'productList button[action=add_productBarCode]':{
					click: this.addNewProductBarCode
					
				},
				'productAdd button[action=save_product]':{
				click: this.saveNewProduct
				},
				'productList button[action=remove_product]':{
					click: this.removeProduct
				},
				'productBarCodeAdd textfield':{
					keyup:{
					  fn: function(field,key) {
						if (key.getKey() == key.ENTER) {
							this.saveKeyProductBarCode();
						//	alert("test");
						}
						
						}
					}
					
				},
				'productBarCodeAdd button[action=save_productBarCode]':{
					click: this.saveNewProductBarCode
					
				}
				
			
			
		
		
		});

	},
	// khai bao cac function tai day
	addNewProduct:function(button){
		if(!this.winAdd) 
		{
			this.winAdd = Ext.widget('productAdd');
		}else{
			//this.winAdd.removeAll(true);
			var testClear =  Ext.getCmp('formAddProduct');
			testClear.getForm().reset();
			//this.winAdd.formAddProduct.getForm().reset();
			this.winAdd.show();
		}
		
		
	},
	addNewProductBarCode:function(button){
	
		if(!this.winBarAdd)
		{
	     var view = Ext.widget('productBarCodeAdd');
		}
		else{
			var testClear =  Ext.widget('productBarCodeAdd');
			testClear.getForm().reset();
			this.winBarAdd.show();
		}
		 var selection = this.getPanelProduct();
		 var selectionIndex = selection.getSelectionModel().getSelection()[0];
		 var field = Ext.getCmp('product_code_bar');
		 field.setValue(selectionIndex.get('Product_Code'));
//		 Ext.getCmp('productCodeBarID').focus();
	},
	saveNewProductBarCode:function(button){
		
//		var productStore = this.getProductBarCodeStoreStore();
//		productStore.findExact()
	
		
				var win = button.up('window'),
		        form   = win.down('form'),
		        record = form.getRecord(),
		        values = form.getValues();
				this.productStore().insert(0,values);
				win.close();
	}
	,
	saveKeyProductBarCode:function(){
		var strBuff = Ext.getCmp('productCodeBarID').getValue();
		if(strBuff.length>0)
		{
		
			var form = Ext.getCmp('formAddProductBarCode');
	      
	        record = form.getRecord(),
	        values = form.getValues();
			this.getProductBarCodeStoreStore().insert(0,values);
			
			form.up('window').close();
		}
	}
	
	,
	saveNewProduct: function(button){
		
		
		var strBuff = Ext.getCmp('Product_Code_Text_Field').getValue();
		
		alert(strBuff);
		
		
//		var win = button.up('window'),
//        form   = win.down('form'),
//        record = form.getRecord(),
//        values = form.getValues();
//		this.getProductStoreStore().insert(0,values);
//		//record.set(values);
//		win.close();
		
	},
	removeProduct: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Sản Phẩm này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelProduct();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getProductStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
	},
	removeProductBarCode: function(button){
		var me = this;
		 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa Mã Vạch này không?',function(btn,text){
			 if(btn=='yes'){
				 var selection = me.getPanelProductBarCode();
				 var selectionIndex = selection.getSelectionModel().getSelection()[0];
				 me.getProductBarCodeStoreStore().remove(selectionIndex); 
			 }
			
			 
		 });
	},
	editProduct: function(grid, record){
		
		 var view = Ext.widget('productUpdate');
	     view.down('form').loadRecord(record);
	},
	updateProduct: function(button){
		
		 	var win = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(),
	        values = form.getValues();
		 	record.set(values);
		 	win.close();
		 	
		
	},
	filterProductBySupplierFunc: function(button, pressed){
		Ext.getCmp('filterProductAllButton').toggle(false);
		//var win = button.up('tbar');
		//var comboBox = win.down('combobox [id=filterProductBySupplierComboBox]');
		var comboBox =	Ext.getCmp('filterProductBySupplierComboBox');
		if(pressed==true)
		{
			comboBox.show();
		}
		else{
			comboBox.hide();	
		}
	},
	filterProductByCategoryFunc: function(button,pressed){
		Ext.getCmp('filterProductAllButton').toggle(false);
		var comboBox =	Ext.getCmp('filterProductByCategoryComboBox');
		if(pressed==true)
		{
			comboBox.show();
		}
		else{
			comboBox.hide();	
		}
	},
	filterProductAllFunc: function(button,pressed){
		if(pressed==true)
		{
			var comboBoxCategory =	Ext.getCmp('filterProductByCategoryComboBox').hide();
			var comboBoxSupplier =	Ext.getCmp('filterProductBySupplierComboBox').hide();
			var filterSupplier = Ext.getCmp('filterProductBySupplierButton').toggle(false);
			var filterCategory = Ext.getCmp('filterProductByCategoryButton').toggle(false);
			var storeProduct = this.getProductStoreStore();
			storeProduct.clearFilter();
			storeProduct.load();
		}
	
		
	}
	,
	filterProductFunc: function(combo,records){
	
		var comboBoxCategory =	Ext.getCmp('filterProductByCategoryComboBox');
		var comboBoxSupplier =	Ext.getCmp('filterProductBySupplierComboBox');
		var filterSupplier = Ext.getCmp('filterProductBySupplierButton').pressed;
		var filterCategory = Ext.getCmp('filterProductByCategoryButton').pressed;
		var storeProduct = this.getProductStoreStore();
		storeProduct.clearFilter();
		storeProduct.resumeEvents();
		if(filterCategory){
			storeProduct.filter([{
              	property:'Product_Category_Code',
              	value:comboBoxCategory.getValue()
					}]);
		}
		if(filterSupplier){
			storeProduct.filter([{
              	property:'Product_Supplier_ID',
              	value:comboBoxSupplier.getValue()
					}]);
			
		}
		//storeProduct.prefetchData.clear();

		storeProduct.load();
//		storeProduct.prefetch({
//		    start: 0,
//		    limit: 25,
//		    callback: function() {
//				storeProduct.guaranteeRange(0, 20);
//		    }
//		});   
	//	storeProduct.guaranteeRange(0, 20);
	//	Ext.getCmp('gridProduct').render();
			
		
	}
	,
	queryBarCode: function(grid, record){
		
	//	alert(record.get('Product_Code'));
		var Product_CodeBuff = grid.getSelectionModel().getSelection()[0].get('Product_Code');
		//alert(Product_CodeBuff);
		var store = this.getProductBarCodeStoreStore();
		store.clearFilter();
		store.resumeEvents();

		store.filter([{
		                                          	property:'Product_Code',
		                                          	value:Product_CodeBuff
			}]);
		 
		store.load();
	}
});