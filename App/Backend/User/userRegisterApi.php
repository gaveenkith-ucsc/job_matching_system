
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$username = $user->username;
$password = $user->password;
$hash_password = hash("sha512", $password);
$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result_user_table = $conn->query("INSERT INTO login (username,password) values('$username','$hash_password')");
$conn->close();

?>