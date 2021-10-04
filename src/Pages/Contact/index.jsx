import React from "react";
import { MainLayout, InnerLayout } from "../../styles/Layouts";
import Title from "../../Components/Title";
import PrimaryButton from "../../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../../Components/ContactItem";
import { ContactStyled } from "./styled";
import { user } from "../../data/data";

export default function Contact() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contato"} span={"Contato"} />
      <ContactStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Entrar em contato</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Digite seu nome*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Digite seu email*</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Digite seu telefone*</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Digite uma mensagem</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Enviar Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title={"Telefone"} icon={phone} content={user.phone} />
            <ContactItem title={"Email"} icon={email} content={user.email} />
            <ContactItem title={"Endereço"} icon={location} content={user.address} />
          </div>
        </InnerLayout>
      </ContactStyled>
    </MainLayout>
  );
}
