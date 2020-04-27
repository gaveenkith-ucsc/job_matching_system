<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from qualification where StudentId='$nic_no'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"sector":"' . $rs["Sector"] . '",';
    $outp .= '"type":"' . $rs["Type"] . '",';
    $outp .= '"institute":"' . $rs["Institute"] . '",';
    $outp .= '"certificateno":"' . $rs["CertificateNo"] . '",';
    $outp .= '"completedyear":"' . $rs["CompletedYear"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>

