<?php
$mysql_host = "mysql334.loopia.se";   /* Ange korrekt databasnamn tex mysql369.loopia.se */
$mysql_user = "admin@t301006";
$mysql_password = "te4databaspwd";
$mysql_database = "te4ntihbg_se";

$mysqli = new mysqli( $mysql_host, $mysql_user, $mysql_password, $mysql_database );
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>