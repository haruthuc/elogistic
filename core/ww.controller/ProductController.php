<?php
	class ProductController{
		
		public function __construct(){}
		
		public function GET(){
			$limit = $_GET['limit'];
			$start = $_GET['start'];
			$page = $_GET['page'];
				
				if($_GET['limit'] == 'all')
				{
					$productModel = new ProductModel();
					$results = $productModel->listProduct();
				}else{
					
					$productModelCount = new ProductModel();
					$totalRow = $productModelCount->countAllProduct();
					$productModel = new ProductModel();
					//$offset = $page*$limit;
					if(isset($_GET['filter']))
					{
						$filter = json_decode($_GET['filter'],true);
						if(count($filter)>1)
						{
							$categoryFilter = $filter[0]['value'];
							$supplierFilter = $filter[1]['value'];
							$results = $productModel->listProdyctLimitFilterBySupplierAndCategory($limit,$start,trim($supplierFilter),trim($categoryFilter));
							
						}
						else {
							
						
							if($filter[0]['property']=="Product_Category_Code")
							{
								$queryParam = $filter[0]['value'];
								$results = $productModel->listProductLimitFilterByCategory($limit,$start,trim($queryParam));
							}
							if($filter[0]['property']=="Product_Supplier_ID")
							{
								$queryParam = $filter[0]['value'];
								$results = $productModel->listProductLimitFilterBySupplier($limit,$start,trim($queryParam));
								//echo trim($queryParam);
							}
							if($filter[0]['property']=="ProductBarCode")
							{
								$queryParam = $filter[0]['value'];
								
								$results = $productModel->findProductByBarCode($queryParam);
								$results = array('success'=>true,'Product'=>$results);
							}
							if($filter[0]['property']=='ProductCode')
							{
								$queryParam = $filter[0]['value'];
								$results = $productModel->findProductByCode($queryParam);
								$results = array('success'=>true,'Product'=>$results);
								
							}
							
							
							
						}
						
					}
					else if(isset($_GET['query'])){
						$results = $productModel->findProductByQuery($_GET['query']);
						$results = array('totalCount'=>$totalRow,'Product'=>$results);
					}
					else{
						$results = $productModel->listProductLimit($limit,$start);
						$results = array('totalCount'=>$totalRow,'Product'=>$results);
					}
					
					
			
					
				}
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
			$Product_Code = $params->Product_Code;
			$Product_Name = $params->Product_Name;
			$Product_QuantityCaution = $params->Product_QuantityCaution;
		//	$Product_DateInput = $params->Product_DateInput;
		//	$Product_OrginalPrice = $params->Product_OrginalPrice;
		//	$Product_Price = $params['Product_Price;
			$Product_Supplier_ID = $params->Product_Supplier_ID;
		//	$Product_Inputer_ID = $params->Product_Inputer_ID;
			$Product_Category_Code = $params->Product_Category_Code;
		//	$Stock_ID = $params->Stock_ID;
			$Unit_Code = $params->Unit_Code;
			$Unit_Code_Ex = $params->Unit_Code_Ex;
			$Unit_Rate_Ex = $params->Unit_Rate_Ex;
			$productModel = new ProductModel();
			$productModel->add($Product_Code,$Product_Name,$Product_QuantityCaution,$Product_Supplier_ID,$Product_Category_Code,$Unit_Code,$Unit_Code_Ex,$Unit_Rate_Ex);
		
		}
		
		public function PUT(){
			// parse_str(file_get_contents("php://input"),$post_vars);
			// var_dump($post_vars);
			//json_decode($post_vars);
		 	//  parse_str(,$post_vars);
		 	$params = json_decode(file_get_contents("php://input"));
  			$Product_Code = $params->Product_Code;
			$Product_Name = $params->Product_Name;
			$Product_QuantityCaution = $params->Product_QuantityCaution;
		//	$Product_DateInput = $params->Product_DateInput;
		//	$Product_OrginalPrice = $params->Product_OrginalPrice;
		//	$Product_Price = $params->Product_Price;
			$Product_Supplier_ID = $params->Product_Supplier_ID;
		//	$Product_Inputer_ID = $params->Product_Inputer_ID;
			$Product_Category_Code = $params->Product_Category_Code;
		//	$Stock_ID = $params->Stock_ID;
			$Unit_Code = $params->Unit_Code;
			$Unit_Code_Ex = $params->Unit_Code_Ex;
			$Unit_Rate_Ex = $params->Unit_Rate_Ex;
  			$ID = $params->id;
  			$productModel = new ProductModel();
  			$productModel->update($Product_Code,$Product_Name,$Product_QuantityCaution,$Product_Supplier_ID,$Product_Category_Code,$Unit_Code,$Unit_Code_Ex,$Unit_Rate_Ex,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$productModel = new ProductModel();
			$productModel->delete($ID);

		}
		
	}

?>