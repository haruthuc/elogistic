Ext.define('InvApp.view.inventoryInput.Update', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Chỉnh Sữa Lô Hàng',
	alias:'widget.inventoryInputUpdate',
	height: 280,
    width: 450,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formUpdateInventoryInput',
    frame:true,
    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 130,
        anchor: '95%'
    },
    items: [
        
		{
			xtype:'displayfield',
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
       },
       {
           xtype: 'displayfield',
           fieldLabel: 'Lưu ý',
           value:"Việc thay đổi dữ liệu lô hàng sẽ ảnh hưởng tới độ chính xác dữ liệu sau này !"
       }
        
        
        
    ]
		}];
 	this.buttons = [
            {
                text: 'Tiến Hành Chỉnh Sữa',
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