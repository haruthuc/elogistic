Ext.define('InvApp.view.route.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Tuyến Đường',
	alias:'widget.routeAdd',
	height: 150,
    width: 400,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddRoute',
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
            name:'Route_ID',
            fieldLabel: 'Mã Tuyến',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Route_Name',
        	fieldLabel: 'Tên Tuyến',
        	anchor: '100%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_route'
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