<?php
	class TypeEmployeeModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Staff_Type_ID,$Staff_Type_Name){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "TypeEmployee"("Staff_Type_ID","Staff_Type_Name")
				 VALUES(?,?)');
			$stm->execute(array($Staff_Type_ID,$Staff_Type_Name));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Staff_Type_ID,$Staff_Type_Name,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "TypeEmployee" SET "Staff_Type_ID"=?,"Staff_Type_Name"=? WHERE "id"=?');
			$stm->execute(array($Staff_Type_ID,$Staff_Type_Name,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "TypeEmployee" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listTypeEmployee(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "TypeEmployee"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>