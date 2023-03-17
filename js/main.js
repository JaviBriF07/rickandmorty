import {getKoders}from "./api.js" 
import { myCard } from "./card.js";
let row = document.querySelector("#row")

const printKoders = async() => {
    let response = await getKoders()
    let results = response["results"]
    for (const key in results) {
        let {id, image, name, species} = results[key]
        row.appendChild(myCard(id, image, name, species))
    }
}
printKoders()