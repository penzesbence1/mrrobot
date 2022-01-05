
function betolt() {
    fetch("../../server/02szerepek.php")
    .then((valasz) => valasz.json()) //formantum
    .then((adat) => render(adat));
}

betolt();

function render(adat) {
    
    let adatok = "";
    let i=1;
    for (let obj of adat) {
        adatok += 
        `<tr><td>${obj.szinesz}</td><td>${obj.karakter}</td><td>${obj.epizodok}</td><td>
        <input style="margin-right:25px;"type="number" value=${obj.epizodok} id=`+i+`>
        <input class="btn btn-primary" type="Button" value="Módosít" onclick=modositas(document.getElementById('`+i+`'))>
        <input style="margin-left:25px;" class="btn btn-danger" type="Button" value="Törlés" onclick='torles(`+obj.id+`);'></td></tr>`;
    i++;
    }


    document.querySelector("tbody").innerHTML = adatok;

    let kulcsok = Object.keys(adat[0]);
   
}



function modositas(obj) {
    
    fetch("../../server/04modosit.php?epizod=" + obj.value+"&id=" + obj.id)
    
    .then((valasz) => valasz.json()) //formantum
    .then ((data)=>  {
        
        if(data){
             betolt();
             window.alert("Módosítás sikeres!");
        }else{
            window.alert("Módosítás sikertelen! (Az érték megegyezik.)");
        }
    })
    
}


function torles(obj) {
    console.log(obj);
    fetch("../../server/04torles.php?id="+obj)
    .then((valasz) => valasz.json()) //formantum
    .then ((data)=>  {
        
        if(data){
            betolt();
            window.alert("Törlés sikeres!");
       }else{
        window.alert("Törlés sikertelen!");
    }
     })
}