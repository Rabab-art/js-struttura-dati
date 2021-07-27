const myDeck = [
    {
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

    },
    {
        id: 2,
        name: 'Dragon fire',
        launchCost: ['1', 'G'],
        combineManaCost: 4,
        cardType: 'creatore',
        subType: 'giant',
        expansion: {
            reprintId: 9,
            name: 'Espansione Fighissima',
            rarity: 'silver',
            collectionNr: 12,
            totalCard: 42,
        },
        flavorTex: {
            quote: 'We cannot...',
            author: 'Dreagone furioso',
        },
        abilities: [

        ],
        collectionNr: '12/43', /*lasciamostringa perchè abbiamo deciso di non utilizzarlo per i filtri*/
        constitution: 13,
        strength: 13,
        borderColor: '#000',
        illustration: {
            author: {
                id: 2,
                name: 'Greg Smith',
            },
            source: '../img/pic'
        },
        backgorund: {
            color: 'red',
            source: '..img',

        },

    },
    {
        id: 3,
        name: 'Big Foot',
        launchCost: ['4', 'R'],
        combineManaCost: 8,
        cardType: 'creatore',
        subType: 'Grande scimmia',
        expansion: {
            reprintId: 9,
            name: 'Espansione Fighissima',
            rarity: 'white',
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
                id: 3,
                name: 'Greg Smith',
            },
            source: '../img/pic'
        },
        backgorund: {
            color: 'red',
            source: '..img',

        },

    }
];


// FUNCTIONS
const createCardTemplate = (card) => {
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


    let cardTemplate = `  
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

    </ul >
    </li >
    </ul > `;

    return cardTemplate;

};


const renderDeck = (deck, targertEelement) => {
    let deckTemplate = '';
    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        const currentCardTemplate = createCardTemplate(currentCard);
        deckTemplate += currentCardTemplate;
    }
    targertEelement.innerHTML = deckTemplate;
};



/*STAMPA IN PAGINA*/
const cardSection = document.getElementById('cards');
renderDeck(myDeck, cardSection);






