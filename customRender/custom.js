// import { Children } from "react";
// function customRender(Element, container){
//     let domElement= document.createElement(Element.type)
//     domElement.innerHTML=Element.Children;
//     domElement.setAttribute('href',Element.props.href);
//     domElement.setAttribute('target', Element.props.target);
//     container.appendChild(domElement);    
// }
function customRender(Element,container){
    const domElement=document.createElement(Element.type);
    domElement.innerHTML=Element.Children;
    for (const prop in Element.props) {
        if(prop=== 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])    
        }
    container.appendChild(domElement);
} 

const reactElement = {
    type: 'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    Children:'Click me to visit google'
}

const customContainer = document.querySelector('#root')
customRender(reactElement,customContainer)