"use client";

import styles from "./Footer.module.css";
import {MapIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md col-6">
                <div className="contact-info-section">
                  <div className="contact-sub-head">
                    <h3 className="text-skyBlue">Quick Links</h3>
                    <span className="contact-arrow">
                      <MapPinIcon className="h-4 w-4 text-skyBlue" />
                    </span>
                  </div>
                  <ul>
                    <li>
                      <a href="<?php echo site_url(); ?>/#">Home</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/about-us/">About Us</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/career/">Careers</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/blog/">Blog</a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/contact/">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/affiliation-and-acrediations/">
                        Affiliation & Accreditations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md col-6">
                <div className="contact-info-section">
                  <div className="contact-sub-head">
                    <h3 className="text-skyBlue">Our Services</h3>
                    <span className="contact-arrow">
                      <MapPinIcon className="h-4 w-4 text-skyBlue" />
                    </span>
                  </div>
                  <ul>
                    <li>
                      <a href="<?php echo site_url(); ?>/audit-assurance/">
                        Audit & Assurance
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/accounting-book-keeping/">
                        Accounting & Bookkeeping
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/tax-advisory/">
                        Taxation Services
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/compliance-services/">
                        Compliance Services
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo site_url(); ?>/business-advisory-services/">
                        Business Advisory Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="contact-info-section active">
              <div className="contact-info contact-info-new">
                <h3 className="text-skyBlue">Head Office Dubai</h3>
                <ul>
                  <li>
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                    <span>
                      3503-3507, 35th Floor, HDS Tower
                      <span className="desktop-clearfix"></span>
                      Cluster F, Jumeirah Lake Towers
                      <span className="desktop-clearfix"></span>
                      Dubai, UAE
                    </span>
                  </li>
                  <li>
                    <EnvelopeIcon className="h-4 w-4 text-skyBlue" />
                    <a href="mailto:info@excellenceauditing.com">
                      info@excellenceauditing.com
                    </a>
                  </li>
                  <li>
                    <PhoneIcon className="h-4 w-4 text-skyBlue" />
                    <a href="tel://+97145570410">+971 4 557 0410</a>
                  </li>
                  <li>
                    <MapIcon className="h-4 w-4 text-skyBlue" />
                    <a
                      href="https://www.google.com/maps?ll=25.072322,55.142363&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=12279675812678131738"
                      target="_blank"
                    >
                      Location Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="contact-info-section">
              <div className="contact-info contact-info-new">
                <div className="contact-sub-head">
                  <h3 className="text-skyBlue">Sharjah</h3>
                  <span className="contact-arrow">
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                  </span>
                </div>
                <ul>
                  <li>
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                    <span>
                      Suite 23, Building Y
                      <span className="desktop-clearfix"></span>
                      Sharjah Airport International
                      <span className="desktop-clearfix"></span>
                      Free Zone Sharjah, UAE
                    </span>
                  </li>
                  <li>
                    <EnvelopeIcon className="h-4 w-4 text-skyBlue" />
                    <a href="mailto:info@excellenceauditing.com">
                      info@excellenceauditing.com
                    </a>
                  </li>
                  <li>
                    <PhoneIcon className="h-4 w-4 text-skyBlue" />
                    <a href="tel://+97165652005">+971 6 565 2005</a>
                  </li>
                  <li>
                    <MapIcon className="h-4 w-4 text-skyBlue" />
                    <a
                      href="https://www.google.com/maps?ll=25.329214,55.498762&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=6218384846740589601"
                      target="_blank"
                    >
                      Location Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="contact-info-section">
              <div className="contact-info contact-info-new">
                <div className="contact-sub-head">
                  <h3 className="text-skyBlue">Abu Dhabi</h3>
                  <span className="contact-arrow">
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                  </span>
                </div>
                <ul>
                  <li>
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                    <span>
                      Office 49, 1st Floor Max Home
                      <span className="desktop-clearfix"></span>
                      Business Centre, Emirates Towers
                      <span className="desktop-clearfix"></span>
                      Hamdan Street, Abu Dhabi, UAE
                    </span>
                  </li>
                  <li>
                    <EnvelopeIcon className="h-4 w-4 text-skyBlue" />
                    <a href="mailto:info@excellenceauditing.com">
                      info@excellenceauditing.com
                    </a>
                  </li>
                  <li>
                    <PhoneIcon className="h-4 w-4 text-skyBlue" />
                    <a href="tel://+97165652005">+971 6 565 2005</a>
                  </li>
                  <li>
                    <MapIcon className="h-4 w-4 text-skyBlue" />
                    <a
                      href="https://www.google.com/maps?ll=24.495246,54.370445&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=13632186835138992868"
                      target="_blank"
                    >
                      Location Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="contact-info-section">
              <div className="contact-info contact-info-new">
                <div className="contact-sub-head">
                  <h3 className="text-skyBlue">India</h3>
                  <span className="contact-arrow">
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                  </span>
                </div>
                <ul>
                  <li>
                    <MapPinIcon className="h-4 w-4 text-skyBlue" />
                    <span>
                      4th Floor, B-153, Udhyog Marg,
                      <span className="desktop-clearfix"></span>B Block, Sector
                      6, Noida,<span className="desktop-clearfix"></span>
                      Uttar Pradesh 201301, India
                    </span>
                  </li>
                  <li>
                    <EnvelopeIcon className="h-4 w-4 text-skyBlue" />
                    <a href="mailto:info@excellenceauditing.com">
                      info@excellenceauditing.com
                    </a>
                  </li>
                  <li>
                    <PhoneIcon className="h-4 w-4 text-skyBlue" />
                    <a href="tel://+91204097512">+91 20 4097512</a>
                  </li>
                  <li>
                    <MapIcon className="h-4 w-4 text-skyBlue" />
                    <a
                      href="https://www.google.com/maps?ll=28.590471,77.317812&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=886235088766086049"
                      target="_blank"
                    >
                      Location Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
