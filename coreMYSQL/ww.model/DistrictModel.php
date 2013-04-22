<?php
	class DistrictModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Province_ID,$District_Name){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "District"("Province_ID","District_Name")
				 VALUES(?,?)');
			$stm->execute(array($Province_ID,$District_Name));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Province_ID,$District_Name,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "District" 
			SET 
				"Province_ID"=?,
				"District_Name"=?
				 WHERE "id"=?');
			$stm->execute(array($Province_ID,$District_Name,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "District" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listDistrict(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "District"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>