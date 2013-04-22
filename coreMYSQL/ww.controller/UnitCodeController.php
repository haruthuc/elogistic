<?php
	class UnitCodeController{
		
		public function __construct(){}
		
		public function GET(){
			$unitCodeModel = new UnitCodeModel();
			$results = $unitCodeModel->listUnitCode();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Unit_Code = $params->Unit_Code;
  			$unitName = $params->Unit_Name;
			$unitModel = new UnitCodeModel();
			$unitModel->add($Unit_Code,$unitName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$UnitCode_Code = $params->Unit_Code;
  			$UnitCodeName = $params->Unit_Name;
  			$ID = $params->id;
  			$UnitCodeModel = new UnitCodeModel();
  			$UnitCodeModel->update($UnitCode_Code,$UnitCodeName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$UnitCodeModel = new UnitCodeModel();
			$UnitCodeModel->delete($ID);

		}
		
	}

?>