
        function validator() {
            let nama = document.getElementById('nama-pelanggan').value;
            let email = document.getElementById('e-mail').value;
            let jam = document.getElementById('jam-berangkat').value;
            let tujuan = document.getElementById('tujuan-pelanggan').value;
            let tiket = parseInt(document.getElementById('tiket').value);
            let emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let timeFormat = /^([0-1][0-9]|2[0-3]).([0-5][0-9])$/;
            if (!nama || nama.length > 30) {
                document.getElementById('errornama').innerHTML = "<i><b># nama wajib di isi dan memiliki maksimal 30 karakter</b></i>"
                document.getElementById('errornama').style =  "background-color: black; color: red;" 
            } else {
                document.getElementById('errornama').innerHTML = ""
            }
            if (!email || !email.match(emailFormat)) {
                document.getElementById('erroremail').innerHTML = "<i><b># email wajib di isi dan menggunakan format email (email@example.com)</b></i>"
                document.getElementById('erroremail').style = "background-color: black; color: red;"
            } else {
                document.getElementById('erroremail').innerHTML = ""
            }

            if (!jam || !jam.match(timeFormat)) {
                document.getElementById('errorjam').innerHTML = "<i><b># Jam wajib di isi dan menggunakan format 00.00 - 23.59</b></i>"
                document.getElementById('errorjam').style = "background-color: black; color: red;"
            } else {
                document.getElementById('errorjam').innerHTML = ""
            }

            if (!tujuan) {
                document.getElementById('errortujuan').innerHTML = "<i><b># tujuan wajib di isi</b></i>"
                document.getElementById('errortujuan').style = "background-color: black; color: red;"
            } else {
                document.getElementById('errortujuan').innerHTML = ""
            }

            if (!tiket  || tiket > 10 || tiket < 0) {
                document.getElementById('errortiket').innerHTML = "<i><b># tiket wajib di isi dan hanya bisa di isi dari 1-10</b></i>"
                document.getElementById('errortiket').style = "background-color: black; color: red;"
            } else {
                document.getElementById('errortiket').innerHTML = ""
            }

            if (nama.length < 30 && email.match(emailFormat) && tiket < 10 || tiket > 0 && jam.match(timeFormat) && tujuan) {
                document.getElementById('hasil').style = "display: table;"
                document.getElementById('inputnama').innerHTML = nama;
                document.getElementById('inputemail').innerHTML = email;
                document.getElementById('inputjam').innerHTML = jam;
                document.getElementById('inputtujuan').innerHTML = tujuan;
                document.getElementById('inputtiket').innerHTML = tiket;
            }
        }
    