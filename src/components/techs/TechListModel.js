import React,{ useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModel = ({ getTechs , tech : {  techs , loading } }) => {
    

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    },[]);


    return (
         <div id='tech-modal' className='modal' style={modalStyle}>
             <div className='modal-content'>
                 <h4 className='green-text'>Technician List...</h4> 
                 <ul style={modalContent} className='collection'>
                 { !loading && techs !== null && techs.map(tech => (
                     <TechItem key={tech.id} tech={tech} />
                 )) }
                 </ul>
             </div>
         </div>
    )
}

const modalStyle = {
    borderRadius : '20px'
}

const modalContent = {
    borderRadius : '20px'
}

TechListModel.propTypes = {
    tech : PropTypes.object.isRequired,
    getTechs : PropTypes.func.isRequired,
}

const mapStateToProp = state => ({
    tech : state.tech
})


export default connect(mapStateToProp , { getTechs }) (TechListModel);
