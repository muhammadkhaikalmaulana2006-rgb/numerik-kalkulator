//=====================
// VARIABEL GRAFIK
//=====================

let chartSegi = null;
let chartGauss = null;


//=====================
// LOGIN
//=====================

function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username=="admin" &&
       password=="admin"){

        window.location.href="dashboard.html";

    }

    else{

        alert(
        "Username atau Password salah!"
        );
    }
}


//=====================
// METODE SEGI EMPAT
// f(x)=x²
//=====================

function segiEmpat(){

    document.getElementById(
    "hasilSegi").innerHTML =
    "Sedang menghitung...";

    let a =
    Number(document.getElementById("a").value);

    let b =
    Number(document.getElementById("b").value);

    let n =
    Number(document.getElementById("n").value);

    if(n<=0){

        alert(
        "Jumlah pias harus lebih dari 0");

        return;
    }

    let h = (b-a)/n;

    let luas = 0;

    let tabel = `
    <table>
        <tr>
            <th>Iterasi</th>
            <th>x</th>
            <th>f(x)</th>
        </tr>
    `;

    let labels = [];
    let data = [];

    for(let i=0;i<n;i++){

        let x = a + (i*h);

        let fx = x*x;

        luas += fx;

        labels.push(
        x.toFixed(2));

        data.push(
        fx.toFixed(2));

        tabel += `
        <tr>
            <td>${i+1}</td>
            <td>${x.toFixed(2)}</td>
            <td>${fx.toFixed(2)}</td>
        </tr>
        `;
    }

    luas *= h;

    tabel += "</table>";

    document.getElementById(
    "hasilSegi").innerHTML =

    "✅ Perhitungan berhasil<br><br>" +

    "Hasil = " +

    luas.toFixed(4);

    document.getElementById(
    "iterasiSegi").innerHTML =
    tabel;


    // Hapus grafik lama

    if(chartSegi){

        chartSegi.destroy();

    }

    chartSegi = new Chart(

        document.getElementById(
        "grafikSegi"),

        {

            type:"line",

            data:{

                labels:labels,

                datasets:[{

                    label:"f(x)=x²",

                    data:data,

                    borderWidth:2

                }]
            }
        }
    );
}


//=====================
// METODE GAUSS SEIDEL
//=====================

function gauss(){

    document.getElementById(
    "hasilGauss").innerHTML =
    "Sedang menghitung...";


    let a11 =
    Number(document.getElementById(
    "a11").value);

    let a12 =
    Number(document.getElementById(
    "a12").value);

    let a13 =
    Number(document.getElementById(
    "a13").value);

    let b1 =
    Number(document.getElementById(
    "b1").value);

    let a21 =
    Number(document.getElementById(
    "a21").value);

    let a22 =
    Number(document.getElementById(
    "a22").value);

    let a23 =
    Number(document.getElementById(
    "a23").value);

    let b2 =
    Number(document.getElementById(
    "b2").value);

    let a31 =
    Number(document.getElementById(
    "a31").value);

    let a32 =
    Number(document.getElementById(
    "a32").value);

    let a33 =
    Number(document.getElementById(
    "a33").value);

    let b3 =
    Number(document.getElementById(
    "b3").value);


    let x = 0;
    let y = 0;
    let z = 0;

    let labels = [];
    let dataX = [];

    let tabel = `
    <table>

        <tr>

            <th>Iterasi</th>

            <th>X</th>

            <th>Y</th>

            <th>Z</th>

        </tr>
    `;


    for(let i=1;i<=10;i++){

        x =

        (b1-(a12*y)-(a13*z))
        /a11;

        y =

        (b2-(a21*x)-(a23*z))
        /a22;

        z =

        (b3-(a31*x)-(a32*y))
        /a33;


        labels.push(
        "Iterasi "+i);

        dataX.push(
        x.toFixed(4));


        tabel += `

        <tr>

            <td>${i}</td>

            <td>${x.toFixed(4)}</td>

            <td>${y.toFixed(4)}</td>

            <td>${z.toFixed(4)}</td>

        </tr>
        `;
    }

    tabel += "</table>";


    document.getElementById(
    "hasilGauss").innerHTML =

    "✅ Perhitungan berhasil" +

    "<br><br>" +

    "X = " + x.toFixed(4) +

    "<br>" +

    "Y = " + y.toFixed(4) +

    "<br>" +

    "Z = " + z.toFixed(4);


    document.getElementById(
    "iterasiGauss").innerHTML =
    tabel;


    // Hapus grafik lama

    if(chartGauss){

        chartGauss.destroy();

    }

    chartGauss = new Chart(

        document.getElementById(
        "grafikGauss"),

        {

            type:"line",

            data:{

                labels:labels,

                datasets:[{

                    label:
                    "Konvergensi X",

                    data:dataX,

                    borderWidth:2

                }]
            }
        }
    );
}


//=====================
// RESET SEGI EMPAT
//=====================

function resetSegi(){

    document.getElementById(
    "a").value="";

    document.getElementById(
    "b").value="";

    document.getElementById(
    "n").value="";

    document.getElementById(
    "hasilSegi").innerHTML=

    "Belum ada hasil.";

    document.getElementById(
    "iterasiSegi").innerHTML=
    "";

    if(chartSegi){

        chartSegi.destroy();

        chartSegi = null;
    }
}


//=====================
// RESET GAUSS
//=====================

function resetGauss(){

    let id=[

    "a11","a12","a13","b1",

    "a21","a22","a23","b2",

    "a31","a32","a33","b3"

    ];

    for(let i=0;i<id.length;i++){

        document.getElementById(
        id[i]).value="";
    }

    document.getElementById(
    "hasilGauss").innerHTML=

    "Belum ada hasil.";

    document.getElementById(
    "iterasiGauss").innerHTML=
    "";

    if(chartGauss){

        chartGauss.destroy();

        chartGauss = null;
    }
}
