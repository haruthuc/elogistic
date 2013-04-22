Ext.define('InvApp.view.district.Add', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: true,
    closeAction: 'hide',
    title: 'Tạo mới Danh Mục Quận',
	alias:'widget.districtAdd',
	height: 150,
    width: 400,
    initComponent: function() {
    	
    	this.items = [{
    xtype: 'form',
    id:'formAddDistrict',
    frame:true,
    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '95%'
    },
    items: [
        {
        	  xtype: 'combobox',
        	  fieldLabel: 'Thành Phố',
              typeAhead: true,
              triggerAction: 'all',
              selectOnTab: true,
              store: 'ProvinceStore',
              lazyRender: true,
              displayField: 'Province_Name',
              valueField: 'Province_ID',
              name:'Province_ID'
        },
        {
        	xtype:'textfield',
        	name:'District_Name',
        	fieldLabel: 'Tên Quận',
        	anchor: '100%',
        	require: true
        }
    ]
		}];
 	this.buttons = [
            {
                text: 'Save',
                action: 'save_district'
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