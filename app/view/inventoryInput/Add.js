Ext.define('InvApp.view.inventoryInput.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Lô Hàng',
	alias:'widget.inventoryInputAdd',
	height: 380,
    width: 450,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddInventoryInput',
    frame:true,
    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 130,
        anchor: '95%'
    },
    items: [
	         
					{
					    xtype: 'displayfield',
					    name: 'Product_Name',
					    fieldLabel: 'Tên SP',
					    value: 'Product_Name',
					    submitValue:true
					    	
					},
					{
					    xtype: 'displayfield',
					    name: 'Product_Code',
					    fieldLabel: 'Mã SP',
					    value: 'Product_Code',
					    submitValue:true
					},
					{
					    xtype: 'displayfield',
					    name: 'Product_QuantityCaution',
					    fieldLabel: 'Mức Cảnh Báo',
					    value: 'Product_QuantityCaution',
					    submitValue:true
					},
					{
					    xtype: 'displayfield',
					    name: 'Unit_Code',
					    fieldLabel: 'Đơn Vị Tính',
					    value: 'Unit_Code',
					    submitValue:true
					},
					{
					    xtype: 'displayfield',
					    name: 'Product_Category_Code',
					    fieldLabel: 'Mã Danh Mục',
					    value: 'Product_Category_Code',
					    submitValue:true
					},
					{
						xtype:'hiddenfield',
						name:'Product_Supplier_ID',
						fieldLabel: 'Nhà Cung Cấp',
						value:'Product_Supplier_ID',
					    submitValue:true
					}
			       
					,
        
		{
			xtype:'numberfield',
			name:'InventoryQuantity',
			fieldLabel: 'Số lượng Nhập',
			anchor: '70%',
			allowDecimals:true,
		    alwaysDisplayDecimals: true
			
		},
		
      
        {
        	xtype:'textfield',
        	name:'Orginal_Price',
        	fieldLabel: 'Giá Nhập Kho',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Sell_Price',
        	fieldLabel: 'Giá Bán',
        	anchor: '100%',
        	renderer: Ext.util.Format.usMoney,
        	require: true
        },
        {
        	
        	 xtype: 'datefield',
       	  	 fieldLabel: 'Ngày Hết Hạn',
             name:'Date_Expire',
             format: 'd/m/Y',
             altFormats: 'd,m,Y|d.m.Y',
             anchor: '80%',
        },
        {
            xtype: 'datefield',
            name:'Date_LastUpdate',
            fieldLabel: 'Ngày Nhập Hàng',
            format: 'd/m/Y',
            altFormats: 'd,m,Y|d.m.Y',
            value: new Date() ,
            anchor: '80%',
        },
        {
        	
       	 	xtype: 'combobox',
      	  	fieldLabel: 'Kho Hàng',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'StockStore',
            lazyRender: true,
            displayField: 'Stock_Name',
            valueField: 'Stock_ID',
            name:'Stock_ID'
       }
        
        
        
        
        
    ]
		}];
 	this.buttons = [
            {
                text: 'Lưu và Xuất Chứng Từ',
                action:'saveInventoryInput'
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