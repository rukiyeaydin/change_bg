function changeColor()
{
    document.body.style.backgroundColor= `rgb(` + Math.round(Math.random() * 255) + `,` + Math.round(Math.random() * 255) +  `,` + Math.round(Math.random() * 255) + `)`;
}

function changeText(){
    document.querySelector('#buton').innerHTML="Click";
}

function firstText(){
    document.querySelector('#buton').innerHTML="Change Color";
}