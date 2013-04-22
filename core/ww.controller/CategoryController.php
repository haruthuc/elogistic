<?php
	class CategoryController{
		
		public function __construct(){}
		
		public function GET(){
			$categoryModel = new CategoryModel();
			$results = $categoryModel->listCategory();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Category_Code = $params->Category_Code;
  			$CategoryName = $params->CategoryName;
			$categoryModel = new CategoryModel();
			$categoryModel->add($Category_Code,$CategoryName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$Category_Code = $params->Category_Code;
  			$CategoryName = $params->CategoryName;
  			$ID = $params->id;
  			$categoryModel = new CategoryModel();
  			$categoryModel->update($Category_Code,$CategoryName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$categoryModel = new CategoryModel();
			$categoryModel->delete($ID);

		}
		
	}

?>