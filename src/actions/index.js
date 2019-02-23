import { EFFECT_TYPE_SELECTED, SLOT_SELECTED } from '../constants';

export const selectEffectType = (effectType) => {
    return {
        type: EFFECT_TYPE_SELECTED,
        payload: effectType
    }
}

export const selectSlot = (slot) => {
    return {
        type: SLOT_SELECTED,
        payload: slot
    }
}