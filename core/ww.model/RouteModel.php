<?php
	class RouteModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Route_ID,$Route_Name){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Route"("Route_ID","Route_Name")
				 VALUES(?,?)');
			$stm->execute(array($Route_ID,$Route_Name));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Route_ID,$Route_Name,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Route" SET "Route_ID"=?,"Route_Name"=? WHERE "id"=?');
			$stm->execute(array($Route_ID,$Route_Name,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Route" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listRoute(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Route"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>