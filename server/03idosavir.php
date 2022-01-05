<?php
$idke = $_GET["id"];
require_once 'db.php';
$sql="SELECT * FROM szereplok INNER JOIN idosav on idosav.idosavid = szereplok.idosavid WHERE idosav.idosavid = ".$idke." ORDER BY id";  //SQL KÓD
$stmt=$db->query($sql);
echo json_encode($stmt->fetchAll());

?>