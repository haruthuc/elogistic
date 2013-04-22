<?php
	define("_HOST","localhost");
	define("_PORT","5432");
	define("_DATABASE","elogistic");
	define("_USERNAME","postgre");
	define("_PASSWORD","123456");

	
	define("_CONTROLLER","ww.controller");
	//echo $site_path;
	function __autoload($class_name) {
    	$filename = $class_name. '.php';
    	$file = _PATH . '/ww.model/' . $filename;
	
	    if (file_exists($file) == false)
    	{
        	return false;

    	}
	
		  include ($file);
	}
		
	
?>