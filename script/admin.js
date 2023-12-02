//this is where all products will be stored
let items = []
// Object created manually
let object1 = {
    id: 1,
    name: 'Nike Shoe',
    description: 'This is better than the original',
    price: 800,
    url: 'ehgvsdvebg'
}
// Function to create objects
function Constructor(id,name,description,price,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}
//second item created using constructor 
let item2 = new Constructor(2, 'Another Nike', 'This is better than the fake', 700, 'jihuhunnu')
//pushing items into array
items.push(object1,item2)
//sets the array to local storage
localStorage.setItem('items',JSON.stringify(items))
// sets the array from local storage to array(items) in code
items = JSON.parse(localStorage.getItem('items'))

let table = document.querySelector('table')
let products = items.map(function(item,index){
    //console.log(item);
    //console.log(index);
    return `<tr>
           <td>${item.id}</td>
           <td>${item.name}</td>
           <td>R${item.price}</td>
           <td>${item.description}</td>
           <td><img src="${item.url}"></img></td>
           <td><button>Edit</button></td>
           <td><button class="delete">Delete</button></td>
           </tr>`
})

function remove() {
    alert('clicked ')
}
table.innerHTML = products.join('')
//table.style.display = 'none'
let deleteButton = document.querySelector('.delete')
table.addEventListener('click', function(){
    if(event.target.classList.contains('delete')){
        remove()
    }
})