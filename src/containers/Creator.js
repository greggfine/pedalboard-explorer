import React from 'react';
import { connect } from 'react-redux';
import { selectEffectType, selectSlot } from '../actions';
import { effectsData } from '../effectsData';
import { Link } from 'react-router-dom';

class Creator extends React.Component {

    renderEffectTypeList(){
        return effectsData.effectInfo.map((obj) => (
             <option key={obj.category}>{obj.category}</option>
        ))
    }

    renderOptions(){
        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return options.map((option) => {
            return <option>{option}</option>
        })
    }

    renderBrandList(){

        return this.props.effectBrands[0].brands.map((brand) => {
            return (
                <div>
                    <Link to ={`/detail/${brand}`}>
                        <li key={brand}>{brand}</li>
                    </Link>
                    <select 
                        onChange={this.props.selectSlot}
                        name="" id="">
                        <option selected></option>
                        {this.renderOptions()}
                    </select>
                </div>
            )
        })
    }


    render(){
        const { selectEffectType } = this.props;

        return (
            <section>
                <select name="" id=""
                    onChange={this.props.selectEffectType}
                    >
                    <option disabled selected>Effect type</option>
                    {this.renderEffectTypeList()}
                </select>
                <ul>
                    {this.renderBrandList()}
                </ul>
                <h1>{this.props.selectedSlot}</h1>
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

const mapDispatchToProps = (dispatch) => {
    return {
        selectEffectType: (e) => dispatch(selectEffectType(e.target.value)),
        selectSlot: (e) => dispatch(selectSlot(e.target.value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Creator);