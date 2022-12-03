const btn1 = document.querySelector('#json');
const btn2 = document.querySelector('#txt');


//fetching data from json file
btn1.addEventListener('click',() => {
    
    fetch('employee.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h1>Employess</h1>'
            data.forEach((employee) => {
                output += `
                <ul>
                    <li>${employee.name}</li>
                    <li>${employee.position}</li>
                    <li>${employee.salary}</li>
                </ul>`;
            })
            document.querySelector('#content').innerHTML = output;
    })
})

//fetching data from text file
btn2.addEventListener('click', () => {
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.querySelector('#content').innerHTML = data;
    })
})

const btnsubmit = document.querySelector('#submit');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let position = document.querySelector('#position').value;
    let salary = parseFloat(document.querySelector('#salary').value);
    

    fetch('employee.json', {
        method: "POST",
        headers: {
            "Application": "application/json, text/plain, */*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({ name: name, position: position, salary: salary })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
    
})