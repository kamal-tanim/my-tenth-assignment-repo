import React from 'react';
import { GoogleBtn } from '../assets/Styles/styles';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialAuthentication = () => {
  const { socialAuthentication } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialAuthentication = () => {
    socialAuthentication()
      .then(result => {
        console.log(result.user)
        navigate(location?.state || '/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <GoogleBtn>
      <button
        onClick={handleSocialAuthentication}
        className="btn">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }} role="img" y={128} x={128} fill="#0092E4" viewBox="0 0 24 24" height="40px" width="40px">
          <path d="M21.456 10.154c.123.659.19 1.348.19 2.067c0 5.624-3.764 9.623-9.449 9.623A9.841 9.841 0 0 1 2.353 12a9.841 9.841 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489c-3.248 0-5.888 2.744-5.888 5.993c0 3.248 2.64 5.998 5.888 5.998c2.947 0 4.953-1.685 5.365-3.999h-5.365v-3.839h9.26Z" />
        </svg>
      </button>
    </GoogleBtn>
  );
};

export default SocialAuthentication;