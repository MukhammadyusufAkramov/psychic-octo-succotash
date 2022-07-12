
let api = 'https://fakestoreapi.com/products'

fetch(api).then((res)=>res.json()).then((res)=>{
    var text = ''
    res.map((item)=>{
        text += `
        <div class="card" style="width: 18rem;">
            <img style='width:100%; height:200px; object-fit:container;' src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.title.slice(0, 10)}</h5>
            <p class="card-text">${item.description.slice(0, 25)}</p>
            </div>
        </div>
        `
       // document.getElementById('products').innerHTML = text
    })
    document.getElementById('products').innerHTML = text
});
