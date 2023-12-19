let form = document.getElementById('form');
form.addEventListener('submit', formPost);

let namee = document.getElementById("name")
let surname = document.getElementById("surname")
function formPost(e) {
    e.preventDefault()
    let data = {
        name: namee.value,
        surname: surname.value
    }
    axios.post("https://655f2b37879575426b44b8f7.mockapi.io/basket", data)
    .then(() => displaySeen())
    namee.value = ""
    surname.value = ""
}

let displayProduct = document.getElementById('display');

async function displaySeen() {
    displayProduct.innerHTML = ""
    let res = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/basket");
    let data = res.data;
    data.forEach((item) => {
        let div = document.createElement("div");
        div.className = "box"
        div.innerHTML = `
        <p><span>Name</span> : ${item.name} </p>
        <p><span>Surname</span>: ${item.surname}</p>
        <button onclick="deletePost(${item.id})">Delete</button>
        `
        displayProduct.appendChild(div)
    })
}
displaySeen();
function deletePost(id) {
    axios.delete(`https://655f2b37879575426b44b8f7.mockapi.io/basket/${id}`)
    .then(() => displaySeen())
}