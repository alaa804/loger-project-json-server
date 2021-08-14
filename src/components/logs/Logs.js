import React,{  useEffect } from 'react';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import {  connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import Preloader from '../layout/Preloader';


const Logs = ({ log: { logs , loading } , getLogs }) => {
  
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    },[]);

    if(loading || logs === null) return <Preloader />;

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center blue-text'>System Logs...</h4>
            </li>
             { !loading && logs.length === 0 ?(<p className='center red-text'>No Logs To Show... </p>) :(
                 logs.map(log =><LogItem key={log.id} log={log} />)
             )  }
        </ul>
    )
}

Logs.propTypes = {
    log : PropTypes.array.isRequired,
    getLogs :PropTypes.func.isRequired,
}

const mapStateToProp = state => ({
    log : state.log
})

export default connect(mapStateToProp ,{ getLogs })(Logs);
