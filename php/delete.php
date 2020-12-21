<?php

include 'conn.php';

$id = $_GET['id'];

$q = "DELETE FROM `customer_details` WHERE id = $id ";
mysqli_query($conn, $q);

header('location:display.php');

?>