Ext.define('InvApp.view.employee.Update', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Thông Tin Nhân Viên',
	alias:'widget.employeeUpdate',
	height: 350,
    width: 500,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formUpdateEmployee',
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
            name:'Staff_ID',
            fieldLabel: 'Mã Nhân Viên',
            anchor: '100%',
            require:true
        },
        {
        	xtype:'textfield',
        	name:'Lastname',
        	fieldLabel: 'Họ',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'First_Name',
        	fieldLabel: 'Tên',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Address',
        	fieldLabel: 'Địa chỉ',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Homephone',
        	fieldLabel: 'Điện Thoại Nhà',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Mobiphone',
        	fieldLabel: 'Điện Thoại Di Động',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Email',
        	fieldLabel: 'Email',
        	anchor: '100%',
        	require: true
        },
        {
        	xtype:'textfield',
        	name:'Personal_ID',
        	fieldLabel: 'Số CMNN',
        	anchor: '100%',
        	require: true
        },
        {
        	  xtype: 'combobox',
        	  fieldLabel: 'Phòng Ban',
              typeAhead: true,
              triggerAction: 'all',
              selectOnTab: true,
              store: 'TypeEmployeeStore',
              lazyRender: true,
              displayField: 'Staff_Type_Name',
              valueField: 'Staff_Type_ID',
              name:'Staff_Type_ID'
          }
        
        
    ]
		}];
 	this.buttons = [
            {
                text: 'Update',
                action: 'update_employee'
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