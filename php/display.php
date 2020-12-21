
<!Doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Page Refresh every 5 seconds -->
  <meta http-equiv="refresh" content="5">
  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
  
  <div class="container">
  <div class="col-lg-12">
    <br><br><h1 class="text-info text-center">Customer Order Details</h1> 
    <a href="insert.php"><button class="btn btn-success text-right">✓Create</button></a>
    <br>
    <table class="table table-striped table-hover table-bordered">
      <tr class="bg-dark text-white text-center">
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>City</th>
        <th>Pin_Code</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>

      <?php

        include 'conn.php';

        $q = "select * from customer_details";
        $query = mysqli_query($conn,$q);
        while($res = mysqli_fetch_array($query)){

        
      ?>

      <tr class="text-center">
        <td><?php echo $res['id']; ?></td>
        <td><?php echo $res['Name']; ?></td>
        <td><?php echo $res['Email']; ?></td>
        <td><?php echo $res['Phone Number']; ?></td>
        <td><?php echo $res['Address']; ?></td>
        <td><?php echo $res['City']; ?></td>
        <td><?php echo $res['Pin_Code']; ?></td>
        <td><button class="btn-danger btn"><a href="delete.php?id=<?php echo $res['id']; ?>" class="text-white">Delete</a></button></td>
        <td><button class="btn-primary btn"><a href="update.php?id=<?php echo $res['id']; ?>" class="text-white">Update</a></button></td>
        
      </tr>
    <?php
        }
    ?>
    </table>
  </div>

  </div>

</body>
</html>