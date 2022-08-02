
// adding the map to the page
function initMap(){
    const location = { lat: 39.34, lng: -104.89 }; 
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: location,
    });
}

window.initMap = initMap;

// love button feature
let loveBtn = $('button');
let classes = ['love', 'nolove'];
loveBtn.click(() => {
    loveBtn.toggleClass(classes);
});

//CRUD functions to the database 

const getAll = () => {
    $.get('/business', (data) => {

    });

    $.get('/owners', (str) => {

    });
};

const getOne = () => {
    $.get('/business/:id', (data) => {

    });
    $.get('/owners', (str) => {

    });
}

const create = () => {
    $.post('/business', (data) => {

    });
    $.post('/owners', (str) => {

    });
}