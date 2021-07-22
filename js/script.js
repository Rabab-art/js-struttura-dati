const card = {
    id: 1,
    name: 'Bloodfire Colosses',
    launchCost: ['6', 'R', 'R'],
    combineManaCost: 8,
    cardType: 'creatore',
    subType: 'giant',
    expansion: {
        reprintId: 9,
        name: 'Espansione Fighissima',
        rarity: 'goldenrod',
        collectionNr: 12,
        totalCard: 42,
    },
    flavorTex: {
        quote: 'We cannot...',
        author: 'Orso Bubu',
    },
    abilities: [
        {
            launchCost: ['R', 'T'],
            description: 'lorem...',
        },
        {
            launchCost: ['w', 'B', 'T'],
            description: 'lorem...',
        }
    ],
    collectionNr: '12/43', /*lasciamostringa perchè abbiamo deciso di non utilizzarlo per i filtri*/
    constitution: 13,
    strength: 13,
    borderColor: '#000',
    illustration: {
        author: {
            id: 1,
            name: 'Greg Smith',
        },
        source: '../img/pic'
    },
    backgorund: {
        color: 'red',
        source: '..img',

    },

};
console.log(card);

/*STAMPA IN PAGINA*/
const cardSection = document.getElementById('card');

let cardTemple = ` 
<ul class="card">
<li>Id:${card.id}</li>
<li> Nome:${card.name}</li>
<li>Costo di Lancio:${card.launchCosta}</li>
<li>Costo Mana Convertito:${card.combineManaCost}</li>
<li>Tipo Carta:${card.cardType}</li>
<li>Espansione
<ul>
<li>Ristampa:${card.expansion.reprintId}</li>
<li>Nome:${card.expansion.name}  </li>
<li>Rartà:${card.expansion.rarity}  </li>
<li>Numero Collezione:${card.expansion.collectionNr}/${card.expansion.totalCard} </li>


</ul>




</li>


</ul>

`;

cardSection.innerHTML = cardTemple;