import React from 'react';
import Moment from 'react-moment';
import {  connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteLog , setCurrent , clearCurrent }from '../../actions/logActions';
import PropTypes from 'prop-types';


const LogItem = ({ log ,deleteLog , setCurrent , clearCurrent}) => {
 const { id , tech , date , message , attention} = log;


  const onDelete = () => {
      deleteLog(id);
      clearCurrent();
      M.toast({ html : `log with the ID of ${id} Deleted successfully` ,classes: 'rounded btn' })
  }

    return (
        <li className='collection-item'>
             <div>
                 <a href="#edit-log-modal"  className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
                   onClick={() => setCurrent(log)}
                   >
                     {message}
                 </a>
                  <br />
                 <span className='grey-text'>
                    <span className='black-text'>ID# {id}</span> last updated by{' '} 
                    <span className='black-text'> <span className='green-text'><strong>{tech}</strong></span></span> on <Moment format='MMMM do YYYY, h:mm:ss a'>{date}</Moment>
                 </span>
                 <a href="#!" onClick={onDelete} className='secondary-content'>
                     <i className='material-icons red-text'>delete</i>
                 </a>
             </div>
        </li>
    )
}

LogItem.propTypes = {
 log :PropTypes.object.isRequired,
 deleteLog : PropTypes.func.isRequired,
 setCurrent : PropTypes.object.isRequired,
 clearCurrent : PropTypes.func.isRequired
}

export default connect(null , { deleteLog , setCurrent , clearCurrent }) (LogItem);
