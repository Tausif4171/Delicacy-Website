<?php
include('login_connection.php');
$username= $_POST['name'];
$password = $_POST['pass'];

$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysqli_real_escape_string($con, $username);
$password = mysqli_real_escape_string($con, $password);

$sql = "select * from login where stud_first_name = '$username' and stud_pass = '$password'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

if ($count == 1) {
    header("Location: display.php");
}
else{
	echo "Login Failed!!";
}
?>