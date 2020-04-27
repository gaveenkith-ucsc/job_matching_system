<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$name = $user->name;
$link = $user->link;
$description = $user->description;
$author = $user->author;
$conn = new mysqli("localhost", "root", "", "jobsmanagement");

$result = $conn->query("insert into videogallery (video_name,youtube_link,description,author,added_date) values('$name','$link','$description','$author',CURDATE())");

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


