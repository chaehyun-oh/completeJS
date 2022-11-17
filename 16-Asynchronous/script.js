'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
// old school way
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    // console.log(request.responseText);

    request.addEventListener('load', function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);
        console.log(data.name);

        const html = ` <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies}</p>
    </div>
  </article>`;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('portugal');
getCountryData('usa');

const renderCountry = function (data, className = ' ') {
  const html = ` <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // console.log(data.name);

    // render country1
    renderCountry(data);

    // Get neighbor
    const [neighbor] = data.borders;

    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });

  });
};

getCountryAndNeighbor('usa');

*/


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);

// console.log(request);

const renderCountry = function (data, className = ' ') {
  const html = ` <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
}

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     console.log(response);
//     return response.json();
//   }).then(function (data) {
//     console.log(data);
//     renderCountry(data[0])
//   })
// };

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`)
    }
    return response.json();
  })
}


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`)
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders?.[0];
//       const neighbor = 'qwefdqa';
//       if (!neighbor) return;

//       //  country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`)
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}!!`);
//       renderError(`Something went wrong... ${err.message}. Try again`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// };


const getCountryData = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];
      // const neighbor = 'qwefdqa';
      if (!neighbor) throw new Error('No neighbor found!');

      //  country 2
      return getJson(`https://restcountries.com/v3.1/alpha/${neighbor}`, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}!!`);
      renderError(`Something went wrong... ${err.message}. Try again`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
};


btn.addEventListener('click', function () {
  getCountryData('spain');

});

getCountryData('australia');
