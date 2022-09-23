import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <div className="container ">
        <div class="bg-light py-2">
          <div>
            <h2 className="text-center">
              <b>CONTACT US...</b>  <br />
            </h2>
          </div>

          <div class="row text-center d-flex justify-content-center">
            <div class="col-lg-3 col-sm-6 mb-2">
              <div class="bg-white rounded shadow-sm py-2 px-2">
                <img
                  src=""
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Pune ShivajiNagar</h5>
                <h6>Ph. 7387774573</h6>
                <span class="small text-uppercase text-muted">
                  Office Address : CJ Heights,
                  <br />
                  Sadguru Corner,Shivajinagar, Pune : 415517{" "}
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div class="col-lg-3 col-sm-6 mb-2">
              <div class="bg-white rounded shadow-sm py-2 px-2">
                <img
                  src=""
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Pune Kothrud</h5>
                <h6>Ph.9988774455</h6>
                <span class="small text-uppercase text-muted">
                  {" "}
                  Address :Candent Heights,Chandani-chowk,Kothrud,
                   <br/>Pune : 415510{" "}
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 class="font-weight-light">
              <b>Our Team Is Available 24/7</b> <br />
              <br />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
