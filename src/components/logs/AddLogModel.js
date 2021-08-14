import React , { useState } from 'react';
import PropTypes from 'prop-types';
import {  connect } from 'react-redux';
import { addLog }from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModel = ({ addLog }) => {
    const [ message , setMessage] = useState('');
    const [attention , setAttetion] = useState(false);
    const [tech , setTech] = useState('');


  const onSubmit = (e) => {
        e.preventDefault();
      if(message === '' || tech === '') {
          M.toast({ html : 'Please Fill the Missed Fields to Add New Log...!' , classes :'red-text rounded' })
      } else {
        const newLog = {
            message,
            attention,
            tech,
            date : new Date().getFullYear()
        }
        addLog(newLog)
        M.toast({ html : `log added by ${tech}`, classes: 'rounded btn' })
        setMessage('');
        setTech('');
        setAttetion(false);
      }
  }

    return (
        <div id="add-log-modal" className='modal' style={modelStyle} >
            <div className='modal-content'>
              <h4 className='green-text'>Add System Log...</h4> 
               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='message' 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} />
                      <label htmlFor='message' className='active'>
                          Log Message
                      </label>
                  </div>
               </div>

               <div className='row'>
                   <div className='input-field'>
                       <select name='tech'
                               value={tech} 
                               className='browser-default'
                               onChange={(e) => setTech(e.target.value)}>
                           <option value='' disabled>Select Technician</option>
                       <TechSelectOptions />
                       </select>
                   </div>
               </div>

               <div className='row'>
                   <div className='input-field'>
                       <p>
                           <label>
                               <input type="checkbox" 
                                className="filled-in" 
                                checked={attention} 
                                value={attention} 
                                onChange={(e) => setAttetion(e.currentTarget.checked)}
                            />
                             <span> Needs Attention </span>
                           </label>
                       </p>
                   </div>
               </div>
            </div>
            <div className='model-footer'>
                <a href='#!' style={{ float : 'right', marginRight : '5px'}} onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>{' '}
                   Add New Log
                </a>
            </div>
        </div>
    )
}

const modelStyle = {
    width : '75%',
    height : '75%',
    borderRadius : '20px'
}

AddLogModel.propTypes = {
    addLog : PropTypes.func.isRequired,
}




export default connect(null , { addLog }) (AddLogModel);
