<?php
require_once 'db.php';
$sql="SELECT * FROM idosav";  //SQL KÓD
$stmt=$db->query($sql);
echo json_encode($stmt->fetchAll());

?>