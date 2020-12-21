<?php
include 'conn.php';

if(isset($_POST['submit'])){
  $id = $_GET['id'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mob = $_POST['mob'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $pc = $_POST['pc'];
  $q = " UPDATE customer_details SET  `id`=$id, `Name` = '$name', `Email`='$email', `Phone Number`=$mob, `Address`='$address', `City`='$city', `Pin_Code`=$pc where `id`=$id ";
  mysqli_query($conn, $q);
  header('location:display.php');
}

?>

<!Doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

    <div class="col-lg-6 m-auto">

      <form method="POST">
        <br><br><div class="card">
          <div class="card-header bg-dark">
            <h1 class="text-white text-center">Update Operation</h1>
          </div><br>

          <label>Name:</label>
          <input type="text" name="name" class="form-control"> <br>

          <label>Email:</label>
          <input type="text" name="email" class="form-control"> <br>

          <label>Phone Number:</label>
          <input type="text" name="mob" class="form-control"> <br>

          <label>Address:</label>
          <input type="text" name="address" class="form-control"> <br>

          <label>City:</label>
          <input type="text" name="city" class="form-control"> <br>

          <label>Pin_Code:</label>
          <input type="text" name="pc" class="form-control"> <br>

          <button class="btn btn-success" type="submit" name="submit" >Submit</button><br>


        </div>

      </form>

    </div>
    

</body>
</html>