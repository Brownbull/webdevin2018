import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <p>{name}</p>
                <h2>{email}</h2>
            </div>
        </div>
    ); // eof return
} //eof const Card

export default Card;