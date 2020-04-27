<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$username = $user->username;
$password = $user->newpassword;
$hash_password = hash("sha512", $password);

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("update login set password='$hash_password' where username='$username'");
$outp = "";
if ($result) {
    $status = "ok";
    $outp .= '{"status":"' . $status . '"}';
    $outp = '{"records":[' . $outp . ']}';
} else {
    $status = "no";
    $outp .= '{"status":"' . $status . '"}';
    $outp = '{"records":[' . $outp . ']}';
}

$conn->close();
echo($outp);
?>
