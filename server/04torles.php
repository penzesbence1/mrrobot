<?php

$idke = $_GET["id"];
require_once 'db.php';
$sql="DELETE FROM `szereplok` WHERE id=".$idke;  //SQL KÓD 
$stmt=$db->exec($sql);
echo $stmt;

?>