function switchOnOff(element){
    if(element.innerHTML == "ON")
    {
        element.innerHTML = "OFF"
        element.classList.remove("btn-success")
        element.classList.add("btn-danger")
    }
    else{
        element.innerHTML = "ON"
        element.classList.add("btn-success")
        element.classList.remove("btn-danger")
    }
}