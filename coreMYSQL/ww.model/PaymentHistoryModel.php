<?php
	class PaymentHistoryModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Payment_DateCreate,$Cust_ID,$Payment_Total,$Payment_Note,$Transaction_ID,$Payment_Interest){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "PaymentHistory"("Payment_DateCreate","Cust_ID","Payment_Total","Payment_Note","Transaction_ID","Payment_Interest")
				 VALUES(?,?,?,?,?,?)');
			$stm->execute(array($Payment_DateCreate,$Cust_ID,$Payment_Total,$Payment_Note,$Transaction_ID,$Payment_Interest));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Payment_DateCreate,$Cust_ID,$Payment_Total,$Payment_Note,$Transaction_ID,$Payment_Interest,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "PaymentHistory" SET 
			"Payment_DateCreate"=?,
			"Cust_ID"=?,
			"Payment_Total"=?,
			"Payment_Note"=?,
			"Transaction_ID"=?,
			"Payment_Interest"=? 
			WHERE "id"=?');
			$stm->execute(array($Payment_DateCreate,$Cust_ID,$Payment_Total,$Payment_Note,$Transaction_ID,$Payment_Interest,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "PaymentHistory" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listPaymentHistory(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "PaymentHistory"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
		
	}

?>