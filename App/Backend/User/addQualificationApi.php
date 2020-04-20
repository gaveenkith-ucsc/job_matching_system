<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;
$sector = $user->sector;
$type = $user->type;
$institute = $user->institute;
$certificateno = $user->certificateno;
$completedyear = $user->completedyear;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("insert into qualification (studentid,sector,type,institute,certificateno,completedyear) values('$nic_no','$sector','$type','$institute','$certificateno','$completedyear')");
$outp = "";
if ($result) {
    $status = "ok";
    $outp .= '{"status":"' . $status . '"}';
    $outp = '{"records":[' . $outp . ']}';
} else {
    $status = "wrong";
    $outp .= '{"status":"' . $status . '"}';
    $outp = '{"records":[' . $outp . ']}';
}

$conn->close();
echo($outp);
?>

