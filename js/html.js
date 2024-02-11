const createHTMLElement = (element, classes, attributes, innerHTML) => {

const elementCreated = document.createElement(element);

if(classes){
    for(let i = 0; i < classes.length; i++){
        elementCreated.classList.add(classes[i]);
    }
}

if(attributes){
    for(let i = 0; i < attributes.length; i++){
        elementCreated.setAttribute(attributes[i][0], attributes[i][1]);
    }
}

if(innerHTML) elementCreated.innerHTML = innerHTML;

return elementCreated;

}

export { createHTMLElement };
