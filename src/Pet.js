import React from 'react';

export default function Pet(props) {

  return(
    <section>
      <header>
        <h3>{props.animal.name}</h3>
        <img src={props.animal.imageURL} alt={props.animal.imageDescription} className='animal-image'/>
      </header>
        <main role='main'>
            <dl>
              <dt>Sex</dt>
              <dd>{props.animal.sex}</dd>
              <dt>Age</dt>
              <dd>{props.animal.age} years</dd>
              <dt>Breed</dt>
              <dd>{props.animal.breed}</dd>
              <dt>Story</dt>
              <dd>{props.animal.story}</dd>
            </dl>
          </main>
          <button onClick={props.onAdoptPet} type='submit'>Adopt</button>
      </section>
  )
}