<?php
    header('Content-type: application/json');

    $email = @trim(stripslashes($_POST['email']));    
    $asunto = @trim(stripslashes($_POST['asunto']));
    $mensaje = @trim(stripslashes($_POST['mensaje']));

    $email_from = $email;
    $email_to = 'ventas@estudiocreativoqmart.com';
    $body = 'E-mail: ' . $email . "\n\n" . 'Asunto: ' . $asunto . "\n\n" . 'Mensaje: ' . $mensaje;
    $success = @mail($email_to, $asunto, $body, 'From: <'.$email_from.'>');

    Header("Location: ./index.html");
    
?>
