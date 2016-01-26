import React, { Component } from 'react';
import FeaturedComponent from './FeaturedComponent.js';


export default class Featured extends Component {

  render() {
    return (
      <div className="featuredBox">
        {<FeaturedComponent />}
      </div>
    );
  }
}
