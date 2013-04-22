<?php
	class TransactionDetailModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Product_ID,$Transaction_id,$Stock_ID,$Product_Quantity,$Product_Current_Price,$Product_Current_PriceOrginal,$Transaction_Product_Type,$Lot_ID){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "TransactionDetail"("Product_Code","Transaction_ID","Stock_ID","Product_Quantity","Product_Current_Price","Product_Current_PriceOrginal","Transaction_Product_Type","Lot_ID")
				 VALUES(?,?,?,?,?,?,?,?)');
			$stm->execute(array($Product_ID,$Transaction_id,$Stock_ID,$Product_Quantity,$Product_Current_Price,$Product_Current_PriceOrginal,$Transaction_Product_Type,$Lot_ID));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Product_ID,$Transaction_ID,$Stock_ID,$Product_Quantity,$Product_Current_Price,$Product_Current_PriceOrginal,$DateAdd,$Transaction_Product_Type,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "TransactionDetail" SET 
			"Product_ID"=?,
			"Transaction_ID"=?,
			"Stock_ID"=?,
			"Product_Quantity"=?,
			"Product_Current_Price"=?,
			"Product_Current_PriceOrginal"=?,
			"DateAdd"=?,
			"Transaction_Product_Type"=?
			 WHERE "id"=?');
			$stm->execute(array($Product_ID,$Transaction_id,$Stock_ID,$Product_Quantity,$Product_Current_Price,$Product_Current_PriceOrginal,$DateAdd,$Transaction_Product_Type,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "TransactionDetail" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listTransactionDetail(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "TransactionDetail"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>