const artifactss = ["gladiatorsfinale", "retracingbolide", "thunderingfury"];
const beidouData = {}

window.addEventListener("DOMContentLoaded", init);

async function init(){
    let waitFetch = await fetchData();

    if(!waitFetch){
        console.log("Beidou Data Fetch Unsuccesful");
        return;
    }

    initializeData();
}

async function fetchData(){
    return new Promise((resolve, reject) =>{
        fetch("../../../min/data.min.json")
        .then(response => response.json())
        .then(data =>{
            beidouData[data] = data;
            resolve(true);
        })
        // .catch((error) => reject(false));
    });
}

function initializeData(){
    console.log(beidouData);
}

