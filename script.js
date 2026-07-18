//=====================
// VARIABEL GRAFIK
//=====================

let chartSegi = null;
let chartGauss = null;


//=====================
// LOGIN
//=====================

function segiEmpat(){

    document.getElementById(
    "hasilSegi").innerHTML =
    "Sedang menghitung...";

    let a = Number(
    document.getElementById("a").value);

    let b = Number(
    document.getElementById("b").value);

    let n = Number(
    document.getElementById("n").value);

    if(n <= 0){

        alert(
        "Jumlah pias harus lebih dari 0");

        return;
    }

    let h = (b-a)/n;

    let luas = 0;

    let labels = [];
    let data = [];

    let langkah = "";

    let tabel = `
    <table border="1">

        <tr>

            <th>Iterasi</th>
            <th>x</th>
            <th>f(x)</th>

        </tr>
    `;

    for(let i=0;i<=n;i++){

        let x = a + (i*h);

        let fx = x*x;

        tabel += `
        <tr>

            <td>${i}</td>

            <td>${x}</td>

            <td>${fx}</td>

        </tr>
        `;

        langkah += `

        <div class="langkah">

        <b>Iterasi ${i}</b>

        <br><br>

        x${i} = ${x}

        <br>

        f(${x}) = ${x}²

        <br>

        f(${x}) = ${fx}

        </div>

        <br>
        `;

        labels.push(x);

        data.push(fx);

        // Perhitungan Segi Empat Gabungan
        // hanya sampai n-1

        if(i < n){

            luas += fx;
        }
    }

    luas *= h;

    langkah += `

    <div class="langkah">

    <b>Rumus Metode Segi Empat Gabungan</b>

    <br><br>

    h = (${b}-${a})/${n}

    <br>

    h = ${h}

    <br><br>

    Σf(x) = ${(luas/h).toFixed(4)}

    <br><br>

    L = h × Σf(x)

    <br>

    L = ${h} × ${(luas/h).toFixed(4)}

    <br>

    L = ${luas.toFixed(4)}

    </div>
    `;

    tabel += "</table>";

    document.getElementById(
    "hasilSegi").innerHTML =

    "✅ Perhitungan Berhasil" +

    "<br><br>" +

    "Luas = " +

    luas.toFixed(4);

    document.getElementById(
    "iterasiSegi").innerHTML =
    tabel;

    document.getElementById(
    "langkahSegi").innerHTML =
    langkah;

    if(chartSegi){

        chartSegi.destroy();
    }

    chartSegi = new Chart(

        document.getElementById(
        "grafikSegi"),

        {

            data:{

                labels:labels,

                datasets:[

                    {

                        type:'line',

                        label:'f(x)=x²',

                        data:data,

                        borderWidth:2,

                        tension:0.4

                    },

                    {

                        type:'bar',

                        label:'Pias',

                        data:data

                    }

                ]
            },

            options:{

                responsive:true,

                plugins:{

                    title:{

                        display:true,

                        text:
                        "Grafik Metode Segi Empat Gabungan"

                    }
                }
            }
        }
    );
}
//=====================
// METODE GAUSS SEIDEL
//=====================

function gauss(){

    let a11 = Number(document.getElementById("a11").value);
    let a12 = Number(document.getElementById("a12").value);
    let a13 = Number(document.getElementById("a13").value);
    let b1  = Number(document.getElementById("b1").value);

    let a21 = Number(document.getElementById("a21").value);
    let a22 = Number(document.getElementById("a22").value);
    let a23 = Number(document.getElementById("a23").value);
    let b2  = Number(document.getElementById("b2").value);

    let a31 = Number(document.getElementById("a31").value);
    let a32 = Number(document.getElementById("a32").value);
    let a33 = Number(document.getElementById("a33").value);
    let b3  = Number(document.getElementById("b3").value);

    if(a11 == 0 || a22 == 0 || a33 == 0){

        alert("Diagonal utama tidak boleh 0!");
        return;

    }

    let x = 0;
    let y = 0;
    let z = 0;

    let error = 100;
    let iterasi = 0;

    let tabel = "";
    let langkah = "";

    let labels = [];
    let dataX = [];
    let dataY = [];
    let dataZ = [];
    let dataError = [];

    while(error > 0.001 && iterasi < 20){

        let xLama = x;
        let yLama = y;
        let zLama = z;

        x = (b1 - (a12*y) - (a13*z)) / a11;

        y = (b2 - (a21*x) - (a23*z)) / a22;

        z = (b3 - (a31*x) - (a32*y)) / a33;

        let ex = Math.abs(x - xLama);
        let ey = Math.abs(y - yLama);
        let ez = Math.abs(z - zLama);

        error = Math.max(ex, ey, ez);
        dataError.push(error);

        iterasi++;

        labels.push(iterasi);

        dataX.push(x);
        dataY.push(y);
        dataZ.push(z);

        tabel += `
        <tr>
            <td>${iterasi}</td>
            <td>${x.toFixed(4)}</td>
            <td>${y.toFixed(4)}</td>
            <td>${z.toFixed(4)}</td>
            <td>${error.toFixed(6)}</td>
        </tr>
        `;

        langkah += `
        <div class="langkah">

            <b>Iterasi ${iterasi}</b>

            <br><br>

            X = ${x.toFixed(4)}

            <br>

            Y = ${y.toFixed(4)}

            <br>

            Z = ${z.toFixed(4)}

            <br><br>

            Galat = ${error.toFixed(6)}

        </div>

        <br>
        `;
    }

    document.getElementById("hasilGauss").innerHTML = `

        <b>Hasil Akhir</b>

        <br><br>

        X = ${x.toFixed(4)}

        <br>

        Y = ${y.toFixed(4)}

        <br>

        Z = ${z.toFixed(4)}

        <br><br>

        Iterasi Berhenti :
        ${iterasi}

        <br>

        Galat Akhir :
        ${error.toFixed(6)}

        <br><br>

        Status :
        Konvergen

    `;

    document.getElementById("iterasiGauss").innerHTML = `

        <table border="1">

            <tr>
                <th>Iterasi</th>
                <th>X</th>
                <th>Y</th>
                <th>Z</th>
                <th>Galat</th>
            </tr>

            ${tabel}

        </table>

    `;

    document.getElementById(
    "langkahGauss").innerHTML =
    langkah;

    if(chartGauss){

        chartGauss.destroy();

    }

    chartGauss = new Chart(

        document.getElementById(
        "grafikGauss"),

        {

            type:'line',

            data:{

                labels:labels,

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
    },

    {
        label:'Galat',
        data:dataError
    }

]
            },

            options:{

                responsive:true,

                plugins:{

                    title:{

                        display:true,

                        text:
                        "Grafik Konvergensi Gauss-Seidel"

                    }

                }

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
