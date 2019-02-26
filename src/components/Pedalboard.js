import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pedalboard extends Component{
  
  render(){
    console.log(this.props.options)
    const slots = this.props.options.map((brand, i) => {
        return <div key={i}>
            <img src={brand.boardSlot} alt="" />
          </div>
      })
    return (
      <div>
        <h1>Pedalboard</h1>
        <div className='pedal-board' >
            {slots}
        </div>
      </div>
    )
  }
    
  }

const mapStateToProps = ({ options }) => {
  return {
    options
  }
}


export default connect(mapStateToProps)(Pedalboard);
