<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$username = $user->username;
$password = $user->currentpassword;
$hash_password = hash("sha512", $password);

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from login where username='$username'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    if (strcmp($hash_password, $rs["password"]) == 0) {
        $verified = "yes";
    } else {
        $verified = "no";
    }
    $outp .= '{"username":"' . $rs["username"] . '",';
    $outp .= '"user_type":"' . $rs["user_type"] . '",';
    $outp .= '"user_index":"' . $rs["user_index"] . '",';
    $outp .= '"status":"' . $verified . '",';
    $outp .= '"password":"' . $rs["password"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
