<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;
$fname = $user->fname;
$mname = $user->mname;
$lname = $user->lname;
$email = $user->email;
$add1 = $user->add1;
$add2 = $user->add2;
$add3 = $user->add3;
$mobileno = $user->mobileno;
$dob = $user->dob;
$gender = $user->gender;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("update jobseeker set fname='$fname', mname='$mname', lname = '$lname',
                        email = '$email', add1='$add1', add2='$add2', add3='$add3', mobileno='$mobileno', 
                        dob='$dob', gender='$gender' where nic_no='$nic_no'");
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
