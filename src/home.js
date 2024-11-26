
function createDivForHome(){
    console.log('home page initialized ');
    
    document.getElementById('content').innerHTML = ""; 
    
    //create heading for the restaurant
    const heading = document.createElement('h1');
    heading.className = 'heading';
    heading.textContent = 'Zayka Family Restaurant';
    content.appendChild(heading);
    //image for front page 
    const image = document.createElement('img');
    image.alt = 'Biryani';
    image.src = '#';
    content.appendChild(image);
    const div = document.createElement('div');
    div.className = 'home';
    const para1 = document.createElement('p');
    para1.textContent = `Hello everyone, Welcome to your most beloved restaurant.Here we strive best 
    to serve you the best quality food at the most affordable price. It is not just another business,
    we are mission driven dedicated people for the love food and its importance.
    Good food is not only just another choice you have, it is passion that how far can you
     go for the best food which of course serves everyones body well. Here you will find 
     the best possible Zayka like no where on the earth. Although its not from Jannat but 
     it the best around here.`;
    div.appendChild(para1);
    content.appendChild(div);
}
export{createDivForHome};