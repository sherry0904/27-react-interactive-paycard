const initialState = {
    cardSide: 'front',
    focusSection: "",
    cardNumber: "",
    cardHolder: "",
    cardExpirationMonth: '',
    cardExpirationYear: "",
    cardCVC: "",
}

export default function rootReducer( state=initialState, action ){
    switch(action.type) {
        case('changeSection'):
            return {
                ...state, focusSection:action.payload
            }
        case('changeSide'): 
            return {
                ...state, cardSide: action.payload
            }
        case('updateCardNumber') :
            return {
                ...state, cardNumber: action.payload
            }
        case('updateCardHolder'):
            return {
                ...state, cardHolder: action.payload
            }
        case('updateCardExpirationMonth'): 
            return {
                ...state, cardExpirationMonth: action.payload
            }
        case('updateCardExpirationYear'): 
            return {
                ...state, cardExpirationYear: action.payload
            }
        case('updateCardCVC'): 
            return {
                ...state, cardCVC: action.payload
            }
        default: 
            return state
    }
}