import React , { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import {  connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModel = ({ updateLog , current  }) => {
    const [ message , setMessage] = useState('');
    const [attention , setAttetion] = useState(false);
    const [tech , setTech] = useState('');


    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setAttetion(current.attention);
            setTech(current.tech);
        }
    },[current])
    
  const onSubmit = (e) => {
        e.preventDefault();
      if(message === '' || tech === '') {
          M.toast({ html : 'Please Fill the Missed Fields to Update Log...!', classes :'red-text rounded' })
      } else {
         const updLog = {
             id : current.id,
             message,
             attention,
             tech,
             date : new Date()
         }
         updateLog(updLog);
         M.toast({ html :`log Updated by ${tech} Successfully`, classes: 'rounded btn' })
        // Clear Fields
        setMessage('');
        setTech('');
        setAttetion(false);
      }

  }

    return (
        <div id="edit-log-modal" className='modal' style={modelStyle} >
            <div className='modal-content'>
              <h4 className='green-text'>Update System Log... </h4> 
               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='message' 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} />
                      
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
                  Update Log
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

EditLogModel.propTypes = {
    current : PropTypes.object.isRequired,
    updateLog : PropTypes.func.isRequired,
}

const mapStateToProp =  state => {
    return {
        current : state.log.current
    }
}

export default connect(mapStateToProp , { updateLog }) (EditLogModel);
