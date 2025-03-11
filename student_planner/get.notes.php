<?php
include 'db_connect.php';

$result = $conn->query("SELECT * FROM notes ORDER BY id DESC");
$notes = [];

while ($row = $result->fetch_assoc()) {
    $notes[] = $row;
}

echo json_encode($notes);
?>
