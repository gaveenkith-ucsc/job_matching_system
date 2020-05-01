<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$vacancy_id = $user->vacancy_id;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select fname,mname,lname,email,add1,add2,add3,mobileno,dob,Nic_no,status,gender,substring(profile_photo,4) as photo from jobseeker where Nic_no in (select seeker_id from seeker_vacancy where vacancy_id='$vacancy_id')");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"fname":"' . $rs["fname"] . '",';
    $outp .= '"mname":"' . $rs["mname"] . '",';
    $outp .= '"lname":"' . $rs["lname"] . '",';
    $outp .= '"email":"' . $rs["email"] . '",';
    $outp .= '"add1":"' . $rs["add1"] . '",';
    $outp .= '"add2":"' . $rs["add2"] . '",';
    $outp .= '"add3":"' . $rs["add3"] . '",';
    $outp .= '"mobileno":"' . $rs["mobileno"] . '",';
    $outp .= '"dob":"' . $rs["dob"] . '",';
    $outp .= '"nic_no":"' . $rs["Nic_no"] . '",';
    $outp .= '"status":"' . $rs["status"] . '",';
    $outp .= '"photo":"' . $rs["photo"] . '",';
    $outp .= '"gender":"' . $rs["gender"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
