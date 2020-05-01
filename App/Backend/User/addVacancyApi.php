<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$title = $user->title;
$sector = $user->sector;
$qualification = $user->qualification;
$jobprofile = $user->jobprofile;
$candidateprofile = $user->candidateprofile;
$expdate = $user->expdate;
$emp_id = $user->emp_id;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("insert into vacancy (title,sector,qualification_type,job_profile,candidate_profile,employer_id,
                              added_date,expiration_date,status) values('$title','$sector','$qualification','$jobprofile','$candidateprofile','$emp_id',CURDATE(),'$expdate','1')");
$result2 = $conn->query("select max(vacancy_id) as vacancy_id from vacancy");
$vacancy_id = 0;
while ($rs = $result2->fetch_array(MYSQLI_ASSOC)) {
    $vacancy_id = $rs["vacancy_id"];
}
$result3 = $conn->query("select studentid from qualification where sector='$sector' and type='$qualification'");
while ($rs = $result3->fetch_array(MYSQLI_ASSOC)) {
    $seeker_id = $rs["studentid"];
    $result4 = $conn->query("insert into seeker_vacancy (seeker_id,vacancy_id,applied_date,status) values('$seeker_id','$vacancy_id',CURDATE(),'1')");
}
$outp = "";
if ($result4) {
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

