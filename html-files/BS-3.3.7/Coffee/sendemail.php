<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Email sent!'
	);

    $fname   = @trim(stripslashes($_POST['fname'])); 
	$lname   = @trim(stripslashes($_POST['lname'])); 
    $email 	 = @trim(stripslashes($_POST['email'])); 
    $subject = @trim(stripslashes($_POST['subject']));
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
	$email_to = 'email@domain.com';

    $body = 'First Name: ' . $fname . "\n\n" . 'Last Name: ' . $lname. "\n\n" . 'Email: ' . $email . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die; 
?>	