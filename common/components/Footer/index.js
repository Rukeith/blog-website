import React from 'react';
import './style.scss';

const Footer = () => (
  <footer>
    <div className="footer-left">
      <div className="footer-social">
        <a className="footer-social-link github" href="https://github.com/rukeith">
          <img alt="github-link" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fgithub-square.svg?alt=media&token=223f72b3-25fa-421a-ba74-06fed4daa45a" />
        </a>
        <a className="footer-social-link linkedin" href="https://linkedin.com/in/rukeith">
          <img alt="linedin-link" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Flinkedin.svg?alt=media&token=4350fed4-1739-4aa9-8c6b-cf8a8ce2648f" />
        </a>
        <a className="footer-social-link facebook" href="https://github.com/rukeith">
          <img alt="facebook-link" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Ffacebook-square.svg?alt=media&token=76782b32-7347-4926-a5d7-e18a42d0b81a" />
        </a>
        <a className="footer-social-link twitter" href="https://github.com/rukeith">
          <img alt="twitter-link" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Ftwitter-square.svg?alt=media&token=08b43b4c-ce23-4cab-bb17-dd5be551ade0" />
        </a>
        <a className="footer-social-link google-plus" href="https://github.com/rukeith">
          <img alt="google-plus-link" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fgoogle-plus-square.svg?alt=media&token=c538780e-83b7-4956-9efa-3ff70cc39edf" />
        </a>
        <a className="footer-social-link mail" href="https://github.com/rukeith">
          <img alt="mail-link" src="https://firebasestorage.googleapis.com/v0/b/blog-5d8c6.appspot.com/o/font-awesome%2Fenvelope.svg?alt=media&token=47eeba22-58f9-416d-821b-0c9d0e15b1d1" />
        </a>
      </div>

      <p className="footer-copyright">&copy; 2018 Rukeith.com All Rights Reserved</p>
    </div>
    <div className="footer-right">
      <h3>Contact Me</h3>

      <form id="footer-contact-me" name="contact-me" target="_top" action="/contact" method="post">
        <input
          required
          form="contact-me"
          type="email"
          name="email"
          placeholder="Your email"
          formMethod="post"
          formEncType="application/x-www-form-urlencoded"
          pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        />
        <textarea
          form="contact-me"
          name="message"
          rows="4"
          cols="20"
          wrap="hard"
          maxLength="200"
          placeholder="Typing message"
        />
        <button
          form="contact-me"
          type="submit"
          name="contact-me-submit"
          formTarget="_top"
          formMethod="post"
          formEncType="application/x-www-form-urlencoded"
        >
          Send to me
        </button>
      </form>
    </div>
  </footer>
);

export default Footer;
