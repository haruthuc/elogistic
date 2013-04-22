<?php
	class DebtModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Month,$Cust_ID,$Debt_First,$Debt_Add,$Debt_Minus,$Debt_Last){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Debt"("Month","Cust_ID","Debt_First","Debt_Add","Debt_Minus","Debt_Last")
				 VALUES(?,?,?,?,?,?)');
			$stm->execute(array($Month,$Cust_ID,$Debt_First,$Debt_Add,$Debt_Minus,$Debt_Last));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Month,$Cust_ID,$Debt_First,$Debt_Add,$Debt_Minus,$Debt_Last,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Debt" 
			SET 
				"Month"=?,
				"Cust_ID"=?,
				"Debt_First"=?,
				"Debt_Add"=?,
				"Debt_Minus"=?
				,"Debt_Last"=?
			 WHERE "id"=?');
			$stm->execute(array($Month,$Cust_ID,$Debt_First,$Debt_Add,$Debt_Minus,$Debt_Last,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Debt" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listDebt(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM public."Debt"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>