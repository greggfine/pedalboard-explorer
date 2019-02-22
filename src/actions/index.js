import { EFFECT_TYPE_SELECTED } from '../constants';

export const selectEffectType = (effectType) => {
    return {
        type: EFFECT_TYPE_SELECTED,
        payload: effectType
    }
}