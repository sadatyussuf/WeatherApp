const btn = document.querySelector('.btn')
const input = document.querySelector('.form-control');
const row = document.querySelector('.rows')

const url = "http://api.openweathermap.org/data/2.5/weather?q="
const apiKey ="&appid=bfc7de9a9c74f31c8d56bfe3ce52dcd9"
const unit = "&units=metric"




btn.addEventListener('click',()=>{

    const value = input.value;

    var requestOptions = {
        method: 'GET'
        };

    fetch(url+value+apiKey+unit, requestOptions)
        .then(response => response.json())
        .then(result => { 
            console.log(result)//result.weather[0]['description']
        //style="width: 18rem;"
            const output = `

        <div class="card text-center" >

            <div class="card-body">
                <h5 class="card-title">${result.name} <sup>${result.sys['country']}</sup></h5>

                <h6>${result.main['temp']}<sup>°C</sup></h6>

                <div><img src="http://openweathermap.org/img/w/${result.weather[0]['icon']}.png" alt='${result.weather[0]['description']}'></div>


                <p class="card-text">${result.weather[0]['description']}</p>
            
            </div>

        </div>

            `
        
        
        row.innerHTML += output

        })
        .catch(error => console.log('error', error));

input.value = ''




})


