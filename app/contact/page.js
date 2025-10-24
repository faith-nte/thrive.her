import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/*Contact One Start*/}
        <section className="contact-one">
          <div className="container">
            <div className="contact-one__inner">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Contact Us</span>
                </div>
                <h2 className="section-title__title title-animation">
                  Improving care for
                  <br />
                  muslims and black minority women
                </h2>
              </div>
              <form
                className="contact-form-validated contact-one__form"
                method="post"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Your Name</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-user"></span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <h4 className="contact-one__input-title">Email Address</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-pin"></span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <h4 className="contact-one__input-title">Your phone</h4>
                    <div className="contact-one__input-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-call"></span>
                      </div>
                      <input
                        type="text"
                        name="Phone"
                        placeholder="your phone..."
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <h4 className="contact-one__input-title">Message</h4>
                    <div className="contact-one__input-box text-message-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <textarea
                        name="message"
                        placeholder="write message.."
                      ></textarea>
                    </div>
                    <div className="contact-one__btn-box">
                      <button
                        type="submit"
                        className="thm-btn contact-one__btn"
                      >
                        Send Messege
                        <span>
                          <i className="icon-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </section>
        {/*Contact One End*/}

        {/*Contact Two Start*/}
        <section className="contact-two">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="contact-two__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4897457373544!2d-0.12396!3d51.52096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1dd9c9ba0d%3A0x7e4e2f1e8d9b7c5a!2s34-35%20Hatton%20Garden%2C%20London%20EC1N%208DX!5e0!3m2!1sen!2suk!4v1666666666"
                    className="contact-two__google-map"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="contact-two__right">
                  <ul className="contact-two__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-pin-two"></span>
                      </div>
                      <div className="content">
                        <h4>Address</h4>
                        <p>
                          Suite 6433, Unit 3a
                          <br />
                          34-35 Hatton Garden
                          <br />
                          London, EC1N 8DX
                          <br />
                          England
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <div className="content">
                        <h4>Email Address</h4>
                        <p>
                          <Link href="mailto:info@thriveher.clinic">
                            info@thriveher.clinic
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <div className="content">
                        <h4>Phone number</h4>
                        <p>
                          <Link href="tel:+447459110397">+44 7459 110397</Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Two End*/}
      </Layout>
    </>
  );
}
