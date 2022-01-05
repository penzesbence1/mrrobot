
function betolt(){
    fetch("../../server/03idosav.php")
    .then((valasz) => valasz.json()) //formantum
    .then((idosavok) => render(idosavok));
}

betolt();


function render(adat) {
  
    let adatok = "<option value='' selected disabled hidden>Válassz idősávot!</option>";
    for (let obj of adat) {
        adatok += `<option value="${obj.idosavid}" >${obj.idosav}</option>`;
        //   cucok = obj.nev;
    }

    document.querySelector("select").innerHTML = adatok;
}




function mutasd(obj) {
   
    document.getElementById("ideird").innerHTML = obj.value;

    fetch("../../server/03idosavir.php?id=" + obj.value)
        .then((valasz) => valasz.json()) //formantum
        .then((adat) => render2(adat));
}

let tablazat = '<table id="table" class="table table-striped table-bordered table-sm" cellspacing="0" width = "100%" >'+

'<thead class="thead-dark " style="position:sticky;" > <tr> <th style="" >Színész</th><th style="">Karakter</th><th style="">Epizódok</th></tr></thead>'+


'<tbody></tbody> </table>'



function render2(adat) {
    document.getElementById("ideird").innerHTML = tablazat;
    let adatok = "";
    let ido = "";
    for (let obj of adat) {
        // adatok+=`${obj.szinesz}<br>`
        //   cucok = obj.nev;
        adatok += `<tr><td>${obj.szinesz}</td><td>${obj.karakter}</td><td>${obj.epizodok}</td></tr>`;
    }

    document.querySelector("tbody").innerHTML = adatok;
   
    


}


function addhozza(ertek) {

    if(ertek!=null){

    fetch("../../server/03idosavhozzaad.php?ujidosav="+ertek)
    .then((valasz) => valasz.json()) //formantum
    .then((adat) =>  {
        if(adat){
            window.alert("Hozzáadás sikeres!");
            betolt();
        }
    })
}


}