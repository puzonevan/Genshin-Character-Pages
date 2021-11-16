const characters = [
    {
        name: "beidou", 
        subtitle: "Uncrowned Lord of the Ocean"
    },
    {
        name: "childe", 
        subtitle: "Tartaglia"
    },
    {
        name: "chongyun", 
        subtitle: "Frozen Ardor"
    },
    {
        name: "hutao", 
        subtitle: "Fragrance in Thaw"
    },
    {
        name: "keqing", 
        subtitle: "Driving Thunder"
    },
    {
        name: "ningguang", 
        subtitle: "Eclipsing Star"
    },
    {
        name: "qiqi", 
        subtitle: "Icy Resurrection"
    },
    {
        name: "xiangling", 
        subtitle: "Exquisite Delicacy"
    },
    {
        name: "xingqiu", 
        subtitle: "Juvenile Galant"
    },
    {
        name: "xiao", 
        subtitle: "Vigilant Yaksha"
    },
    {
        name: "xinyan", 
        subtitle: "Blazing Riff"
    },
    {
        name: "yanfei", 
        subtitle: "Wise Innocence"
    },
    {
        name: "zhongli", 
        subtitle: "Vago Mundo"
    },
]

const liyue = document.getElementById("characters-liyue");

const createCard = (name, subTitle) =>{
    const container = document.createElement("div");
    container.setAttribute("class", "card");

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "container-img");
    const image = document.createElement("img");
    image.setAttribute("src", `./assets/images/${name}-card.jpg`);
    image.setAttribute("alt", `${name} character card`);
    imageContainer.appendChild(image);

    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class", "container-info");
    const characterTitle = document.createElement("h2");
    characterTitle.setAttribute("class", "character-title");
    const characterLink = document.createElement("a");
    characterLink.setAttribute("href", `./Liyue/${name.charAt(0).toUpperCase() + name.slice(1)}/${name}.html`);
    characterLink.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    characterTitle.appendChild(characterLink);
    const characterSubTitle = document.createElement("h3");
    characterSubTitle.setAttribute("class", "character-sub-title");
    characterSubTitle.textContent = subTitle;
    infoContainer.appendChild(characterTitle);
    infoContainer.appendChild(characterSubTitle);

    container.appendChild(imageContainer);
    container.appendChild(infoContainer);

    return container;
}


characters.forEach((character) =>{
    liyue.appendChild(createCard(character.name, character.subtitle));
});
