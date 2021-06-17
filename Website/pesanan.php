<?php
$servername = "localhost";
$username = "root";
$password = "";
$database_name = "db_pesanan";

$conn = mysqli_connect($servername, $username, $password, $database_name);

if(!$conn)
{
    die("Connection Failed".mysqli_connect_error());
}
if (isset($_POST['pesan'])) {
    $nama = $_POST['nama'];
    $telpon = $_POST['telpon'];
    $email = $_POST['email'];
    $tgl = $_POST['tanggal'];
    $utama = $_POST['utama'];
    $sepeda = $_POST['sepeda'];
    $berkuda = $_POST['berkuda'];
    $perahu = $_POST['perahu'];
    $flyingfox = $_POST['flyingfox'];
    $skybike = $_POST['skybike'];

    $sql_query = "INSERT INTO pesanan (nama, telpon, email, tanggal, utama, sepeda, berkuda, perahu, flyingfox, skybike)
        VALUES ('$nama', '$telpon', '$email', '$tgl', '$utama', '$sepeda', '$berkuda', '$perahu', '$flyingfox', '$skybike')";

    if (mysqli_query($conn, $sql_query)) {
        // dalam 5 detik page akan dialihkan ke "home.html"
        header("refresh:5;url=home.html");

        // tampilkan html
        echo <<< GFG
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="assets/img/apple-icon.png">
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/apple-icon.png">
        <!-- Load Require CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <!-- Font CSS -->
        <link href="assets/css/boxicon.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
        <!-- Load Tempalte CSS -->
        <link rel="stylesheet" href="assets/css/templatemo.css">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="assets/css/custom.css">
        
        
        <!--  -->
        <!-- html -->
        <body>
            <style>
                .disini {
                    text-decoration: none;
                    font-size: larger;
                }
                .disini:hover {
                    color: rgb(255, 145, 0);
                }
                .direction {
                    font-size: 11pt;
                }
                .berhasil {
                    margin-top: 10%;
                }
            </style>
        
            <div class="berhasil">
                <div class="service-work overflow-hidden card border-0 shadow col-6 mx-auto my-auto">
                    <div class="card-body">
                    
                        <div class="mb text-center">
                            <h3 class="my-3">Pesan tiket Berhasil!</h3>
                            <div class="my-4">
                                <img src="/Website/assets/img/success.png" width="100" height="100" alt="Succses" class="mx-auto d-block"> 
                            </div>
                            <p class="semi-bold-600 mb-1">Pesanan anda sedang kami proses. </p>
                            <p class="semi-bold-600">Silahkan tunggu email dari kami.</p>
                        </div>
                        <div class="direction text-center mx-auto mt-2 mb-0 pb-2 align-items-center text-muted">
                            <p class="my-0 semi-bold-600">Anda akan dialihkan ke halaman utama dalam 5 detik. Jika tidak, klik <a href="home.html" class="semi-bold-600 disini" style="text-decoration: none;">disini</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        GFG;
    } else {
        echo "Failed" . $sql_query . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
