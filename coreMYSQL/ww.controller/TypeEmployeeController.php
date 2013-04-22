<?php
	class TypeEmployeeController{
		
		public function __construct(){}
		
		public function GET(){
			$TypeEmployeeModel = new TypeEmployeeModel();
			$results = $TypeEmployeeModel->listTypeEmployee();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$TypeEmployee_Code = $params->Staff_Type_ID;
  			$TypeEmployeeName = $params->Staff_Type_Name;
			$TypeEmployeeModel = new TypeEmployeeModel();
			$TypeEmployeeModel->add($TypeEmployee_Code,$TypeEmployeeName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$TypeEmployee_Code = $params->Staff_Type_ID;
  			$TypeEmployeeName = $params->Staff_Type_Name;
  			$ID = $params->id;
  			$TypeEmployeeModel = new TypeEmployeeModel();
  			$TypeEmployeeModel->update($TypeEmployee_Code,$TypeEmployeeName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$TypeEmployeeModel = new TypeEmployeeModel();
			$TypeEmployeeModel->delete($ID);

		}
		
	}

?>