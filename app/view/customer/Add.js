Ext.define('InvApp.view.customer.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Khách Hàng',
	alias:'widget.customerAdd',
	height: 520,
    width: 500,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddCustomer',
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
            fieldLabel: 'Mã Khách Hàng',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Cust_CompanyName',
        	fieldLabel: 'Tên Công Ty',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Cust_PersonName',
        	fieldLabel: 'Họ Tên Khách Hàng',
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
        },
        {
        	  xtype: 'combobox',
        	  fieldLabel: 'Tuyến',
              typeAhead: true,
              triggerAction: 'all',
              selectOnTab: true,
              store: 'RouteStore',
              lazyRender: true,
              displayField: 'Route_Name',
              valueField: 'Route_ID',
              name:'Cust_Route_ID'
          }
        ,
        {
      	  xtype: 'combobox',
      	  fieldLabel: 'Quận',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'DistrictStore',
            lazyRender: true,
            displayField: 'District_Name',
            valueField: 'District_Name',
            name:'Cust_District_ID'
        }
        ,
        {
        	xtype:'hiddenfield',
        	name:'Cust_Type',
        	anchor: '100%',
        	require: true,
        	value:'KH'
        	
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
                action: 'save_customer'
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