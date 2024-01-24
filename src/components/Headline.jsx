import React from 'react'
import Imgzoom from './Imgzoom'
import Imgzoom1 from './Imgzoom1'
import Imgzoom3 from './Imgzoom3'
import Imgzoom2 from './Imgzoom2'
import Card from './Card'
import Imgzoom1_1 from './Imgzoom1_1'
import Imgzoom1_2 from './Imgzoom1_2'
export default function Headline() {
    return (
        <div style={{ paddingTop: "120px" }}>
            <div className='d-flex'>
                <div className='col-3 d-block-inline ps-5 pt-3'>
                    <div className='border-2'>
                        <button className='btn btn-light' style={{ width: "289px" }}> Women Clothing & Fashion</button>
                        <button className='btn btn-light border p-2 ps-5 d-flex justify-content-start' style={{ width: "289px" }}> Men Clothing & Fashion</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start' style={{ width: "289px" }}> Computer & Accessories</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start' style={{ width: "289px" }}>Automobile & Motorcycle</button>
                        <button className='btn btn-light ps-5 d-flex justify-content-start' style={{ width: "289px" }}> Kids & toy</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start' style={{ width: "289px" }}> Sports & outdoor</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start ' style={{ width: "289px" }}>Jewelry & Watches</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start ' style={{ width: "289px" }}>Cellphones & Tabs</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start ' style={{ width: "289px" }}>Beauty,Health & Hair</button>
                        <button className='btn btn-light  p-2 ps-5 d-flex justify-content-start ' style={{ width: "289px" }}>Home Improvement & Tools</button>

                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" class="carousel slide col-8 ms-5 " data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img height={"481px"} src="https://demo.activeitzone.com/ecommerce/public/uploads/all/79gBLzx9r2yfHjl0rWTi4Lw8WKPbQh2Ix1LGjmzN.webp" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img height={"481px"} src="https://demo.activeitzone.com/ecommerce/public/uploads/all/aeXQ4MdQokIdCW2zSp6ON60JnuTJuGyQGv88OCeF.webp" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img height={"481px"} src="https://demo.activeitzone.com/ecommerce/public/uploads/all/rZ7T7A950WJUxDbsbEQZjEbjDofkq9vsWLKAjfgn.webp" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img height={"481px"} src="https://demo.activeitzone.com/ecommerce/public/uploads/all/umF2mohuA5G9a71HoCLN4FKBbwuFxSeL5SdZ6lxS.webp" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img height={"481px"} src=" https://demo.activeitzone.com/ecommerce/public/uploads/all/42LZ93Kg616KMKFXEbkddkELhlnEKxvaycNt60cP.webp" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>


            </div>



            {/* ################################33 */}


           




            {/* ################################33 */}
            <div className="border bg-light " style={{ width: '100%' }}>

                <div className="d-flex pe-5 ps-5 ms-5 me-5 align-items-baseline justify-content-between">

                    <h3 className="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0 ps-4 p-4">
                        <span>Featured Products</span>
                    </h3>

                    <div className="d-flex pe-4">
                        <a type="button" className="arrow-prev slide-arrow text-secondary mr-2 pe-4 link-disable">
                            <i className="bi bi-chevron-left fs-20 fw-600"></i>
                        </a>
                        <a type="button" className="arrow-next slide-arrow text-secondary ml-2 pe-4">
                            <i className="bi bi-chevron-right fs-20 fw-600"></i></a>
                    </div>
                </div>
            </div>

            {/* ###    fatch api with img  #### */}
            <Imgzoom />


            <div className="d-flex justify-content-evenly container-fluid img__elec">
                <div className="img__ele">
                    <img id="img__elec1"
                        src="img0.png"
                        width="360px" alt="" />
                </div>
                <div className="img__ele">
                    <img id="img__elec1"
                        src="img1.png"
                        width="360px" alt="" />
                </div>
                <div className="img__ele">
                    <img id="img__elec1"
                        src="img2.png"
                        width="360px" alt="" />
                </div>
            </div>
            <div className="border bg-light" style={{ width: "100%" }}>

                <div className="d-flex pe-5 ps-5 ms-5 me-5 align-items-baseline justify-content-between">
                    {/* <!-- Title --> */}
                    <h3 className="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0 ps-4 p-4">
                        <span>Featured Categories</span>
                    </h3>
                    {/* <!-- ##### Links ###### --> */}
                    <div className="d-flex pe-4">
                        <a href="#" style={{ textDecoration: "none" }}>View All Categories</a>
                    </div>
                </div>
            </div>
            {/* ###    fatch api with img  #### */}
            <Imgzoom1 />
            <div className="els">
                <div className="img__ele4 ms-4" style={{ textAlign: 'center' }}>
                    <img id="img__elec4" src="hell.png" alt="" />
                </div>
            </div>


            <div className="border bg-light" style={{ width: '100%' }}>

                <div className="d-flex pe-5 ps-5 ms-5 me-5align-items-baseline justify-content-between">
                    {/* <!-- Title --> */}
                    <h3 className="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0 ps-4 p-4">
                        <span>Best Selling</span>
                    </h3>
                    {/* <!-- ##### Links ###### --> */}
                    <div className="d-flex pe-4 align-items-center ">
                        <a type="button" className="arrow-prev slide-arrow text-secondary mr-2 pe-4 link-disable">
                            <i className="bi bi-chevron-left fs-20 fw-600"></i>
                        </a>
                        <a type="button" className="arrow-next slide-arrow text-secondary ml-2 pe-4">
                            <i className="bi bi-chevron-right fs-20 fw-600"></i></a>
                    </div>
                </div>
            </div>

            <Imgzoom1_1 />
            <div className="border bg-light " style={{ width: '100%' }}>

                <div className="d-flex pe-5 ps-5 ms-5 me-5 align-items-baseline justify-content-between">

                    <h3 className="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0 ps-4 p-4">
                        <span>New Products</span>
                    </h3>

                    <div className="d-flex pe-4">
                        <a type="button" className="arrow-prev slide-arrow text-secondary  link-disable">
                            <i className="bi bi-chevron-left fs-20 fw-600"></i>View All
                        </a><a type="button" className="arrow-next slide-arrow text-secondary ml-2 pe-4">
                            <i className="bi bi-chevron-right fs-20 fw-600"></i></a>
                    </div>
                </div>
            </div>
            <Imgzoom1_2 />
            <div className="d-flex justify-content-evenly container-fluid img__elec">
                <div className="img__ele">
                    <img id="img__elec1"
                        src="https://demo.activeitzone.com/ecommerce/public/uploads/all/vNB3jDMXYB3lJhsyCDLBiCQOskJYRx25IfUbHDvY.webp"
                        width="360px" alt="" />
                </div>
                <div className="img__ele">
                    <img id="img__elec1"
                        src="https://demo.activeitzone.com/ecommerce/public/uploads/all/GmCYD2msoYrTGCJtr0jTEf6TAzDI5NjIXUBCBBl8.webp"
                        width="360px" alt="" />
                </div>
                <div className="img__ele">
                    <img id="img__elec1"
                        src="https://demo.activeitzone.com/ecommerce/public/uploads/all/LU5tZQsMhy52D9Q0fvg9V7s9J70ud8ammwvHgIKf.webp"
                        width="360px" alt="" />
                </div>
            </div>

            {/* ##################################### */}

            <div className="border bg-light " style={{ width: '100%' }}>

                <div className="d-flex pe-5 ps-5 ms-5 me-5 align-items-baseline justify-content-between">

                    <h3 className="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0 ps-4 p-4">
                        <span>Auction Products</span>
                    </h3>

                    <div className="d-flex pe-4">
                        <a type="button" className="arrow-prev slide-arrow text-secondary  link-disable">
                            View All Products
                        </a>
                    </div>
                </div>
            </div>

            {/* ##################################### */}

            <div class="d-flex justify-content-evenly container-fluid img__elec">
                <div class="img__elev col-5 ms-5 mt-4">
                    <img id="img__elec1v"
                        src="https://demo.activeitzone.com/ecommerce/public/uploads/all/Z7s5iv2aftZ4sb2oZBwr8VbD5I6HyJvOc3Fnjs2g.webp"
                        width="549px" alt="" />
                </div>

                <div class="col-8  img__elev3">
                    <div class="">
                        <div>
                            <div class="d-flex  card__one1 container-fluid pb-2 pt-2" style={{ flexWrap: 'wrap' }}>
                                <Imgzoom3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ##################################### */}


            <div>
                <div className="mb-2 mb-md-3 mt-2 mt-md-3" style={{ backgroundColor: '#292933' }}>
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-xl-8 text-center text-xl-left">
                                <div className="d-lg-flex">
                                    <div className="mb-3 me-2 mb-lg-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="109.602"
                                            height="93.34"
                                            viewBox="0 0 109.602 93.34"
                                        >
                                            <defs>
                                                <clipPath id="clip-pathcup">
                                                    <path id="Union_10" data-name="Union 10" d="M12263,13778v-15h64v-41h12v56Z"
                                                        transform="translate(-11966 -8442.865)" fill="none" stroke="#fff"
                                                        stroke-width="2"></path>
                                                </clipPath>
                                            </defs>
                                            <g id="Group_24326" data-name="Group 24326"
                                                transform="translate(-274.201 -5254.611)">
                                                <g id="Mask_Group_23" data-name="Mask Group 23"
                                                    transform="translate(-3652.459 1785.452) rotate(-45)"
                                                    clip-path="url(#clip-pathcup)">
                                                    <g id="Group_24322" data-name="Group 24322"
                                                        transform="translate(207 18.136)">
                                                        <g id="Subtraction_167" data-name="Subtraction 167"
                                                            transform="translate(-12177 -8458)" fill="none">
                                                            <path
                                                                d="M12335,13770h-56a8.009,8.009,0,0,1-8-8v-8a8,8,0,0,0,0-16v-8a8.009,8.009,0,0,1,8-8h56a8.009,8.009,0,0,1,8,8v8a8,8,0,0,0,0,16v8A8.009,8.009,0,0,1,12335,13770Z"
                                                                stroke="none"></path>
                                                            <path
                                                                d="M 12335.0009765625 13768.0009765625 C 12338.3095703125 13768.0009765625 12341.0009765625 13765.30859375 12341.0009765625 13762 L 12341.0009765625 13755.798828125 C 12336.4423828125 13754.8701171875 12333.0009765625 13750.8291015625 12333.0009765625 13746 C 12333.0009765625 13741.171875 12336.4423828125 13737.130859375 12341.0009765625 13736.201171875 L 12341.0009765625 13729.9990234375 C 12341.0009765625 13726.6904296875 12338.3095703125 13723.9990234375 12335.0009765625 13723.9990234375 L 12278.9990234375 13723.9990234375 C 12275.6904296875 13723.9990234375 12272.9990234375 13726.6904296875 12272.9990234375 13729.9990234375 L 12272.9990234375 13736.201171875 C 12277.5576171875 13737.1298828125 12280.9990234375 13741.1708984375 12280.9990234375 13746 C 12280.9990234375 13750.828125 12277.5576171875 13754.869140625 12272.9990234375 13755.798828125 L 12272.9990234375 13762 C 12272.9990234375 13765.30859375 12275.6904296875 13768.0009765625 12278.9990234375 13768.0009765625 L 12335.0009765625 13768.0009765625 M 12335.0009765625 13770.0009765625 L 12278.9990234375 13770.0009765625 C 12274.587890625 13770.0009765625 12270.9990234375 13766.412109375 12270.9990234375 13762 L 12270.9990234375 13754 C 12275.4111328125 13753.9990234375 12278.9990234375 13750.4111328125 12278.9990234375 13746 C 12278.9990234375 13741.5888671875 12275.41015625 13738 12270.9990234375 13738 L 12270.9990234375 13729.9990234375 C 12270.9990234375 13725.587890625 12274.587890625 13721.9990234375 12278.9990234375 13721.9990234375 L 12335.0009765625 13721.9990234375 C 12339.412109375 13721.9990234375 12343.0009765625 13725.587890625 12343.0009765625 13729.9990234375 L 12343.0009765625 13738 C 12338.5888671875 13738.0009765625 12335.0009765625 13741.5888671875 12335.0009765625 13746 C 12335.0009765625 13750.4111328125 12338.58984375 13754 12343.0009765625 13754 L 12343.0009765625 13762 C 12343.0009765625 13766.412109375 12339.412109375 13770.0009765625 12335.0009765625 13770.0009765625 Z"
                                                                stroke="none" fill="#fff"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g id="Group_24321" data-name="Group 24321"
                                                    transform="translate(-3514.477 1653.317) rotate(-45)">
                                                    <g id="Subtraction_167-2" data-name="Subtraction 167"
                                                        transform="translate(-12177 -8458)" fill="none">
                                                        <path
                                                            d="M12335,13770h-56a8.009,8.009,0,0,1-8-8v-8a8,8,0,0,0,0-16v-8a8.009,8.009,0,0,1,8-8h56a8.009,8.009,0,0,1,8,8v8a8,8,0,0,0,0,16v8A8.009,8.009,0,0,1,12335,13770Z"
                                                            stroke="none"></path>
                                                        <path
                                                            d="M 12335.0009765625 13768.0009765625 C 12338.3095703125 13768.0009765625 12341.0009765625 13765.30859375 12341.0009765625 13762 L 12341.0009765625 13755.798828125 C 12336.4423828125 13754.8701171875 12333.0009765625 13750.8291015625 12333.0009765625 13746 C 12333.0009765625 13741.171875 12336.4423828125 13737.130859375 12341.0009765625 13736.201171875 L 12341.0009765625 13729.9990234375 C 12341.0009765625 13726.6904296875 12338.3095703125 13723.9990234375 12335.0009765625 13723.9990234375 L 12278.9990234375 13723.9990234375 C 12275.6904296875 13723.9990234375 12272.9990234375 13726.6904296875 12272.9990234375 13729.9990234375 L 12272.9990234375 13736.201171875 C 12277.5576171875 13737.1298828125 12280.9990234375 13741.1708984375 12280.9990234375 13746 C 12280.9990234375 13750.828125 12277.5576171875 13754.869140625 12272.9990234375 13755.798828125 L 12272.9990234375 13762 C 12272.9990234375 13765.30859375 12275.6904296875 13768.0009765625 12278.9990234375 13768.0009765625 L 12335.0009765625 13768.0009765625 M 12335.0009765625 13770.0009765625 L 12278.9990234375 13770.0009765625 C 12274.587890625 13770.0009765625 12270.9990234375 13766.412109375 12270.9990234375 13762 L 12270.9990234375 13754 C 12275.4111328125 13753.9990234375 12278.9990234375 13750.4111328125 12278.9990234375 13746 C 12278.9990234375 13741.5888671875 12275.41015625 13738 12270.9990234375 13738 L 12270.9990234375 13729.9990234375 C 12270.9990234375 13725.587890625 12274.587890625 13721.9990234375 12278.9990234375 13721.9990234375 L 12335.0009765625 13721.9990234375 C 12339.412109375 13721.9990234375 12343.0009765625 13725.587890625 12343.0009765625 13729.9990234375 L 12343.0009765625 13738 C 12338.5888671875 13738.0009765625 12335.0009765625 13741.5888671875 12335.0009765625 13746 C 12335.0009765625 13750.4111328125 12338.58984375 13754 12343.0009765625 13754 L 12343.0009765625 13762 C 12343.0009765625 13766.412109375 12339.412109375 13770.0009765625 12335.0009765625 13770.0009765625 Z"
                                                            stroke="none" fill="#fff"></path>
                                                    </g>
                                                    <g id="Group_24325" data-name="Group 24325">
                                                        <rect id="Rectangle_18578" data-name="Rectangle 18578" width="8"
                                                            height="2" transform="translate(120 5287)" fill="#fff"></rect>
                                                        <rect id="Rectangle_18579" data-name="Rectangle 18579" width="8"
                                                            height="2" transform="translate(132 5287)" fill="#fff"></rect>
                                                        <rect id="Rectangle_18581" data-name="Rectangle 18581" width="8"
                                                            height="2" transform="translate(144 5287)" fill="#fff"></rect>
                                                        <rect id="Rectangle_18580" data-name="Rectangle 18580" width="8"
                                                            height="2" transform="translate(108 5287)" fill="#fff"></rect>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="ml-lg-3">
                                        <h5 className="fs-1 fw-400 text-white mb-3">Save Upto 50% with our Coupons</h5>
                                        <h5 className="fs-5 fw-400 text-white-50">
                                            Get huge discount in products or save money by using coupons while checkout
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 text-center text-xl-right mt-4">
                                <a
                                    href="#"
                                    className="btn text-white hov-bg-white hov-text-dark border border-width-2 fs-16 px-4"
                                    style={{
                                        borderRadius: '28px',
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.16)',
                                    }}
                                >
                                    View All Coupons
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- e###################31 --> */}
            <div>
                <div className="d-flex justify-content-evenly container-fluid img__elec">
                    <div className="img__elevi col-2 ms-4">
                        <div className="watch_position">
                            <img id="img__elec1vi"
                                src="https://demo.activeitzone.com/ecommerce/public/uploads/all/eFg5c8PwJ1ZgqA79FetQJZyMcY02NtpeRya8HRT4.webp"
                                alt="" />
                            <p className="watch">Men Watch & Fashion</p>
                        </div>
                    </div>

                    <div className="col-8">
                        <div>
                            <div>
                                <div className="d-flex card__one1 container-fluid ps-0 pb-2 pt-2">
                                    <Imgzoom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- e###################31 --> */}
            <div>
                <div className="d-flex justify-content-evenly container-fluid img__elec">
                    <div className="img__elevi col-2 ms-4">
                        <div className="watch_position">
                            <img id="img__elec1vi"
                                src="https://demo.activeitzone.com/ecommerce/public/uploads/all/iT43nrKBFske9F5J2pXAfzFkodW65Y8BehfG1BRW.webp"
                                alt="" />
                            <p className="watch">Men Watch & Fashion</p>
                        </div>
                    </div>

                    <div className="col-8">
                        <div>
                            <div>
                                <div className="d-flex card__one1 container-fluid ps-0 pb-2 pt-2">
                                    <Imgzoom2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- e###################33 --> */}
            <div className="border bg-light " style={{ width: '100%' }}>

                <div className="d-flex pe-5 ps-5 ms-5 me-5 align-items-baseline justify-content-between">

                    <h3 className="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0 ps-4 p-4">
                        <span>Classified Ads</span>
                    </h3>

                    <div className="d-flex pe-4">
                        <a type="button" className="arrow-prev slide-arrow text-secondary  link-disable">
                            View All Products
                        </a>
                    </div>
                </div>
            </div>

            {/* ############################34 */}

            <div className="els mb-0">
                <div className="img__ele4 ms-4 " style={{ textAlign: 'center' }}>
                    <img id="img__elec4" src="https://demo.activeitzone.com/ecommerce/public/uploads/all/izQCrmMM2VGFHxdmuDPEoiVXr2M13JW8yxS1OwaW.webp" alt="" />
                </div>
            </div>
            {/* ############################34 */}

            <Card />

            {/* ############################34 */}

            <section class="mb-2 mb-md-3 mt-2 mt-md-3">
                <div class="container">
                    {/* <!-- Top Section --> */}
                    <div class="d-flex mb-2 mb-md-3 align-items-baseline justify-content-between">
                        {/* <!-- Title --> */}
                        <h3 class="fs-16 fs-md-20 fw-700 mb-2 mb-sm-0">Top Brands</h3>
                        {/* <!-- Links --> */}
                        <div class="d-flex">
                            <a class="text-blue fs-10 fs-md-12 fw-700 hov-text-primary animate-underline-primary">View All Brands</a>
                        </div>
                    </div>
                    {/* <!-- Brands Section --> */}
                    <div class="bg-white px-3 ">
                        <div class=" btn-group btn-group-lg border-top  row row-cols-xxl-6 row-cols-xl-6 row-cols-lg-4 row-cols-md-4 row-cols-3 gutters-16 ">
                            <div class="col text-center  z-1 btn btn-white">
                                <a class="d-block p-sm-3 ">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/CVo1G2QVpVtSoZlmCvC0l4hL9WIiWLlTQf6XclMC.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Ford" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Ford
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/ecb0DAeSHXtbC4Fn6WYz8MBpJuqVeJweFHpO5Tdv.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Chevrolet" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Chevrolet
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/SE5RmXlnnn7IGCueKcCC3bSb6VMbpRKCQ9Uj73im.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Audi" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Audi
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/psvYUjmOREXrnLNH4O3h9pC3btmXDsyh96vSPEtk.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Hyundai" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Hyundai
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/igAkXQNWqVIiTSwKVsoG9DmihosVVTL6vp94K6qf.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Nissan" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Nissan
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/8epyndbgfapwj0RYIU5mMDUk88yFYWjffqLOQMFD.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="BMW" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        BMW
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/rCfpiBkUtiOz8Ipakex02EA8uNYXGySvQWH9phRx.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Mercedes-Benz" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Mercedes-Benz
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/rkIzWJlmmr3Ae5oJMwgHbFp3Kg9uinm5su2hmHoH.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Toyota" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Toyota
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img has-transition hov-shadow-out z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/hOcd5BOA7MVZ4y4potvCzMypnVKospMJsPZb1aPU.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Suzuki" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Suzuki
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center  hov-scale-img  z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/p1cHVKZSlCy5VrGjQRcHQclukEoRhapNQQHXz522.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Mitsubishi" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Mitsubishi
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center   z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/ED7vbI8nnpPeKv6LXGYsGMCOLKG5s5uWyedONBxj.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Honda" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Honda
                                    </p>
                                </a>
                            </div>
                            <div class="col text-center   z-1 btn btn-white">
                                <a class="d-block p-sm-3">
                                    <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/EAB1zQHsBz4bs8Z4DSKmdqYVV2OReXMxiqp32hCk.webp" class="h-md-100px mx-auto has-transition p-2 p-sm-4 mw-100 ls-is-cached lazyloaded" alt="Volvo" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/ecommerce/public/assets/img/placeholder.jpg';" />
                                    <p class="text-center text-dark fs-12 fs-md-14 fw-700 mt-2">
                                        Volvo
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
