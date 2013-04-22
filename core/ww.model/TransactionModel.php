<?php
	class TransactionModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Transaction_ID,$Transaction_DateCreate,$Transaction_TotalPrice,$Transaction_TotalOrginalPrice,$Transaction_CustomerID,$Transaction_Status,$Transaction_Comment,$Transaction_Payment,$Transaction_Sale_EmployeeID,$Transaction_Ship_EmployeeID,$Transaction_Bonus,$Transaction_Type,$Supplier_ID){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "Transaction"("Transaction_ID","Transaction_DateCreate","Transaction_TotalPrice","Transaction_TotalOrginalPrice","Transaction_CustomerID","Transaction_Status",","Transaction_Comment","Transaction_Payment","Transaction_Sale_EmployeeID","Transaction_Ship_EmployeeID","Transaction_Bonus","Transaction_Type","Supplier_ID")
				 VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)');
			$stm->execute(array($Transaction_ID,$Transaction_DateCreate,$Transaction_TotalPrice,$Transaction_TotalOrginalPrice,$Transaction_CustomerID,$Transaction_Status,$Transaction_Comment,$Transaction_Payment,$Transaction_Sale_EmployeeID,$Transaction_Ship_EmployeeID,$Transaction_Bonus,$Transaction_Type,$Supplier_ID));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Transaction_ID,$Transaction_DateCreate,$Transaction_TotalPrice,$Transaction_TotalOrginalPrice,$Transaction_CustomerID,$Transaction_Status,$Transaction_Comment,$Transaction_Payment,$Transaction_Sale_EmployeeID,$Transaction_Ship_EmployeeID,$Transaction_Bonus,$Transaction_Type,$Supplier_ID,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "Transaction" SET 
			"Transaction_ID"=?,
			"Transaction_DateCreate"=?,
			"Transaction_TotalPrice"=?,
			"Transaction_TotalOrginalPrice"=?,
			"Transaction_CustomerID"=?,
			"Transaction_Status"=?,
			"Transaction_Comment"=?,
			"Transaction_Payment"=?,
			"Transaction_Sale_EmployeeID"=?,
			"Transaction_Ship_EmployeeID"=?,
			"Transaction_Bonus"=?,
			"Transaction_Type"=?,
			"Supplier_ID"=?
			 WHERE "id"=?');
			$stm->execute(array($Transaction_ID,$Transaction_DateCreate,$Transaction_TotalPrice,$Transaction_TotalOrginalPrice,$Transaction_CustomerID,$Transaction_Status,$Transaction_Comment,$Transaction_Payment,$Transaction_Sale_EmployeeID,$Transaction_Ship_EmployeeID,$Transaction_Bonus,$Transaction_Type,$Supplier_ID,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "Transaction" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listTransaciton(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "Transaction"');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
//			IN intransaction_type character varying
//			IN intransaction_date timestamp without time zone,
//			IN intransaction_staff_id integer,
//			IN intransaction_customerid text,
//			IN insupplier_id text,
//			IN intransaction_sale_employeeid text,
//			IN intransaction_ship_employeeid text,
//			IN intransaction_totalprice double precision,
//			IN intransaction_totalorginalprice double precision,
//			IN intransaction_payment double precision,
//			IN intransaction_bonus double precision,
//			IN intransaction_comment text,
//			IN intransaction_status text
		public function addTransProcudures(
		$Transaction_Type,
		$Transaction_Date,
		$Transaction_CustomerID,
		$Supplier_ID,
		$Transaction_Sale_EmployeeID,
		$Transaction_Ship_EmployeeID,
		$Transaction_TotalPrice,
		$Transaction_TotalOrginalPrice,
		$Transaction_Payment,
		$Transaction_Bonus,
		$Transaction_Comment,
		$Transaction_Status,
		$Transaction_Staff_ID
		){
	
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT  "sp_ins_transaction"(?,?,?,?,?,?,?,?,?,?,?,?,?) as "TransactionID"');
		//	$stm = $dbo->prepare('SELECT  "sp_ins_transaction"(N,date('2012-10-03T00:00:00'),'CustomerID','SupplierID','SaleID','ShipID',12300,12300,12300,0,'Comment','Completed',12) as "TransactionID"');
			$stm->execute(array($Transaction_Type,
			$Transaction_Date,
			$Transaction_CustomerID,
			$Supplier_ID,
			$Transaction_Sale_EmployeeID,
			$Transaction_Ship_EmployeeID,
			$Transaction_TotalPrice,
			$Transaction_TotalOrginalPrice,
			$Transaction_Payment,
			$Transaction_Bonus,
			$Transaction_Comment,
			$Transaction_Status,
			$Transaction_Staff_ID));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		
		
	}

?>