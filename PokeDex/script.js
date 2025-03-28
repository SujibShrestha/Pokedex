async function fetchpoke() {
  try {
    const pokeName = document.getElementById("pokeName").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    if (!response.ok) {
      alert("Pokemon from different region.Haven't been explore yet");
      throw new Error("Could not fetch the pokemon");
      
    }
    const data = await response.json();
    const pokeSprite = data.sprites.front_default;
    const imgElement = document.getElementById("Pokemon");
    imgElement.src = pokeSprite;
    imgElement.style.display = "block";
    const name = document.getElementById("name");
    name.innerHTML = data.name.toUpperCase();
    const tname = document.getElementById("Namet");
    tname.style.display = "block";
    const type = document.getElementById("type");
    type.innerHTML = data.types[0].type.name;
    const type1 = document.getElementById("type1");

    //for type color
    switch (data.types[0].type.name) {
      case "normal":
        type.classList.add("normal");
        break;
      case "fire":
        type.classList.add("fire");
        break;
      case "ghost":
        type.classList.add("ghost");
        break;
      case "poison":
        type.classList.add("poison");
        break;
      case "water":
        type.classList.add("water");
        break;
      case "grass":
        type.classList.add("grass");
        break;
      case "flying":
        type.classList.add("flying");
        break;
      case "psychic":
        type.classList.add("psychic");
        break;
      case "ground":
        type.classList.add("ground");
        break;
      case "fighting":
        type.classList.add("fighting");
        break;
      case "bug":
        type.classList.add("bug");
        break;
      case "steel":
        type.classList.add("steel");
        break;
        case "dark":
        type.classList.add("dark");
        break;
        case "electric":
          type.classList.add("electric");
          break;
    }

  } catch (error) {
    console.log(error);
  }
}
