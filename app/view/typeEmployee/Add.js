Ext.define('InvApp.view.typeEmployee.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo Mới Phòng Ban',
	alias:'widget.typeEmployeeAdd',
	height: 150,
    width: 400,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddTypeEmployee',
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
            name:'Staff_Type_ID',
            fieldLabel: 'Mã Phòng Ban',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Staff_Type_Name',
        	fieldLabel: 'Tên Phòng Ban',
        	anchor: '100%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_typeEmployee'
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