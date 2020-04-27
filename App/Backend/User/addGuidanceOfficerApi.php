<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;
$image = $user->profile_photo;
$fname = $user->fname;
$mname = $user->mname;
$lname = $user->lname;
$email = $user->email;
$add1 = $user->add1;
$add2 = $user->add2;
$add3 = $user->add3;
$experience = $user->experience;
$mobileno = $user->mobileno;
$dob = $user->dob;
$gender = $user->gender;
$username = $user->username;
$password = $user->password;
$password = hash("sha512", $password);
$image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image));
$img_location = '../ProfilePhotos/guidanceofficer/' . $nic_no . '.jpg';
file_put_contents($img_location, $image);


$conn = new mysqli("localhost", "root", "", "jobsmanagement");

$result = $conn->query("insert into guidanceofficer (nic_no,fname,mname,lname,email,experience,add1,add2,add3,mobileno,dob,gender,profile_photo) values('$nic_no','$fname','$mname','$lname',
                      '$email','$experience','$add1','$add2','$add3','$mobileno','$dob','$gender','$img_location')");
$result2 = $conn->query("insert into login (username,password,user_type,user_index,user_status) values('$username','$password','guidance','$nic_no','1')");
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

