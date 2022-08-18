
export const foodReducer = ( state = [] , action ) => {

    switch ( action.type ) {

        case 'add':
            return [...state, action.payload];

        case 'update':
            return state.map(
                    product => (product.id === action.payload.id)
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )

        case 'delete':
            return state.filter( product => product.id !== action.payload ); 

        case 'deleteAll':
          return []; 

        default:
          return state; 
    }

}
   
