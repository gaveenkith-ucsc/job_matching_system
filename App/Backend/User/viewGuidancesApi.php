<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$nic_no = $user->nic_no;
$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select nic_no,fname,lname,substring(profile_photo,4) as profile_photo from guidanceofficer
                         where nic_no in (select guidanceofficer_id from guidance where seeker_id='$nic_no')");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"nic_no":"' . $rs["nic_no"] . '",';
    $outp .= '"fname":"' . $rs["fname"] . '",';
    $outp .= '"lname":"' . $rs["lname"] . '",';
    $outp .= '"profile_photo":"' . $rs["profile_photo"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
