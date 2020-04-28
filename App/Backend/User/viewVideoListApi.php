<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("select * from videogallery");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"video_id":"' . $rs["video_id"] . '",';
    $outp .= '"video_name":"' . $rs["video_name"] . '",';
    $outp .= '"youtube_link":"' . $rs["youtube_link"] . '",';
    $outp .= '"description":"' . $rs["description"] . '",';
    $outp .= '"author":"' . $rs["author"] . '",';
    $outp .= '"added_date":"' . $rs["added_date"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
