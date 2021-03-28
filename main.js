

// get the modal element
let modal = document.getElementById('modal');

//get modal button Passport
let modalBtnPassport = document.getElementById('modalBtnPassport');

//get close button 
let closeBtn = document.getElementsByClassName('closeBtn')[0];


//Modal Open 
document.getElementById('modalBtnPassport').addEventListener('click', function () {
    modal.style.display = "block";
    pointer.style.display = "block";
});

//Modal Close 
document.getElementsByClassName('closeBtn')[0].addEventListener('click', function () {
    modal.style.display = 'none';
    pointer.style.display = "none";
})