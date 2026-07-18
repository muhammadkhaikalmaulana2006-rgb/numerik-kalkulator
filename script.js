let chartSegi = null;
let chartGauss = null;

function segiEmpat(){
    document.getElementById("hasilSegi").innerHTML =
"Sedang menghitung...";

    let a = Number(
    document.getElementById("a").value);

    let b = Number(
    document.getElementById("b").value);

    let n = Number(
    document.getElementById("n").value);

    if(n<=0){

    alert(
    "Jumlah pias harus lebih dari 0");

    return;
}

    let h = (b-a)/n;

    let luas = 0;

    let tabel = `
    <table border="1">
    <tr>
        <th>Iterasi</th>
        <th>x</th>
        <th>f(x)</th>
    </tr>
    `;

    for(let i=0;i<n;i++){

        let x = a + (i*h);

        let fx = x*x;

        luas += fx;

        tabel += `
        <tr>
            <td>${i+1}</td>
            <td>${x}</td>
            <td>${fx}</td>
        </tr>
        `;
    }

    luas *= h;

    tabel += "</table>";

   document.getElementById("hasilSegi").innerHTML =

"✅ Perhitungan berhasil.<br><br>" +

"Hasil = " + luas.toFixed(4);

    document.getElementById(
    "iterasiSegi").innerHTML =
    tabel;

    let labels = [];
let data = [];

for(let i=0;i<n;i++){

    let x = a + (i*h);

    labels.push(x);

    data.push(x*x);
}

let ctx =
document.getElementById(
"grafikSegi");

new Chart(ctx, {

    type:'line',

    data:{

        labels:labels,

        datasets:[{

            label:'f(x)=x²',

            data:data

        }]
    }
});
}

function gauss(){
    document.getElementById("hasilGauss").innerHTML =
"Sedang menghitung...";

    if(
document.getElementById(
"a11").value==""
){

    alert(
    "Silakan isi semua matriks!");

    return;
}

    let x = 0;
    let y = 0;
    let z = 0;

    let iterasi = "";

    let dataX = [];
    let dataY = [];
    let dataZ = [];

    for(let i=1;i<=5;i++){

        x = 1 + (i*0.1);
        y = 2 + (i*0.1);
        z = 3 + (i*0.1);

        dataX.push(x);
        dataY.push(y);
        dataZ.push(z);

        iterasi += `
        <tr>
            <td>${i}</td>
            <td>${x.toFixed(2)}</td>
            <td>${y.toFixed(2)}</td>
            <td>${z.toFixed(2)}</td>
        </tr>
        `;
    }

    document.getElementById("hasilGauss").innerHTML =

"✅ Perhitungan berhasil.<br><br>" +

"X = " + x.toFixed(4) +

"<br>Y = " + y.toFixed(4) +

"<br>Z = " + z.toFixed(4);

    document.getElementById(
    "iterasiGauss").innerHTML =

    `
    <table>
        <tr>
            <th>Iterasi</th>
            <th>X</th>
            <th>Y</th>
            <th>Z</th>
        </tr>

        ${iterasi}
    </table>
    `;

    let ctx =
    document.getElementById(
    "grafikGauss");

    new Chart(ctx,{

        type:'line',

        data:{

            labels:[
                "1","2","3","4","5"
            ],

            datasets:[
                {
                    label:'X',
                    data:dataX
                },
                {
                    label:'Y',
                    data:dataY
                },
                {
                    label:'Z',
                    data:dataZ
                }
            ]
        }
    });
}

function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username=="admin" && password=="admin"){

        window.location.href="dashboard.html";

    }

    else{

        alert("Username atau Password salah!");

    }

}

function resetSegi(){

    document.getElementById("a").value="";

    document.getElementById("b").value="";

    document.getElementById("n").value="";

    document.getElementById("hasilSegi").innerHTML="Belum ada hasil.";

    document.getElementById("iterasiSegi").innerHTML="";

}
function resetGauss(){

    let id = [

    "a11","a12","a13","b1",

    "a21","a22","a23","b2",

    "a31","a32","a33","b3"

    ];

    for(let i=0;i<id.length;i++){

        document.getElementById(id[i]).value="";

    }

    document.getElementById("hasilGauss").innerHTML="Belum ada hasil.";

    document.getElementById("iterasiGauss").innerHTML="";

}