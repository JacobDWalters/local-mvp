
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
loveBtn.click(() => {
    loveBtn.toggleClass(classes);
});

let classes = ['love', 'nolove'];
// when form is submitted grab the info
$('.create').submit((event) => {
    event.preventDefault();

    const data = Array.from($('.create input')).reduce((acc, input) => ({
        ...acc, [input.id]: input.value }), {});
    
    data.category = $("#category").val();

    $('.create').trigger("reset");

    // prepare and send fetch request
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    // get the data back after it has been added to the database
    fetch('/business', options).then(res => {
        res.json().then(newBusiness => {
            console.log(newBusiness);

            //create a card for the newly added business
            const { category, description, business_name } = newBusiness;
            $('.business-cards').append(
                `<div class="card">
                    <h3>${business_name}</h3>
                    <img src="/pictures/ex_local_pic.jpg" alt="Local Business Pic" class="business-pic">
                    <h4 class="category">Category: ${category}</h4>
                    <p class="description">${description}</p>
                    <button class="nolove" id="${business_name}">❤</button>
                </div>`
            );

        });
    }); 
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