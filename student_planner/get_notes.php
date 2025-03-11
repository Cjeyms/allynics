<?php
include 'db.php';

$result = $conn->query("SELECT * FROM notes ORDER BY created_at DESC");
$notes = [];

while ($row = $result->fetch_assoc()) {
    $notes[] = $row;
}

echo json_encode($notes);
$conn->close();
?>
