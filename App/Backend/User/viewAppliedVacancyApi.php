<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$seeker_id = $user->seeker_id;
$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select e.oname as oname,e.oid as oid,v.vacancy_id as vacancy_id ,v.title as title,v.sector as sector,v.qualification_type as qualification_type,v.job_profile as job_profile,v.candidate_profile as candidate_profile,v.added_date as added_date,v.expiration_date as expiration_date from employer e,vacancy v where v.vacancy_id in (select vacancy_id from seeker_vacancy where seeker_id='$seeker_id') and v.employer_id=e.oid");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"vacancy_id":"' . $rs["vacancy_id"] . '",';
    $outp .= '"oname":"' . $rs["oname"] . '",';
    $outp .= '"oid":"' . $rs["oid"] . '",';
    $outp .= '"title":"' . $rs["title"] . '",';
    $outp .= '"sector":"' . $rs["sector"] . '",';
    $outp .= '"qualification_type":"' . $rs["qualification_type"] . '",';
    $outp .= '"job_profile":"' . $rs["job_profile"] . '",';
    $outp .= '"candidate_profile":"' . $rs["candidate_profile"] . '",';
    $outp .= '"added_date":"' . $rs["added_date"] . '",';
    $outp .= '"expiration_date":"' . $rs["expiration_date"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>

