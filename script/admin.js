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
localStorage.setItem('items',JSON.stringify(items))

