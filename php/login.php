<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Login</title>
  </head>
  <body>
    <div class="main_div">
      
      <div class="box">
        
        <h1 style="color:Orange">ADMIN<h1>
        <h1>Login Form</h1>
        <form action="authentication.php" method="POST" data-netlify="true">
          <div class="input-box">
          <input type="text" name="name" id="name" autocomplete="off" required />
            <label for="Username">Username</label>
          </div>
          <div class="input-box">
            <input type="password" name="pass" id="name" autocomplete="off" required />
            <label for="Password">Password</label>
          </div>
          <input type="submit" name = "btn" class="btn" value="Login">
        </form>
      </div>
    </div>
  </body>
</html>



<!-- <!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  
<form action="authentication.php" method="POST">
<div class="login-box">
  <h1>Login</h1>
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" name = "name" placeholder="Username">
  </div>

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" name = "pass" placeholder="Password">
  </div>

  <input type="submit" name = "btn" class="btn" value="Login">
</form>
</div>
</body>
</html> -->
