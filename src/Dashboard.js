import React from 'react';
import PropTypes from 'prop-types';



export default function Dashboard(catToAdopt, dogToAdopt) {

    return (
      <div className="App">
      <section>
        <header>
          <h3>{catToAdopt.name}</h3>
          <img src={catToAdopt.imageURL} alt={catToAdopt.imageDescription} className='animal-image'/>
        </header>
          <main role='main'>
              <dl>
                <dt>Sex</dt>
                <dd>{catToAdopt.sex}</dd>
                <dt>Age</dt>
                <dd>{catToAdopt.age} years</dd>
                <dt>Breed</dt>
                <dd>{catToAdopt.breed}</dd>
                <dt>Story</dt>
                <dd>{catToAdopt.story}</dd>
                <button>Adopt</button>
              </dl>
            </main>
            <button type="submit">Adopt</button>
      </section>
      <section>
        <header>
          <h3>{dogToAdopt.name}</h3>
          <img src={dogToAdopt.imageURL} alt={dogToAdopt.imageDescription} className='animal-image'/>
        </header>
          <main role='main'>
              <dl>
                <dt>Sex</dt>
                <dd>{dogToAdopt.sex}</dd>
                <dt>Age</dt>
                <dd>{dogToAdopt.age} years</dd>
                <dt>Breed</dt>
                <dd>{dogToAdopt.breed}</dd>
                <dt>Story</dt>
                <dd>{dogToAdopt.story}</dd>
                <button>Adopt</button>
              </dl>
            </main>
            <button type="submit">Adopt</button>
      </section>
      </div>
    );
}