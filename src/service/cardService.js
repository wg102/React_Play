export default class CardService {
    static getCards() {
        let cards = [];
        cards.push({
            title: "MY own data",
            picture: '/logo512.png',
            description: 'whiteSectionText'
        });
        cards.push({
            title: "This is another card",
            picture: '/logo512.png',
            description: 'With a really beautiful and complex text'
        });
        return cards;
    }
}