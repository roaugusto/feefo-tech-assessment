import PropTypes from 'prop-types';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

import {
  StyledContactContent,
  StyledContactDetails,
  StyledContactInfoContainer,
  StyledContactInfoContainerTitle,
  StyledMail,
  StyledName,
  StyledPhone,
  StyledWrapperIcon,
  StyledWrapperMail,
  StyledWrapperMailPhone,
  StyledWrapperPhone,
  StyledWrapperUserRef
} from './styles';

export function ContactInfo({ data }) {

  return (
    <StyledContactInfoContainer>
      <StyledContactInfoContainerTitle aria-label='Your Feefo support contact'>
        YOUR FEEFO SUPPORT CONTACT
      </StyledContactInfoContainerTitle>
      <StyledContactContent>
        <StyledWrapperUserRef data-testid="contact-info-first-letter">
          <strong>{data.name.charAt(0)}</strong>
        </StyledWrapperUserRef>
        <StyledContactDetails>
          <StyledName
            data-testid="contact-info-name"
            aria-label={`Your support contact is ${data.name}`}
          >{data.name}</StyledName>
          <StyledWrapperMailPhone>
            <StyledWrapperMail>
              <StyledWrapperIcon>
                <MdEmail color='#484446' />
              </StyledWrapperIcon>
              <StyledMail
                data-testid="contact-info-mail"
                aria-label={`Your support contact email is ${data.email}`}
                href={`mailto:${data.email}`}>
                {data.email}
              </StyledMail>
            </StyledWrapperMail>
            <StyledWrapperPhone>
              <StyledWrapperIcon>
                <BsFillTelephoneFill color='#484446' />
              </StyledWrapperIcon>
              <StyledPhone
                data-testid="contact-info-phone"
                aria-label={`Your support contact phone is ${data.phone}`}
              >{data.phone}</StyledPhone>
            </StyledWrapperPhone>
          </StyledWrapperMailPhone>
        </StyledContactDetails>
      </StyledContactContent>
    </StyledContactInfoContainer>
  );
}

ContactInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
