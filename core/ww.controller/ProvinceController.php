<?php
	class ProvinceController{
		
		public function __construct(){}
		
		public function GET(){
			$ProvinceModel = new ProvinceModel();
			$results = $ProvinceModel->listProvince();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Province_Code = $params->Province_ID;
  			$ProvinceName = $params->Province_Name;
			$ProvinceModel = new ProvinceModel();
			$ProvinceModel->add($Province_Code,$ProvinceName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$Province_Code = $params->Province_Code;
  			$ProvinceName = $params->ProvinceName;
  			$ID = $params->id;
  			$ProvinceModel = new ProvinceModel();
  			$ProvinceModel->update($Province_Code,$ProvinceName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$ProvinceModel = new ProvinceModel();
			$ProvinceModel->delete($ID);

		}
		
	}

?>