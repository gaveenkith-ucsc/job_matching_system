<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$username = $user->username;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from login where username='$username'");
$num_rows = mysqli_num_rows($result);
$outp = "";
$outp .= '{"count":"' . $num_rows . '"}';
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>