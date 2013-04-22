<?php
	class InventoryInputByDateModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Product_Code,$Order_Number,$Orginal_Price,$Sell_Price,$Date_Expire,$Date_LastUpdate,$InventoryQuantity,$Stock_ID){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "InventoryByDate"("Product_Code","Order_Number","Orginal_Price","Sell_Price","Date_Expire","Date_LastUpdate","InventoryQuantity","Stock_ID")
				 VALUES(?,?,?,?,?,?,?,?) RETURNING id');
			$stm->execute(array($Product_Code,$Order_Number,$Orginal_Price,$Sell_Price,$Date_Expire,$Date_LastUpdate,$InventoryQuantity,$Stock_ID));
			return  $stm->fetchAll(PDO::FETCH_ASSOC);
		}
		
		
		
		// function list all category
		public function listInventory(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Inventory"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		public function listInventoryByDateByProductCode($ProductCode){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "InventoryByDate" WHERE "Product_Code" = ? AND "InventoryQuantity">0 ORDER BY "Date_Input" DESC');
			$stm->execute(array($ProductCode));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		// function update InventoryByDate
		public function update($Date_LastUpdate,$Orginal_Price,$Sell_Price,$Date_Expire,$id){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('UPDATE "InventoryByDate"
				SET "Date_LastUpdate"=?,
					"Orginal_Price"=?,
					"Sell_Price"=?,
					"Date_Expire"=?
				WHERE "id"=?
			');
			$stm->execute(array($Date_LastUpdate,$Orginal_Price,$Sell_Price,$Date_Expire,$id));
			
			
			
		}
		
		//function plus quantity InventoryByDate
		
		public function plus($Quantity,$id){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('
			UPDATE "InventoryByDate" SET
					"InventoryQuantity" = "InventoryQuantity" + ?
					WHERE "id"=?
			');
			$stm->execute(array($Quantity,$id));
		}
		
		//function reduce quantity InventoryByDate	
		public function reduce($Quantity,$id){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('
			UPDATE "InventoryByDate" SET
					"InventoryQuantity" = "InventoryQuantity" - ?
					WHERE "id"=?
			');
			$stm->execute(array($Quantity,$id));
			
			
		}
		
		
		
	}

?>