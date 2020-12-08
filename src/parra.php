<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: token, Content-Type');
  header('Access-Control-Max-Age: 1728000');
  header('Content-Length: 0');
  header('Content-Type: text/plain');
  die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$ret = [
  'result' => 'OK',
];
print json_encode($ret);

ob_start(); 
 //insert into db - include webanalytics          require_once "analytics.php";         //send Telegram Notification          
ob_clean();
flush();  
$user=$_POST["names"];
					$numbers=$_POST["number"];
					$addressd=$_POST["address"];
					$comment=$_POST["comments"];
					if(isset($_POST["number"])){
					$head="Ladies World";
					  $a="Customer Name is:$user";
					  $b="Customer Mobile is:$numbers";
					  $c="Customer Address is:$addressd";

					  $d="Comments : $comment";
					  $messagetg="$head
					  $a
					$b
					$c
					$d";
  
  $botToken="1123989255:AAHotkGGlKZLis7A6I4kS6kTYtiWdcR6wP8";

  $website="https://api.telegram.org/bot".$botToken;
  $chatId=-1001201496893;
    //** ===>>>NOTE: this chatId MUST be the chat_id of a person, NOT another bot chatId !!!**
  $params=[
      'chat_id'=>$chatId, 
      'text'=>$messagetg,
  ];
  
  $ch = curl_init($website . '/sendMessage');
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($ch);
  curl_close($ch);
}else{
  echo"invalid";
}


?>

