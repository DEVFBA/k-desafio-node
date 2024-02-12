const fetchAPI = async() => {

    const response = await fetch('http://gateway.marvel.com/v1/public/characters/1011334?apikey=4f082159fe81f4f21ad7d9d1b9f0be30&hash=e5b805634a943eadfd6a386d1095386a&ts=1707778685853', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    });

    const data = await response.json();

    const character = data.data.results[0].name;

    const comicsQty = data.data.results[0].comics.available;

    console.log(data)

    console.log(`El personaje es ${character} y ha aparecido en ${comicsQty} comics!!! `); 

}

export { fetchAPI };