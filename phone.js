const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText)

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
    // .then(data => console.log(data.data))


}




const displaySearchResult = mobiles => {
    const mobileDetiles = document.getElementById('countrie-details');
    mobileDetiles.textContent = '';
    const Result = document.getElementById('search-result');

    Result.textContent = '';

    if (mobiles[0]

        === undefined) {
        const div = document.createElement('div');
        div.classList.add('div1')
        div.innerHTML = `<h1 class="text-secondary  ">No Result Found</h1>`;
        Result.appendChild(div)


    }
    else {
        for (const mobile of mobiles) {
            // console.log(mobile.length)

            const div = document.createElement('div');
            div.innerHTML = `
       
                <div id="style" class="card h-100 rounded-3 shadow-lg bg-body rounded">
                    <img  src="${mobile.image}" class="card-img-top w-50 mx-auto mt-3" alt="">
                    <div class="card-body">
                        <h3 class="card-title ">${mobile.phone_name}</h3>
                        <h5 class="card-title">Brand : ${mobile.brand}</h5>
                        <button onclick="loadPhoneById('${mobile.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">More Details</button>
                       
                    </div>
                </div>
              
        `;
            Result.appendChild(div)
        }

    }

}

const loadPhoneById = phone => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`
    fetch(url)
        .then(res => res.json())
        .then(data => mobileDetiles(data))
    // .then(data => console.log(data))
}

const mobileDetiles = mobile => {
    console.log(mobile.data)
    const mobileDetiles = document.getElementById('modal');
    mobileDetiles.textContent = '';

    const div = document.createElement('div');
    div.innerText = mobile.data.brand;
    div.innerHTML = `

    <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${mobile.data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="row g-0 ">
        <div class="col-md-4 text-center m-auto  ">
            <img src="${mobile.data.image}" class="img-fluid rounded-start w-100 " alt="...">
        </div>
        <div class="col-md-12 col-12 col-lg-12">
        <div class="card-body  m-0 p-0">
        <div class="card w-100" >
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="card-title"> ${mobile.data.name}
            <h6>${mobile.data.brand}</>
            </h5></li>
           
                <li class="list-group-item">
               
                <p class="card-text"> <span>releaseDate</span> :${mobile.data.releaseDate}</p></li>
            
            <li class="list-group-item"> <p class="card-text"><span>displaySize</span> :${mobile.data.mainFeatures.displaySize}</p></li>
            <li class="list-group-item"><p class="card-text"><span>memory</span> :${mobile.data.mainFeatures.memory}</p></li>
            <li class="list-group-item"><p class="card-text"><span>storage</span> :${mobile.data.mainFeatures.storage}</p></li>
            <li class="list-group-item"><p class="card-text"><span>sensors</span> :${mobile.data.mainFeatures.sensors}</p></li>
            <li class="list-group-item"><p class="card-text"><span>chipSet</span> :${mobile.data.mainFeatures.chipSet}</p></li>
            <li class="list-group-item"><p class="card-text"><span>others</span> </p></li>
            <li class="list-group-item"><p class="card-text"><span>Bluetooth</span> :${mobile.data.others.Bluetooth}</p></li>
            <li class="list-group-item"><p class="card-text"><span>GPS</span> :${mobile.data.others.GPS}</p></li>
            <li class="list-group-item"><p class="card-text"><span>NFC,Radio,USB</span> :${mobile.data.others.NFC},${mobile.data.others.Radio},${mobile.data.others.USB}</p></li>
            <li class="list-group-item"><p class="card-text"><span>WLAN</span> :${mobile.data.others.WLAN}</p></li>
            <li class="list-group-item"><p class="card-text"><span>GPS</span> :${mobile.data.others.GPS}</p></li>
            
        </ul>
        </div>
            </div>
        </div>
        </div> 
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save</button>
        </div>
  
 
`;
    div.classList.add('styleDiv')
    mobileDetiles.appendChild(div)
}





const searchPhone2 = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=samsung`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult2(data.data))
    // .then(data => console.log(data.data))
}

const displaySearchResult2 = mobiles => {
    const mobileDetiles = document.getElementById('modal');
    mobileDetiles.textContent = '';
    const Result = document.getElementById('search-result');

    Result.textContent = '';


    for (const mobile of mobiles) {
        // console.log(mobile.length)

        const div = document.createElement('div');
        div.innerHTML = `
       
                <div id="style" class="card h-100 rounded-3 shadow-lg bg-body rounded">
                    <img  src="${mobile.image}" class="card-img-top w-50 mx-auto mt-3" alt="">
                    <div class="card-body">
                        <h3 class="card-title ">${mobile.phone_name}</h3>
                        <h5 class="card-title">Brand : ${mobile.brand}</h5>
                        <button onclick="loadPhoneById('${mobile.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">More Details</button>
                       
                    </div>
                </div>
              
        `;
        Result.appendChild(div)


    }

}

searchPhone2()













