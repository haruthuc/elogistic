Ext.define('InvApp.view.supplier.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Nhà cung cấp',
	alias:'widget.supplierAdd',
	height: 520,
    width: 500,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddSupplier',
    frame:true,
    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 120,
        anchor: '95%'
    },
    items: [
        {
            xtype: 'textfield',
            name:'Cust_ID',
            fieldLabel: 'Mã Nhà Cung Cấp',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Cust_CompanyName',
        	fieldLabel: 'Tên Nhà Cung Cấp',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_PersonName',
        	fieldLabel: 'Tên Nhân Viên Đại Diện',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_Address',
        	fieldLabel: 'Địa chỉ',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_Phone1',
        	fieldLabel: 'Điện thoại công ty',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_Phone2',
        	fieldLabel: 'Điện Thoại Cá Nhân',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_TaxCode',
        	fieldLabel: 'Mã Số Thuế',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_Website',
        	fieldLabel: 'Website',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_Email',
        	fieldLabel: 'Email',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_Fax',
        	fieldLabel: 'Fax',
        	anchor: '100%',
        	require: true
        }
        ,
        {
        	xtype:'hiddenfield',
        	name:'Cust_Type',
        	anchor: '100%',
        	require: true,
        	value:'NCC'
        	
        },
        {
        	xtype:'textareafield',
        	name:'Cust_Note',
        	anchor: '100%',
        	fieldLabel: 'Ghi chú',
        	require: true
        	
        }
        
        
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_supplier'
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