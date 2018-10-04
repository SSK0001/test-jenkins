
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import sign_in from './reducer_sign_in' 
        import create_account from './reducer_create_account' 


        const rootReducer = combineReducers({
            sign_in : sign_in ,
            create_account : create_account 

        })

        export default rootReducer;

        