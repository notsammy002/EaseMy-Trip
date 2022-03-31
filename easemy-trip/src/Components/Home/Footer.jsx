import React from 'react'
import footerStyle from "./footer.module.css"

const Footer = () => {

  return (
    <>
      <div className={footerStyle.footer}>
        <div className={footerStyle.innerFooter}>
          <div className={footerStyle.innerFooterpadding}>

            <div className={footerStyle.ftr_col1}>
              <div className={footerStyle.ftr_col_head}>Our Product</div>
              <ul className={footerStyle.ftr_col_list}>
                <li><a href="https://www.easemytrip.com/flights.html">Book Flights</a></li>
                <li><a href="https://www.easemytrip.com/refer">Refer &amp; Earn</a>
                  <div className={footerStyle.skew2_v1}><p className={footerStyle.n_deal2}>New</p></div></li>
                <li><a href="https://www.easemytrip.com/flight-status">Flight Status</a></li>
                <li><a href="https://www.easemytrip.com/hotels/">Hotel Booking</a></li>
                <li><a href="https://www.easemytrip.com/railways/">Trains</a></li>
                <li><a href="https://www.easemytrip.com/railways/pnr-status" target="_blank"> PNR Status</a></li>
                <li><a href="//www.easemytrip.com/airfare-calender">Lowest Airfare Calendar</a></li>
                <li><a href="//www.easemytrip.com/domestic-flights.html">Domestic Flights</a></li>
                <li><a href="//www.easemytrip.com/international-flights.html">International Flights</a></li>
                <li><a href="https://www.easemytrip.com/holiday-packages.html">Holiday Packages</a></li>
                <li><a href="https://www.easemytrip.com/bus/">Bus</a></li>
                <li><a href="https://www.easemytrip.com/cabs">Cabs</a></li>
                <li><a href="//www.easemytrip.com/franchise/index.html">Franchise</a></li>
                <li><a href="https://www.easemytrip.com/mice/index.html" target="_new"><span>Mice</span></a>

                </li>
              </ul>

            </div>

            <div className={footerStyle.ftr_col1}>
              <div className={footerStyle.ftr_col_head}> EMT Info </div>
              <ul className={footerStyle.ftr_col_list}>
                <li><a href="//www.easemytrip.com/privacy-policy.html">Privacy Policy</a></li>
                <li><a href="//www.easemytrip.com/terms.html">Terms &amp; Conditions</a></li>
                <li><a href="//www.easemytrip.com/user-agreement.html">User Agreement</a></li>
                <li><a href="//www.easemytrip.com/investor-relations.html">Investors Relation</a></li>
                <li><a href="//www.easemytrip.com/mobile-app.html">Mobile App</a></li>
                <li><a href="//www.easemytrip.com/achievements/index.html">Achievements</a></li>
                <li><a href="//www.easemytrip.com/career.html">Career</a></li>
                <li><a href="//www.easemytrip.com/about-us.html">About Us</a></li>
                <li><a href="//www.easemytrip.com/contact-us.html">Contact Us</a></li>
              </ul>
            </div>

            <div className={footerStyle.ftr_col1}>
              <div className={footerStyle.ftr_col_head}>  SITE DIRECTORY  </div>
              <ul className={footerStyle.ftr_col_list}>
                <li><a href="//www.easemytrip.com/directory/flights.html">Flight by City</a></li>
                <li><a href="//www.easemytrip.com/directory/packages.html">Holidays</a></li>
                <li><a href="//www.easemytrip.com/directory/airlines.html">Airlines</a></li>
                <li><a href="//www.easemytrip.com/airports/airports-in-india.html">Airports</a></li>
                <li><a href="//www.easemytrip.com/directory/domestic-flight-schedule.html">Flight Schedule</a></li>
                <li><a href="https://www.easemytrip.com/directory/train-routes.html">Train Routes</a></li>
                <li><a href="https://www.easemytrip.com/directory/bus-routes.html">Bus Routes</a></li>
                <li><a href="https://www.easemytrip.com/directory/hotels-in-india.html">Hotel Directory</a></li>
                <li><a href="//www.easemytrip.com/travel-guides.html">Travel Guides</a></li>
                <li><a href="https://www.easemytrip.com/blog/">Blog</a></li>
                <li><a href="//www.easemytrip.com/travel-updates.html">Travel Updates</a></li>
                <li><a href="//www.easemytrip.com/sitemap.html">Sitemap</a></li>
                <li><a href="https://www.easemytrip.com/offers/flights.html">Flight Offers</a></li>
              </ul>
            </div>

            <div className={footerStyle.ftr_col1}>
              <div className={footerStyle.ftr_col_head}> Popular Airlines </div>
              <ul className={footerStyle.ftr_col_list}>
                <li><a href="https://www.easemytrip.com/airline-tickets/indigo.html">IndiGo Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/air-india.html">Air India  Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/goair.html">GO FIRST Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/vistara.html">Vistara Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/spicejet.html">SpiceJet Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/air-asia.html">Air Asia Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/british-airways.html">British airways</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/qatar-airways.html">Qatar airways</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/singapore-airlines.html">Singapore Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/etihad-airways.html">Etihad airways</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/thai-airways.html">Thai airways</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/united-airlines.html">United Airlines</a></li>
                <li><a href="https://www.easemytrip.com/airline-tickets/american-airlines.html">American Airlines</a></li>
                <li><a href="https://www.easemytrip.com/offers/malaysian-airlines.html">Malaysia Airlines</a></li>
              </ul>



            </div>

            {/* the socail and cards */}

            <div className={footerStyle.ftr_col2}>
              <div className={footerStyle.ftr_col2_inr}>
                <div className={footerStyle.ftr_col2_title}>Payment & Security</div>

                <div className={footerStyle.ftr_col2_cards}>
                  <a className={footerStyle.ftr_col2_visa} title="Visa"></a>
                  <a className={footerStyle.ftr_col2_master} title="Master Card"></a>
                  <a className={footerStyle.ftr_col2_american} title="American Express"></a>
                  <a className={footerStyle.ftr_col2_paypal} title="PayPal"></a>
                  <div className={footerStyle.ftr_col2_clr}></div>
                  <a className={footerStyle.ftr_col2_rupay} title="RuPay"></a>
                  <a className={footerStyle.ftr_col2_pci} title="PCI Security"></a>
                </div>

                <div className={footerStyle.ftr_col2_title2}>Follow us on </div>

                <div className={footerStyle.ftr_col2_social}>
                  <a href="https://www.facebook.com/EaseMyTrip/" target="_new" title="Facebook" className={footerStyle.ftr_col2_social_fb_b}><span className={footerStyle.ftr_col2_social_fb_n}></span></a>
                  <a href="https://twitter.com/easemytrip" title="Twitter" target="_new" className={footerStyle.ftr_col2_social_tw_b}><span className={footerStyle.ftr_col2_social_tw_n}></span></a>
                  <a href="https://www.youtube.com/c/EaseMyTripOfficial" title="You Tube" target="_new" className={footerStyle.ftr_col2_social_yt_b}><span className={footerStyle.ftr_col2_social_yt_n}></span></a>
                  <a href="https://www.linkedin.com/company/easemytrip-com" title="LinkedIn" target="_new" className={footerStyle.ftr_col2_social_li_b}><span className={footerStyle.ftr_col2_social_li_n}></span></a>
                  <a href="https://www.instagram.com/easemytrip/" title="Instagram" target="_new" className={footerStyle.ftr_col2_social_in_b}><span className={footerStyle.ftr_col2_social_in_n}></span></a>
                </div>
              </div>
            </div>

            <div className={footerStyle.ftr_col3}>
              <div className={footerStyle.ftr_col3_title}>
                <span>Download</span>
                EaseMyTrip App
              </div>

              <a href="//play.google.com/store/apps/details?id=com.easemytrip.android" className={footerStyle.ftr_col3_pl_store} title="Google Play Store"></a>

              <a href="https://itunes.apple.com/in/app/easemytrip-flight-booking/id1053030595?mt=8" className={footerStyle.ftr_col3_app_store} title="App Store"></a>
            </div>

          </div>
        </div>

        <div className={footerStyle.clr}></div>

        <div className={footerStyle.bdr_1}></div>
        <div className={footerStyle.innerFooter2}>

          <div className={footerStyle.ftr_col4_copywrite}>
            Copyright © {(new Date().getFullYear())}
            EaseMyTrip
          </div>

          <div className={footerStyle.ftr_col5}>
            <ul>
              <li><img src="https://www.easemytrip.com/images/common/footer-btm-sprite.png" /></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer