import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItam, setFoodItam] = useState([]);

  const loadData = async () => {
    try {
        let response = await fetch("http://localhost:5000/api/foodData", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        response = await response.json();
        setFoodItam(response[0]);
        setFoodCat(response[1]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex:"10"}}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>

            <div className="carousel-item active">
              <img src="https://img.freepik.com/free-photo/top-view-delicious-tacos-arrangement_23-2151048037.jpg?t=st=1720908751~exp=1720912351~hmac=de803f791487777ab8a36aa81f894050b6ad8cc3eae7543ee6586170e0516e4e&w=996"
                className="d-block w-100"  style={{ filter:"brightness(30%)" }} alt="..." />
            </div>

            <div className="carousel-item">
              <img src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg?size=626&ext=jpg" 
                className="d-block w-100"  style={{ filter:"brightness(30%)" }}  alt="..." />
            </div>

            <div className="carousel-item">
              <img src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246073.jpg?t=st=1720908540~exp=1720912140~hmac=a20fc03117ab88ce76687434384ecca9ae28bbb137f62926a015b5ee3e9cf15c&w=996"
                className="d-block w-100"  style={{ filter:"brightness(30%)" }} alt="..." />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon"  aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className='container'>
          {foodCat.length > 0 ? (
            foodCat.map((data) => (
              <div key={data._id} className='row mb-3'>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItam.length > 0 ? (
                  foodItam
                    .filter((item) => (
                      item.CategoryName === data.CategoryName && 
                      item.name.toLowerCase().includes(search.toLowerCase())
                    ))
                    .map((filteredItems) => (
                      <div key={filteredItems._id} className="col-12 col-md-6 col-lg-3">
                        <Card
                          foodItem={filteredItems}
                          options={filteredItems.options[0]}
                        />
                      </div>
                    ))
                ) : (
                  <div>No items found for this category</div>
                )}
              </div>
            ))
          ) : (
            <div>No categories found</div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}



