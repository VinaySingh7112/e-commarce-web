import React from 'react'
import '../App.css';

export default function Footer() {
    return (
        <div>
            <section className="py-3 text-light footer-widget border-bottom" style={{ borderColor: "#3d3d46", backgroundColor: " #212129" }}>
                <div className="container">
                    {/* <!-- footer logo --> */}
                    <div className="mt-3 mb-4">
                        <a
                            className="d-block">
                            <img className=" ls-is-cached lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/R4xNSs0cHVjjvUhGq4I3z71D7feug7LDAvLbo3wu.webp" data-src="https://demo.activeitzone.com/ecommerce/public/uploads/all/R4xNSs0cHVjjvUhGq4I3z71D7feug7LDAvLbo3wu.webp" alt="Active eCommerce CMS" height="44" style={{ height: "44px" }} />
                        </a>
                    </div>
                    <div className="row">
                        {/* <!-- about & subscription --> */}
                        <div className="col-xl-6 col-lg-7">
                            <div className="mb-4 text-secondary text-justify">
                                <span style={{ color: " rgb(242, 243, 248)", fontFamily: "" }} open="">Complete system for your eCommerce business</span>
                            </div>
                            <h5 className="fs-14 fw-700 text-soft-light mt-1 mb-3">Subscribe to our newsletter for regular updates about Offers, Coupons &amp; more</h5>
                            <div className="mb-3">
                                <form method="POST" action="https://demo.activeitzone.com/ecommerce/subscribers">
                                    <input type="hidden" name="_token" value="AQl9P4kk6XBwHJHaeE9G6oEM8rhhgQorOoIbfdgW" />                        <div className="row gutters-10">
                                        <div className="col-8">
                                            <input type="email" className="form-control border-secondary rounded-0 text-white w-100 bg-transparent" placeholder="Your Email Address" name="email" required="" />
                                        </div>
                                        <div className="col-4">
                                            <button type="submit" className="btn btn-primary rounded-0 w-100">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col d-none d-lg-block"></div>

                        {/* <!-- Follow & Apps --> */}
                        <div className="col-xxl-3 col-xl-4 col-lg-4">
                            {/* <!-- Social --> */}
                            <h5 className="fs-14 fw-700 text-secondary text-uppercase mt-3 mt-lg-0">Follow Us</h5>
                            <ul className="list-inline social colored mb-4">
                                <li className="list-inline-item ml-2 mr-2">
                                    <a href="https://facebook.com/" target="_blank" className="facebook"><i className="bi bi-facebook fs-2 me-3"></i></a>
                                </li>
                                <li className="list-inline-item ml-2 mr-2">
                                    <a href="https://twitter.com/" target="_blank" className="twitter"><i className="bi bi-twitter fs-2 me-3"></i></a>
                                </li>
                                <li className="list-inline-item ml-2 mr-2">
                                    <a href="https://www.instagram.com/" target="_blank" className="instagram"><i className="bi bi-instagram fs-2 me-3"></i></a>
                                </li>
                                <li className="list-inline-item ml-2 mr-2">
                                    <a href="https://youtube.com/" target="_blank" className="youtube"><i className="bi bi-youtube fs-2 me-3"></i></a>
                                </li>
                                <li className="list-inline-item ml-2 mr-2">
                                    <a href="https://linkedin.com/" target="_blank" className="linkedin"><i className="bi bi-linkedin fs-2 me-3"></i></a>
                                </li>
                            </ul>

                            {/* <!-- Apps link --> */}
                            <h5 className="fs-14 fw-700 text-secondary text-uppercase mt-3">Mobile Apps</h5>
                            <div className="d-flex mt-3">
                                <div className="">
                                    <a
                                        target="_blank" className="mr-2 mb-2 overflow-hidden hov-scale-img">
                                        <img class="has-transition lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/assets/img/play.png" data-src="https://demo.activeitzone.com/ecommerce/public/assets/img/play.png" alt="Active eCommerce CMS" height="44" />
                                    </a>
                                </div>
                                <div className="">
                                    <a
                                        target="_blank" className="overflow-hidden hov-scale-img">
                                        <img className="has-transition lazyloaded" src="https://demo.activeitzone.com/ecommerce/public/assets/img/app.png" data-src="https://demo.activeitzone.com/ecommerce/public/assets/img/app.png" alt="Active eCommerce CMS" height="44" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
            <section className="py-lg-3 text-light footer-widget" style={{ backgroundColor: " #212129" }}>
                {/* <!-- footer widgets ========== [Accordion Fotter widgets are bellow from this]--> */}
                <div className="container d-none d-lg-block">
                    <div className="row">
                        {/* <!-- Quick links --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="text-center text-sm-left mt-4">
                                <h4 className="fs-14 text-secondary text-uppercase fw-700 mb-3">
                                    Quick Links
                                </h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a
                                            className="fs-13 text-soft-light animate-underline-white">
                                            Support Policy Page
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="fs-13 text-soft-light animate-underline-white">
                                            Return Policy Page
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="fs-13 text-soft-light animate-underline-white">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="fs-13 text-soft-light animate-underline-white">
                                            Privacy Policy Page
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="fs-13 text-soft-light animate-underline-white">
                                            Seller Policy
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className="fs-13 text-soft-light animate-underline-white">
                                            Term Conditions Page
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Contacts --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="text-center text-sm-left mt-4">
                                <h4 className="fs-14 text-secondary text-uppercase fw-700 mb-3">Contacts</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <p className="fs-13 text-secondary mb-1">Address</p>
                                        <p className="fs-13 text-soft-light">Demo Address</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="fs-13 text-secondary mb-1">Phone</p>
                                        <p className="fs-13 text-soft-light">123456789</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="fs-13 text-secondary mb-1">Email</p>
                                        <p className="">
                                            <a className="fs-13 text-soft-light hov-text-primary">demo.example@gmail.com</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- My Account --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="text-center text-sm-left mt-4">
                                <h4 className="fs-14 text-secondary text-uppercase fw-700 mb-3">My Account</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" >
                                            Login
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" >
                                            Order History
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" >
                                            My Wishlist
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" >
                                            Track Order
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" >
                                            Be an affiliate partner
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Seller & Delivery Boy --> */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="text-center text-sm-left mt-4">
                                {/* <!-- Seller --> */}
                                <h4 className="fs-14 text-secondary text-uppercase fw-700 mb-3">Seller Zone</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <p className="fs-13 text-soft-light mb-0">
                                            Become A Seller
                                            <a  className="fs-13 fw-700 text-warning ml-2">Apply Now</a>
                                        </p>
                                    </li>
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white">
                                            Login to Seller Panel
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" target="_blank" >
                                            Download Seller App
                                        </a>
                                    </li>
                                </ul>

                                {/* <!-- Delivery Boy --> */}
                                <h4 className="fs-14 text-secondary text-uppercase fw-700 mt-4 mb-3">Delivery Boy</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" >
                                            Login to Delivery Boy Panel
                                        </a>
                                    </li>

                                    <li className="mb-2">
                                        <a className="fs-13 text-soft-light animate-underline-white" target="_blank" >
                                            Download Delivery Boy App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Accordion Fotter widgets --> */}
                <div className="d-lg-none bg-transparent">
                    {/* <!-- Quick links --> */}
                    <div className="aiz-accordion-wrap bg-black">
                        <div className="aiz-accordion-heading container bg-black">
                            <button className="aiz-accordion fs-14 text-white bg-transparent">Quick Links</button>
                        </div>
                        <div className="aiz-accordion-panel bg-transparent" style={{ backgroundColor: " #212129" }}>
                            <div className="container">
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2 pb-2 ">
                                        <a  className="fs-13 text-soft-light text-sm-secondary animate-underline-white">
                                            Support Policy Page
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white">
                                            Return Policy Page
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a  className="fs-13 text-soft-light text-sm-secondary animate-underline-white">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a  className="fs-13 text-soft-light text-sm-secondary animate-underline-white">
                                            Privacy Policy Page
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white">
                                            Seller Policy
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a  className="fs-13 text-soft-light text-sm-secondary animate-underline-white">
                                            Term Conditions Page
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Contacts --> */}
                    <div className="aiz-accordion-wrap bg-black">
                        <div className="aiz-accordion-heading container bg-black">
                            <button className="aiz-accordion fs-14 text-white bg-transparent">Contacts</button>
                        </div>
                        <div className="aiz-accordion-panel bg-transparent" style={{ backgroundColor: " #212129" }}>
                            <div className="container">
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <p className="fs-13 text-secondary mb-1">Address</p>
                                        <p className="fs-13 text-soft-light">Demo Address</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="fs-13 text-secondary mb-1">Phone</p>
                                        <p className="fs-13 text-soft-light">123456789</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="fs-13 text-secondary mb-1">Email</p>
                                        <p className="">
                                            <a  className="fs-13 text-soft-light hov-text-primary">demo.example@gmail.com</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- My Account --> */}
                    <div className="aiz-accordion-wrap bg-black">
                        <div className="aiz-accordion-heading container bg-black">
                            <button className="aiz-accordion fs-14 text-white bg-transparent">My Account</button>
                        </div>
                        <div className="aiz-accordion-panel bg-transparent" style={{ backgroundColor: " #212129" }}>
                            <div className="container">
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            Login
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            Order History
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            My Wishlist
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            Track Order
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            Be an affiliate partner
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Seller --> */}
                    <div className="aiz-accordion-wrap bg-black">
                        <div className="aiz-accordion-heading container bg-black">
                            <button className="aiz-accordion fs-14 text-white bg-transparent">Seller Zone</button>
                        </div>
                        <div className="aiz-accordion-panel bg-transparent" style={{ backgroundColor: " #212129" }}>
                            <div className="container">
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2 pb-2 ">
                                        <p className="fs-13 text-soft-light text-sm-secondary mb-0">
                                            Become A Seller
                                            <a  className="fs-13 fw-700 text-warning ml-2">Apply Now</a>
                                        </p>
                                    </li>
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            Login to Seller Panel
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" target="_blank" >
                                            Download Seller App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Delivery Boy --> */}
                    <div className="aiz-accordion-wrap bg-black">
                        <div className="aiz-accordion-heading container bg-black">
                            <button className="aiz-accordion fs-14 text-white bg-transparent">Delivery Boy</button>
                        </div>
                        <div className="aiz-accordion-panel bg-transparent" style={{ backgroundColor: " #212129 " }}>
                            <div className="container">
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2 pb-2 ">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" >
                                            Login to Delivery Boy Panel
                                        </a>
                                    </li>
                                    <li className="mb-2 pb-2">
                                        <a className="fs-13 text-soft-light text-sm-secondary animate-underline-white" target="_blank" >
                                            Download Delivery Boy App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
