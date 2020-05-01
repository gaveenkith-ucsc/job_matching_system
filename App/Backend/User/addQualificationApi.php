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
$results2 = $conn->query("select * from vacancy where sector='$sector' and qualification_type='$type' and expiration_date>=CURDATE()");
while ($result2 = $results2->fetch_array(MYSQLI_ASSOC)) {
    $vacancy_id = $result2["vacancy_id"];
    $result3 = $conn->query("insert into seeker_vacancy (seeker_id,vacancy_id,applied_date,status) values('$nic_no','$vacancy_id',CURDATE(),'1')");
}
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

