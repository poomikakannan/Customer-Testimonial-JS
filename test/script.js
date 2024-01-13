let rvname = document.getElementById('name')
let designation = document.getElementById('designation')
let para = document.getElementById('para')
let bg =document.getElementById('bg')
let btn1= document.getElementById('btn1')
let btn2= document.getElementById('btn2')


let customers = [
    {
        image: '1001.jpeg',
        name: 'Boomika',
        designation: 'Web Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac felis tellus. Maecenas in molestie justo. Sed euismod lacinia lorem, vitae tincidunt est tempor id.'
    },
    {
        image: '1002.jpeg',
        name: 'Abi',
        designation: 'computer.science',
        review: 'Pellentesque ac felis tellus. Maecenas in molestie justo.   Sed euismod lacinia lorem, vitae tincidunt est tempor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
        image: '1003.jpeg',
        name: 'Narmi',
        designation: 'computer.science',
        review: 'Sed euismod lacinia lorem, vitae tincidunt est tempor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac felis tellus. Maecenas in molestie justo. '
    }
];

let x = 0;

function display(i) {
    let temp = customers[i];
    bg.style.backgroundImage = "url(" + temp.image + ")";
    rvname.textContent = temp.name;
    designation.textContent = temp.designation;
    para.textContent = temp.review;
}
display(x);

function nxt(z) {
    return function(event) {
        event.preventDefault();
        x = (x + z + customers.length) % customers.length;
        display(x);
    }
}


btn1.addEventListener('click', nxt(1));
btn2.addEventListener('click', nxt(-1));


