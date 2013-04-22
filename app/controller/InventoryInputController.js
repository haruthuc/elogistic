Ext.define('InvApp.controller.InventoryInputController',{
	extend:'Ext.app.Controller',
	views:['inventoryInput.Manage','inventoryInput.Add','inventoryInput.Update'],
	models:['ProductModel','ProductLocalModel','InventoryInputModel'],
	stores:['ProductStore','ProductSearchStore','InventoryInputStore','ProductLocalStore']
	        ,
	    	init:function(){
	    		var meBuff = this;
	    		var winLotAdd;
	    		var winLotUpdate;
	    	
	    		this.control({
	    			'inventoryInputList textfield[id="findBarcodeTextfield"]':{
	    				keyup:{
	    				  fn: function(field,key) {
	    					if (key.getKey() == key.ENTER) {
	    						this.findProductByBarcodeFunction();
	    					//	alert("test");
	    					}
	    					
	    					}
	    				}
	    			
	    			
	    		},
	    		'inventoryInputList combobox[id="findProductTextfield"]':{
	    				select: this.findProductByCodeFunction
	    			
	    		},
	    		'inventoryInputList grid[id="gridInventoryInput"]':{
	    				itemclick:this.findStockByProductCode
	    			
	    			
	    		}
	    		,
	    		'inventoryInputList button[id="addNewLot"]':{
	    				click:this.addNewLotFunction
	    			
	    		},
	    		'inventoryInputList button[id="editLotBtn"]':{
    				click:this.updateNewLotFunction
    			
	    		},
	    		'inventoryInputAdd button[action="saveInventoryInput"]':{
	    				click:this.saveInventoryInputFunction
	    			
	    		},
	    		'inventoryInputUpdate button[action="saveInventoryInput"]':{
    				click:this.saveUpdateLotFunction
    			
	    		}
	    		
	    		
	    		
	    		});
	    	// khai bao cac function tai day
	    	},
	    	//tìm kiếm product bởi barcode
	    	findProductByBarcodeFunction:function(){
	    		var me = this;
	    		//lấy giá trị từ textField chứa barcode
	    		var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield").getValue();
	    		if(strBarcodeFinder.length>0){
	    			
	    			var barcodeFilter = Ext.create('Ext.util.Filter', {
	    				  property: 'ProductBarCode',
	    				  value: strBarcodeFinder
	    				});

	    			
	    			this.getProductStoreStore().load(
	    					{
	    						 filters: [ barcodeFilter ],

	    						callback:function(records,options,success){
	    						        if (success) {
	    						        	 //alert(records[0].get('Product_Name'));
	    						      
	    						        //	productBuff.save();
	    						        	
	    						        	if(records.length>0)
	    						        	{
	    								        	var store = me.getProductLocalStoreStore();
	    								        	
	    								        	if(store.findExact('Product_Code',records[0].get('Product_Code'))!=-1)
	    								        	{
	    								        		 Ext.MessageBox.alert('Thông Báo', 'Sản phẩm đã được thêm vào danh sách chờ !',function(btn, text){
	    								        	          if (btn == 'ok'){

	    								        	        	  var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    								        	        	  strBarcodeFinder.selectText();
	    								        	          }else{
	    								        	        	  
	    								        	        	  var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    								        	        	  strBarcodeFinder.selectText();
	    								        	          }
	    								        	          
	    								        	          
	    								        	          });
	    								        	}else{
	    								        	//store.load();
	    									        	store.add({
	    									        		Product_Code : records[0].get('Product_Code'),
	    									        		Product_Name : records[0].get('Product_Name'),
	    									        		Product_QuantityCaution : records[0].get('Product_QuantityCaution'),
	    									        		Unit_Code : records[0].get('Unit_Code'),
	    									        		Product_Supplier_ID : records[0].get('Product_Supplier_ID'),
	    									        		Product_Category_Code : records[0].get('Product_Category_Code'),
	    									        		Unit_Code_Ex : records[0].get('Unit_Code_Ex'),
	    									        		Unit_Rate_Ex : records[0].get('Unit_Rate_Ex')
	    									        	});
	    									        	store.sync();
	    									        
	    								        	}
	    						        	}else{
	    						        		 Ext.MessageBox.alert('Thông Báo', 'Không tìm thấy sản phẩm nào',function(btn, text){
	    						        	          if (btn == 'ok'){

	    						        	        	  var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    						        	        	  strBarcodeFinder.selectText();
	    						        	          }
	    						        	          });
	    						        		
	    						        	}
	    						        	
	    						        	me.getProductStoreStore().load();
	    						        	var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    						        	strBarcodeFinder.selectText();
	    						       // 	strBarcodeFinder.focus(true,1000);
	    						        	
	    						        } else {
	    						       	 Ext.MessageBox.alert('Thông Báo', 'Có lỗi trong quá trình kết nối',function(){
	    						       		 	var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    					        			strBarcodeFinder.selectText();
	    					        		 });
	    						        }
	    						    }
	    					}		
	    			);
	    			
	    		}
	    		
	    	},
	    	// tìm kiếm Product Bởi Product Code -- Sự kiện khi nhấn combo findProductCodeTextFlied
	    	findProductByCodeFunction: function(combo,records){
	    		
	    	//	alert(combo.getValue());
	    		var me = this;
	    		var strBarcodeFinder =  combo.getValue();
	    		if(strBarcodeFinder.length>0){
	    			

	    			var barcodeFilter = Ext.create('Ext.util.Filter', {
	    				  property: 'ProductCode',
	    				  value: strBarcodeFinder
	    				});

	    			
	    			this.getProductStoreStore().load(
	    					{
	    						 filters: [ barcodeFilter ],

	    						callback:function(records,options,success){
	    						        if (success) {
	    						        	 //alert(records[0].get('Product_Name'));
	    						      
	    						        //	productBuff.save();
	    						        	
	    						        	if(records.length>0)
	    						        	{
	    								        	var store = me.getProductLocalStoreStore();
	    								        	
	    								        	if(store.findExact('Product_Code',records[0].get('Product_Code'))!=-1)
	    								        	{
	    								        		 Ext.MessageBox.alert('Thông Báo', 'Sản phẩm đã được thêm vào danh sách chờ !',function(btn, text){
	    								        	          if (btn == 'ok'){

	    								        	        	//  var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    								        	        	  combo.selectText();
	    								        	          }
	    								        	          else{
	    								        	        	  combo.selectText();
	    								        	          }
	    								        	          });
	    								        	}else{
	    								        	//store.load();
	    									        	store.add({
	    									        		Product_Code : records[0].get('Product_Code'),
	    									        		Product_Name : records[0].get('Product_Name'),
	    									        		Product_QuantityCaution : records[0].get('Product_QuantityCaution'),
	    									        		Unit_Code : records[0].get('Unit_Code'),
	    									        		Product_Supplier_ID : records[0].get('Product_Supplier_ID'),
	    									        		Product_Category_Code : records[0].get('Product_Category_Code'),
	    									        		Unit_Code_Ex : records[0].get('Unit_Code_Ex'),
	    									        		Unit_Rate_Ex : records[0].get('Unit_Rate_Ex')
	    									        	});
	    									        	store.sync();
	    									        
	    								        	}
	    						        	}else{
	    						        		 Ext.MessageBox.alert('Thông Báo', 'Không tìm thấy sản phẩm nào',function(btn, text){
	    						        	          if (btn == 'ok'){

	    						        	        //	  var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    						        	        	  combo.selectText();
	    						        	          }else{
	    						        	        	  combo.selectText();
	    						        	        	  
	    						        	          }
	    						        	          });
	    						        		
	    						        	}
	    						        	
	    						        	me.getProductStoreStore().load();
	    						        //	var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    						        	combo.selectText();
	    						       // 	strBarcodeFinder.focus(true,1000);
	    						        	
	    						        } else {
	    						       	 Ext.MessageBox.alert('Thông Báo', 'Có lỗi trong quá trình kết nối',function(){
	    						       		 //	var strBarcodeFinder =  Ext.getCmp("findBarcodeTextfield");
	    						       		 	combo.selectText();
	    					        		 });
	    						        }
	    						    }
	    					}		
	    			);
	    			
	    		}
	    		
	    		
	    	},
	    	//tim kiem Lo hang theo Product Code
	    	findStockByProductCode: function(grid, record){
	    		var Product_CodeBuff = grid.getSelectionModel().getSelection()[0].get('Product_Code');
	    		
	    	//	alert(Product_CodeBuff);
	    		//goi store InventoryInput	
	    		var store = this.getInventoryInputStoreStore();
	    		// xoa cac bo loc
	    		store.clearFilter();
	    		// goi event
	    		store.resumeEvents();
	    		//tao filter 
	    		store.filter([{
	    						property:'Product_Code',
	    		                                          	value:Product_CodeBuff
	    				}]);
	    		 
	    		store.load();
	    		
	    	},
	    	
	    	// func them lo hang moi
	    	addNewLotFunction: function(button){
	    		
	    		if(!this.winLotAdd) 
	    		{
	    			this.winLotAdd = Ext.widget('inventoryInputAdd');
	    		}else{
	    			//this.winAdd.removeAll(true);
	    			var testClear =  Ext.getCmp('formAddInventoryInput');
	    			testClear.getForm().reset();
	    		//	this.winAdd.formAddProduct.getForm().reset();
	    			this.winLotAdd.show();
	    		}
	    			var record = Ext.getCmp('gridInventoryInput').getSelectionModel().getSelection()[0];
	    			this.winLotAdd.down('form').loadRecord(record);
	    	},
	    	// func save lo hang moi tao
	    	saveInventoryInputFunction: function(button){
	    		var win = button.up('window'),
	            form   = win.down('form'),
	            values = form.getValues();
	    		this.getInventoryInputStoreStore().insert(0,values);
	    		
	    		form.up('window').close();
	    	},
	    	updateNewLotFunction: function(button){
	    		if(!this.winLotUpdate) 
	    		{
	    			this.winLotUpdate = Ext.widget('inventoryInputUpdate');
	    		}else{
	    			//this.winAdd.removeAll(true);
	    			var testClear =  Ext.getCmp('formUpdateInventoryInput');
	    			testClear.getForm().reset();
	    		//	this.winAdd.formAddProduct.getForm().reset();
	    			this.winLotUpdate.show();
	    		}
	    			var record = Ext.getCmp('gridLotInput').getSelectionModel().getSelection()[0];
	    			this.winLotUpdate.down('form').loadRecord(record);
	    		
	    		
	    	},
	    	//sau khi bam vao nut update
	    	saveUpdateLotFunction: function(button){
	    		
	    		var win = button.up('window'),
		        form   = win.down('form'),
		        record = form.getRecord(),
		        values = form.getValues();
			 	record.set(values);
			 	win.close();
			 	
	    		
	    		
	    	}
	    	       
	        
	        
	        
	        
});