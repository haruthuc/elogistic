Ext.define('InvApp.view.transaction.Create',{
		extend:'Ext.panel.Panel',
		alias:'widget.transactionCreate',
		title:'Tạo hóa đơn bán Hàng',
		id:'transactionInputCreate',
		layout: {
            type: 'border',
            padding: 5
        },
      
        bodyPadding: 5,
        defaults: {
            split: true
        },
        
        initComponent:function(){
        	//var extCmp = this.down("grid");
//        	var nav = new Ext.util.KeyNav(extCmp, {
//        	  
//        	    "enter" : function(e){
//        	       alert("Test enter");
//        	    },
//        	    scope : this
//        	});
 			var windowChoice;
 			var me = this;
 			me.callParent(arguments);
 			
 			me.addEvents('remove');
 	//		alert("test");
 	//		me.fireEvent('remove');
         },
         assign:function(){
        	 
        	 alert("assign");
        	 
         },
        
       items:[ // bat dau item
              {
            	  region:'north',
            	  height:90,
                  collapsible: false,
                  split: false,
                  frame:true,
                  
                  items:[
                         {
					    xtype: 'datefield',
					    fieldLabel: 'Ngày Xuất HĐ',
					    cls:'barcodeText',
					    format: 'd/m/Y',
					    height:25,
					    altFormats: 'd,m,Y|d.m.Y',
					    value: new Date()
						},
						
						
                     {
       				xtype:'textfield',
     				fieldLabel:'Mã vạch',
     				height:25,
     				width:250,
     				cls:'barcodeText',
     				enableKeyEvents: true,
     				id:'transactionFindBarCodeField',
     				listeners:{
     		        	afterrender: function(field) {
     		        		field.focus(false, 500);
     		        		}
     		        }
     			},
     			{
     	            xtype: 'combo',
     	            store: 'ProductSearchStore',
     	            cls:'barcodeText',
     	            displayField: 'Product_Name',
     	            valueField:'Product_Code',
     	            typeAhead: false,
     	            fieldLabel:'Mã,Tên Sp',
     	            width: 300,
     	            hideTrigger:true,
     	            id:'findTransactionProductTextfield',
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
     			}, //ket thuc
     			{
     				
     				xtype: 'displayfield',
     				id:'totalPriceID',
     		        fieldLabel: 'Tổng tiền (VNĐ)',
     		        name: 'total_price',
     		        cls:'totalText',
     		        width:300,
     		        valueToRaw: function(value) {
     					
     				var ChuSo=new Array(" không "," một "," hai "," ba "," bốn "," năm "," sáu "," bảy "," tám "," chín ");
     	 			var Tien=new Array( "", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ");

     	 			//1. Hàm đọc số có ba chữ số;
     	 			function DocSo3ChuSo(baso)
     	 			{
     	 			    var tram;
     	 			    var chuc;
     	 			    var donvi;
     	 			    var KetQua="";
     	 			    tram=parseInt(baso/100);
     	 			    chuc=parseInt((baso%100)/10);
     	 			    donvi=baso%10;
     	 			    if(tram==0 && chuc==0 && donvi==0) return "";
     	 			    if(tram!=0)
     	 			    {
     	 			        KetQua += ChuSo[tram] + " trăm ";
     	 			        if ((chuc == 0) && (donvi != 0)) KetQua += " linh ";
     	 			    } 
     	 			    if ((chuc != 0) && (chuc != 1))
     	 			    {
     	 			            KetQua += ChuSo[chuc] + " mươi";
     	 			            if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh ";
     	 			    }
     	 			    if (chuc == 1) KetQua += " mười ";
     	 			    switch (donvi)
     	 			    {
     	 			        case 1:
     	 			            if ((chuc != 0) && (chuc != 1))
     	 			            {
     	 			                KetQua += " mốt ";
     	 			            }
     	 			            else
     	 			            {
     	 			                KetQua += ChuSo[donvi];
     	 			            }
     	 			            break;
     	 			        case 5:
     	 			            if (chuc == 0)
     	 			            {
     	 			                KetQua += ChuSo[donvi];
     	 			            }
     	 			            else
     	 			            {
     	 			                KetQua += " lăm ";
     	 			            }
     	 			            break;
     	 			        default:
     	 			            if (donvi != 0)
     	 			            {
     	 			                KetQua += ChuSo[donvi];
     	 			            }
     	 			            break;
     	 			        }
     	 			    return KetQua;
     	 			}

     	 			//2. Hàm đọc số thành chữ (Sử dụng hàm đọc số có ba chữ số)

     	 			function DocTienBangChu(SoTien)
     	 			{
     	 			    var lan=0;
     	 			    var i=0;
     	 			    var so=0;
     	 			    var KetQua="";
     	 			    var tmp="";
     	 			    var ViTri = new Array();
     	 			    if(SoTien<0) return "Số tiền âm !";
     	 			    if(SoTien==0) return "Không đồng !";
     	 			    if(SoTien>0)
     	 			    {
     	 			        so=SoTien;
     	 			    }
     	 			    else
     	 			    {
     	 			        so = -SoTien;
     	 			    }
     	 			    if (SoTien > 8999999999999999)
     	 			    {
     	 			        //SoTien = 0;
     	 			        return "Số quá lớn!";
     	 			    }
     	 			    ViTri[5] = Math.floor(so / 1000000000000000);
     	 			    if(isNaN(ViTri[5]))
     	 			        ViTri[5] = "0";
     	 			    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
     	 			    ViTri[4] = Math.floor(so / 1000000000000);
     	 			     if(isNaN(ViTri[4]))
     	 			        ViTri[4] = "0";
     	 			    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
     	 			    ViTri[3] = Math.floor(so / 1000000000);
     	 			     if(isNaN(ViTri[3]))
     	 			        ViTri[3] = "0";
     	 			    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
     	 			    ViTri[2] = parseInt(so / 1000000);
     	 			     if(isNaN(ViTri[2]))
     	 			        ViTri[2] = "0";
     	 			    ViTri[1] = parseInt((so % 1000000) / 1000);
     	 			     if(isNaN(ViTri[1]))
     	 			        ViTri[1] = "0";
     	 			    ViTri[0] = parseInt(so % 1000);
     	 			  if(isNaN(ViTri[0]))
     	 			        ViTri[0] = "0";
     	 			    if (ViTri[5] > 0)
     	 			    {
     	 			        lan = 5;
     	 			    }
     	 			    else if (ViTri[4] > 0)
     	 			    {
     	 			        lan = 4;
     	 			    }
     	 			    else if (ViTri[3] > 0)
     	 			    {
     	 			        lan = 3;
     	 			    }
     	 			    else if (ViTri[2] > 0)
     	 			    {
     	 			        lan = 2;
     	 			    }
     	 			    else if (ViTri[1] > 0)
     	 			    {
     	 			        lan = 1;
     	 			    }
     	 			    else
     	 			    {
     	 			        lan = 0;
     	 			    }
     	 			    for (i = lan; i >= 0; i--)
     	 			    {
     	 			       tmp = DocSo3ChuSo(ViTri[i]);
     	 			       KetQua += tmp;
     	 			       if (ViTri[i] > 0) KetQua += Tien[i];
     	 			       if ((i > 0) && (tmp.length > 0)) KetQua += ',';//&& (!string.IsNullOrEmpty(tmp))
     	 			    }
     	 			   if (KetQua.substring(KetQua.length - 1) == ',')
     	 			   {
     	 			        KetQua = KetQua.substring(0, KetQua.length - 1);
     	 			   }
     	 			   KetQua = KetQua.substring(1,2).toUpperCase()+ KetQua.substring(2);
     	 			   return KetQua;//.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
     	 			}
     				
     		           return Ext.util.Format.currency(value, ' ', 0,true)+ '<br/><span class="numberToText">'+DocTienBangChu(value)+"</span>";
     				},
     		        value: '0'
     			}
                  
                  ]
              },       
        
              {
        	region: 'center',
            layout: 'fit',
            title:'Danh sách Sản Phẩm',
            viewConfig: {
                stripeRows: true
            },
            items:[{

         	   id:'gridTransactionTemp',
         	   xtype:'grid',
        	   store:'TransactionLocalStore',
         	   bbar:['-',{
    				xtype:'button',
    				scale:'large',
    				text:'Lưu & In Đơn Hàng (F1)',
    				id:'transactionSaveButton',
    				iconCls:'icon-refresh',
    				style: {
    		            marginBottom: '10px',
    		            float: 'right'
    		        }
    				
    			},'-',
    			{
    				xtype:'button',
    				text:'Hủy Đơn Hàng (F2)',
    				scale:'large',
    				iconCls:'icon-refresh',
    				style: {
    		            marginBottom: '10px',
    		            float: 'right'
    		        }
    			},'-'
    			
    			],
         	   columns:[
         	            {xtype: 'rownumberer',header:'STT',width:30},
         		    {
         		    	header:'Mã Sản Phẩm',
         		    	dataIndex:'Product_Code',
         		    	width:100
         		    },
         		    {
         		    	header:"Tên Sản Phẩm",
         		    	dataIndex:"Product_Name",
         		    	width:220
         		    },
        		    {
        		    	header:"Đơn vị",
        		    	dataIndex:"Unit_Code",
        		    	width:80
        		    },
         		    {
         		    	header:"Số lượng",
         		    	dataIndex:"Product_Quantity",
         		    	width:70
         		  
         		    },
         		    {
         		    	header:"Đơn giá",
         		    	dataIndex:"Product_Current_Price",
         		    	width:80	
         		    },
         		    {
         		    	header:"Thành Tiền",
         		    	dataIndex:"Product_Total_Price",
         		    	renderer: function(value){
    		    		return Ext.util.Format.currency(value," ",0,true);
    		    		
         		    		},
         		    	width:100	
         		    },
         		    {
         		    	header:"Khuyến Mãi",
         		    	dataIndex:"Product_Promotion_Quantity"         		    	
         		    		
         		  
         		    	
         		    },
         		    {
         		    	xtype:'actionbuttoncolumn',
         		      width:170,
         		       // iconCls:'icon-goods',
         		        items:[{ //bat dau item
         		        	 iconCls: 'icon-goods',
         		             text: 'Chi Tiết',// Use a URL in the icon config
                             tooltip: 'Chọn Lô Hàng',
                          
                             handler: function(grid, rowIndex, colIndex) {
         		        			var store = Ext.data.StoreManager.lookup('TransactionLocalStore');
         		        			var rec = store.getAt(rowIndex);
         		        			//alert("Sell " + rec.get('Product_Code'));
         		        			
         		        			var Product_CodeBuff = rec.get('Product_Code');
         		        			// lay ra muc do canh bao hang
	         			    		var Product_Quantity_Caution = rec.get('Product_Quantity_Caution');
		         		   	    	//	alert(Product_CodeBuff);
		         		   	    		//goi store InventoryInput	
		         		   	    	var storeSearch = Ext.data.StoreManager.lookup('InventoryInputSearchStore');
		         		   	    	
		         		   	    		// xoa cac bo loc
		         		   	    	storeSearch.clearFilter();
		         		   	    		// goi event
		         		   	    	storeSearch.resumeEvents();
		         		   	    		//tao filter 
			         		   	    	
			         		   		var productCodeFilter = Ext.create('Ext.util.Filter', {
			  	    				  property: 'Product_Code',
			  	    				  value: Product_CodeBuff
			  	    				});

		         		   	    	
		         		   	    	// store InventoryInput tìm kiếm lô hàng theo ProductCode	 
			         		   		storeSearch.load( 
			         		   				{
			         		   				filters: [ productCodeFilter ],
			         		   				callback:function(records,options,success){
			    						        if (success) {
			    						        
			    						        	var totalBuff =0;
			    						  
			    						        	// nếu có lô hàng
			    						        	if(records.length>0)
			    						        	{	
			    						        		var lotArrayStore = Ext.data.StoreManager.lookup('LotArrayStore');
			    						        		lotArrayStore.getProxy().clear();
			    						        		lotArrayStore.removeAll();
			    						        		
			    						        		for(var k=0;k<records.length;k++){
			    						        			lotArrayStore.add({
			    						        				lotID: records[k].get('id'),
			    						        				Stock_ID: records[k].get('Stock_ID'),
			    						        				Product_Code: records[k].get('Product_Code'),
			    						        				Product_Name: records[k].get('Product_Name'),
			    						        				Sell_Price: records[k].get('Sell_Price'),
			    						        				Orginal_Price: records[k].get('Orginal_Price'),
			    						        				Date_Expire: records[k].get('Date_Expire'),
			    						        				Date_LastUpdate: records[k].get('Date_LastUpdate'),
			    						        				InventoryQuantity: records[k].get('InventoryQuantity'),
			    						        				Quantity_Order:0,
			    						        				Promotion:false
				    						        		});
			    						        			
			    						        			totalBuff = totalBuff+records[k].get('InventoryQuantity');
			    						        			
			    						        		}
			    						        		var cautionTest = totalBuff-Product_Quantity_Caution;
			    						        	
			    						        	
			    						        		
			    						        		
			    						        		if(!this.windowChoice) 
			    	         		        			{
			    						        			
			    						        			this.windowChoice = Ext.widget('transactionLotChoice');
			    						        			this.windowChoice.setTitle("Tổng sản phẩm tồn kho: <span style='color:red' > [" + totalBuff +"] </span> Mức cảnh báo nhập hàng: <span style='color:red' >["+ Product_Quantity_Caution +"]</span>");
			    						        			
			    	         		        			}else{
			    	         		        				this.windowChoice.setTitle("Tổng sản phẩm tồn kho: <span style='color:red' > [" + totalBuff +"] </span> Mức cảnh báo nhập hàng: <span style='color:red' >["+ Product_Quantity_Caution +"]</span>");
			    	         		        				this.windowChoice.show();
			    	         		        					
			    	         		        			
			    	         		        			}
			    						        		
			    						        		if(cautionTest<=0){
			    						        			
			    						        			Ext.Msg.alert('Thông báo', 'Sản phẩm đã tới mức cảnh báo '+ Product_Quantity_Caution +'(sp) Mức độ chênh lệch ' + cautionTest +' (sp) ! Xin vui lòng đặt thêm hàng');
			    						        		}		
			    						        		
			    						        		
			    						        	}else{
			    						        		
			    						        		//thong bao khong co lo hang nao con hang
			    						        		Ext.Msg.alert('Thông báo', 'Đã hết hàng trong kho ! Xin vui lòng Nhập Hàng Mới');
			    						        		
			    						        	}
			    						        	
			    						        }
			    						        
			         		   				}
			         		   		
			         		   				});
         		        			
         		        			
	         		        	
         		        			
                             }
         		        	
         		        	
         		        	
         		        },//ket thuc item
         		        { // bat dau item delete record
         		        	//icon   : './images/cross_24.png',
         		        	iconCls: 'icon-cross',
         		        	text:'Xóa',
                            tooltip: 'Xóa Lô Hàng',
                       //     bodyPadding: 5,
                         //   scope:me,
                            handler: function(grid, rowIndex, colIndex) { //bat dau handler
         		     //   	var myTree = this.up('panel');
         		        	var me2 = this;
//		        			form3.assign();
// 		        			//alert("Sell " + rec.get('Product_Code'));
// 		        			
		        		//	me.fireEvent('remove', this, rec);
//		        			alert("Test Handler");
        		        	 Ext.MessageBox.confirm('Thông báo', 'Bạn chắc xóa món hàng này không?',function(btn,text){
        		   			 if(btn=='yes'){
        		   				 
	         		   				 //xoa loa hang ra khoi danh sach cho
         		   				 //xoa mon hang ra khoi danh sach transactionDetaillocal	         		   				 //update lai gia mon hang
	        		   				var form = me2.up('grid');
	             		        	var form2 = form.up('panel');
	             		        	var form3 = form2.up('panel');
	             		        	//alert(form3.title);
	             		        	var transactionLocalStore = Ext.data.StoreManager.lookup('TransactionLocalStore');
	    		        			var rec = transactionLocalStore.getAt(rowIndex);
	    		        			var Product_CodeBuff = rec.get('Product_Code');
	    		        			form3.fireEvent('remove',this,Product_CodeBuff);

	         		   			 }
    
        		        	 });
//         		        			
//         		           		var transactionDetailLocalStore =  Ext.data.StoreManager.lookup('TransactionDetailLocalStore');
//         			    		var lotArrayStore =  Ext.data.StoreManager.lookup('LotArrayStore');
//         			    	//	var transactionLocalStore =  Ext.data.StoreManager.lookup('TransactionLocalStore');
//         		        			
//         			    		var productCodeFilter = Ext.create('Ext.util.Filter', {
//			  	    				  property: 'Product_Code',
//			  	    				  value: Product_CodeBuff
//			  	    				});
//         			    		
//         			    		//load transaction va xoa
//         			    		transactionDetailLocalStore.load(			  
//         			    				{
//         			    					filters: [ productCodeFilter ],
//         			    						callback:function(records,options,success){
//         			    						if (success) {
//         			    							
//         			    						// nếu có lô hàng
//			    						        	if(records.length>0)
//			    						        	{
//			    						       
//			    						        			//xoa mon hang ra khoi transaction detail local
//			    						        			transactionDetailLocalStore.remove(records);
//			    						        			//tim theo ma Product Code, trong LotArray va xoa no
//			    						        			var removeLotArray = lotArrayStore.findRecord("Product_Code",Product_CodeBuff);
//			    						        			lotArrayStore.remove(removeLotArray);
//			    						        			//tim theo Ma ProductCode trong TransactionLocal và xóa nó
//			    						        			var recordTransactionLocal =	transactionLocalStore.findRecord('Product_Code',productCodeTemp);
//			    						        			
//			    						        			transactionLocalStore.remove(recordTransactionLocal);
//			    						        		
//			    						        	}
//         			    						
//         			    							
//         			    						}
//         			    					}
//         			    			
//         			    				});
//         			    		
//         			    		
//         			    		
//         			    		
//         		   			 
//         		        		
//         		        	
//         		        	}
//         		        	
//         		        	
//	         		        });
	         		        } //ket thuc handler
	         		        
         		        }
         		        ]
         		    	
         		    }
         		] 
                    
            	
            	
            }]
         
       },
       {
    	   region: 'east',
           collapsible: true,
           floatable: true,
           split: true,
           width: 350,
           minWidth: 250,
           title:'Thông Tin Khách Hàng & Nhân Viên Kinh Doanh',
           border: false,
           items:[
                  {
                	  xtype:'transactionCustomerDetail'
                  }
                  ,
                  {
                	  xtype:'transactionSalesDetail'
                  }
                  
                  ]
       }
       
       
       ] // ket thuc items
}
);
