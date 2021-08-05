import React from 'react';
import CerttificatePic from '../../../../assets/dpl_cert2.jpg';
import '../Home.scss';

const CertPicFull = () => (
  <>
  <div className="about-img-cont">
    <div className='img-cropper'>
      <img src={CerttificatePic} className="about-pic"/>
    </div>
  </div>
  </>
)

export default CertPicFull;