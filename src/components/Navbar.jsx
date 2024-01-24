import React from 'react'
import {  useSelector } from 'react-redux';
export default function Navbar() {
    let data = useSelector(state =>state.change2)
    return (
        <div >
            <div className="position-relative logo-bar-area border-bottom border-md-nonea z-1025  position-fixed bg-white w-100" style={{ zIndex: "3" }}>
                <div className="container p-3">
                    <div className="d-flex align-items-center">

                        <div className="col-auto pl-0 pr-3 d-flex align-items-center">
                            <a className="d-block py-20px mr-3 ml-0">
                                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/R4xNSs0cHVjjvUhGq4I3z71D7feug7LDAvLbo3wu.webp" alt="Active eCommerce CMS" className="mw-100 h-30px h-md-40px" height="40" />
                            </a>
                        </div>


                        {/* <!-- Search field --> */}
                        <div className="flex-grow-1 front-header-search d-flex align-items-center bg-white mx-xl-5">
                            <div className="position-relative flex-grow-1 px-3 px-lg-0">
                                <form method="GET" className="stop-propagation">
                                    <div className="d-flex position-relative align-items-center" >

                                        <div className="search-input-box w-100 d-flex position-reletive">
                                            <input type="text" style={{ outline: "none" }} className=" form-control fs-14 hov-animate-outline  rounded-5" id="search" name="keyword" placeholder="I am shopping for..." autocomplete="off" />

                                            <svg id="Group_723" className="position-absolute mt-2 " style={{ right: "22px" }} data-name="Group 723" xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20" >
                                                <path id="Path_3090" data-name="Path 3090" d="M9.847,17.839a7.993,7.993,0,1,1,7.993-7.993A8,8,0,0,1,9.847,17.839Zm0-14.387a6.394,6.394,0,1,0,6.394,6.394A6.4,6.4,0,0,0,9.847,3.453Z" transform="translate(-1.854 -1.854)" fill="#b5b5bf"></path>
                                                <path id="Path_3091" data-name="Path 3091" d="M24.4,25.2a.8.8,0,0,1-.565-.234l-6.15-6.15a.8.8,0,0,1,1.13-1.13l6.15,6.15A.8.8,0,0,1,24.4,25.2Z" transform="translate(-5.2 -5.2)" fill="#b5b5bf"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                        {/* <!-- Compare --> */}
                        <div className="d-none d-lg-block ml-3 mr-0">
                            <div className="" id="compare">
                                <a href="/" className="d-flex align-items-center text-dark" data-toggle="tooltip" data-title="Compare" data-placement="top">
                                    <span className="position-relative d-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                            <path id="_9f8e765afedd47ec9e49cea83c37dfea" data-name="9f8e765afedd47ec9e49cea83c37dfea" d="M18.037,5.547v.8a.8.8,0,0,1-.8.8H7.221a.4.4,0,0,0-.4.4V9.216a.642.642,0,0,1-1.1.454L2.456,6.4a.643.643,0,0,1,0-.909L5.723,2.227a.642.642,0,0,1,1.1.454V4.342a.4.4,0,0,0,.4.4H17.234a.8.8,0,0,1,.8.8Zm-3.685,4.86a.642.642,0,0,0-1.1.454v1.661a.4.4,0,0,1-.4.4H2.84a.8.8,0,0,0-.8.8v.8a.8.8,0,0,0,.8.8H12.854a.4.4,0,0,1,.4.4V17.4a.642.642,0,0,0,1.1.454l3.267-3.268a.643.643,0,0,0,0-.909Z" transform="translate(-2.037 -2.038)" fill="#919199"></path>
                                        </svg>
                                    </span>
                                </a>                        </div>
                        </div>
                        {/* <!-- Wishlist --> */}
                        <div className="d-none d-lg-block mr-3" style={{ marginLeft: "36px" }}>
                            <div className="" id="wishlist">
                                <a href="/" className="d-flex align-items-center text-dark" data-toggle="tooltip" data-title="Wishlist" data-placement="top">
                                    <span className="position-relative d-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14.4" viewBox="0 0 16 14.4">
                                            <g id="_51a3dbe0e593ba390ac13cba118295e4" data-name="51a3dbe0e593ba390ac13cba118295e4" transform="translate(-3.05 -4.178)">
                                                <path id="Path_32649" data-name="Path 32649" d="M11.3,5.507l-.247.246L10.8,5.506A4.538,4.538,0,1,0,4.38,11.919l.247.247,6.422,6.412,6.422-6.412.247-.247A4.538,4.538,0,1,0,11.3,5.507Z" transform="translate(0 0)" fill="#919199"></path>
                                                <path id="Path_32650" data-name="Path 32650" d="M11.3,5.507l-.247.246L10.8,5.506A4.538,4.538,0,1,0,4.38,11.919l.247.247,6.422,6.412,6.422-6.412.247-.247A4.538,4.538,0,1,0,11.3,5.507Z" transform="translate(0 0)" fill="#919199"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Notifications --> */}
                        <ul className="list-inline mb-0 h-100 d-none d-xl-flex justify-content-end ms-3 align-items-center">
                            <li className="list-inline-item ml-3 mr-3 pr-3 pl-0 dropdown">
                                <a className="dropdown-toggle no-arrow text-secondary fs-12" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                    <span className="">
                                        <span className="position-relative d-inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.668" height="16" viewBox="0 0 14.668 16">
                                                <path id="_26._Notification" data-name="26. Notification" d="M8.333,16A3.34,3.34,0,0,0,11,14.667H5.666A3.34,3.34,0,0,0,8.333,16ZM15.06,9.78a2.457,2.457,0,0,1-.727-1.747V6a6,6,0,1,0-12,0V8.033A2.457,2.457,0,0,1,1.606,9.78,2.083,2.083,0,0,0,3.08,13.333H13.586A2.083,2.083,0,0,0,15.06,9.78Z" transform="translate(-0.999)" fill="#91919b"></path>
                                            </svg>
                                        </span>
                                    </span></a>

                            </li>
                        </ul>

                        <div className="ml-auto mr-0 ms-2">
                            {/* <!--Login & Registration --> */}
                            <span className="d-none d-xl-flex align-items-center nav-user-info ml-3">
                                {/* <!-- Image --> */}
                                <span className="size-40px ms-2 rounded-circle overflow-hidden border d-flex align-items-center justify-content-center nav-user-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.902" height="20.012" viewBox="0 0 19.902 20.012">
                                        <path id="fe2df171891038b33e9624c27e96e367" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1.006,1.006,0,1,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1,10,10,0,0,0-6.25-8.19ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" transform="translate(-2.064 -1.995)" fill="#91919b"></path>
                                    </svg>
                                </span>
                                <a href="/" className="text-reset opacity-60 hov-opacity-100 hov-text-primary fs-12 d-inline-block border-right border-soft-light ms-2 border-width-2 pr-2 ml-3">Login</a>
                                <a href="/" className="text-reset opacity-60 hov-opacity-100 hov-text-primary fs-12 d-inline-block py-2 pl-2 ms-2">Registration</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='bg-danger text-light d-flex p-1 justify-content-between 'style={{height:"50px"}}>
                    <div className='col-3 d-flex justify-content-between ps-5'><h4 className='pt-2 ps-4'>Categories</h4><span className='pt-3 text-info' style={{fontSize:'13px'}}>(See All)</span><h4 className='pt-2'><i class="bi bi-chevron-down "></i></h4></div>
                    <div className='col-6 d-flex pt-2 gap-3 justify-content-between'>
                        <h6> Home</h6>
                        <h6> Flash Sale</h6>
                        <h6>Blogs</h6>
                        <h6>All Brands</h6>
                        <h6>All Categories</h6>
                        <h6>All Sellers</h6>
                       
                    </div>
                    <div className='d-flex justify-content-start col-2'>
                        <span className='bi bi-cart3 'style={{fontSize:"28px"}}></span>  <h6 className='pt-3 ps-4'>$0.000 (0 Items)</h6>
                        <span className='position-fixed fs-5 bg-danger-subtle text-dark rounded-circle pe-2 ps-2 ms-3 mb-lg-5 '>{data}</span>
                         
                    </div>

                </div>


            </div>
            
        </div>
    )
}
