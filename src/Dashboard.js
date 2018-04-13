import React, { Component } from 'react';
import Pet from './Pet';

import { connect } from 'react-redux';
import { fetchCat, fetchDog } from './actions/index';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());

  }

  render() {
    let dog = {
      imageURL: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
      name: 'Test Doggy',
      sex: 'female',
      age: 1,
      breed: 'Husky',
      story: 'Rejected by mother.'
    };

    let cat =   {
      imageURL: 'https://static.pexels.com/photos/20787/pexels-photo.jpg',
      imageDescription: 'Grey siamese cat with bright green eyes, looking up to the camera.',
      name: 'Test Kitty',
      sex: 'female',
      age: 3,
      breed: 'Siamese',
      story: 'Abandoned by previous owner.'
    };

    let animalLoading = '';

    if (this.props.dog && this.props.cat) {
      cat = this.props.cat;
      dog = this.props.dog;
}

    if (this.props.catLoading || this.props.dogLoading) {
      animalLoading = 'Finding our next animal up for adoption!';

    }

    return (
      <div className="App">
        <h1>{animalLoading}</h1>
        <Pet
          animal={cat}
          onAdoptPet={() => {this.props.dispatch(fetchCat())}}
          />
          <p>{this.props.catError}</p>
        <Pet
          animal={dog}
          onAdoptPet={() => {this.props.dispatch(fetchDog())}}
          />
          <p>{this.props.dogError}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cat: state.cat.animal,
  dog: state.dog.animal,
  catError: state.cat.error,
  dogError: state.dog.error,
  catLoading: state.cat.loading,
  dogLoading: state.dog.loading
});

export default connect(mapStateToProps)(Dashboard);