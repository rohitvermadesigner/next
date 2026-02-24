import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (

    <>
    {/* <nav className="flex gap-8 font-weight-medium">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/services">Our Services</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/careers">Careers</Link>
      <Link href="/contact">Contact Us</Link>
    </nav> */}


 <nav className="col-md-10 col-sm-10 col-xs-10 position-static">
          <ul>
            <li><Link href="<?php echo site_url(); ?>">Home</Link></li>

            <li className="position-static"><Link href="<?php echo site_url(); ?>/about-us/">About Us</Link> <span
                className="submenu-icon1"><i className="fa fa-chevron-down"></i></span>
              <div className="bigSubmenu">
                <ul className="">
                  <li><Link href="<?php echo site_url(); ?>/ourteam/">Our Team</Link>
                  </li>


                  <li><Link href="<?php echo site_url(); ?>/affiliation-and-acrediations/">Affiliations and
                      Accreditations</Link>
                    <ul className="about-list">
                      <li>Dubai Multi Commodities Center (DMCC)</li>
                      <li>Dubai Airport Freezone Authority (DAFZA)</li>
                      <li>Jebel Ali Free Zone Authority (JAFZA)</li>
                      <li>Dubai World Central (DWC)</li>
                      <li>Creative City Fujairaj</li>
                      <li>Dubai Silicon Oasis (DSO)</li>
                      <li>UAQ Free Trade Zone</li>
                      <li>Saif Zone Sharjah</li>
                      <li>Dubai International Financial Centre
                        (DIFC)
                        {/* <?php include 'assets/includes/menu/affiliation-and-acrediations.php' ?> */}
                        </li>

                    </ul>
                  </li>


                  <li><Link href="<?php echo site_url(); ?>/dataprotection/">Data Protection Policy</Link>
                  </li>


                  <li><Link href="<?php echo site_url(); ?>/socialresponsibilitypolicy/">Social Responsibility</Link>
                  </li>
                </ul>
              </div>

            </li>


            <li className="position-static">
              <Link href="<?php echo site_url(); ?>/our-services/">Our Services </Link> <span className="submenu-icon1"><i
                  className="fa fa-chevron-down"></i></span>
              <div className="bigSubmenu">
                <ul className="">
                  <li><span className="mobile-menu-flex">
                      <Link href="<?php echo site_url(); ?>/audit-assurance/" className="mobile-menu">Audit & Assurance</Link>
                      <span className="plus-symbol"><i className="fa-solid fa-plus"></i></span>
                    </span>

                    <ul>
                      <li><Link href="<?php echo site_url(); ?>/external-statutory-audit/">External/Statutory Audit</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/internal-audit/">Internal Audit</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/stock-audit/">Stock Audit</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/liquidation-report/">Liquidation Report</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/review-management-report/">Review/Management Report</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/interim-audit-report/">Interim Audit Report</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/consolidation-of-financial/">Consolidation of Financial
                          Statements</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/special-purpose-audit-report/">Special Purpose Audit
                          Report</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/cost-audit/">Cost Audit</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/compliance-audit/">Compliance Audit</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/sales-revenue-audit/">Sales/Revenue Audit</Link>
                      </li>
                      <li><Link href="<?php echo site_url(); ?>/forensic-audit/">Forensic Audit</Link>
                        {/* <?php include 'assets/includes/menu/audit-assurance.php' ?> */}
                      </li>
                    </ul>
                  </li>




                  <li>
                    <span className="mobile-menu-flex">
                      <Link href="<?php echo site_url(); ?>/accounting-book-keeping/" className="mobile-menu">Accounting &
                        Bookkeeping
                      </Link>
                      <span className="plus-symbol"><i className="fa-solid fa-plus"></i></span>
                    </span>

                    <ul>
                      <li><Link href="<?php echo site_url(); ?>/Bookkeeping-Monthly-Reporting/">Bookkeeping and Monthly MIS
                          Reporting</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/management-accounting/">Management Accounting</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/review-reconciliation/">Review and reconciliation of
                          accounts</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/payroll-accounting/">Payroll Accounting</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/cost-accounting/">Cost Accounting</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/assistance-statutory-audit/">Assistance for statutory
                          audit</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/physical-verification-inventory/">Physical verification of
                          inventory</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/budgeting-costing-forecasting/">Budgeting, Costing, and
                          Forecasting</Link>
                        {/* <?php include 'assets/includes/menu/accounting-bookkeeping.php' ?> */}
                      </li>

                    </ul>
                  </li>


                  <li>
                    <span className="mobile-menu-flex">
                      <Link href="<?php echo site_url(); ?>/tax-advisory/" className="mobile-menu">Taxation Services
                      </Link>
                      <span className="plus-symbol"><i className="fa-solid fa-plus"></i></span>
                    </span>

                    <ul>
                      <li><Link href="<?php echo site_url(); ?>/corporate-tax-in-uae/">Corporate Tax</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/vat-advisory-compliance/">VAT Advisory and Compliance</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/vat-registration/">VAT Registration</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/vat-return-filing-services/">VAT Return Filing Services</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/vat-deregistration/">VAT Deregistration</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/tax-residency-domicile/">Tax Residency/Domicile</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/vat-refund-claim/">VAT Refund Claim Services</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/excise-tax-registration/">Excise Tax Registration</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/excise-tax-returns/">Excise Tax Returns</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/voluntary-disclosure/">Voluntary Disclosure</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/reconsideration-waiver/">Reconsideration for Waiver</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/transaction-advisory/">Transaction Advisory on VAT</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/custom-registration-renewal/">Custom Registration and
                          Renewal</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/tax-audit/">Tax Audit</Link>
                        {/* <?php include 'assets/includes/menu/taxation-services.php' ?> */}
                      </li>

                    </ul>


                  </li>
                  <li><span className="mobile-menu-flex">
                      <Link href="<?php echo site_url(); ?>/compliance-services/" className="mobile-menu">Compliance Services
                      </Link>
                      <span className="plus-symbol"><i className="fa-solid fa-plus"></i></span>
                    </span>

                    <ul>
                      <li><Link href="<?php echo site_url(); ?>/compliance-advisory/">Compliance Advisory</Link></li>



                      <li><Link href="<?php echo site_url(); ?>/aml-services/">AML Services</Link></li>

                      <li><Link href="<?php echo site_url(); ?>/ubo-services/">UBO Services</Link></li>


                    </ul>




                  </li>


                  <li>
                    <span className="mobile-menu-flex">
                      <Link href="<?php echo site_url(); ?>/business-advisory-services/" className="mobile-menu">Business
                        Advisory
                      </Link>
                      <span className="plus-symbol"><i className="fa-solid fa-plus"></i></span>
                    </span>

                    <ul>
                      <li><Link href="<?php echo site_url(); ?>/company-incorporation/">Company Incorporation</Link>
                      </li>



                      <li><Link href="<?php echo site_url(); ?>/business-valuation/">Business Valuation</Link>
                      </li>

                      <li><Link href="<?php echo site_url(); ?>/liquidation-services/">Liquidation Services</Link>
                      </li>



                      <li><Link href="<?php echo site_url(); ?>/immigration-visa/">Immigration and Visa</Link>
                      </li>


                      <li><Link href="<?php echo site_url(); ?>/document-attestation-services/">Document Attestation
                          Services</Link>
                      </li>


                      <li><Link href="<?php echo site_url(); ?>/flexi-desk-business-assistance/">Flexi-desk Business
                          Assistance</Link>
                      </li>


                      <li><Link href="<?php echo site_url(); ?>/flexi-desk-call-answering-services/">Flexi-desk Call
                          Answering Services</Link>
                      </li>


                      <li><Link href="<?php echo site_url(); ?>/flexi-desk-postal-solutions/">Flexi-desk Postal
                          Solutions</Link>
                      </li>


                      <li><Link href="<?php echo site_url(); ?>/operational-services/">Operational Services</Link>
                        {/* <?php include 'assets/includes/menu/business-advisory.php' ?> */}
                      </li>



                    </ul>


                  </li>
                </ul>
              </div>

            </li>

            <li><Link href="<?php echo site_url(); ?>/blog/">Blog</Link></li>
            <li><Link href="<?php echo site_url(); ?>/career/">Careers</Link></li>
            <li><Link href="<?php echo site_url(); ?>/contact/">Contact Us</Link></li>
            <li className="d-flex contact-flex">
              <span className="btn-left">
                <Link href="https://wa.me/97145570410" target="_blank" aria-label="WhatsApp">
                {/* <i className="fab fa-whatsapp"></i> */}
                <FaWhatsapp className="text-white" />
                </Link>
              </span>
              <Link className="contact-style" href="https://wa.me/97145570410" target="_blank" aria-label="WhatsApp"><span className="btn-right">Chat
                  Now</span></Link>

            </li>

            <li className="d-flex contact-flex">
              <span className="btn-left">
                <Link href="tel://+97145570410" target="_blank" aria-label="Phone">
                {/* <i className="fa fa-phone"></i> */}
                <FaPhoneAlt className="text-white" />
                </Link>
              </span>
              <Link className="contact-style" href="tel://+97145570410" target="_blank" aria-label="Phone"><span className="btn-right">Call
                  Now</span></Link>
            </li>

          </ul>
        </nav>

    </>




  );
}