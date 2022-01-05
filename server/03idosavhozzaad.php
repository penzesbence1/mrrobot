<?php

$ertek = $_GET["ujidosav"];
require_once 'db.php';
$sql="INSERT INTO `idosav`(`idosav`) VALUES ('".$ertek."')";  //SQL KÓD 
$stmt=$db->exec($sql);
echo $stmt;

?>