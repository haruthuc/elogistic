<?php
	class InventoryInputController{
		
		public function __construct(){}
		
		public function GET(){
				if(isset($_GET['filter']))
					{
						$filter = json_decode($_GET['filter'],true);
						$inventoryInputModel = new InventoryInputByDateModel();
						if($filter[0]['property']=='Product_Code')
							{
								$queryParam = $filter[0]['value'];
								$results = $inventoryInputModel->listInventoryByDateByProductCode($queryParam);
								$results = array('success'=>true,'InventoryInput'=>$results);
								header('Content-type: application/json');
  								echo json_encode($results);
				

							}
							
						
					}
			
		}
		
		public function POST(){
			$params = json_decode(file_get_contents("php://input"));
			$Date_Expire = $params->Date_Expire;
			$Date_LastUpdate = $params->Date_LastUpdate;
			$InventoryQuantity = $params->InventoryQuantity;
			$Orginal_Price = $params->Orginal_Price;
			$Product_Code = $params->Product_Code;
			$Product_Name = $params->Product_Name;
			$Sell_Price = $params->Sell_Price;
			$Stock_ID = $params->Stock_ID;
			$Product_Supplier_ID = $params->Product_Supplier_ID;
			$transactionModel = new TransactionModel();
			$Transaction_TotalPrice = $Sell_Price*$InventoryQuantity;
			$Transaction_TotalOrginalPrice = $Orginal_Price*$InventoryQuantity;
			
			// luu du lieu vao transaction
			$transactionID = $transactionModel->addTransProcudures(
		'N',
		 date('d-m-Y',strtotime($Date_LastUpdate)),
		null,
		$Product_Supplier_ID,
		null,
		null,
		$Transaction_TotalPrice,
		$Transaction_TotalOrginalPrice,
		0,
		0,
		'Nhập Hàng Ngày '.date('d-m-Y',strtotime($Date_LastUpdate)),
		'COMPLETED',
		12 
		);
		// lay tu SESSION USER RA
		
//			$Transaction_Type,
//			$Transaction_Date,
//			$Transaction_CustomerID,
//			$Supplier_ID,
//			$Transaction_Sale_EmployeeID,
//			$Transaction_Ship_EmployeeID,
//			$Transaction_TotalPrice,
//			$Transaction_TotalOrginalPrice,
//			$Transaction_Payment,
//			$Transaction_Bonus,
//			$Transaction_Comment,
//			$Transaction_Status,
//			$Transaction_Staff_ID
		 $transactionID = $transactionID[0]['TransactionID'];
		 $transactionID = substr($transactionID,1,strpos($transactionID,',')-1);
		// echo $transactionID;
		 
//		 $Product_Code,
//		 $Date_Input,
//		 $Order_Number,
//		 $Orginal_Price,
//		 $Sell_Price,
//		 $Date_Expire,
//		 $Date_LastUpdate,
//		 $InventoryQuantity
//		 $Stock_ID
		 //luu du lieu vao kho 
		 $lotModel = new InventoryInputByDateModel();
		 
		 $idLot = $lotModel->add($Product_Code,
		 0,
		 $Orginal_Price,
		 $Sell_Price,
		  date('d-m-Y',strtotime($Date_Expire)),
		  date('d-m-Y',strtotime($Date_LastUpdate)),
		 $InventoryQuantity,
		 $Stock_ID);
		 
		 $idLot = $idLot[0]['id'];
		 	 
//		$Product_ID,
//		$Transaction_id,
//		$Stock_ID,
//		$Product_Quantity,
//		$Product_Current_Price,
//		$Product_Current_PriceOrginal,
//		$DateAdd,
//		$Transaction_Product_Type,
//		$Lot_ID

		 $transactionDetailModel = new TransactionDetailModel();
		 $transactionDetailModel->add(
		 $Product_Code,
		 $transactionID,
		 $Stock_ID,
		 $InventoryQuantity,
		 $Sell_Price,
		 $Orginal_Price,
		 'N',
		 $idLot
		 );
		 
		 //cập nhật vào kho hàng lúc nhập hàng
		 //$Stock_ID,$Product_Code,$Inventory_In
		 
		 $inventoryModel = new InventoryModel();
		 $inventoryModel->in($Stock_ID,$Product_Code,$InventoryQuantity);
		 	
		 
		}
		
		public function PUT(){
			
			$params = json_decode(file_get_contents("php://input"));
			$Date_Expire = $params->Date_Expire;
			$Date_LastUpdate = $params->Date_LastUpdate;
			$Orginal_Price = $params->Orginal_Price;
			$Sell_Price = $params->Sell_Price;
			$Quantity_Plus = $params->Quantity_Plus;
			$Quantity_Reduce = $params->Quantity_Reduce;
			$id = $params->id;
			if($Quantity_Plus==0&&$Quantity_Reduce==0){
				
				$inventoryInputModel = new InventoryInputByDateModel();
				$inventoryInputModel->update($Date_LastUpdate,$Orginal_Price,$Sell_Price,$Date_Expire,$id);
				
			}else{

				if($Quantity_Plus!=0){
					
					
				}
				if($Quantity_Reduce!=0){
					
					
				}
				
				
				
			}
			
			
			
		}
		
		public function DELETE(){

		
		}
		
	}

?>