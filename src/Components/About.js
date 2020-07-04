import React, { Component } from "react";
import Link from "./generic/Link";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Vlad Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              I am currently a Software Engineer at{" "}
              <Link url="https://www.shift-technology.com/customer-stories/" openInNewTab>
                Shift Technology
              </Link>
              , having recently graduated from King's College London with a {" "}
              <Link url="https://www.kcl.ac.uk/study/undergraduate/courses/computer-science-with-a-year-in-industry-bsc" openInNewTab>
                1st class Honors BSc in Computer Science
              </Link>
              . I have been with Shift for over 12 months, while my 14-month
              sandwich year (2017-2018) was spent as a Junior Dev at{" "}
              <Link url="http://viagogo.co.uk/" openInNewTab>viagogo</Link>. 
              Both my professional
              and academic backgrounds have been predominantly in web
              application development, although my thesis was focused on
              blockchain technology and decentralized applications.
            </p>
            <p>
              When I am not at work or doing a personal project, you may find
              me reading, working out, gaming or just listening to music.
            </p>
            <p>
              I have
              many interests in terms of coding, and it is in my plans to share
              those through a blog that I wish to add in the next iteration of 
              hotfixprogrammer.com!
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
