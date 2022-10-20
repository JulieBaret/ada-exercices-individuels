<?php
session_start();

if(isset($_GET['first_name'])){
    echo "Bonjour " . $_GET['first_name'];
    echo "get";
} else if(isset($_SESSION['first_name'])){
    echo "Bonjour " . $_SESSION['first_name'];
    echo "session";
} else if(isset($_POST['first_name']) && (!isset($_SESSION['first_name']))){
    $_SESSION['first_name'] = $_POST['first_name'];
    echo "Bonjour " . $_SESSION['first_name'];
    echo "post";
} else {
    echo "Bonjour anonyme";
};

echo "<pre>" . session_id() . "</pre>";
session_destroy();
?>

<!-- <button onclick="<?php session_destroy() ?>; location.href='form.php'" >Reset</button> -->