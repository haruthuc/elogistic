<?php
	class StockModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Stock_ID,$Stock_Name,$Stock_Address,$Stock_Phone,$Stock_Customer,$Stock_Note){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Stock"("Stock_ID","Stock_Name","Stock_Address","Stock_Phone","Stock_Customer","Stock_Note")
				 VALUES(?,?,?,?,?,?)');
			$stm->execute(array($Stock_ID,$Stock_Name,$Stock_Address,$Stock_Phone,$Stock_Customer,$Stock_Note));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Stock_ID,$Stock_Name,$Stock_Address,$Stock_Phone,$Stock_Customer,$Stock_Note,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Stock" SET 
			"Stock_ID"=?,
			"Stock_Name"=?,
			"Stock_Address"=?,
			"Stock_Phone"=?,
			"Stock_Customer"=?,
			"Stock_Note"=?
			WHERE "id"=?');
			$stm->execute(array($Stock_ID,$Stock_Name,$Stock_Address,$Stock_Phone,$Stock_Customer,$Stock_Note,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Stock" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listStock(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Stock"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>