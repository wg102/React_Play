import React from 'react';
import PropTypes from 'prop-types';
import CardService from '../service/cardService';

import '../style/socialCard.scss';



export default class SocialCard extends React.Component {
    constructor() {
        super();
        this.state = { cards: {} };
    }

    componentDidMount() {
        //Attach the fetch method
        this.setState({ cards: CardService.getCards() });
    }

    render() {
        const { cards } = this.state;
        const cardsToShow = [];

        const SocialCardss = ({ title, picture, description }) => (
            <article className="card">
                <h1>{title}</h1>
                <img
                    src={picture}
                    alt="preview"
                />
                <p>{description}</p>
            </article>
        );

        SocialCardss.propTypes = {
            title: PropTypes.string,
            picture: PropTypes.string,
            description: PropTypes.string
        }

        SocialCardss.defaultProps = {
            title: "Hello",
            picture: '/logo512.png',
            description: 'whiteSectionText'
        }

        for (var i = 0; i < cards.length; i++) {
            cardsToShow.push(<SocialCardss title={cards[i].title} picture={cards[i].picture} description={cards[i].description} />);
        }
        return (
            <section className="cardHolder">
                {cardsToShow}
            </section>
        );
    }
}