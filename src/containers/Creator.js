import React from 'react';
import { connect } from 'react-redux';
import { selectEffectType } from '../actions';
import { effectsData } from '../effectsData';
import { Link } from 'react-router-dom';

class Creator extends React.Component {

    renderEffectTypeList(){
        return effectsData.effectInfo.map((obj) => (
             <option key={obj.category}>{obj.category}</option>
        ))
    }

    renderBrandList(){
        return this.props.effectBrands[0].brands.map((brand) => {
            return (
                <Link to ={`/detail/${brand}`}>
                 <li key={brand}>{brand}</li>
                </Link>
            )
        })
    }


    render(){
        const { selectEffectType } = this.props;

        return (
            <section>
                <select name="" id=""
                    onChange={(e) => selectEffectType(e.target.value)}
                    >
                    <option disabled>Effect type</option>
                    {this.renderEffectTypeList()}
                </select>
                <ul>
                    {this.renderBrandList()}
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        effects: state.effectsInfo,
        effectBrands: state.effectBrands
    }
}


export default connect(mapStateToProps, {selectEffectType})(Creator);