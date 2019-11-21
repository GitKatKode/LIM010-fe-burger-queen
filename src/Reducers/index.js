import {combineReducers} from 'redux';
import Table from './reduce-table';
import Client from './reduce-client';

const allReducers = combineReducers({
    client: Client,
    table: Table
})

export default allReducers;