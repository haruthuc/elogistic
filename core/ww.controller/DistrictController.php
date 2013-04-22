<?php
	class DistrictController{
		
		public function __construct(){}
		
		public function GET(){
			$categoryModel = new DistrictModel();
			$results = $categoryModel->listDistrict();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$District_Code = $params->Province_ID;
  			$DistrictName = $params->District_Name;
			$districtModel = new DistrictModel();
			$districtModel->add($District_Code,$DistrictName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$District_Code = $params->Province_ID;
  			$DistrictName = $params->District_Name;
  			$ID = $params->id;
  			$districtModel = new DistrictModel();
  			$districtModel->update($District_Code,$DistrictName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$districtModel = new DistrictModel();
			$districtModel->delete($ID);

		}
		
	}

?>