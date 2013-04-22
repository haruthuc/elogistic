<?php
	class ProductModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Product_Code,$Product_Name,$Product_QuantityCaution,$Product_Supplier_ID,$Product_Category_Code,$Unit_Code,$Unit_Code_Ex,$Unit_Rate_Ex,$Product_QuantityCautionMax){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Product"("Product_Code","Product_Name","Product_QuantityCaution","Product_Supplier_ID","Product_Category_Code","Unit_Code","Unit_Code_Ex","Unit_Rate_Ex","Product_QuantityCautionMax")
				 VALUES(?,?,?,?,?,?,?,?,?)');
			$stm->execute(array($Product_Code,$Product_Name,$Product_QuantityCaution,$Product_Supplier_ID,$Product_Category_Code,$Unit_Code,$Unit_Code_Ex,$Unit_Rate_Ex,$Product_QuantityCautionMax));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Product_Code,$Product_Name,$Product_QuantityCaution,$Product_Supplier_ID,$Product_Category_Code,$Unit_Code,$Unit_Code_Ex,$Unit_Rate_Ex,$Product_QuantityCautionMax,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Product" SET 
			"Product_Code"=?,
			"Product_Name"=?,
			"Product_QuantityCaution"=?,
			"Product_Supplier_ID"=?,
			"Product_Category_Code"=?,
			"Unit_Code"=?,
			"Unit_Code_Ex"=?,
			"Unit_Rate_Ex"=?,
			"Product_QuantityCautionMax"=?
			 WHERE "id"=?');
			$stm->execute(array($Product_Code,$Product_Name,$Product_QuantityCaution,$Product_Supplier_ID,$Product_Category_Code,$Unit_Code,$Unit_Code_Ex,$Unit_Rate_Ex,$Product_QuantityCautionMax,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Product" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listProduct(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		public function listProductLimit($limit,$offset){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product" LIMIT ? OFFSET ?');
			$stm->execute(array($limit,$offset));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
			
			
		}
		
		public function listProductLimitFilterByCategory($limit,$offset,$category){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product" WHERE "Product_Category_Code"=? LIMIT ? OFFSET ?');
			$stm->execute(array($category,$limit,$offset));
			$arrayResult = $stm->fetchAll(PDO::FETCH_ASSOC); 
			$totalRow=$stm->rowCount();
			return array('totalCount'=>$totalRow,'Product'=>$arrayResult);
		}
		
		public function listProductLimitFilterBySupplier($limit,$offset,$supplier){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product" WHERE "Product_Supplier_ID"=? LIMIT ? OFFSET ?');
			$stm->execute(array($supplier,$limit,$offset));
			$arrayResult = $stm->fetchAll(PDO::FETCH_ASSOC); 
			$totalRow=$stm->rowCount();
			return array('totalCount'=>$totalRow,'Product'=>$arrayResult);
		}
		
		public function listProdyctLimitFilterBySupplierAndCategory($limit,$offset,$supplier,$category){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product" WHERE "Product_Supplier_ID"=? AND "Product_Category_Code"=? LIMIT ? OFFSET ?');
			$stm->execute(array($supplier,$category,$limit,$offset));
			$arrayResult = $stm->fetchAll(PDO::FETCH_ASSOC); 
			$totalRow=$stm->rowCount();
			return array('totalCount'=>$totalRow,'Product'=>$arrayResult);
		}
		
		
		public function countAllProduct(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product"');
			$stm->execute();
			return $stm->rowCount();
		}
		
		public function findProductByBarCode($BarCode){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT "Product"."id" , "Product"."Product_Code" , "Product"."Product_Name","Product"."Product_QuantityCaution", "Product"."Product_Supplier_ID","Product"."Product_Category_Code","Product"."Unit_Code","Product"."Unit_Code_Ex","Product"."Unit_Rate_Ex" FROM "Product" 
					INNER JOIN "ProductBarCode" ON "Product"."Product_Code" = "ProductBarCode"."Product_Code" WHERE "ProductBarCode"."Product_BarCode" =?');
			$stm->execute(array($BarCode));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
			
			
			
		}
		
		public function findProductByQuery($query){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product" WHERE lower("Product_Code") LIKE ? OR lower("Product_Name") LIKE ?');
			$query = strtolower($query);
			$stm->execute(array('%'.$query.'%','%'.$query.'%'));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		
		}
		
		public function findProductByCode($code){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Product" 
					WHERE "Product_Code"=?');
			$stm->execute(array($code));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
			
			
		}
		
		
	}

?>