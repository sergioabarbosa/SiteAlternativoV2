import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

interface FooterProps {
  telefone: string;
  endereco: string;
}

const Footer: React.FC<FooterProps> = ({ telefone, endereco }) => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className="contact-info">
        <p>Telefone: {telefone}</p>
        <p>Endereço: {endereco}</p>
      </div>
      <p className="copyright">&#169; {new Date().getFullYear()} Colégio Alternativo</p>
    </footer>
  );
}

export default Footer;
