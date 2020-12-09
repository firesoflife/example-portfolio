import React from 'react';
import './Sass/App.scss';
// import { Component } from 'react';a

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header id="header-home">
          <nav id="main-nav" className="main-nav solid">
            <div className="logo">
              <h2>Bryan Goertz</h2>
              <hr />
              <p>I make web stuff</p>
            </div>
            <ul className="main-nav__items">
              <li>
                <a href="index.html" className="active main-nav__item">
                  Home
                </a>
              </li>
              <li>
                <a href="#specialties" className="main-nav__item">
                  Specialties
                </a>
              </li>
              <li className="main-nav__item">
                <a href="#projects">Projects</a>
              </li>
              <li className="main-nav__item">
                <a href="#contact">Contact</a>
              </li>
              <li className="main-nav__item">
                <a href="construction.html">About</a>
              </li>
              <li className="main-nav__item">
                <a href="construction.html">Blog</a>
              </li>
            </ul>

            {/* Mlbile Nav */}
            <div id="mobile-nav" className="mobile-nav">
              <div className="menu">
                <input type="checkbox" className="toggler" />
                <div className="menu__hamburger">
                  <div></div>
                </div>
                <div className="menu__content">
                  <div>
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="#specialties">Specialties</a>
                      </li>
                      <li>
                        <a href="#projects">Projects</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                      <li>
                        <a href="construction.html">About</a>
                      </li>
                      <li>
                        <a href="construction.html">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Header Content */}

          <div className="header-content">
            <div className="header-content__items">
              <h1 className="header-content__items--title">
                <span className="hello">Hello,</span> I'm Bryan: <br />
                <span className="title-span">
                  Web Designer <span>|</span> Developer
                </span>
              </h1>
              <p className="header-content__items--tag">
                Have a poke around and take a look at some of my work
              </p>
              <a
                href="#projects"
                className="header-content__items--btn btn-main"
              >
                <span>See My Work</span>
              </a>
            </div>
          </div>
        </header>

        {/* <!-- SECTION A: SPECIALTIES --> */}
        <section className="home-a" id="specialties">
          <div className="container">
            {/* <!-- Section Titles Start --> */}
            <div className="section__title--container">
              <h2 className="section__title--a">
                Some of the Web Stuff that I can build
              </h2>
              <div className="section__title--bottom-line"></div>
              <p className="lead"></p>
            </div>
            {/* <!-- Section Title End --> */}
            <div className="home-a--content specials">
              <div className="specials__item">
                <div className="specials__item--icon-box-odd specials__item-box">
                  <i className="material-icons md-36">architecture</i>
                </div>
                <div className="specials__text-box">
                  <h3>Project Management</h3>
                  <p>
                    Need a Website? I will take you from the very start through
                    to the end. Not sure exactly what you need? That's ok!
                    Together we will discuss the goals for your project to
                    maximize your visitors engagment with your site, product,
                    service, or message! If you've already got some ideas, some
                    designs, and materials you'd like to incorporate, rest
                    assured, I will bring them to life on the web! Get in touch
                    below to get started.
                  </p>
                </div>
              </div>
              <div className="specials__item">
                <div className="specials__item--icon-box-even specials__item-box">
                  <i className="material-icons md-36">palette</i>
                </div>
                <div className="specials__text-box">
                  <h3>Full UX/UI Design</h3>
                  <p>
                    One of the most important things to consider is how users
                    will interact with your page. User experience is the name of
                    the game here, and I have spent years analyzing and thinking
                    through what makes a website "good". After all, users won't
                    spend much time on a website they deem to be confusing and
                    difficult to navigate. I put extensive effort into building
                    a simple interface that is inviting and engaging!
                  </p>
                </div>
              </div>
              <div className="specials__item">
                <div className="specials__item--icon-box-odd specials__item-box">
                  <i className="material-icons md-36">code</i>
                </div>
                <div className="specials__text-box">
                  <h3>Coding & Development</h3>
                  <p>
                    I have years of experience in designing web sites which has
                    translated into figuring out clean and efficient code that
                    will work great for many projects. My incredible passion for
                    education and learning has me adding new skills and coding
                    languages and techniques all the time. I'm currently.
                    Current proficiencies include:
                  </p>
                  <ul>
                    <li>† HTML5 & CSS3 | Bootstrap | Sass</li>
                    <li>† JavaScript</li>
                    <li>
                      † React.js <sub>coming soon</sub>
                    </li>
                    <li>
                      † Ruby <sub>coming soon</sub>
                    </li>
                    <li>† Wordpress, Shopify, WooCommerce & More</li>
                  </ul>
                </div>
              </div>
              <div className="specials__item">
                <div className="specials__item--icon-box-even specials__item-box">
                  <i className="material-icons md-36">store</i>
                </div>
                <div className="specials__text-box">
                  <h3>E-commerce Solutions</h3>
                  <p>
                    Got a website and need to get your product to market? Need a
                    website to get your product to market? I will get you set up
                    in short order!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="tech">
              <div>
                <ion-icon name="logo-html5" className="tech__icons"></ion-icon>
                <p className="tech__title">HMTL 5</p>
              </div>
              <div>
                <ion-icon name="logo-css3" className="tech__icons"></ion-icon>
                <p className="tech__title">CSS 3</p>
              </div>
              <div>
                <ion-icon
                  name="logo-javascript"
                  className="tech__icons"
                ></ion-icon>
                <p className="tech__title">JavaScript</p>
              </div>
              <div>
                <ion-icon name="logo-sass" className="tech__icons"></ion-icon>
                <p className="tech__title">Sass</p>
              </div>
              <div>
                <ion-icon
                  name="logo-wordpress"
                  className="tech__icons"
                ></ion-icon>
                <p className="tech__title">Wordpress</p>
              </div>
              <div>
                <ion-icon name="logo-react" className="tech__icons"></ion-icon>
                <p className="tech__title">React</p>
              </div>
              <div>
                <ion-icon
                  name="code-slash-outline"
                  className="tech__icons"
                ></ion-icon>
                <p className="tech__title">More Soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-------------------------------------
    -------------- PROJECTS ---------------
  ----------------------------------------> */}
        <section className="home-b" id="projects">
          <div className="container">
            {/* <!-- Section Titles Start --> */}
            <div className="section__title--container">
              <h2 className="section__title--b">
                A Small Sampling of the Sites I Have Built
              </h2>
              <div className="section__title--bottom-line"></div>
              <p className="lead"></p>
            </div>
          </div>
          {/* <!-- Section Title End --> */}
          <div className="container">
            <div className="gallery">
              {/* <!-- Woven Collections - Shopify --> */}
              <figure className="gallery__item gallery__item--1">
                <img
                  src="img/woven.jpg"
                  className="gallery__img"
                  alt="Woven Collection Hompage"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Woven Collections | E-commerce</h3>
                      <h4>Made with Shopify</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      This is a simple Shopify e-commerce store. I made minor
                      tweaks to the theme and added and set up a variety of
                      plug-ins to suit the customers needs.
                    </p>
                    <a
                      href="https://wovencollections.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--2">
                <img
                  src="img/Boston_Film_Project.jpg"
                  className="gallery__img"
                  alt="Ficticious Boston Film Festival Homepage Screenshot"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Film Festival | Project</h3>
                      <h4>An HTML & CSS Project for OpenClassrooms.com</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      This site was built from scratch for an OpenClassrooms.com
                      project based on a fictional company that required a site
                      for festival information and pre-registration for
                      attendance via web-form.
                    </p>
                    <a href="Boston Film Festival/index.html" target="_blank">
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--3">
                <img
                  src="img/Delta.jpg"
                  className="gallery__img"
                  alt="Ficticious Luxury Mountain Chalet Realtor Website Screenshot"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Delta Realty | Project</h3>
                      <h4>A Wordpress Theme based site with customizations</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      A Wordpress based project for a fictional luxury
                      real-estate company. A pre-built theme was chosen and
                      custom CSS styles were applied using a child-theme
                      methodology.
                    </p>
                    <a
                      href="https://dev-mountain-calm-realty.pantheonsite.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--4">
                <img
                  src="img/Nuno.jpg"
                  className="gallery__img"
                  alt="A Website Screenshot for a Wordpress Theme Developed Using Bootstrap"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Nuno | Animated Template</h3>
                      <h4>HTML | CSS | Bootstrp 4 | PHP</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      Built in a guided course with Drew Ryan eomploying a
                      pseudo-parallax fixed window scroll feature and ample yet
                      unobtrusive animations on scroll. The images and
                      structures can be changed to suit any purpose.
                    </p>
                    <a href="nuno/index.html" target="_blank">
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--5">
                <img
                  src="img/Trillo.jpg"
                  className="gallery__img"
                  alt="A CSS 3 Developed Website Screenshot for a fictious Real Estate Company"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Trillo</h3>
                      <h4>CSS & SASS</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      A guided CSS & Sass project built under the instruction of
                      Jonas Schmedtmann using the latest standards in HTML and
                      CSS.
                    </p>
                    <a href="Trillo/index.html" target="_blank">
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <img
                  src="img/natours.jpg"
                  className="gallery__img"
                  alt="A Screenshot of a Website for a Fictitious Nature Travel Company"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Natours | Nature Travel Site</h3>
                      <h4>HTML 5 | CSS & SASS | Jquery</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      All code by me under the design and instruction of Jonas
                      Schmedtmann
                    </p>
                    <a href="Natours/index.html" target="_blank">
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--7">
                <img
                  src="img/omnifood.jpg"
                  className="gallery__img"
                  alt="A Screenshot of A Website for a fictitious Food Delivery Service"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>Omnifood</h3>
                      <h4>HTML | CSS |</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      coded under the design and directin of Jonas Schmedtmann
                    </p>
                    <a href="Omnifood/index.html" target="_blank">
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
              <figure className="gallery__item gallery__item--8">
                <img
                  src="img/Timeline.jpg"
                  className="gallery__img"
                  alt="A screenshot for a website of a knowledge tree style portfolio site"
                />
                <div className="gallery__info">
                  <div className="gallery__info--text">
                    <div>
                      <h3>A Simple CSS Timeline</h3>
                      <h4>HTML | CSS | JavaScript</h4>
                    </div>
                  </div>
                  <div className="gallery__info--text">
                    <p>
                      A small time-line project that incorporates Jquery. Built
                      under the guidance of Brad Traversy.
                    </p>
                    <a href="TimeLine/index.html" target="_blank">
                      <div className="btn-project">Visit Site</div>
                    </a>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* <!-- Knowledge Tree: What I have learned and What I'm Learning --> */}
        <section className="home-c" id="home-c">
          {/* <!-- Section Title Start --> */}
          <div className="code-timeline">
            <div className="bg-img">
              <div className="section__title--container">
                <h2 className="section__title--b">My Tech Life</h2>
                <div className="section__title--bottom-line"></div>
                <p className="section__title--lead">
                  Follow the link below to see a timeline of my education in
                  tech. My current proficiencies and future study intentions are
                  listed
                </p>
                <div className="timeline">
                  <a
                    href="construction.html"
                    target="_blank"
                    className="btn-timeline"
                  >
                    <span>Check It Out</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Section Title End --> */}
        </section>

        {/* <!----------------------------------------
  ----------------  CONTACT PAGE -----------
  -----------------------------------------> */}

        <section className="home-d" id="contact">
          {/* <!-- Section Titles Start --> */}
          <div className="section__title--container">
            <h2 className="section__title--a">
              I can build your website. Get In touch
            </h2>
            <div className="section__title--bottom-line"></div>
            <p className="lead"></p>
          </div>
          {/* <!-- Section Title End --> */}

          <div className="container">
            <div className="home-d--body">
              {/* <!-- ----------PROFILE IMAGE ------------- --> */}
              <div className="profile">
                <div className="profile__title">
                  <h3>Hello there, I'm Bryan</h3>
                </div>
                <div className="profile__img">
                  <img src="img/profile.jpg" alt="" />
                </div>
                <div className="profile__tag">
                  <p>Learn more about me on the about page!</p>
                </div>
                <div className="profile__btn--about">
                  <a
                    href="construction.html"
                    target="_blank"
                    className="btn--about"
                  >
                    go there
                  </a>
                </div>
              </div>

              {/* <!-- -------- CONTACT & SOCIAL---------- --> */}
              <div className="contact">
                <h3>find me on the web</h3>
                <div className="section__title--bottom-line bottom-line-about"></div>
                <ul className="contact__items">
                  <a href="mailto:bryan@excip.io" className="contact__item">
                    <li>
                      <ion-icon name="send-outline"></ion-icon>
                      <span> email</span>
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bryan-goertz/"
                    className="contact__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <span> linkedin</span>
                    </li>
                  </a>
                  <a
                    href="https://github.com/firesoflife"
                    className="contact__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <ion-icon name="logo-github"></ion-icon>
                      <span> github</span>
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/bryangoertz/"
                    className="contact__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <ion-icon name="logo-instagram"></ion-icon>
                      <span> instagram</span>
                    </li>
                  </a>
                  <a
                    href="https://www.facebook.com/bryan.d.goertz"
                    className="contact__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>
                      <ion-icon name="logo-facebook"></ion-icon>
                      <span> facebook</span>
                    </li>
                  </a>
                  <li>... Or simply fill out the contact form</li>
                </ul>
              </div>

              {/* <!-- -------------CONTACT FORM --> */}
              <div className="form">
                <div className="form__container">
                  <form className="form__container--content">
                    <div className="form__title">
                      <h3>Get in touch</h3>
                      <hr />
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Name"
                        id="name"
                        required
                      />
                      <label for="name" className="form__label">
                        Full Name
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        className="form__input"
                        placeholder="Email"
                        type="email"
                        required
                      />
                      <label for="email" className="form__label">
                        Email Address
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        className="form__input"
                        placeholder="Phone Number"
                        type="text"
                      />
                      <label for="phone" className="form__label">
                        Phone Number
                      </label>
                    </div>

                    <div className="form__group">
                      <textarea
                        row="8"
                        placeholder="Send a Message"
                        type="message"
                        name="message"
                        className="form__input"
                      ></textarea>
                      <label for="message" className="form__label">
                        Send me a message!
                      </label>
                    </div>

                    <div className="btn-form">
                      <button type="submit" className="">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer__container" id="footer">
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#specialties">Specialties</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#blog">blog</a>
          </div>

          <div className="footer__logo logo">
            <div className="footer__logo--box">
              <h2>Bryan Goertz</h2>
              <hr />
              <p>
                Web Designer <span>|</span> Developer
              </p>
            </div>
          </div>

          <div className="footer__copyright">
            <p>
              This site was designed & coded by me, Bryan Goertz
              <span> &copy; 2020 </span>
            </p>
            <p>Technologies used:</p>
            <p>
              HTML5 <span>|</span> CSS3 <span>|</span> SASS
              <span>|</span> JAVASCRIPT <span>|</span> REACT <span>|</span> PHP
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
