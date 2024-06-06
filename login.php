<?php 

include "config.php";

  if (isset($_POST['submit'])) {

    $username = $_POST['username'];

    $password = $_POST['password'];

    
    $sql = "SELECT u.password FROM user u WHERE name='$username' and password='$password'";

    $result = $conn->query($sql);

    if ($result->num_rows>0) {

      echo "Login successfully.";


    }else{

      echo "Error: wrong username or wrong password<br>";

    }

    $conn->close();

  } 

?> 



