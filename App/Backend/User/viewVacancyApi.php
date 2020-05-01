<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$vacancy_id = $user->vacancy_id;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from vacancy where vacancy_id='$vacancy_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"vacancy_id":"' . $rs["vacancy_id"] . '",';
    $outp .= '"title":"' . $rs["title"] . '",';
    $outp .= '"sector":"' . $rs["sector"] . '",';
    $outp .= '"qualification_type":"' . $rs["qualification_type"] . '",';
    $outp .= '"job_profile":"' . $rs["job_profile"] . '",';
    $outp .= '"candidate_profile":"' . $rs["candidate_profile"] . '",';
    $outp .= '"expiration_date":"' . $rs["expiration_date"] . '",';
    $outp .= '"added_date":"' . $rs["added_date"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>

