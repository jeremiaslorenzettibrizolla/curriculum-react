import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { MainLayout, InnerLayout } from '../../styles/Layouts';
import Title from '../../Components/Title';
import PrimaryButton from '../../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../../Components/ContactItem';
import { ContactStyled } from './styled';
import { user } from '../../data/data';
import api from '../../services/Api';

const initialValue = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const Contact = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [formValues, setFormValues] = useState(initialValue);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const visitor = Object.fromEntries(formData);

    if (!visitor.name || !visitor.phone || !visitor.email) {
      alerts('error', 'Preencha todos os campos');
    } else {
      sendEmail(event);
      api.postVisitor(visitor);
      setFormValues(initialValue);
    }

    console.log('handleSubmit', visitor);
  };

  console.log('formValues', formValues);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'gmailMessage',
        'template_vluye9q',
        event.target,
        'user_vhTLMlrK7gP4NEn4v9Jfq',
      )
      .then(
        (result) => {
          alerts('success', 'Mensagem enviada com sucesso!');
        },
        (error) => {
          alerts('error', `${error}`);
        },
      );
  };

  const alerts = (type, message) => {
    Swal.fire({
      position: 'top',
      icon: `${type}`,
      title: `${message}`,
      showConfirmButton: false,
      timer: 2500,
    });
    return;
  };

  return (
    <MainLayout>
      <Title title={'Contato'} span={'Contato'} />
      <ContactStyled>
        <InnerLayout className={'contact-section'}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Entrar em contato</h4>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Digite seu nome*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Digite seu email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Digite seu telefone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Digite uma mensagem</label>
                <textarea
                  id="message"
                  cols="30"
                  rows="10"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={'Enviar'} type="submit" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title={'Telefone'} icon={phone} content={user.phone} />
            <ContactItem title={'Email'} icon={email} content={user.email} />
            <ContactItem
              title={'Endereço'}
              icon={location}
              content={user.address}
            />
          </div>
        </InnerLayout>
      </ContactStyled>
    </MainLayout>
  );
};

export default Contact;
