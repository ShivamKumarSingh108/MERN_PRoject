import React from "react";

export default function Carousel() {
    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

                    <div className="carousel-inner" id="carousel">

                        <div className="carousel-caption" style={{zIndex:"10"}}>
                            
                        <form class="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>

                        </div>

                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/free-photo/top-view-delicious-tacos-arrangement_23-2151048037.jpg?t=st=1720908751~exp=1720912351~hmac=de803f791487777ab8a36aa81f894050b6ad8cc3eae7543ee6586170e0516e4e&w=996" className="d-block w-100" alt="..." />

                        </div>
                        <div className="carousel-item">
                            <img src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg?size=626&ext=jpg" className="d-block w-100" alt="..." />


                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246073.jpg?t=st=1720908540~exp=1720912140~hmac=a20fc03117ab88ce76687434384ecca9ae28bbb137f62926a015b5ee3e9cf15c&w=996"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
