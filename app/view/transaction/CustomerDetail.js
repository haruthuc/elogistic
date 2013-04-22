Ext.define('InvApp.view.transaction.CustomerDetail', {
    extend: 'Ext.panel.Panel',
    title: 'Thông Tin Khách Hàng',
	alias:'widget.transactionCustomerDetail',
	height: 290,

    initComponent: function() { // bat dau ham init
    	
    	this.items = [
    	         {
     	            xtype: 'combo',
     	            id:'transactionCustomerFind',
     	            store: 'CustomerSearchStore',
     	            cls:'nameText',
     	            displayField: 'Cust_PersonName',
     	            valueField:'Cust_ID',
     	            typeAhead: false,
     	            fieldLabel:'Tên,Mã KH',
     	            width: 280,
     	            hideTrigger:true,
     	            anchor: '100%',
     	            minChars :1,
     	            listConfig: {
     	                loadingText: 'Đang tìm kiếm...',
     	                emptyText: 'Không có kết quả nào trùng.',

     	                // Custom rendering template for each item
     	                getInnerTpl: function() {
     	                    return '<div class="search-item"><h3><span>Mã: {Cust_ID}</h3><br /> Tên: {Cust_PersonName}</span></div>';
     	                }
     	            }
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Mã KH',
     		        value:'<img src="images/loading.gif"/>',
     		        id:'txtTransactionCustomerCode',
     		        cls:'iconText'
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Địa chỉ',
     		        value:'<img src="images/loading.gif"/>',
     		        id:'txtTransactionCustomerAddress',
     		        cls:'iconText'
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Điện thoại',
     		        value:'<img src="images/loading.gif"/>',
     		        id:'txtTransactionCustomerPhone',
     		        cls:'iconText'
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Doanh số (VNĐ)',
     		        id:'txtTransactionTotalPrice',
     		        value:'<img src="images/loading.gif"/>',
     		        cls:'iconText'
     			},
     			{
     				xtype: 'displayfield',
     		        fieldLabel: 'Công Nợ (VNĐ)',
     		        id:'txtTransactionDebt',
     		        value:'<img src="images/loading.gif"/>',
     		        cls:'iconText'
     			}
    	
    	];
 	

        this.callParent(arguments);
    }
});