<?php
	class ProvinceModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Province_ID,$Province_Name){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Province"("Province_ID","Province_Name")
				 VALUES(?,?)');
			$stm->execute(array($Province_ID,$Province_Name));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Province_ID,$Province_Name,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Province" SET "Province_ID"=?,"Province_Name"=? WHERE "id"=?');
			$stm->execute(array($Province_ID,$Province_Name,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Province" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listProvince(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Province"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>