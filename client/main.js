// const { default: axios } = require("axios");

// const { default: axios } = require("axios")

// const { default: axios } = require("axios");

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const personForm = document.getElementById('personForm')
const deleteDropDown = document.getElementById('deleteDropDown')
const spChange = document.getElementById('spChange')
const pointBtn = document.getElementById('onlyForGettingFullPoints')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getAllPoints = () => {
    axios.get("http://localhost:4000/api/point/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};


const postPerson = (event) =>{
    event.preventDefault()
    const body = {
        name: document.getElementById('name').value,
        sp: document.getElementById('sp').value
    }
    axios.post("http://localhost:4000/api/person/", body).then(res =>{
        const data = res.data
        console.log(data)
    }).catch((err) =>console.log(err.message))
}

// function myFunction(){
//     document.getElementById("myOption").value = "newValue"
//     // document.getElementById("demo").innerHTML = "brandNewValue"
// }

const deletePerson = (event) =>{
    event.preventDefault()

    const name = document.getElementById('delete').value

    axios.delete(`http://localhost:4000/api/delete/${name}`).then(res => {
        const data = res.data
        console.log(data)
    }).catch((err) =>console.log(err.message))
}

const changeSpecialPower =(event) =>{
    event.preventDefault()

    const newSp = document.getElementById('newSp').value
    const name = document.getElementById('name').value

    axios.put(`http://localhost:4000/api/change/${name}`, {newSp}).then(res => {
        const data = res.data
        console.log(data)
    }).catch((err) =>console.log(err.message))
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
personForm.addEventListener('submit', postPerson)
deleteDropDown.addEventListener('submit', deletePerson)
spChange.addEventListener('submit', changeSpecialPower)
pointBtn.addEventListener('click', getAllPoints)