const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const displayPhones = (data) => {

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    data = data.slice(0, 20);
    if (data.length === 0) {
        document.getElementById('not-found').classList.remove('d-none');
    }
    else {
        document.getElementById('not-found').classList.add('d-none');
    }
    for (let phone of data) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML = `
        <div class="card h-100">
            <img class="img-fluid p-3" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.slug}</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(makeDiv);
        
    }
    toggleLoader(false)
};

const displayPhone = () => {
    toggleLoader(true);
    const search = document.getElementById('search-phone').value;
    document.getElementById('search-phone').value = '';
    loadPhones(search)


};

const toggleLoader = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

// loadPhones('iphone')