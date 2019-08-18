import React from 'react';
import PropTypes from 'prop-types';

import '../style/socialCard.scss';


const SocialCard = ({ title, picture, description }) => (
    <article className="card">
        <h1>{title}</h1>
        <img
            src={picture}
            alt="preview"
        />
        <p>{description}</p>
    </article>
);

function createSocialCards() {
    let cards = [];
    for (var i = 0; i < 4; i++) {
        cards.push(<SocialCard />);
    }
    return cards;
}

const SocialCards = () => (
    <section className="cardHolder">
        {createSocialCards()}
    </section>
);

SocialCard.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
    description: PropTypes.string
};

SocialCard.defaultProps = {
    title: "Hello",
    picture: '/logo512.png',
    description: 'whiteSectionText'
};
export default SocialCards