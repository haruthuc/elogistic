<?php
	class SalesController{
		
		public function __construct(){}
		
		public function GET(){
			
			if(isset($_GET['filter']))
				{
					$filter = json_decode($_GET['filter'],true);
					if($filter[0]['property']=='Cust_ID')
						{
							//lay ra ma khach hang t json
							$code= $filter[0]['value'];
							//khoi tao customer Model
							$custModel = new CustomerSupplierModel();
							//goi ham tim doanh so va no
							$results = $custModel->findSalesByCode($code);		
							$results = array('Sales'=>$results);	
							
						}	
						
				}
			header('Content-type: application/json');
  			echo json_encode($results);
			
		}
		
		
		
	}

?>