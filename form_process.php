<?php
$servername = 'localhost:3307';
$username = 'root';
$password = '';
$dbname = "Delicacy";
//create connection
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(! $conn)
{
die('could not connect:' .mysqli_connect_error());
}
//mysql_select_db('Experiment6');
$Name=$_POST['name'];
$Email=$_POST['email'];
$Number=$_POST['num'];
$Address=$_POST['add'];
$City=$_POST['city'];
$Pin_Code=$_POST['pc'];
$sql = "INSERT INTO `Customer_Details`(`Name`, `Email`, `Phone Number`, `Address`, `City`, `Pin_Code`) VALUES ('$Name',
'$Email',
'$Number',
'$Address',
'$City',
'$Pin_Code')";

    if (mysqli_query($conn, $sql)) {
    header("Location:thankyou.html");
    
    } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

mysqli_close($conn);
?>
