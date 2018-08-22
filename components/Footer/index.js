import React from 'react';
import SocialBar from '../SocialBar';
import './style.scss';

export default () => (
  <footer>
    <div className="footer-left">
      <SocialBar />
      <p className="footer-copyright">
        &copy; 2018 Rukeith.com All Rights Reserved
      </p>
    </div>
    <div className="footer-right">
      <h3>
        Contact Me
      </h3>
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
