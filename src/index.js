const card_List = document.querySelector('.cards')

for (let i = 1; i <  data.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    // card.textContent = `Card ${data[i].name}`
    
    let title = document.createElement("h2")
    title.textContent = data[i].name
    card.append(title)

    const imgElement = document.createElement('img');
    imgElement.src = data[i].sprites.other["official-artwork"].front_default;
    imgElement.width = "256"
    imgElement.className = "card--img";
    card.appendChild(imgElement);

    const statElement = document.createElement("ul")
    statElement.style.listStyleType = "none";

    data[i].stats.forEach(stat => {
        let item = document.createElement("li")
        item.style.paddingTop = "5px";
        item.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        console.log(item.textContent)
        statElement.append(item)
    });
    card.append(statElement)

    // let seperator = document.createElement("")

    const gameElement = document.createElement("ul")
    let game = document.createElement("h3")
    game.textContent = "Games appeared in"
    gameElement.append(game)
    gameElement.style.listStyleType = "none";
    
    data[i].game_indices.forEach(game_indices => {
        let item = document.createElement("li");
        item.textContent = `${game_indices.version.name}`;
        item.style.padding = "5px 5px";      // padding inside each li
        gameElement.append(item);
    });
    
    card.append(gameElement)



    card_List.appendChild(card)
    
}


document.body.appendChild(card_List);