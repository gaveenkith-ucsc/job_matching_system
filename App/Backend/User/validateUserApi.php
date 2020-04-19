<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from jobseeker where Nic_no='$nic_no' union select * from guidanceofficer where nic_no='$nic_no'");
$num_rows = mysqli_num_rows($result);
$outp = "";
$outp .= '{"count":"' . $num_rows . '"}';
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
