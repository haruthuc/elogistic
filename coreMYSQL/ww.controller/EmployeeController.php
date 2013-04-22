<?php
	class EmployeeController{
		
		public function __construct(){}
		
		public function GET(){
			$employeeModel = new EmployeeModel();
			$results = $employeeModel->listEmployee();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Staff_ID = $params->Staff_ID;
  			$First_Name = $params->First_Name;
  			$Lastname = $params->Lastname;
  			$Address = $params->Address;
  			$Homephone = $params->Homephone;
  			$Mobiphone = $params->Mobiphone;
  			$Email = $params->Email;
  			$Personal_ID = $params->Personal_ID;
  			$Staff_Type_ID = $params->Staff_Type_ID;
  			$Date_create = date("Y-m-d");
  			$Date_update = date("Y-m-d");
			$employeeModel = new EmployeeModel();
			$employeeModel->addEmployee($Staff_ID,$First_Name,$Lastname,$Address,$Homephone,$Mobiphone,$Email,$Personal_ID,$Staff_Type_ID,$Date_create,$Date_update);
		
		}
		
		public function PUT(){
		 	$params = json_decode(file_get_contents("php://input"));
  			$Staff_ID = $params->Staff_ID;
  			$First_Name = $params->First_Name;
  			$Lastname = $params->Lastname;
  			$Address = $params->Address;
  			$Homephone = $params->Homephone;
  			$Mobiphone = $params->Mobiphone;
  			$Email = $params->Email;
  			$Personal_ID = $params->Personal_ID;
  			$Staff_Type_ID = $params->Staff_Type_ID;
  			//$Date_create = $params->Date_create;
  			$Date_update = date("Y-m-d");
  			$ID = $params->id;
  			$employeeModel = new EmployeeModel();
  			$employeeModel->updateEmployee($Staff_ID,$First_Name,$Lastname,$Address,$Homephone,$Mobiphone,$Email,$Personal_ID,$Staff_Type_ID,$Date_update,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$employeeModel = new EmployeeModel();
			$employeeModel->delete($ID);

		}
		
	}

?>