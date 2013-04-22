<?php


class db {
    /** Declare instance **/
    private static $instance = NULL;
    
    private function construct() {
        
    }
    
    public static function getInstance() {
        if (!self::$instance) {
          try {
              self::$instance = new PDO('pgsql:host=127.0.0.1;port=5432;dbname=elogistic',  'postgres',  '123456');
          }
          catch(PDOException $e)
          {
              echo $e->getMessage();
          }	
        }
        return self::$instance;
    }
    
    private function _clone() {
        
    }
    
    /** end of class **/
    
}
//$dbo=db::getInstance();
//print "Thanh cong!";

?>