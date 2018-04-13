import React, { Component } from 'react';


export default function Dashboard(props) {


  // render() {
    const catToAdopt = {
      class: 'one',
      name: 'Fluffy',
      url: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      sex: 'Female',
      age: '2',
      breed: 'Bengal',
      story: 'Thrown on the street.'
    }

    const dogToAdopt = {
      class: 'two',
      name: 'June',
      url: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
      sex: 'Female',
      age: 1,
      breed: 'Bengal',
      story: 'Thrown on the street.'
    }

    // function Display(props) {
    // //   return (
      
    //     <div className={props.class}>
    //         <header>
    //           <h3>{props.name}</h3>
    //           <img src={props.url} alt={props.name} className='animal-image' />
    //         </header>
    //         <main role='main'>
    //           <dl>
    //             <dt>Sex</dt>
    //             <dd>{props.sex}</dd>
    //             <dt>Age</dt>
    //             <dd>{props.age} years</dd>
    //             <dt>Breed</dt>
    //             <dd>{props.breed}</dd>
    //             <dt>Story</dt>
    //             <dd>{props.story}</dd>
    //             <button>Adopt</button>
    //           </dl>
    //         </main>
    //     </div>
    // //   )
    // }

    return (
      <div className="App">
        <div className={props.class}>
            <header>
              <h3>{props.name}</h3>
              <img src={props.url} alt={props.name} className='animal-image' />
            </header>
            <main role='main'>
              <dl>
                <dt>Sex</dt>
                <dd>{props.sex}</dd>
                <dt>Age</dt>
                <dd>{props.age} years</dd>
                <dt>Breed</dt>
                <dd>{props.breed}</dd>
                <dt>Story</dt>
                <dd>{props.story}</dd>
                <button>Adopt</button>
              </dl>
            </main>
        </div>
        
      </div>
    );
  // }
}