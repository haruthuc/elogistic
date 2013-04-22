<?php
	class BarCodeController{
		
		public function __construct(){}
		
		public function GET(){
			$categoryModel = new ProductBarCodeModel();
			if(isset($_GET['filter']))
			{
					$filter = json_decode($_GET['filter'],true);
				//	var_dump($filter);
					$product_code = $filter[0]['value'];
					$results = $categoryModel->findBarCodeByProductCode($product_code);
			}else{
					//$results = $categoryModel->listProductBarCode();
					$results = array();
			}
			
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$ProductBarCode_Code = $params->Product_Code;
  			$ProductBarCodeName = $params->Product_BarCode;
			$categoryModel = new ProductBarCodeModel();
			$categoryModel->add($ProductBarCode_Code,$ProductBarCodeName);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$ProductBarCode_Code = $params->Product_Code;
  			$ProductBarCodeName = $params->Product_BarCode;
  			$ID = $params->id;
  			$categoryModel = new ProductBarCodeModel();
  			$categoryModel->update($ProductBarCode_Code,$ProductBarCodeName,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$categoryModel = new ProductBarCodeModel();
			$categoryModel->delete($ID);

		}
		
	}

?>