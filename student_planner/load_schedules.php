<?php
include 'db.php';

$sql = "SELECT id, date, content FROM schedules ORDER BY date ASC";
$result = $conn->query($sql);

$schedules = [];
while ($row = $result->fetch_assoc()) {
    $schedules[] = $row;
}

header('Content-Type: application/json');
echo json_encode($schedules);
$conn->close();
?>
