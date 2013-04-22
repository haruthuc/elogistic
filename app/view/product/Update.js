Ext.define('InvApp.view.product.Update', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Chỉnh Sửa Sản Phẩm',
	alias:'widget.productUpdate',
	height: 350,
    width: 450,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formUpdateProduct',
    frame:true,
    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 130,
        anchor: '95%'
    },
    items: [
           {
            xtype: 'textfield',
            name:'Product_Code',
            fieldLabel: 'Mã Sản Phẩm',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Product_Name',
        	fieldLabel: 'Tên Sản Phẩm',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Product_QuantityCaution',
        	fieldLabel: 'Mức Cảnh Báo',
        	anchor: '100%',
        	require: true
        },
        {
        	
        	 xtype: 'combobox',
       	  	 fieldLabel: 'Nhà Phân Phối',
             typeAhead: true,
             triggerAction: 'all',
             selectOnTab: true,
             store: 'SupplierStore',
             lazyRender: true,
             displayField: 'Cust_CompanyName',
             valueField: 'Cust_ID',
             name:'Product_Supplier_ID'
        },
        { 	
        	 xtype: 'combobox',
       	  	 fieldLabel: 'Danh Mục Hàng Hóa',
             typeAhead: true,
             triggerAction: 'all',
             selectOnTab: true,
             store: 'CategoryStore',
             lazyRender: true,
             displayField: 'CategoryName',
             valueField: 'Category_Code',
             name:'Product_Category_Code'
        	
        },
        {        	
        	 xtype: 'combobox',
       	  	 fieldLabel: 'Đơn Vị Tính',
             typeAhead: true,
             triggerAction: 'all',
             selectOnTab: true,
             store: 'UnitCodeStore',
             //lazyRender: true,
             displayField: 'Unit_Name',
             valueField: 'Unit_Code',
             name:'Unit_Code'
        	
        },
        {
        	
        	 xtype: 'combobox',
       	  	 fieldLabel: 'Đơn vị Qui Đổi',
             typeAhead: true,
             triggerAction: 'all',
             selectOnTab: true,
             store: 'UnitCodeStore',
           //  lazyRender: true,
             displayField: 'Unit_Name',
             valueField: 'Unit_Code',
             name:'Unit_Code_Ex'
        	
        },
        {
        	xtype:'textfield',
        	name:'Unit_Rate_Ex',
        	fieldLabel: 'Tỉ lệ Qui Đổi',
        	anchor: '50%',
        	require: true
        	
        }
        
        
        
        
        
        
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'update_product'
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