
function createDivForMenu(){
    
    document.getElementById('content').innerHTML = ""; 
    console.log('menu module executed');
    const div = document.createElement('div');
    div.className = 'menu';
    const tea = document.createElement('h3');
    tea.textContent = 'TEA @ 5/-';
    div.appendChild(tea);
    const coffee = document.createElement('h3');
    coffee.textContent = 'COFFEE @ 5/-';
    div.appendChild(coffee);
    const pakoda = document.createElement('h3');
    pakoda.textContent = 'PAKODA @ 5/-';
    div.appendChild(pakoda);
    const biryani = document.createElement('h3');
    biryani.textContent = "BIRYANI @ 50/-plate";
    div.appendChild(biryani);
    content.appendChild(div);
}
export{createDivForMenu};