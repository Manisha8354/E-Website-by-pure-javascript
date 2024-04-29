let root=document.getElementById('root')
let cartBox = document.querySelector('.cartBox')
let btn=document.getElementById('btn')
async function getData(){
    let raw= await fetch('https://fakestoreapi.com/products')
    let data=await raw.json()
    return data
}
getData()

.then((data)=>{
    console.log(data)

    function displayData(){
        root.innerHTML=''
    data.map((item)=>{
        let x=''
        for(let i=1; i<=Math.round(item.rating.rate);i++){
            x+='⭐'
        }
        
        let card=document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`<img src="${item.image}" alt="">
        <h2>${item.title}</h2>
        <h3>category:- ${item.category}</h3>
        <h2>price:- ${Math.ceil (item.price)*10}</h2>
        <h3>rating:- ${item.rating.rate}${x}</h3>
        <button onclick="addToCard(${item.id})">Add To Card</button>`
        root.appendChild(card)
    })
}
    window.addToCard=(PId)=>{
        let product=data.find((item)=>PId===item.id)
        if(product){
            let row=document.createElement('div')
            row.classList.add('row')
            row.innerHTML=`
            <div>
        <h2>${product.title}</h2>
        <h3>Price:- ${Math.ceil(product.price)*10}</h3>
        </div>
        <button onclick="removeToCart(${product.id})">Remove</button>`

        cartBox.prepend(row)

           let cartItem= JSON.parse(localStorage.getItem('cart')) || []
           cartItem.push(product)
           localStorage.setItem('cart',JSON.stringify((cartItem)))

           sp.innerHTML=`${cartItem.length}`
           let final = cartItem.reduce((x, y) => x + (Math.ceil(y.price) * 10), 0)
           let tp = document.getElementById('tp')
           tp.innerHTML = `${final}`
        }
    }

    let cartItem=JSON.parse(localStorage.getItem('cart')) || []
    sp.innerHTML=`${cartItem.length}`
    

    function displayCart(){
        cartBox.innerHTML = ''
        cartItem.map((item)=>{
            let row=document.createElement('div')
            row.classList.add('row')
            row.innerHTML=`
            <div>
        <h2>${item.title}</h2>
        <h3>Price:- ${Math.ceil(item.price)*10}</h3>
        </div>
        <button onclick="removeToCart(${item.id})">Remove</button>`

        cartBox.appendChild(row)
        })

        let last = document.createElement('div')
            last.classList.add('last')
            last.innerHTML = `
            <h2>Total Price:- </h2>
            <h2 id='tp'></h2>
            `
            cartBox.appendChild(last)
            let final = cartItem.reduce((x, y) => x + (Math.ceil(y.price) * 10), 0)
            let tp = document.getElementById('tp')
            tp.innerHTML = `${final}`


            

    }

    window.removeToCart = (index) => {
        let cartItem = JSON.parse(localStorage.getItem('cart'))
        cartItem.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cartItem))
        sp.innerHTML = `${cartItem.length}`

        cartBox.innerHTML = ''
        cartItem.map((item, index) => {
            let row = document.createElement('div')
            row.classList.add('row')
            row.innerHTML = `
        <div>
        <h2>${item.title}</h2>
        <h3>Price:- ${Math.ceil(item.price) * 10}</h3>
        </div>
        <button onclick="removeToCart(${index})">Remove</button>
        `
            cartBox.appendChild(row)
        })

        let last = document.createElement('div')
            last.classList.add('last')
            last.innerHTML = `
            <h2>Total Price:- </h2>
            <h2 id='tp'></h2>
            `
            cartBox.appendChild(last)
            let final = cartItem.reduce((x, y) => x + (Math.ceil(y.price) * 10), 0)
            let tp = document.getElementById('tp')
            tp.innerHTML = `${final}`

        
    }

    window.mens=()=>{
        let result=data.filter((item)=>item.category=="men's clothing")
        console.log(result)
        root.innerHTML=''
        result.map((item)=>{
            let x=''
            for(let i=1; i<=Math.round(item.rating.rate);i++){
                x+='⭐'
            }
            
            let card=document.createElement('div')
            card.classList.add('card')
            card.innerHTML=`<img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <h3>category:- ${item.category}</h3>
            <h2>price:- ${Math.ceil (item.price)*10}</h2>
            <h3>rating:- ${item.rating.rate}${x}</h3>
            <button onclick="addToCard(${item.id})">Add To Card</button>`
            root.appendChild(card)
        })

    }
    window.ladies=()=>{
        let result=data.filter((item)=>item.category=="women's clothing")
        console.log(result)
        root.innerHTML=''
        result.map((item)=>{
            let x=''
            for(let i=1; i<=Math.round(item.rating.rate);i++){
                x+='⭐'
            }
            
            let card=document.createElement('div')
            card.classList.add('card')
            card.innerHTML=`<img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <h3>category:- ${item.category}</h3>
            <h2>price:- ${Math.ceil (item.price)*10}</h2>
            <h3>rating:- ${item.rating.rate}${x}</h3>
            <button onclick="addToCard(${item.id})">Add To Card</button>`
            root.appendChild(card)
        })

    }

    window.Electronics=()=>{
        let result=data.filter((item)=>item.category=="electronics")
        console.log(result)
        root.innerHTML=''
        result.map((item)=>{
            let x=''
            for(let i=1; i<=Math.round(item.rating.rate);i++){
                x+='⭐'
            }
            
            let card=document.createElement('div')
            card.classList.add('card')
            card.innerHTML=`<img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <h3>category:- ${item.category}</h3>
            <h2>price:- ${Math.ceil (item.price)*10}</h2>
            <h3>rating:- ${item.rating.rate}${x}</h3>
            <button onclick="addToCard(${item.id})">Add To Card</button>`
            root.appendChild(card)
        })

    }
    window.jewellery=()=>{
        let result=data.filter((item)=>item.category=="jewelery")
        console.log(result)
        root.innerHTML=''
        result.map((item)=>{
            let x=''
            for(let i=1; i<=Math.round(item.rating.rate);i++){
                x+='⭐'
            }
            
            let card=document.createElement('div')
            card.classList.add('card')
            card.innerHTML=`<img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <h3>category:- ${item.category}</h3>
            <h2>price:- ${Math.ceil (item.price)*10}</h2>
            <h3>rating:- ${item.rating.rate}${x}</h3>
            <button onclick="addToCard(${item.id})">Add To Card</button>`
            root.appendChild(card)
        })

    }

    window.allData=()=>{
        
        root.innerHTML=''
        data.map((item)=>{
            let x=''
            for(let i=1; i<=Math.round(item.rating.rate);i++){
                x+='⭐'
            }
            
            let card=document.createElement('div')
            card.classList.add('card')
            card.innerHTML=`<img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <h3>category:- ${item.category}</h3>
            <h2>price:- ${Math.ceil (item.price)*10}</h2>
            <h3>rating:- ${item.rating.rate}${x}</h3>
            <button onclick="addToCard(${item.id})">Add To Card</button>`
            root.appendChild(card)
        })
    }
    displayCart()
    displayData()


    let flag = 0
    btn.addEventListener('click', ()=>{
        if(flag == 0){
            cartBox.classList.add('show')
            flag = 1
        }else{
            cartBox.classList.remove('show')
            flag = 0
        }
    })
})
.catch((err)=>{
    console.log(err)
})


