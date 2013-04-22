<?php
	class CustomerController{
		
		public function __construct(){}
		
		public function GET(){
		
  			
  			if(isset($_GET['query']))
			{
				
					$query=$_GET['query'];
					$custModel = new CustomerSupplierModel();
					$results = $custModel->findCustomerByCodeAndName($query);		
					$results = array('Customer'=>$results);			
				
						
						
			}else{
				$supplierModel = new CustomerSupplierModel();
				$results = $supplierModel->listCustomer();
			
			}
			
			
			header('Content-type: application/json');
  			echo json_encode($results);
		}
		
		public function POST(){

			$params = json_decode(file_get_contents("php://input"));
  			$Cust_ID = $params->Cust_ID;
  			$Cust_CompanyName = $params->Cust_CompanyName;
  			$Cust_PersonName = $params->Cust_PersonName;
  			$Cust_Address = $params->Cust_Address;
  			$Cust_Phone1 = $params->Cust_Phone1;
  			$Cust_Phone2 = $params->Cust_Phone2;
  			$Cust_TaxCode = $params->Cust_TaxCode;
  			$Cust_Website = $params->Cust_Website;
  			$Cust_Email = $params->Cust_Email;
  			$Cust_Fax = $params->Cust_Fax;
  			$Cust_Route_ID = $params->Cust_Route_ID;
  			$Cust_District_ID = $params->Cust_District_ID;
  			$Cust_Type = $params->Cust_Type;
  			$Cust_Note = $params->Cust_Note;
			$custModel = new CustomerSupplierModel();
			$custModel->add($Cust_ID,$Cust_CompanyName,$Cust_PersonName,$Cust_Address,$Cust_Phone1,$Cust_Phone2,$Cust_TaxCode,$Cust_Website,$Cust_Email,$Cust_Fax,$Cust_Route_ID,$Cust_District_ID,$Cust_Type,$Cust_Note);
		
		}
		
		public function PUT(){
		 	$params = json_decode(file_get_contents("php://input"));
  			$Cust_ID = $params->Cust_ID;
  			$Cust_CompanyName = $params->Cust_CompanyName;
  			$Cust_PersonName = $params->Cust_PersonName;
  			$Cust_Address = $params->Cust_Address;
  			$Cust_Phone1 = $params->Cust_Phone1;
  			$Cust_Phone2 = $params->Cust_Phone2;
  			$Cust_TaxCode = $params->Cust_TaxCode;
  			$Cust_Website = $params->Cust_Website;
  			$Cust_Email = $params->Cust_Email;
  			$Cust_Fax = $params->Cust_Fax;
  			$Cust_Route_ID = $params->Cust_Route_ID;
  			$Cust_District_ID = $params->Cust_District_ID;
  			$Cust_Type = $params->Cust_Type;
  			$Cust_Note = $params->Cust_Note;
  			$ID = $params->id;
  			$supplierModel = new CustomerSupplierModel();
  			$supplierModel->update($Cust_ID,$Cust_CompanyName,$Cust_PersonName,$Cust_Address,$Cust_Phone1,$Cust_Phone2,$Cust_TaxCode,$Cust_Website,$Cust_Email,$Cust_Fax,$Cust_Route_ID,$Cust_District_ID,$Cust_Type,$Cust_Note,$ID);
			
		}
		
		public function DELETE(){
			
			$params = json_decode(file_get_contents("php://input"));
			$ID = $params->id;
			$supplierModel = new CustomerSupplierModel();
			$supplierModel->delete($ID);

		}
		
	}

?>