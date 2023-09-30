console.log(`Mangesh Welcomes You !!!`)

let body = document.querySelector(`body`)
const nav = document.querySelector(`.navbar`)
const jsButton = document.querySelectorAll(`.button`)
// console.log(jsButton)   GREAT

jsButton.forEach(button => {
    console.log(button)
    
    button.addEventListener(`click` , function(event){
        console.log(event)
        console.log(event.target)
        if (event.target.id === `green`) {
            console.log(' body.style.backgroundColor =`green` ' )
            body.style.backgroundColor =`#07ff4e`
            nav.style.backgroundColor =`rgb(63, 147, 231)`;
            // nav.style.backgroundColor = rgb(63, 147, 231);
            // document.body.navbar.style.backgroundColor = `red`
        }
        if (event.target.id === `yellow`) {
            body.style.backgroundColor =`yellow`
            nav.style.backgroundColor =`rgb(63, 147, 231)`;
        }
        if (event.target.id === `grey`) {
            body.style.backgroundColor =`grey`
            nav.style.backgroundColor =`rgb(63, 147, 231)`;
        }
        if (event.target.id === `red`) {
            body.style.backgroundColor =`red`
            nav.style.backgroundColor =`rgb(63, 147, 231)`;
        }
        if (event.target.id === `orange`) {
            body.style.backgroundColor =`orange`
            nav.style.backgroundColor =`rgb(63, 147, 231)`;
}

    })


    
});