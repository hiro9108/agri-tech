import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact--title">
        <h2>contact me</h2>
      </div>
      <div className="contact--content">
        <div className="card">
          <div className="contact--form">
            <div className="contact--form--group">
              <div className="contact--form--label">
                <label htmlFor="name">your name</label>
              </div>
              <div className="contact--form--text-field">
                <input type="text" id="name" />
              </div>
            </div>
            <div className="contact--form--group">
              <div className="contact--form--label">
                <label htmlFor="email">email</label>
              </div>
              <div className="contact--form--text-field">
                <input type="email" id="email" />
              </div>
            </div>
            <div className="contact--form--group">
              <div className="contact--form--label">
                <label htmlFor="textarea">message</label>
              </div>
              <div className="contact--form--text-field">
                <textarea id="textarea" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="contact--form--btn-field">
              <button className="btn">send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
