<?php
	class CustomerSupplierModel {
		
		function __construct(){}
		
		//function add new category
		public function add($Cust_ID,$Cust_CompanyName,$Cust_PersonName,$Cust_Address,$Cust_Phone1,$Cust_Phone2,$Cust_TaxCode,$Cust_Website,$Cust_Email,$Cust_Fax,$Cust_Route_ID,$Cust_District_ID,$Cust_Type,$Cust_Note){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('INSERT INTO "CustomerSupplier"(
			"Cust_ID",
			"Cust_CompanyName",
			"Cust_PersonName",
			"Cust_Address",
			"Cust_Phone1",
			"Cust_Phone2",
			"Cust_TaxCode",
			"Cust_Website",
			"Cust_Email",
			"Cust_Fax",
			"Cust_Route_ID",
			"Cust_District_ID",
			"Cust_Type",
			"Cust_Note")
				 VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
			$stm->execute(array($Cust_ID,$Cust_CompanyName,$Cust_PersonName,$Cust_Address,$Cust_Phone1,$Cust_Phone2,$Cust_TaxCode,$Cust_Website,$Cust_Email,$Cust_Fax,$Cust_Route_ID,$Cust_District_ID,$Cust_Type,$Cust_Note));
		}
		
		//function update category
		//UPDATE "Category" SET "Category_Code"='ABC',"CategoryName"='BCE' WHERE id=3
		public function update($Cust_ID,$Cust_CompanyName,$Cust_PersonName,$Cust_Address,$Cust_Phone1,$Cust_Phone2,$Cust_TaxCode,$Cust_Website,$Cust_Email,$Cust_Fax,$Cust_Route_ID,$Cust_District_ID,$Cust_Type,$Cust_Note,$id){
			$dbo = db::getInstance();
			$stm= $dbo->prepare('UPDATE "CustomerSupplier"
			 SET 
			"Cust_ID"=?,
			"Cust_CompanyName"=?,
			"Cust_PersonName"=?,
			"Cust_Address"=?,
			"Cust_Phone1"=?,
			"Cust_Phone2"=?,
			"Cust_TaxCode"=?,
			"Cust_Website"=?,
			"Cust_Email"=?,
			"Cust_Fax"=?,
			"Cust_Route_ID"=?,
			"Cust_District_ID"=?,
			"Cust_Type"=?,
			"Cust_Note"=?
			 
			 WHERE "id"=?');
			$stm->execute(array($Cust_ID,$Cust_CompanyName,$Cust_PersonName,$Cust_Address,$Cust_Phone1,$Cust_Phone2,$Cust_TaxCode,$Cust_Website,$Cust_Email,$Cust_Fax,$Cust_Route_ID,$Cust_District_ID,$Cust_Type,$Cust_Note,$id));
			
		}
		
		//function delete category
		public function delete($id){
			
			$dbo = db::getInstance();
            $stm = $dbo->prepare('DELETE FROM "CustomerSupplier" WHERE "id"=?');
            $stm->execute(array($id));
			
		}
		
		// function list all category
		public function listCustomer(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "CustomerSupplier" WHERE "Cust_Type"=\'KH\'');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		public function listSupplier(){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "CustomerSupplier" WHERE "Cust_Type"=\'NCC\'');
			$stm->execute();
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
			
		}
		
		//tim khahch hang theo ten va ma
		public function findCustomerByCodeAndName($query){
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT * FROM "CustomerSupplier" WHERE "Cust_Type"=\'KH\' AND lower("Cust_PersonName") LIKE ? OR lower("Cust_ID") LIKE ?');
			$query = strtolower($query);
			$stm->execute(array('%'.$query.'%','%'.$query.'%'));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
		}
		
		//thong ke doanh so va no theo ma khach hang
		public function findSalesByCode($code){
			
			$dbo = db::getInstance();
			$stm = $dbo->prepare('SELECT \'1\' as id,SUM("Transaction_TotalPrice") as "Total_Transaction" , SUM("Transaction_Payment") as "Total_Payment"  FROM "Transaction" WHERE "Supplier_ID"=?');
			$stm->execute(array($code));
			return $stm->fetchAll(PDO::FETCH_ASSOC); 
			
			
		}
		
		
		
	}

?>