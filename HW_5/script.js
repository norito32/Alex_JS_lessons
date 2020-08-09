let convertClickFunc = () => {
    let text = document.getElementById('input_text');
    text.classList.add('magic_effect');
    setTimeout(() => text.classList.remove('magic_effect'), 2000);
    let converteredEl = document.getElementsByClassName('converted_text')[0];
    let converteredText = text.value;
    if (document.getElementsByClassName('new_element')[0] === undefined) 
    {
        let div = document.createElement('div');
        div.className = "new_element";
        div.innerHTML = converteredText;
        converteredEl.append(div);
    }
    else 
    { 
        let existDiv = document.getElementsByClassName('new_element')[0];
        existDiv.innerHTML = converteredText;
    }
    
}
let clearLeft = () => {
    let existingText = document.getElementById('input_text');
    existingText.value = '';
}
let clearRight = () => {
    let existingText = document.getElementsByClassName('new_element')[0];
    existingText.remove();
}
let setColor = () => {
        var color = document.getElementById('colorSelect');
        let existingDiv = document.getElementsByClassName('new_element')[0];
        if (color.value == "black"){
            existingDiv.style.color = 'black'
        } else if (color.value == "blue") {
            existingDiv.style.color = '#2E97F2'
        } else if (color.value == "coral") {
            existingDiv.style.color = 'coral'
        }

}