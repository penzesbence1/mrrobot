<?php

$idke = $_GET["id"];
$epizod=$_GET["epizod"];
require_once 'db.php';
$sql="UPDATE szereplok SET epizodok=".$epizod." WHERE id=".$idke;  //SQL KÓD 
$stmt=$db->exec($sql);
echo $stmt;

?>