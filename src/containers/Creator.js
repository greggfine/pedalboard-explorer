import React from 'react';
import { connect } from 'react-redux';
import { selectEffectType } from '../actions';

class Creator extends React.Component {

    renderEffectTypeList(){
        return this.props.effectTypes.map((effectType) => (
             <option key={effectType.category}>{effectType.category}</option>
        ))
    }

    render(){
        const { selectEffectType, effectType } = this.props;
        return (
            <section>
                <select name="" id=""
                    onChange={(e) => selectEffectType(e.target.value)}
                    >
                    <option disabled  selected>Effect type</option>
                    {this.renderEffectTypeList()}
                </select>
                <h1>{effectType}</h1>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        effectTypes: state.effectTypes,
        effectType: state.selectedEffectType.effectType
    }
}


export default connect(mapStateToProps, {selectEffectType})(Creator);