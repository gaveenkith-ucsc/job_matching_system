<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$emp_id = $user->emp_id;
$email = $user->email;
$add1 = $user->add1;
$add2 = $user->add2;
$add3 = $user->add3;
$mobileno = $user->mobileno;
$aboutorganization = $user->aboutorganization;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("update employer set email='$email',add1='$add1', add2='$add2', add3='$add3', mobileno='$mobileno',aboutorganization='$aboutorganization' where oid='$emp_id'");
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

