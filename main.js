// // // MILESTONE 1 
const list=[
    'Ryzen 5800',
    'RTX 4090',
    '32gb Trident Z',
    'MSI z390',
    'Cooler Master Liquid 360',
]
const listCont = document.querySelector("ul")

console.log(list)
for (let x = 0; x < list.length; x++) {
    console.log(x , "ciclo for");
    const contenuto = list[x];
    const listEl  = document.createElement("li");
    listEl.innerHTML = "ciclo for" + " " +  contenuto ;
    listCont.append(listEl);   
}

// // // MILESTONE 2

x = 0
while(x < list.length){
    x++;
    console.log(x , "ciclo while");
    const contenuto = list[x];
    const listEl  = document.createElement("li");
    listEl.innerHTML = "ciclo while" + " " + contenuto ;
    listCont.append(listEl); 
}