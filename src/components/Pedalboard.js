import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pedalboard extends Component{
  
  render(){
    console.log(this.props.selectedSlot)
      const slots = this.props.selectedSlot.map((brand, i) => {
        return <div key={i}>
            <img src={brand} alt="" />
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

const mapStateToProps = ({ selectedSlot }) => {
  return {
    selectedSlot
  }
}


export default connect(mapStateToProps)(Pedalboard);
