<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $content = $_POST["content"];
    $stmt = $conn->prepare("INSERT INTO notes (content) VALUES (?)");
    $stmt->bind_param("s", $content);
    
    if ($stmt->execute()) {
        echo "Note saved successfully";
    } else {
        echo "Failed to save note";
    }

    $stmt->close();
    $conn->close();
}
?>
