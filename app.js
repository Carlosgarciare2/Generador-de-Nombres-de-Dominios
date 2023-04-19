let pron = ['The','Our'];
let adj = ['great','big'];
let noun = ['jogger','racoon'];


let nombres_url = '';
for (p = 0; p < pron.length; p++) {
    for (j = 0; j < adj.length; j++) {
        for (n = 0; n < noun.length; n++) {
            console.log(pron[p] + adj[j] + noun[n] + ".com");
        }
    }
}

console.log(nombres_url);