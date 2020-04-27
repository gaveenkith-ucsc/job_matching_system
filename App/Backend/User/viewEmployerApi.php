<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$emp_id = $user->emp_id;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from employer where oid='$emp_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }

    $outp .= '{"oname":"' . $rs["oname"] . '",';
    $outp .= '"email":"' . $rs["email"] . '",';
    $outp .= '"add1":"' . $rs["add1"] . '",';
    $outp .= '"add2":"' . $rs["add2"] . '",';
    $outp .= '"add3":"' . $rs["add3"] . '",';
    $outp .= '"mobileno":"' . $rs["mobileno"] . '",';
    $outp .= '"aboutorganization":"' . $rs["aboutorganization"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
