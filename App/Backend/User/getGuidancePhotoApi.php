<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$nic_no = $user->nic_no;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select substring(profile_photo,4) as photo from guidanceofficer where nic_no='$nic_no'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }

    $outp .= '{"photo":"' . $rs["photo"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
