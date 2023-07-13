import React from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function contact1() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
      <br/>
    
      <section className="contact1" id="contact1">
        <div className="container1">
          <div className="heading text-center">
            <h2>contact <span>Us</span></h2>
            <h5>We'd love to hear from you!</h5>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           <h3>Keep In Touch With Us</h3>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                
               
              </div>
              <div className="content">
                {/* Info-1 */}
                <div className="info">
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMobile} />&nbsp;
                  <h4 className="d-inline-block">PHONE :&nbsp;
                     
                    <span>+12457836913 , +12457836913</span>
                  </h4>
                </div>
                {/* Info-2 */}
                <div className="info">
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
                  <h4 className="d-inline-block">EMAIL :&nbsp;
                    
                    <span>info@DiveJet.com</span>
                  </h4>
                </div>
                {/* Info-3 */}
                <div className="info">
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;
               

                  <h4 className="d-inline-block">Location :&nbsp;
                    
                    <span>Wadren Castle , 555 Street.</span>
                  </h4>
                </div>
               
              </div>
            </div>

            <div className="col-md-7">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-sm-6">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-sm-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-block" type="submit">Send Now!</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}