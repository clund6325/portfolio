import React from 'react';
import {Button} from '../../components/Button'
import socialLinks from './SocialData';
import Fade from 'react-reveal/Fade';

import SocialLinkMob from './SocialLink';
import './FooterMob.scss';

const FooterMob = () => {

  const mapSocial = (social) => (
    <SocialLinkMob 
    icon={social.icon}
    link={social.link}
    />
  )

  return(
    <>
      <div className='social-flex-cont-mob'>
        <div className="foot-cp-mob">
          <h6>&copy; 2021 Cameron Lund</h6>
        </div>
        <div className="foot-cp-mob">
          <h6>Background Image by <a href="https://pixabay.com/users/manuchi-1728328/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2462430">Денис Марчук</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2462430">Pixabay</a></h6>
        </div>
        <div className="social-mob">
          <Fade>

        {socialLinks.map(mapSocial)}
        </Fade>
        </div>
      </div>
    </>
  )
};

export default FooterMob;