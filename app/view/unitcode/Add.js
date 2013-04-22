Ext.define('InvApp.view.unitcode.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Đơn Vị Tính',
	alias:'widget.unitcodeAdd',
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddUnitcode',
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
            name:'Unit_Code',
            fieldLabel: 'Mã Đơn Vị',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Unit_Name',
        	fieldLabel: 'Tên Đơn Vị',
        	anchor: '100%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_unitcode'
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