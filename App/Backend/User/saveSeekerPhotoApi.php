<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;
$image = $user->image;
$image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image));
$img_location = '../ProfilePhotos/seeker/' . $nic_no . '.jpg';
unlink($img_location);
file_put_contents($img_location, $image);

$status = "ok";
$outp = "";
$outp .= '{"status":"' . $status . '"}';
$outp = '{"records":[' . $outp . ']}';
//$conn->close();
echo($outp);
?>
