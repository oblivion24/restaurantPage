function createDivForContacts(){
    document.getElementById('content').innerHTML = ""; 
    console.log('contacts page initialized ');
    const div = document.createElement('div');
    div.className = 'contacts';
    const h1 = document.createElement('h2');
    h1.textContent = 'Contacts Details:';
    div.appendChild(h1);
    const phone = document.createElement('h4');
    phone.textContent = '1234567890';
    div.appendChild(phone);
    const email = document.createElement('h4');
    email.textContent = 'zayka@gmail.com';
    div.appendChild(email);
    const telephone = document.createElement('h4');
    telephone.textContent = '0621-1234';
    div.appendChild(telephone);
    content.appendChild(div);
}
export{createDivForContacts};