<?php
include 'db.php';

$sql = "SELECT id, content FROM notes ORDER BY id DESC";
$result = $conn->query($sql);

$notes = [];
while ($row = $result->fetch_assoc()) {
    $notes[] = $row;
}

header('Content-Type: application/json');
echo json_encode($notes);
$conn->close();
?>
