function like(id){
    var element = document.querySelector(id);
    // console.log(element)
    var count = parseInt(element.innerText);


    element.innerText = count + 1;
}