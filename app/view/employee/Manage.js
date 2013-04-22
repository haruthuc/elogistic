Ext.define('InvApp.view.employee.Manage',{
		extend:'Ext.grid.Panel',
		alias:'widget.employeeList',
		store:'EmployeeStore',
		title:'Danh sách Nhân Viên',
		id:'employeeManage',
		initComponent:function(){

			this.columns = [
			                new Ext.grid.RowNumberer(),
			                {
			                	header:'Mã Nhân Viên',
			                	dataIndex:'Staff_ID',
			                	flex:1
			                },
			                {
			                	header:"Họ",
			                	dataIndex:"Lastname",
			                	flex:1
			              
			                },
			                {
			                	header:"Tên",
			                	dataIndex:"First_Name",
			                	flex:1
			                },
			                
			                {
			                	header:"Địa Chỉ Liên Hệ",
			                	dataIndex:"Address",
			                	flex:1
			              
			                },
			                {
			                	header:"Điện Thoại Nhà",
			                	dataIndex:"Homephone",
			                	flex:1
			              
			                },
			                {
			                	header:"Điện Di Động",
			                	dataIndex:"Mobiphone",
			                	flex:1
			              
			                },
			                {
			                	header:"Email",
			                	dataIndex:"Email",
			                	flex:1
			              
			                },
			                {
			                	header:"Số CMNN",
			                	dataIndex:"Personal_ID",
			                	flex:1
			                }
			                ,
			                {
			                	header:"Phòng Ban",
			                	dataIndex:"Staff_Type_ID",
			                	flex:1
			                	
			              
			                },
			                
			                {
			                	header:"Ngày Tạo",
			                	dataIndex:"Date_create",
			                	renderer : Ext.util.Format.dateRenderer('m/d/Y'),
			                	flex:1
			                	
			              
			                },
			                {
			                	header:"Ngày Chỉnh Sửa",
			                	dataIndex:"Date_update",
			                	renderer : Ext.util.Format.dateRenderer('m/d/Y'),
			                	flex:1
			                	
			              
			                }
			                
			                ];
			this.tbar = ['-',{
				xtype:'button',
				text:'Thêm Nhân Viên',
				iconCls: 'icon-add',
				scale:'medium',
				action:'add_employee'
				//handler:function(){
				//getEmployeeStore().insert(0,new EmployeeModel());
				//store.insert(0,new EmployeeModel());
				//rowEditing.startEdit(0, 0);
				//}
			},'-',{
				xtype:'button',
				scale:'medium',
				text:'Xóa Nhân Viên',
				id:'delete',
				iconCls: 'icon-remove',
				disabled: true,
				action:'remove_employee'
			}
			];
			this.callParent(arguments);
			this.getSelectionModel().on('selectionchange', function(selModel, selections){
				Ext.getCmp('delete').setDisabled(selections.length === 0);
			});
		
		}

	
	
});