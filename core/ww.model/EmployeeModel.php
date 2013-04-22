<?php
	class EmployeeModel {
		
		function __construct(){}
		
		//function add new category
		public function addEmployee($Staff_ID,$First_Name,$Lastname,$Address,$Homephone,$Mobiphone,$Email,$Personal_ID,$Staff_Type_ID,$Date_create,$Date_update){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Employee"(
			"Staff_ID",
			"First_Name",
			"Lastname",
			"Address",
			"Homephone",
			"Mobiphone",
			"Email",
			"Personal_ID",
			"Staff_Type_ID",
			"Date_create",
			"Date_update")
				 VALUES(?,?,?,?,?,?,?,?,?,?,?)');
			$stm->execute(array($Staff_ID,$First_Name,$Lastname,$Address,$Homephone,$Mobiphone,$Email,$Personal_ID,$Staff_Type_ID,$Date_create,$Date_update));
		}
		
		public function addAccount($Username,$Password,$Permission,$Last_Login,$Status,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Employee" 
			SET 
				"Username"=?,
				"Password"=?,
				"Permission"=?,
				"Last_Login"=?,
				"Status"=?
				 WHERE "id"=?');
			$stm->execute(array($Username,$Password,$Permission,$Last_Login,$Status,$id));
			
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function updateEmployee($Staff_ID,$First_Name,$Lastname,$Address,$Homephone,$Mobiphone,$Email,$Personal_ID,$Staff_Type_ID,$Date_update,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Employee" 
			SET 
				"Staff_ID"=?,
				"First_Name"=?,
				"Lastname"=?,
				"Address"=?,
				"Homephone"=?,
				"Mobiphone"=?,
				"Email"=?,
				"Personal_ID"=?,
				"Staff_Type_ID"=?,
				"Date_update"=?
				 WHERE "id"=?');
			$stm->execute(array($Staff_ID,$First_Name,$Lastname,$Address,$Homephone,$Mobiphone,$Email,$Personal_ID,$Staff_Type_ID,$Date_update,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Employee" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listEmployee(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Employee"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		public function findSalesEmployeeByQuery($query){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Employee" WHERE lower("First_Name") LIKE ? OR lower("Lastname") LIKE ? OR lower("Staff_ID") LIKE ?');
			$query = strtolower($query);
			$stm->execute(array('%'.$query.'%','%'.$query.'%','%'.$query.'%'));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
			
			
		}
		
		public function findSalesEmployee(){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Employee" WHERE "Staff_Type_ID"=\'KINHDOANH\' AND "Status"=\'NORMAL\'');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 			
		}
		
		
		
	}

?>