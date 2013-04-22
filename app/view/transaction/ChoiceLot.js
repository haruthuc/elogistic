Ext.define('InvApp.view.transaction.ChoiceLot', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Cập nhật số lượng sản phẩm',
	alias:'widget.transactionLotChoice',
	height: 380,
    width: 600,
    initComponent: function() {
    	
    	this.items = [{ 
    	   id:'gridLotTemp',
      	   xtype:'grid',
    	   store:'LotArrayStore',
    	   height: 320,
    	   plugins: [
    	             Ext.create('Ext.grid.plugin.CellEditing', {
    	                 clicksToEdit: 1
    	             })
    	         ],
//    	   features:[ {
//           	ftype: 'grouping',
//      	        groupHeaderTpl: 'Kho Hàng : {name} ({rows.length} Lô hàng)',
//      	       // hideGroupedHeader: true,
//      	        enableGroupingMenu: false
//  	    		}],
    	   columns:[
     	           // {xtype: 'rownumberer',header:'STT',width:30},
     	              {
         		    	header:"Mã Lô",
         		    	dataIndex:"lotID",
         		    	width:40	
         		   },
     	            {
         		    	header:"Kho Hàng",
         		    	dataIndex:"Stock_ID",
         		    	width:80	
         		   },
     		    {
     		    	header:"Giá Bán",
     		    	dataIndex:"Sell_Price",
     		    	width:80,
     		    	renderer: function(value){
		    		return Ext.util.Format.currency(value," ",0,true);
		    		
      		    	}
     		    },
    		    {
    		    	header:"Ngày Hết Hạn",
    		    	dataIndex:"Date_Expire",
    		    	renderer : Ext.util.Format.dateRenderer('m/d/Y'),
    		    	width:80
    		    },
    		    {
    		    	header:"Ngày Nhập Kho",
    		    	dataIndex:"Date_LastUpdate",
    		    	renderer : Ext.util.Format.dateRenderer('m/d/Y'),
    		    	width:80
    		    },
     		    {
     		    	header:"Tồn Kho",
     		    	dataIndex:"InventoryQuantity",
     		    	width:70
     		  
     		  
     		    },
     		    
     		    {	
     		    	header:"Số Lượng",
     		    	dataIndex:"Quantity_Order",
     		    	width:80,
     		    	editor: {
     	                xtype: 'numberfield',
     	                allowBlank: false,
     	                minValue: 0,
     	                maxValue: "InventoryQuantity"
     	            }
     		    	
     		    }
     		   ,
    		    {
     			   	xtype: 'checkcolumn',
     	            header: 'Khuyến Mãi',
     	            dataIndex: 'Promotion',
     	            width: 65
    		    	
    		    }
     		    ],
     		    selModel: {
     	            selType: 'cellmodel'
     	        }
       
		}];
 	this.buttons = [
            {
                text: 'Áp Dụng',
                action:'saveLotChoice'
            },
            {
                text: 'Hủy Bỏ',
                scope: this,
                handler: this.close
            }
        ];	
       

        this.callParent(arguments);
    }
});