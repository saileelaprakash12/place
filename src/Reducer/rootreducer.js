import reducer from '../Reducer/reducer';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

const rootreducer=combineReducers({reducer,form})

export default rootreducer