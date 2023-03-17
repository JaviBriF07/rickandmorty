const myCard = (id, image, name, origin) => {
    let card = document.createElement("div")
    card.classList.add(..."card bg-dark text-white col-12 col-md-3 m-3".split(" "))
    let img = document.createElement("img")
    img.classList.add(..."card-img-top img-container".split(" "))
    img.setAttribute("src", image);
    let cBody = document.createElement("div")
    cBody.classList.add("card-body")
    let title = document.createElement("h1")
    title.textContent= name
    let origen = document.createElement("p")
    origen.textContent = origin
    let button = document.createElement("a")
    button.textContent ="Ver Mas"
    button.classList.add(..."btn btn-primary mb-2".split(" "))
    button.setAttribute("href", `./details.html?id=${id}`)
    button.setAttribute("target", `_blank`)
    cBody.append(title, origen)
    card.append(img, cBody, button)
    return card
}
export{myCard}