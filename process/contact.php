<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = htmlspecialchars(trim($_POST["Name"] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST["Email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["Message"] ?? ''), ENT_QUOTES, 'UTF-8');

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please fill in all fields."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }

    // Prepare data to save
    $date = date("Y-m-d H:i:s");
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    $entry = "Date: $date\nIP: $ip\nName: $name\nEmail: $email\nMessage:\n$message\n----------------------------------------\n\n";

    // Save to file
    $file = 'submissions.txt';
    
    // Append to file (creates the file if it doesn't exist)
    if (file_put_contents($file, $entry, FILE_APPEND | LOCK_EX) !== false) {
        echo json_encode(["status" => "success", "message" => "Your message has been sent successfully. I will get back to you soon!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to save your message. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
