Ext.define('InvApp.view.province.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Tỉnh - Thành Phố',
	alias:'widget.provinceAdd',
	height: 150,
    width: 400,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddProvince',
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
            name:'Province_ID',
            fieldLabel: 'Mã Tỉnh - Thành Phố',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Province_Name',
        	fieldLabel: 'Tên Tỉnh - Thành Phố',
        	anchor: '100%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_province'
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