<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "blog";

// Create connection
$conn = mysqli_connect('localhost','root','','blog');

extract($_POST);
if(isset($_POST['Name']) && isset($_POST['Password'])){
    $query = "INSERT INTO `detail`(`Name`, `Password`) VALUES ('$Name','$Password')";
    mysqli_query($conn,$query);
}

    
?>