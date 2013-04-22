Ext.define('InvApp.view.stock.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Kho Hàng',
	alias:'widget.stockAdd',
	height: 350,
    width: 400,
   
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddStock',
    frame:true,
    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '95%'
    },
    items: [
        {
            xtype: 'textfield',
            name:'Stock_ID',
            fieldLabel: 'Mã Kho Hàng',
            anchor: '95%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Stock_Name',
        	fieldLabel: 'Tên Kho Hàng',
        	anchor: '95%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Stock_Address',
        	fieldLabel: 'Địa Chỉ Kho Hàng',
        	anchor: '95%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Stock_Phone',
        	fieldLabel: 'Điện Thoại Kho Hàng',
        	anchor: '95%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Stock_Customer',
        	fieldLabel: 'Họ Tên Nhân Viên',
        	anchor: '95%',
        	require: true
        },
        {
        	xtype:'textareafield',
        	name:'Stock_Note',
        	fieldLabel: 'Ghi chú',
        	anchor: '95%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_stock'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];	
       

        this.callParent(arguments);
    }
});