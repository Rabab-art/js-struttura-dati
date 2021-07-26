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

const subType = card.subType ? `- ${card.subType} ` : '';
let abilitiesContente = '<em> Nessuna Abilità</em>';
if (card.abilities.length > 0) {
    abilitiesContente = '<ul>';
    for (let i = 0; i < card.abilities.length; i++) {
        const currentAbility = card.abilities[i];
        abilitiesContente += ` <li>Descrizione:${currentAbility.description}</li>`;
        abilitiesContente += `<li>Costo di lancio: ${currentAbility.launchCost.join(',')}</li>`;
    }
    abilitiesContente += '</ul>';
};


let cardTemple = `  
<ul class="card">
<li>Id:${card.id}</li>
<li> Nome:${card.name}</li>
<li>Costo di Lancio:${card.launchCost}</li>
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
<li>Tesco di colore:${card.flavorTex.quote}/${card.flavorTex.author}</li>
<li>Abilità:${abilitiesContente} </li>
<li>Costituzione:${card.constitution}</li>
<li>Forza:${card.strength}</li>
<li>Colore bordo:${card.borderColor}</li>
<li>Illustrazione:
<ul> 
<li>Autore:${card.illustration.author.name}(id: ${card.illustration.author.id})</li>
<li>Link illustrazione:<img src="${card.illustration.author.source}"/></li>
<li></li>
</ul >


</li >



</ul >

    `;

cardSection.innerHTML = cardTemple;