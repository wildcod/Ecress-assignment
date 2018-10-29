<?php
   
   $dbhost = "localhost";
   $dbuser = "root";
   $dbpass = "";
   $dbname = "user";
   
   //Connect to MySQL Server
   mysql_connect($dbhost, $dbuser, $dbpass);
   
   //Select Database
   mysql_select_db($dbname) or die(mysql_error());
   
   // Retrieve data from Query String
   $emailId = $_GET['emailId'];

   
   // Escape User Input to help prevent SQL Injection
   $emailId = mysql_real_escape_string($emailId);

   $query = "INSERT INTO user(username) ";
   $query .= "VALUES ('$emailId')";
   $result = mysqli_query($connection, $query);
   if (!$result) {
       die("Query failed" . mysqli_error($connection));
   } 
   else {
       echo "successfully submit";
   }
   
?>