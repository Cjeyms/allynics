<?php
include 'db_connect.php';

$result = $conn->query("SELECT * FROM schedules ORDER BY id DESC");
$schedules = [];

while ($row = $result->fetch_assoc()) {
    $schedules[] = $row;
}

echo json_encode($schedules);
?>
