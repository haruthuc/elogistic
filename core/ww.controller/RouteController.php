<?php
	class RouteController{
		
		public function __construct(){}
		
		public function GET(){
			$RouteModel = new RouteModel();
			$results = $RouteModel->listRoute();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Route_Code = $params->Route_ID;
  			$RouteName = $params->Route_Name;
			$RouteModel = new RouteModel();
			$RouteModel->add($Route_Code,$RouteName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$Route_Code = $params->Route_ID;
  			$RouteName = $params->Route_Name;
  			$ID = $params->id;
  			$RouteModel = new RouteModel();
  			$RouteModel->update($Route_Code,$RouteName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$RouteModel = new RouteModel();
			$RouteModel->delete($ID);

		}
		
	}

?>