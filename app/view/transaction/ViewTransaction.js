Ext.define('InvApp.view.transaction.ViewTransaction', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Xem Chi Tiết Đơn Hàng',
	alias:'widget.transactionViewDetail',
	height: 380,
    width: 550,
    initComponent: function() {
		
	 // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: "TransactionDetailLocalStore",
        columns: [
     //       {xtype: 'rownumberer',header:'STT',width:30},
     		{
     			text:'Tên',
     			dataIndex:'Product_ID',
     			flex:1
     			
     		},
            {
                text:'Mã',
                flex:1,
                dataIndex: 'Product_ID'
            },
            {
                text:'Đơn giá',
                width: 75,
                align:'right', 
                dataIndex:'Product_Current_Price',
                renderer: function(value){
	    			return Ext.util.Format.currency(value," ",0,true);
 		    		}
            },
            {
                text: 'Số lượng',
                width: 75,
                align:'right', 
                dataIndex:'Product_Quantity'
            },
            {
            	text: 'Thành tiền',
            	dataIndex:'Product_Total_Price',
            	width:75,
            	align:'right',
            	renderer: function(value){
	    				return Ext.util.Format.currency(value," ",0,true);
 		    	}
            	
            }
        ],
        height: 250,
        tbar: [{
            text: 'Print',
            handler : function(){
            	Ext.ux.grid.BillPrinter.printAutomatically = false;
            	Ext.ux.grid.BillPrinter.print(grid);
            }
        }]
    });
		
	
		this.items = grid;
    
    
        this.callParent(arguments);
    }
});