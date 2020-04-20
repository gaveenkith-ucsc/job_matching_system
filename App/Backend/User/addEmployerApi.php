<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$oname = $user->oname;
$email = $user->email;
$add1 = $user->add1;
$add2 = $user->add2;
$add3 = $user->add3;
$mobileno = $user->mobileno;
$aboutorganization = $user->aboutorganization;
$username = $user->username;
$password = $user->password;
$password = hash("sha512", $password);

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("insert into employer (oname,email,add1,add2,add3,mobileno,aboutorganization) values('$oname','$email','$add1','$add2','$add3','$mobileno','$aboutorganization')");
$result2 = $conn->query("insert into login (username,password) values('$username','$password')");
$outp = "";
if ($result && $result2) {
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

