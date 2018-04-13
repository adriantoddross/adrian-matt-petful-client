import React from 'react';
import Pet from './Pet';

import { connect } from 'react-redux';

export function Dashboard(props) {
  const Fluffy = {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
  
  const Zeus = {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }

  return (
    <div className="App">
      <Pet 
        animal={Fluffy} 
        onAdoptPet={() => {console.log('Pet adopted')}} 
      />
      <Pet 
        animal={Zeus} 
        onAdoptPet={() => {console.log('Pet adopted')}} 
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cat: state.cat.animal,
  dog: state.dog.animal
});