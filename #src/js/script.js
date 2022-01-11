window.addEventListener('DOMContentLoaded', () => {
    const addProduct = (buttonItemsSelector, resultItem, activeClass) => {
        const buttons = document.querySelectorAll(buttonItemsSelector);
        const resultPrice = document.querySelector(resultItem);
    
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.classList.toggle(activeClass);
                calcPrice();
            });
        });
    
        function calcPrice() {
            let price = 0;
            
            buttons.forEach(button => {
                if(button.classList.contains(activeClass)){
                    button.innerHTML = 'добавлено';
                } else {
                    button.innerHTML = 'добавить в корзину';
                }
    
                if(button.classList.contains(activeClass)){
                    price += parseInt(button.getAttribute('data-price'));
                }
            });
    
            resultPrice.innerHTML = price;
        }   
    };
    
    try { 
        addProduct('.products__btn', '.price__result', 'products__btn_active'); 
    }   catch (error) {}
});