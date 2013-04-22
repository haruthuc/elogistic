Ext.define('InvApp.view.transaction.SalesDetail', {
    extend: 'Ext.panel.Panel',
    title: 'Nhân viên Kinh Doanh',
	alias:'widget.transactionSalesDetail',
	height: 290,

    initComponent: function() { // bat dau ham init
    	
    	this.items = [
    	         {
     	            xtype: 'combo',
     	            id:'transactionSalesFind',
     	            store: 'EmployeeSalesStore',
     	            cls:'nameText',
     	            displayField: 'Staff_ID',
     	            valueField:'Staff_ID',
     	            fieldLabel:'Mã NV',
     	            width: 280,
     	            listConfig: {
		    	        	 loadingText: 'Đang tìm kiếm...',
		  	                emptyText: 'Không có kết quả nào trùng.',
		
		  	                // Custom rendering template for each item
		  	                getInnerTpl: function() {
		  	                    return '<div class="search-item"><h3><span>Mã: {Staff_ID}</h3><br /> Tên :{Lastname} {First_Name}</span></div>';
		  	                }
    	        	 
    	         	}
     	           
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Tên Nhân Viên',
     		        value:'<img src="images/loading.gif"/>',
     		        id:'txtTransactionSalesName',
     		        cls:'iconText'
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Điện thoại',
     		        value:'<img src="images/loading.gif"/>',
     		        id:'txtTransactionSalesPhone',
     		        cls:'iconText'
     			}
     			
    	
    	];
 	

        this.callParent(arguments);
    }
});