//var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
Ext.define('InvApp.view.province.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.provinceList',
		store:'ProvinceStore',
		title:'Quản lý Tỉnh - Thành Phố',
	//	plugins: [rowEditing],
		initComponent:function(){
	
	 	this.editing = Ext.create('Ext.grid.plugin.RowEditing');

	 		Ext.apply(this, {
	 		plugins: [this.editing]
        
	 		});
			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Tỉnh - Thành Phố',
			                	dataIndex:'Province_ID',
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			                },
			                {
			                	header:"Tên Tỉnh - Thành Phố",
			                	dataIndex:"Province_Name",
			                	flex:1,
			                	field: {
			                        xtype: 'textfield'
			                    }
			              
			                }
			                ];
			this.tbar = ['-',{
				text:'Thêm Tỉnh - Thành Phố',
				iconCls: 'icon-add',
				action:'add_province',
				scale:'medium'
				//handler:function(){
				//getCategoryStore().insert(0,new CategoryModel());
				//store.insert(0,new CategoryModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				text:'Xóa Danh Mục',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_province',
				scale:'medium'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});