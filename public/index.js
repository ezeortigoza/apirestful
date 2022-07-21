let productsForm = document.getElementById('productsForm');

const handleSubmit = (evt,form,route) =>{
    evt.preventDefault();
    let formData = new FormData(form);
    fetch(route,{
        method: "POST",
        body: formData
    })
    
}
productsForm.addEventListener('submit', (e) =>handleSubmit(e,e.target,'/products'))


