import React from 'react';

export default function Dashboard(props) {

    return (
      <div className="App">
      <section>
        <header>
          <h3>{props.catToAdopt.name}</h3>
          <img src={props.catToAdopt.imageURL} alt={props.catToAdopt.imageDescription} className='animal-image'/>
        </header>
          <main role='main'>
              <dl>
                <dt>Sex</dt>
                <dd>{props.catToAdopt.sex}</dd>
                <dt>Age</dt>
                <dd>{props.catToAdopt.age} years</dd>
                <dt>Breed</dt>
                <dd>{props.catToAdopt.breed}</dd>
                <dt>Story</dt>
                <dd>{props.catToAdopt.story}</dd>
              </dl>
            </main>
            <button type="submit">Adopt</button>
      </section>
      <section>
        <header>
          <h3>{props.dogToAdopt.name}</h3>
          <img src={props.dogToAdopt.imageURL} alt={props.dogToAdopt.imageDescription} className='animal-image'/>
        </header>
          <main role='main'>
              <dl>
                <dt>Sex</dt>
                <dd>{props.dogToAdopt.sex}</dd>
                <dt>Age</dt>
                <dd>{props.dogToAdopt.age} years</dd>
                <dt>Breed</dt>
                <dd>{props.dogToAdopt.breed}</dd>
                <dt>Story</dt>
                <dd>{props.dogToAdopt.story}</dd>
              </dl>
            </main>
            <button type="submit">Adopt</button>
      </section>
      </div>
    );
}