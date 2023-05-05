import React from 'react';
import heroImage from '../hero.jpg'; // You'll need to add your own hero image file

function Home() {
  return (
    <div>
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-12">
                <h1 className="text-white">Welcome to my website!</h1>
                <p className="text-white">
                  This is a simple example of a React website with a Bootstrap
                  navbar and some content on the home page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300x200.png?text=Card+Image+1"
                className="card-img-top"
                alt="Card Image 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">
                  This is a basic card with an image, title, and some content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300x200.png?text=Card+Image+2"
                className="card-img-top"
                alt="Card Image 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">
                  This is a basic card with an image, title, and some content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300x200.png?text=Card+Image+3"
                className="card-img-top"
                alt="Card Image 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">
                  This is a basic card with an image, title, and some content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} Khani Traders. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
