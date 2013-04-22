<?php
	$site_path=realpath(dirname(__FILE__));
	define("_PATH",$site_path);
	include_once 'ww.init/init.php';
	//include_once 'ww.model/db.php';
	
	$path = $_SERVER['PATH_INFO'];
	if ($path != null) {
		$path_params = explode("/", $path);
	}
	if(count($path_params)>1){
		$controller = $path_params[1];
		if(is_string($controller))
		{
			 $file = _CONTROLLER.'/'.$controller.'Controller.php';
			 if(is_readable($file))
			 {
			  	include $file;
				$class = $controller.'Controller';
				$realController  = new $class();
				$method = $_SERVER['REQUEST_METHOD'];
			
				switch ($method){
					case "GET":$realController->GET(); break;
					case "POST":$realController->POST(); break;
					case "PUT":$realController->PUT(); break;
					case "DELETE":$realController->DELETE(); break;
					default: break;
				}
			 }else{
			 	ob_start();
            	
            	Header( "HTTP/1.1 301 Moved Permanently" );
				Header( "Location: index.html" );
                  ob_flush();
			 }
		}
		
	}
	
?>