fetch("../../server/02szerepek.php")
    .then((valasz) => valasz.json()) //formantum
    .then((adat) => render(adat));

function render(adat) {
    console.log(adat);
    let adatok = "";
    for (let obj of adat) {
        adatok += `<tr><td>${obj.szinesz}</td><td>${obj.karakter}</td><td>${obj.epizodok}</td></tr>`;
    }

    document.querySelector("tbody").innerHTML = adatok;

    let kulcsok = Object.keys(adat[0]);
    console.log(kulcsok);

    /*for(var i=0; i<4; i++){
    document.querySelector("tr").innerHTML +=`<th>${kulcsok[i]}</th>`
}

/*for(let kulcs of kulcsok){
    document.querySelector("tr").innerHTML +=`<th>${kulcs}</th>`
}*/
}