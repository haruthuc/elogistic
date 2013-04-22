Ext.define('InvApp.view.category.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Danh Mục Hàng Hóa',
	alias:'widget.categoryAdd',
	height: 150,
    width: 400,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddCategory',
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
            name:'Category_Code',
            fieldLabel: 'Mã Danh Mục',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'CategoryName',
        	fieldLabel: 'Tên Danh Mục',
        	anchor: '100%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_category'
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