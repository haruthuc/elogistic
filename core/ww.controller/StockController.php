<?php
	class StockController{
		
		public function __construct(){}
		
		public function GET(){
			$stockModel = new StockModel();
			$results = $stockModel->listStock();
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Stock_ID = $params->Stock_ID;
  			$Stock_Name = $params->Stock_Name;
  			$Stock_Address = $params->Stock_Address;
  			$Stock_Phone = $params->Stock_Phone;
  			$Stock_Customer = $params->Stock_Customer;
  			$Stock_Note = $params->Stock_Note;
			$stockModel = new StockModel();
			$stockModel->add($Stock_ID,$Stock_Name,$Stock_Address,$Stock_Phone,$Stock_Customer,$Stock_Note);
		
		}
		
		public function PUT(){
		 	$params = json_decode(file_get_contents("php://input"));
  			$Stock_ID = $params->Stock_ID;
  			$Stock_Name = $params->Stock_Name;
  			$Stock_Address = $params->Stock_Address;
  			$Stock_Phone = $params->Stock_Phone;
  			$Stock_Customer = $params->Stock_Customer;
  			$Stock_Note = $params->Stock_Note;
			$stockModel = new StockModel();
  			$ID = $params->id;
  			$stockModel = new StockModel();
  			$stockModel->update($Stock_ID,$Stock_Name,$Stock_Address,$Stock_Phone,$Stock_Customer,$Stock_Note,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$stockModel = new StockModel();
			$stockModel->delete($ID);

		}
		
	}

?>