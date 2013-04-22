Ext.define('InvApp.view.productBarCode.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Thêm Mã Vạch',
	alias:'widget.productBarCodeAdd',
	height: 150,
    width: 400,
    initComponent: function() {
    	this.items = [{
	    xtype: 'form',
	    id:'formAddProductBarCode',
	    frame:true,
	    bodyPadding: 10,
	    fieldDefaults: {
	        labelAlign: 'left',
	        labelWidth: 90,
	        anchor: '95%'
    	},
    items: [
        {
            xtype: 'hiddenfield',
            name:'Product_Code',
            fieldLabel: 'Mã Sản Phẩm',
            anchor: '100%',
            id:'product_code_bar',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Product_BarCode',
        	id:'productCodeBarID',
        	fieldLabel: 'Mã Vạch',
        	anchor: '100%',
        	enableKeyEvents: true ,
        	require: true,
        	listeners:{
        	afterrender: function(field) {
        		field.focus(false, 500);
        		}
        	}
        	

        }
    ]
    	
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_productBarCode'
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
