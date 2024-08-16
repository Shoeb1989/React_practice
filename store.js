const btn = () => {
    const idInput = document.getElementById('store-id');
    const id = idInput.value;
    const valueInput = document.getElementById('store-value');
    const value = valueInput.value;



   if (id && value){
    localStorage.setItem(id, value);
   }

localStorage.setItem(id, value);
idInput.value = '';
valueInput.value = '';
}