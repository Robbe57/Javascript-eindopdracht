async function search() {
    let pokemon = document.querySelector("#query").value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await response.json();
    console.log(data);
    let img_element = `<img src="${data.sprites.front_default}">`;
    let pokemon_id=(data.id);
    document.querySelector("#answer").innerHTML = img_element;
    document.getElementById("myPlayer").src = "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/" + pokemon_id + ".ogg";

}
document.querySelector("#searchbutton").addEventListener('click', search);