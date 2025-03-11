<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST["date"];
    $content = $_POST["content"];
    
    $stmt = $conn->prepare("INSERT INTO schedules (date, content) VALUES (?, ?)");
    $stmt->bind_param("ss", $date, $content);
    
    if ($stmt->execute()) {
        echo "Schedule saved successfully";
    } else {
        echo "Failed to save schedule";
    }

    $stmt->close();
    $conn->close();
}
?>
