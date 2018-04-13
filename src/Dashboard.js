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
    // console.log('ANIMAL', this.props.cat.animal);
    let dog;
    if (this.props.dog) {
      dog = this.props.dog;
      console.log(dog);
    }
    

    return (
      <div className="App">
        {/* <p>{this.props.catError}</p> */}
        <Pet 
          animal={dog} 
          onAdoptPet={() => {console.log('Pet adopted')}} 
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
  dogError: state.dog.error
});

export default connect(mapStateToProps)(Dashboard);