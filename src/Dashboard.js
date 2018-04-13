import React, { Component } from 'react';
import Pet from './Pet';

import { connect } from 'react-redux';
import { fetchCat, fetchDog } from './actions/index';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(fetchCat());
  //   this.props.dispatch(fetchDog());

  }

  render() {
    return (
      <div className="App">
        {/* <h3>{this.props.cat}</h3> */}
        {/* <Pet 
          animal={this.props.cat} 
          onAdoptPet={() => {console.log('Pet adopted')}} 
        />
        <Pet 
          animal={this.props.dog} 
          onAdoptPet={() => {console.log('Pet adopted')}} 
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cat: state.cat.animal,
  dog: state.dog.animal
});

export default connect(mapStateToProps)(Dashboard);