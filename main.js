const myButton = document.querySelector('#my-button');
const myParagraph = document.querySelector('#my-paragraph');

myButton.addEventListener('click', onClick);

function onClick(myButton){
    myParagraph.innerHTML = 'Hahahaha!!'
}