<?php
	class UnitCodeModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Unit_Code,$Unit_Name){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "UnitCode"("Unit_Code","Unit_Name")
				 VALUES(?,?)');
			$stm->execute(array($Unit_Code,$Unit_Name));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Unit_Code,$Unit_Name,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "UnitCode" SET "Unit_Code"=?,"Unit_Name"=? WHERE "id"=?');
			$stm->execute(array($Unit_Code,$Unit_Name,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "UnitCode" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listUnitCode(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM public."UnitCode"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>