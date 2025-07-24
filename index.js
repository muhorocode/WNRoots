document.addEventListener('DOMContentLoaded',()=>{
    // add to cart buttons
    const addToCartBtns=document.querySelectorAll('.product-card button')

    addToCartBtns.forEach(button=>{
        button.addEventListener('click',()=>{
        const productName=button.parentElement.querySelector('h3').textContent
        alert(`${productName} has been added to your cart!`)
        })
    })

    // smooth scroll when clicking 'shop now'
    const shopNowBtn=document.querySelector('.btn')
    const featuredProducts=document.querySelector('.featured-products')

    if(shopNowBtn && featuredProducts){
        shopNowBtn.addEventListener('click',()=>{
            featuredProducts.scrollIntoView({behavior:'smooth'})
        })
    }
})