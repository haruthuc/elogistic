<?php
	class EmployeeSalesController{
		
		public function __construct(){}
		
		public function GET(){
			$employeeModel = new EmployeeModel();
			$results = $employeeModel->findSalesEmployee();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		
	}

?>