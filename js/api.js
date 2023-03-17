

const getKoders = async () => {
    let response = await fetch("https://rickandmortyapi.com/api/character"
    );
    let data = await response.json();
    return data;
  };
 export{getKoders}
console.log(getKoders);