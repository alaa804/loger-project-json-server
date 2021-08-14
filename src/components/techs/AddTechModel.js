import React , { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const AddTechLogModel = ({ addTech }) => {
    const [ firstName , setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


  const onSubmit = (e) => {
        e.preventDefault();
      if( firstName === '' || lastName === '') {
          M.toast({ html : 'Please Fill the Missed Fields...!' })
      } else {
       addTech({
           firstName,
           lastName
       })
       M.toast({ html : `${firstName} ${lastName} was added as tech` , classes : 'btn rounded' });
        setFirstName('');
        setLastName('');
      }
  }

    return (
        <div id="add-tech-modal" className='modal' style={modalStyle} >
            <div className='modal-content'>
              <h4 className='green-text'>Add System Technician... </h4> 
               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='firstName' 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} />
                      <label htmlFor='firstName' className='active'>
                         FirstName
                      </label>
                  </div>
               </div>

               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='lastName' 
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} />
                      <label htmlFor='lastName' className='active'>
                         LastName
                      </label>
                  </div>
               </div>
            </div>
            <div className='model-footer'>
                <a href='#!' style={{ float : 'right', marginRight : '10px' , marginBottom: '20px'}} onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>{' '}
                   Add New Technician
                </a>
            </div>
        </div>
    )
}

const modalStyle ={
    borderRadius : '20px'
}


AddTechLogModel.propTypes = {
   addTech : PropTypes.func.isRequired, 
}



export default connect(null , {  addTech }) (AddTechLogModel);
