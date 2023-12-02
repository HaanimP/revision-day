let purchased = []
let main = document.querySelector('main')

let items = JSON.parse(localStorage.getItem('items'))

main.innerHTML = items.map(function(item, index){
    return `
    <div>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <button value="${index}" data-add>Add to cart</button>
    </div>`
}).join('')

function add(index){
    purchased.push(items[index])
}
main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
        //alert('button pressed')
        add(event.target.value)
    }
})