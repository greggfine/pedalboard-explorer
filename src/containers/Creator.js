import React from 'react';
import { connect } from 'react-redux';
import { selectEffectType, selectSlot, createOptions } from '../actions';
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
        const { options } = this.props;
        return options.map((option, index) => (
            //  <option disabled={option.disabledState} selected={option.selected}></option>
             <option data-index={index} disabled={option.disabledState} selected={option.selected}>{option.slot}</option>
        ))
    }

    componentDidMount() {
        this.props.createOptions();
    }   

    createBrandList(){
        const { initialState, options } = this.props;
        return initialState.selectedEffect.map((brand) => (
                <div className="brand">
                    <Link to ={`/detail/${brand.name}`}>
                        <li key={brand.name}>{brand.name}</li>
                    </Link>
                    {/* <select onChange={(e, company) => this.props.selectSlot(e.target.value, 
                            brand.imgURL)}> */}

                        <select onChange={(e, company) => {
                            // console.log(e.target.element)
                            // console.log(e.getAttribute('id'))
                            this.props.createOptions(e.target.value, 
                            brand.imgURL)}}>
                        {this.createOptions()}
                        {/* <option id='1'>1</option>
                        <option id='2'>2</option>
                        <option id='3'>3</option> */}

                        
                        
                    </select>
                </div>
            ))
    }

    render(){
        const { selectEffectType, selectedSlot } = this.props;
        return (
            <section className="creator">
                <div>
                    <select onChange={(e) => selectEffectType(e.target.value)}>
                        <option disabled selected>Effect type</option>
                        {this.createEffectTypeList()}
                    </select>
                    <ul className="brand-list">
                        {this.createBrandList()}
                    </ul> 
                </div>
                <Pedalboard />


            </section>
        )
    }
}

const mapStateToProps = ({initialState, options}) => {
    return {
        initialState,
        options
    }
}

export default connect(mapStateToProps, { selectEffectType, selectSlot, createOptions })(Creator);