<?php
	class ProductBarCodeModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Product_Code,$Product_BarCode){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "ProductBarCode"("Product_Code","Product_BarCode")
				 VALUES(?,?)');
			$stm->execute(array($Product_Code,$Product_BarCode));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Product_Code,$Product_BarCode,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "ProductBarCode" SET "Product_Code"=?,"Product_BarCode"=? WHERE "id"=?');
			$stm->execute(array($Product_Code,$Product_BarCode,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "ProductBarCode" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listProductBarCode(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "ProductBarCode"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		public function findBarCodeByProductCode($productCode){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "ProductBarCode" WHERE "Product_Code"=? ');
			$stm->execute(array($productCode));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>