<?php
	class InventoryModel {
		
		function __construct(){}
		
		//function add new Inventory
		public function add($Month,$Stock_ID,$Product_Code,$Inventory_First,$Inventory_In,$Inventory_Out,$Inventory_Last){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Inventory"("Month","Stock_ID","Product_Code","Inventory_First","Inventory_In","Inventory_Out","Inventory_Last")
				 VALUES(?,?,?,?,?,?,?)');
			$stm->execute(array($Month,$Stock_ID,$Product_Code,$Inventory_First,$Inventory_In,$Inventory_Out,$Inventory_Last));
		}
		
		public function in($Stock_ID,$Product_Code,$Inventory_In){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT sp_in_inventory(current_date,?,?,?)');
			$stm->execute(array($Stock_ID,$Product_Code,$Inventory_In));
			
			
		}
		
		//function update Inventory
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Month,$Stock_ID,$Product_Code,$Inventory_First,$Inventory_In,$Inventory_Out,$Inventory_Last,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Inventory" 
			SET 
			"Month"=?,
			"Stock_ID"=?,
			"Product_Code"=?,
			"Inventory_First"=?,
			"Inventory_In"=?,
			"Inventory_Out"=?,
			"Inventory_Last"=?
			WHERE "id"=?');
			$stm->execute(array($Month,$Stock_ID,$Product_Code,$Inventory_First,$Inventory_In,$Inventory_Out,$Inventory_Last,$id));
			
		}
		
		//function delete Inventory
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Inventory" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all Inventory
		public function listInventory(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Inventory"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		//function list all category
		
		
		
		
	}

?>