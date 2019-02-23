import React from 'react';

const Detail = ({match}) => {

        return (
            <section>
                <h1>{match.params.id}</h1>
            </section>
        )
    }




export default Detail;