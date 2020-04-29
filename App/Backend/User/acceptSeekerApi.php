<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$guidance_no = $user->guidance_no;
$seeker_no = $user->seeker_no;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("insert into guidance (seeker_id,guidanceofficer_id,accepted_date) values('$seeker_no','$guidance_no',CURDATE())");
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
