import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact--title">
        <h2>contact me</h2>
      </div>
      <div className="contact--content">
        <div className="card">
          <form
            className="contact--form"
            onSubmit={(e) => alert("I am working on")}
          >
            <div className="contact--form--group">
              <div className="contact--form--label">
                <label htmlFor="name">full name</label>
              </div>
              <div className="contact--form--text--field">
                <input type="text" id="name" placeholder="Full Name" required />
              </div>
            </div>
            <div className="contact--form--group">
              <div className="contact--form--label">
                <label htmlFor="email">email</label>
              </div>
              <div className="contact--form--text--field">
                <input type="email" id="email" placeholder="Email" required />
              </div>
            </div>
            <div className="contact--form--group">
              <div className="contact--form--label">
                <label htmlFor="textarea">message</label>
              </div>
              <div className="contact--form--text--field">
                <textarea
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder="Your message..."
                  required
                />
              </div>
            </div>
            <div className="contact--form--btn--field">
              <input
                type="submit"
                value="send"
                // disabled
                onClick={() => alert("I am working on")}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
