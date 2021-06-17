
//1. set tanggal
var date = new Date();
var year = date.getFullYear();
var month = String(date.getMonth()+1).padStart(2,'0');
var todaydt = String(date.getDate()).padStart(2,'0');
var datePattern = year +"-"+ month +"-"+ todaydt;
document.getElementById('tanggal').min = datePattern;
// document.getElementById('tanggal').value = datePattern;


// 2. increment decrement button
var inc;
var dec;
var plusbtn = $(".plus");
var minusbtn = $(".minus");

var dec = minusbtn.click(function() {
    var $n = $(this)
        .parent(".jumlah-container")
        .find(".jumlah");
    var Qtyval = Number($n.val());
    if (Qtyval > 0) {
        $n.val(Qtyval-1);
    }
});


var inc = plusbtn.click( function() {
    var $n = $(this)
        .parent(".jumlah-container")
        .find(".jumlah");
    var Qtyval = Number($n.val());
    $n.val(Qtyval+1);
    
    // DEBUG
    // console.log($n.val()); 

    // var $hi = $(this)
    //     .parent(".jumlah-container")
    //     .find(".harga");
    // var yu = Number($hi.val());
    // $hi.val(yu)
    // console.log($hi.val());


    // $n.val( Number($n.val()+1) );
    // console.log($n.val(Number($n.val())));
});


//3 Update jumlah
function update_jumlah() {

    //print jml biaya
    var bayar = 0.0;
    let index = 0;
    $('.jumlah-container').each(function(){
        var jml = $(this).find('.jumlah').val();
        var hrg = $(this).find('.harga').val();
        var tot_harga = (jml*hrg);
        bayar += tot_harga;
        
        //total per tiket
        let $pesanan = $('.list-pesanan').find('.pesanan-container').eq(index);
        
        // DEBUG
        // $pesanan.eq(1).find('.harga-pesan').text(tot_harga);
        // console.log($pesanan);
        // console.log($pesanan.find('.harga-pesan'));
        // console.log(tot_harga);

        if(tot_harga == 0)
        {
            $pesanan.css("display", "none");

            // DEBUG
            // console.log($pesanan);
            // $pesanan.find('.harga-pesan').text('0');
        }
        else{
            $pesanan.css("display", "block");
            $pesanan.find('.harga-pesan').text(tot_harga);

            //DEBUG
            // console.log(pesanitem); 
            // console.log(tot_harga); //debug 
        }

        index += 1;

        //DEBUG
        // $(this).find('.harga-item').text(tot_harga);
    });

    //total pembayaran
    $('.tot-bayar').text(bayar);
}

function data_pribadi() {
    let namauser = document.getElementById("nama").value;
    let telponuser = document.getElementById("telpon").value;
    let emailuser = document.getElementById("email").value;

    document.querySelector('.data_nama').innerHTML = namauser;
    document.querySelector('.data_telpon').innerHTML = telponuser;
    document.querySelector('.data_email').innerHTML = emailuser;

    // DEBUG
    // console.log(namauser);
    // console.log(telponuser);
    // console.log(emailuser);
    // console.log('---');
    // console.log(document.getElementsByClassName('.data_nama').innerHTML);
    // console.log(document.getElementsByClassName('.data_email').innerHTML);
    // console.log(document.getElementsByClassName('.data_telpon').innerHTML);
}


//validasi input
function myFunction() {
    let name = document.getElementById("nama");
    let telpon = document.getElementById("telpon");
    let email = document.getElementById("email");
    let tgl = document.getElementById("tanggal");

    let check = 0;

    if (!name.checkValidity()) 
    {
        alert("Nama lengkap belum anda isi");
        check++;
    } 
    else if (!telpon.checkValidity()) 
    {
        alert("Nomor telepon belum anda isi");
        check++;
    } 
    else if (!email.checkValidity())
    {
        alert("Email belum anda isi");
        check++;
    } 
    else if (!tgl.checkValidity()) 
    {
        alert("Tanggal belum anda tentukan");
        check++;
    } 

    if(check == 0)
    {
        confirm();
    }
} 


function confirm() {
    document.querySelector('.konfirmasi').style.display = 'flex';
    document.querySelector('.button-pesan-container').style.display = 'block';
    document.querySelector('.selanjutnya-container').style.display = 'none';

    document.querySelector('.judulpesantiket').style.display = 'none';
    document.querySelector('.datapribadi').style.display = 'none';
    document.querySelector('.tiketutama').style.display = 'none';
    document.querySelector('.tikettambahan').style.display = 'none';
    
    //tanggal
    // print tanggal konfirmasi
    let newSelectedDate = document.getElementById("tanggal").value;
    document.getElementById('tanggal-pesan').innerHTML = newSelectedDate;
    // DEBUG
    // console.log(newSelectedDate);

    //data diri
    data_pribadi();

    //list pesanan
    update_jumlah();
}

function kembalipesan()
{
    document.querySelector('.konfirmasi').style.display = 'none';
    document.querySelector('.button-pesan-container').style.display = 'none';

    document.querySelector('.judulpesantiket').style.display = 'block';
    document.querySelector('.datapribadi').style.display = 'block';
    document.querySelector('.tiketutama').style.display = 'block';
    document.querySelector('.tikettambahan').style.display = 'block';
    document.querySelector('.selanjutnya-container').style.display = 'block';
    
}

$(document).ready(function (){
    $('.pesan').click(function(event){
        event.preventDefault();
        
        let formData = $('.post-user').serializeArray();
        let newUser = {
            nama: formData[0].value,
            telpon: formData[1].value,
            email: formData[2].value,
            tanggal: formData[3].value,
            utama: formData[4].value,
            sepeda: formData[5].value,
            perahu: formData[6].value,
            berkuda: formData[7].value,
            flyingfox: formData[8].value,
            skybike: formData[9].value,
        }

        console.log(newUser);
        event.preventDefault();
        $.ajax({
            async: true,
            cache: true,
            url: 'pesanan.php',
            type: 'POST',
            data: newUser,

            success: function(){
                // console.log(data); // log the returned data
           }

        });
    });
});