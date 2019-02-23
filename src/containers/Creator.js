import React from 'react';
import { connect } from 'react-redux';
import { selectEffectType, selectSlot } from '../actions';
import { effectsData } from '../effectsData';
import { Link } from 'react-router-dom';
import Pedalboard from '../components/Pedalboard';

class Creator extends React.Component {

    createEffectTypeList(){
        return effectsData.effectInfo.map((obj) => (
             <option key={obj.category}>{obj.category}</option>
        ))
    }

    createOptions(){
        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return options.map((option) => (
             <option>{option}</option>
            ))
    }

    createBrandList(){
        return this.props.effectBrands.effectBrands[0].brands.map((brand) => (
                <div>
                    <Link to ={`/detail/${brand}`}>
                        <li key={brand}>{brand}</li>
                    </Link>
                    <select onChange={(e, company) => this.props.selectSlot(e.target.value, brand)} name="" id="">
                        <option selected></option>
                        {this.createOptions()}
                    </select>
                </div>
            ))
    }


    render(){
        const { selectEffectType, selectedSlot } = this.props;
        return (
            <section style={{display: 'flex', justifyContent: 'space-around'}}>
                <select name="" id="" onChange={(e) => selectEffectType(e.target.value)}>
                    <option disabled selected>Effect type</option>
                    {this.createEffectTypeList()}
                </select>
                <ul>
                    {this.createBrandList()}
                </ul>
                <Pedalboard 
                    slot={selectedSlot.selectedSlot.slot} 
                    brand={selectedSlot.selectedSlot.brand}/>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        effects: state.effectsInfo,
        effectBrands: state.effectBrands,
        selectedSlot: state.selectedSlot
    }
}

export default connect(mapStateToProps, {selectEffectType, selectSlot})(Creator);