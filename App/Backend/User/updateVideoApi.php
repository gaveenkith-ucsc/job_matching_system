<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));

$video_id = $user->video_id;
$youtube_link = $user->link;
$description = $user->description;
$author = $user->author;

$conn = new mysqli("localhost", "root", "", "jobsmanagement");
$result = $conn->query("update videogallery set youtube_link='$youtube_link',description='$description',author='$author' where video_id='$video_id'");
$outp = "";
if ($result) {
    $status = "ok";
    $outp .= '{"status":"' . $status . '"}';
    $outp = '{"records":[' . $outp . ']}';
} else {
    $status = "no";
    $outp .= '{"status":"' . $status . '"}';
    $outp = '{"records":[' . $outp . ']}';
}

$conn->close();
echo($outp);
?>

