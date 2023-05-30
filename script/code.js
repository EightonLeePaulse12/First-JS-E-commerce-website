let products = document.querySelectorAll('#products')
let headphoness = document.querySelector('#headphones')
let dronee = document.querySelector('#drone')
let watchh = document.querySelector('#watch')
let numberOfItems = document.querySelector('#aweh')
let cart = []
let yes = document.querySelector('.cart')
let cartyes = document.querySelector('.contentsss')
let plus = document.querySelector('#plus')
let minus = document.querySelector('minus')


let headphones = {
    name:"White and grey wireless headphones",
    description: "A wireless headset with great features",
    price: "R2500.00"
}

let drone = {
    name:"Toy Drone",
    description: "A toy drone that will keep you entertained",
    price: "R10 000.00"
}

let watch = {
    name:"Black Smart Watch",
    description: "A smart watch meant for many different purposes",
    price:"R1750.00"
}

let theProducts = [headphones,drone,watch]

console.log(theProducts)

products.addEventListener('click',()=>{
    yes.style.visibility = 'visible'
    cartyes.style.visibility = 'visible'
})

products = [
    {
        id:1,
        name:"White and grey wireless headphones",
        description: "A wireless headset with great features",
        price: "R2500.00"
    }
    {
        id:1,
        name:"White and grey wireless headphones",
        description: "A wireless headset with great features",
        price: "R2500.00"
    }
    {
        id:1,
        name:"White and grey wireless headphones",
        description: "A wireless headset with great features",
        price: "R2500.00"
    }
    {
        id:1,
        name:"White and grey wireless headphones",
        description: "A wireless headset with great features",
        price: "R2500.00"
    }
    {
        id:1,
        name:"White and grey wireless headphones",
        description: "A wireless headset with great features",
        price: "R2500.00"
    }
]

