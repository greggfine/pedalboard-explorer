import React from 'react';
import { connect } from 'react-redux';
import { selectEffectType, selectSlot } from '../actions';
import { Link } from 'react-router-dom';
import Pedalboard from '../components/Pedalboard';

class Creator extends React.Component {

    createEffectTypeList(){
        const { initialState } = this.props;
        return initialState.effects.map((effect) => (
             <option key={effect.category}>{effect.category}</option>
        ))
    }

    createOptions(){
        const numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return numOptions.map((option) => (
             <option>{option}</option>
        ))
    }

    createBrandList(){
        const { initialState } = this.props;
        return initialState.selectedEffect.map((brand) => (
                <div>
                    <Link to ={`/detail/${brand.name}`}>
                        <li key={brand.name}>{brand.name}</li>
                    </Link>
                    <select onChange={(e, company) => this.props.selectSlot(e.target.value, brand.imgURL)}>
                        <option selected></option>
                        {this.createOptions()}
                    </select>
                </div>
            ))
    }

    render(){
        console.log(this.props.initialState)
        const { selectEffectType, selectedSlot } = this.props;
        return (
            <section className="creator">
                <select onChange={(e) => selectEffectType(e.target.value)}>
                    <option disabled selected>Effect type</option>
                    {this.createEffectTypeList()}
                </select>
                <ul className="brand-list">
                    {this.createBrandList()}
                </ul> 
                <Pedalboard />


            </section>
        )
    }
}

const mapStateToProps = ({initialState}) => {
    return {
        initialState,
        // selectedSlot
    }
}

export default connect(mapStateToProps, { selectEffectType, selectSlot })(Creator);