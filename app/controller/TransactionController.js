Ext.define('InvApp.controller.TransactionController',{
	extend:'Ext.app.Controller',
	views:['transaction.Create',
	       'transaction.ChoiceLot',
	       'transaction.CustomerDetail',
	       'transaction.SalesDetail',
	       'transaction.ViewTransaction'], // khai bao view tai day
	models:['TransactionLocalModel',
	        'ProductModel',
	        'TransactionModel',
	        'InventoryInputModel',
	        'LotArrayModel',
	        'TransactionDetailModel',
	        'CustomerModel',
	        'SalesModel',
	        'EmployeeModel'], // khai bao models
	stores:['TransactionLocalStore',
	        'ProductSearchStore',
	        'ProductStore',
	        'InventoryInputSearchStore',
	        'LotArrayStore',
	        'TransactionDetailLocalStore',
	        'CustomerSearchStore',
	        'SalesStore',
	        'EmployeeSalesStore'], //khai bao stores
	init:function(){ // ham khoi tao
		
	
	
	// khai bao cac function tai day
		this.control({
			// bat su kien Enter khi bam vao text field bar code find
			'transactionCreate textfield[id="transactionFindBarCodeField"]':{
			keyup:{
			  fn: function(field,key) {
				if (key.getKey() == key.ENTER) {
					this.findProductByBarcodeFunction();
				//	alert("test");
				}
				
				}
			}
		
		
			}, // ket thuc
			'transactionCreate combobox[id="findTransactionProductTextfield"]':{
				select: this.findTransactionProductByCodeFunction
			
			},
			//bat su kien khi nhan vao nut ap dung chon chi tiet lo hang
			'transactionLotChoice button[action="saveLotChoice"]':{
				click: this.saveLotChoiceFunction
				
			},
			'transactionCreate':{
				remove: this.removeItemTransactionAction
				
			},
			'transactionCustomerDetail combobox[id="transactionCustomerFind"]':{
				
				select: this.transactionCustomerFindFunction
			},
			'transactionSalesDetail combobox[id="transactionSalesFind"]':{
				
				select: this.transactionSalesFindFunction
				
			},
			'transactionCreate button[id="transactionSaveButton"]':{
				
				click: this.viewTransactionFunction
				
			}
			
			
		
			
			
			
		});
		

	},
	
		//tìm kiếm product bởi barcode
		findProductByBarcodeFunction:function(){
			var me = this;
			//lấy giá trị từ textField chứa barcode
			var strBarcodeFinder =  Ext.getCmp("transactionFindBarCodeField").getValue();
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
									        	var store = me.getTransactionLocalStoreStore();
									        	
									        	if(store.findExact('Product_Code',records[0].get('Product_Code'))!=-1)
									        	{
									        		 Ext.MessageBox.alert('Thông Báo', 'Sản phẩm đã được thêm vào danh sách chờ !',function(btn, text){
									        	          if (btn == 'ok'){
	
									        	        	  var strBarcodeFinder =  Ext.getCmp("transactionFindBarCodeField");
									        	        	  strBarcodeFinder.selectText();
									        	          }else{
									        	        	  
									        	        	  var strBarcodeFinder =  Ext.getCmp("transactionFindBarCodeField");
									        	        	  strBarcodeFinder.selectText();
									        	          }
									        	          
									        	          
									        	          });
									        	}else{

//									        		{name:'id',type:'int'},
//											        {name:'Product_Code',type:'string'},
//											        {name:'Product_Name',type:'string'},
//											        {name:'Stock_ID',type:'string'},
//											        {name:'Unit_Code',type:'string'},
//											        {name:'Product_Quantity',type:'int'},
//											        {name:'Product_Current_Price',type:'float'},
//											        {name:'Product_Current_PriceOrginal',type:'float'},
//											        {name:'Transaction_Product_Type',type:'string'},
//											        {name:'Product_Supplier_ID',type:'string'}
										        	store.add({
										        		Product_Code : records[0].get('Product_Code'),
										        		Product_Name : records[0].get('Product_Name'),
										        		Unit_Code : records[0].get('Unit_Code'),								  
										        		Product_Quantity:0,
										        		Product_Current_Price:0,
										        		Product_Current_PriceOrginal:0,
										        		Product_Supplier_ID : records[0].get('Product_Supplier_ID'),
										        		Product_Quantity_Caution: records[0].get('Product_QuantityCaution')
										        	
										        	});
										        	store.sync();
										        
									        	}
							        	}else{
							        		 Ext.MessageBox.alert('Thông Báo', 'Không tìm thấy sản phẩm nào',function(btn, text){
							        	          if (btn == 'ok'){
	
							        	        	  var strBarcodeFinder =  Ext.getCmp("transactionFindBarCodeField");
							        	        	  strBarcodeFinder.selectText();
							        	          }
							        	          });
							        		
							        	}
							        	
							        	me.getProductStoreStore().load();
							        	var strBarcodeFinder =  Ext.getCmp("transactionFindBarCodeField");
							        	strBarcodeFinder.selectText();
							       // 	strBarcodeFinder.focus(true,1000);
							        	
							        } else {
							       	 Ext.MessageBox.alert('Thông Báo', 'Có lỗi trong quá trình kết nối',function(){
							       		 	var strBarcodeFinder =  Ext.getCmp("transactionFindBarCodeField");
						        			strBarcodeFinder.selectText();
						        		 });
							        }
							    }
						}		
				);
				
			}
			
		}, // ket thuc
	
		findTransactionProductByCodeFunction: function(combo,records){
    		
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
	    								        //	var store = me.getProductLocalStoreStore();
	    								        	var store = me.getTransactionLocalStoreStore();
	    								        	
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
											        		Unit_Code : records[0].get('Unit_Code'),								  
											        		Product_Quantity:0,
											        		Product_Current_Price:0,
											        		Product_Current_PriceOrginal:0,
											        		Product_Supplier_ID : records[0].get('Product_Supplier_ID'),
											        		Product_Quantity_Caution: records[0].get('Product_QuantityCaution')
											        	
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
	    		
	    		
	    	}, // ket thuc
		// ham xu ly su kien khi bam vao nut Ap dung chi tiet kho hang
		saveLotChoiceFunction: function(button){
	    		//alert("Test Button");
	    		// sau khi bam ap dung se luu vao TransactionDetailLocalStore
	    		// update lai gia hien thi
	    		// update lai grid hien thi san pham
	    		
	    		var transactionDetailLocalStore =  Ext.data.StoreManager.lookup('TransactionDetailLocalStore');
	    		var lotArrayStore =  Ext.data.StoreManager.lookup('LotArrayStore');
	    		var transactionLocalStore =  Ext.data.StoreManager.lookup('TransactionLocalStore');
	    		
	    		lotArrayStore.load({callback:function(records,options,success){
	    			
	    			if(success){
	    				if(records.length>0){
	    					
	    					//alert(records.length);
	    					var totalPriceBuff = 0;
	    					var totalOrderNumber =0;
	    					var totalQuantityPromotion =0;
	    					var priceSellString =' ';
	    					 var productCodeTemp = null;
	    					 
	    					for(var k=0;k<records.length;k++){
	    						
	    						//alert(records[k].get('Quantity_Order'));
	    					
	    						var orderQuantityTemp = records[k].get('Quantity_Order');
	    						
	    						var lotIDTemp = records[k].get('lotID');			        
    					        var stockIDTemp = records[k].get('Stock_ID');
    					        	productCodeTemp = records[k].get('Product_Code');
    					        var sellPriceTemp = records[k].get('Sell_Price');
    					        var orginal_PriceTemp = records[k].get('Orginal_Price');
    					        var promotionTemp = records[k].get('Promotion');
    					        var productNameTemp = records[k].get('Product_Name');
    					        if(promotionTemp == true){
    					        	sellPriceTemp = 0;
    					        	totalQuantityPromotion = totalQuantityPromotion+orderQuantityTemp;
    					        }
    					        	totalPriceBuff = totalPriceBuff+(sellPriceTemp*orderQuantityTemp);
    					        
    					    
    							totalOrderNumber = totalOrderNumber+orderQuantityTemp;
	    						// neu so luong dat hang lon hon 0
	    						if(orderQuantityTemp>0){
	    							// kiem tra su ton tai cua id lo hang trong TransactioDetailLocalModel
	    							
	    							var findLotBuff = transactionDetailLocalStore.findRecord('Lot_ID',lotIDTemp);
	    							priceSellString = priceSellString.concat(sellPriceTemp.toString()," , ");
	    							//alert(priceSellString.concat(sellPriceTemp.toString()));
	    							if(findLotBuff!=null){
	    								//cap nhat lai gia tri so luong dat hang trong transaction detaillocal
	    								findLotBuff.set("Product_Quantity",orderQuantityTemp);
	    								
	    							}else{
	    								

	    							        
	    								transactionDetailLocalStore.add({
	    									Product_ID: productCodeTemp,
	    									Product_Name:productNameTemp,
	    									Transaction_id:"",
	    									Stock_ID: stockIDTemp,
	    									Product_Quantity: orderQuantityTemp,
	    									Product_Current_Price: sellPriceTemp,
	    									Product_Current_PriceOrginal: orginal_PriceTemp,
	    									DateAdd:"none",
	    									Transaction_Product_Type:"X",
	    									Lot_ID: lotIDTemp,
	    									Promotion: promotionTemp
	    								});
	    								
	    							}
	    							
	    							
	    						}
	    					
	    					}
	    					//sau khi add vao transcationlocaldetail xong se hien thi gia
	    					
	    					if(productCodeTemp!=null){
	    						//tim kiem product code trong transactionLocalStore va update lai so luong don gia
	    						var recordBuff =	transactionLocalStore.findRecord('Product_Code',productCodeTemp);
	    						recordBuff.set("Product_Quantity",totalOrderNumber);
	    						recordBuff.set("Product_Total_Price",totalPriceBuff);
	    						recordBuff.set("Product_Current_Price",priceSellString);
	    						recordBuff.set("Product_Promotion_Quantity",totalQuantityPromotion);
	    					}
						    					
	    					
	    				}    				
	    			}
	    			
	    			
	    			
	    		}
	    		
	    		});
	    		
	    		//close panel window
	    		
	    		var win = button.up('window');
	    		win.close();
	    		this.updateTotalPriceFunction();
	   
	    }, //ket thuc function
	    updateTotalPriceFunction: function(){
	    	
			var transactionLocalStore =  Ext.data.StoreManager.lookup('TransactionLocalStore');
			var totalPriceUpdateBuff = 0;
			transactionLocalStore.load({callback:function(records,options,success){
    			
    			if(success){
    				if(records.length>0){
    					
    					for(var k=0;k<records.length;k++){
    					
    						totalPriceUpdateBuff = totalPriceUpdateBuff + records[k].get('Product_Total_Price');
    						
    					}
    					
    				}
    				var totalField = Ext.getCmp('totalPriceID');
					
					totalField.setValue(totalPriceUpdateBuff);
    				
    			}
			}
			});
	    	
	    	
	    	
	    },
	    removeItemTransactionAction:function(view,Product_CodeBuff){

	    	
	    	//alert("Test Handler");
	    	//var Product_CodeBuff = record.get('Product_Code');
        		var transactionDetailLocalStore =  Ext.data.StoreManager.lookup('TransactionDetailLocalStore');
	    		var lotArrayStore =  Ext.data.StoreManager.lookup('LotArrayStore');
	    		var transactionLocalStore =  Ext.data.StoreManager.lookup('TransactionLocalStore');
     			
	    		var productCodeFilter = Ext.create('Ext.util.Filter', {
  				  property: 'Product_Code',
  				  value: Product_CodeBuff
  				});
	    		
	    		//load transaction va xoa
	    		transactionDetailLocalStore.load(			  
	    				{
	    					filters: [ productCodeFilter ],
	    						callback:function(records,options,success){
	    						if (success) {
	    							
	    						// nếu có lô hàng
					        	if(records.length>0)
					        	{
					        		//alert("Begin Delete");
					        			//xoa mon hang ra khoi transaction detail local
					        			transactionDetailLocalStore.remove(records);
					        			//tim theo ma Product Code, trong LotArray va xoa no
					        			
					        			//tim theo Ma ProductCode trong TransactionLocal và xóa nó
					        			
					        			
					        			
					        			
					        	}
					        	var removeLotArray = lotArrayStore.findRecord("Product_Code",Product_CodeBuff);
			        			lotArrayStore.remove(removeLotArray);
					        	var recordTransactionLocal =	transactionLocalStore.findRecord('Product_Code',Product_CodeBuff);
					        	transactionLocalStore.remove(recordTransactionLocal);
	    							
	    						}
	    						
	    						
	    					}
	    			
	    				});
	    		//update lại field giá
	    		this.updateTotalPriceFunction();
	    },
	    transactionCustomerFindFunction:function(combo,records){
	    	
	    	//alert(records[0].get('Cust_PersonName'));
	    	var Cust_IDTemp = records[0].get('Cust_ID');
	    	var txtTransactionCustomerCodeTemp = Ext.getCmp('txtTransactionCustomerCode');
	    	txtTransactionCustomerCodeTemp.setValue(Cust_IDTemp);
	    	var txtTransactionCustomerAddressTemp = Ext.getCmp('txtTransactionCustomerAddress');
	    	txtTransactionCustomerAddressTemp.setValue(records[0].get('Cust_Address'));
	    	var txtTransactionCustomerPhoneTemp = Ext.getCmp('txtTransactionCustomerPhone');
	    	txtTransactionCustomerPhoneTemp.setValue(records[0].get('Cust_Phone1'));
	    	//goi store Sale lay doanh so va khoan no
	    	var salesStoreTemp = this.getSalesStoreStore();
	    	//tao bo loc Ma so khach hang
    		var customerCodeFilter = Ext.create('Ext.util.Filter', {
				  property: 'Cust_ID',
				  value: Cust_IDTemp
				});
    		salesStoreTemp.load(			  
    				{
    					filters: [ customerCodeFilter ],
    						callback:function(records,options,success){
    						if (success) {
    							
	    						// nếu co ma so khach hang co doanh so
					        	if(records.length>0)
					        	{
					        		var total_TransactionTemp = Ext.getCmp("txtTransactionTotalPrice");
					        		//set doanh thu vao o Transaction Total
					        		var totalTransactionValue = records[0].get('Total_Transaction');
					        		var totalTransactionPayment = records[0].get('Total_Payment');
					        	//	alert(totalTransactionPayment);
					        		total_TransactionTemp.setValue(Ext.util.Format.currency(totalTransactionValue, ' ', 0,true));
					        		var debt_TransactionTemp = Ext.getCmp("txtTransactionDebt");
					        		debt_TransactionTemp.setValue(Ext.util.Format.currency(totalTransactionValue-totalTransactionPayment, ' ', 0,true));
					        		
					        	}
				        	
    						}
    						
    				}
    				});
    				
    		
	    },
	    transactionSalesFindFunction: function(combo,records)// ket thuc ham
	    {
	    	
	    	var nameSalesTemp = Ext.getCmp("txtTransactionSalesName");
	    	nameSalesTemp.setValue(records[0].get('Lastname')+" "+records[0].get('First_Name'));
	    	var txtTransactionSalesPhoneTemp = Ext.getCmp("txtTransactionSalesPhone");
	    	txtTransactionSalesPhoneTemp.setValue(records[0].get('Mobiphone'));
	    	
	    },
	    viewTransactionFunction: function(button){
	    	var win = Ext.widget('transactionViewDetail');
	    
	    	
	    	
	    }
	
	
	
	
});