import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pedalboard extends Component{
  render(){
    console.log(this.props.selectedSlot)
    return (
      <div>
        <h1>Pedalboard</h1>
        <div>
            <p>{this.props.slot}</p>
            <p>{this.props.brand}</p>
        </div>

        <div>
            <p>{this.props.slot}</p>
            <p>{this.props.brand}</p>
        </div>

        <div>
            <p>{this.props.slot}</p>
            <p>{this.props.brand}</p>
        </div>
        
        <p>{this.props.pedalBoardSlots[0].brand}</p>
        <p>{this.props.selectedSlot.selectedSlot.slot}</p>
      </div>
    )
  }
    
  }

const mapStateToProps = (state) => {
  return {
    pedalBoardSlots: state.pedalBoardSlots,
    selectedSlot: state.selectedSlot
  }
}


export default connect(mapStateToProps)(Pedalboard);
