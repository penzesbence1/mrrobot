<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap.min.css">
    <title>Mr. Robot</title>
</head>
<body>
    <div class = "container-fluid">
        <nav class = "navbar navbar-expand-sm navbar-dark bg-dark">
        <ul class="navbar-nav">
            <li class="nav item"><a href="00index.php" class="nav-link">Főoldal</a></li>
            <li class="nav item"><a href="00index.php?program=02szerepek.php" class="nav-link">Szerepek</a></li>
            <li class="nav item"><a href="00index.php?program=03idosav.php" class="nav-link">Idősávok</a></li>
            <li class="nav item"><a href="00index.php?program=04torles.php" class="nav-link">Módosítás, törlés</a></li>
            <li class="nav item"><a href="00index.php?program=05sugo.php" class="nav-link">Súgó</a></li>
        </ul>
        </nav> 
    </div>
    <div class="container"> 
         <?php
         if(isset($_GET["program"]))
            include $_GET["program"];
            else
            include "01fooldal.php";
         ?>
    </div>
    
    <script>
    for(let obj of document.links)
    if(obj.href==document.URL)
    obj.style.color="red"

        </script>
</body>
</html>