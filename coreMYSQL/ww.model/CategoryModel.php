<?php
	class CategoryModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Category_Code,$CategoryName){
			$dbo = db::getInstance();
			//$stm= $dbo->prepare('INSERT INTO "Category"("Category_Code","CategoryName") VALUES(?,?)');
			$stm= $dbo->prepare("SELECT createCategory(?,?)");
			$stm->execute(array($Category_Code,$CategoryName));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Category_Code,$CategoryName,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Category" SET "Category_Code"=?,"CategoryName"=? WHERE "id"=?');
			$stm->execute(array($Category_Code,$CategoryName,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Category" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listCategory(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM public."Category"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>