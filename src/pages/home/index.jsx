import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <ul className="nav-items">
              <li className="nav-item btn">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item btn">
                <Link to="/pricing">PRICE DESCRIPTION</Link>
              </li>
              <li className="nav-item btn">
                <Link to="/about">ABOUT US</Link>
              </li>
              <li className="nav-item btn">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-content">
          <h1 className="text-color2">Welcome to CUCIKICK</h1>
          <p className="text-color2">
            Kami memberikan perawatan berkualitas tinggi untuk sepatu milik
            Anda.
          </p>
          <li className="nav-item btn">
                <Link to="/pricing">SEGERA CUCI</Link>
          </li>
        </div>
      </header>
      <section className="showcase">
        <div className="container serveShadow" id="our-services">
          <div className="showService">
            <div className="img-box">
              <img src="/img/still-life-shoe-rack-indoors.jpg" alt="garments" />
            </div>
            <div className="text-box">
              <h2 className="m-heading">FAST CLEANING</h2>
              <p>
                {" "}
                Fast cleaning merupakan pencucian instan pada bagian upper dan
                midsole yang bisa{" "}
              </p>
            </div>
          </div>
          <div className="showService">
            <div className="img-box">
              <img
                src="/img/footwear-stacked-shoe-rack-indoors.jpg"
                alt="steam-press"
              />
            </div>
            <div className="text-box">
              <h2 className="m-heading">DEEP CLEANING</h2>
              <p> Perawatan pembersihan sepatu secara detail dan menyeluru</p>
            </div>
          </div>
          <div className="showService">
            <div className="img-box">
              <img src="/img/fashion-shoes-sneakers.jpg" alt="shoe-bag-wash" />
            </div>
            <div className="text-box">
              <h2 className="m-heading">TREATMENT</h2>
              <p>
                Perawatan yang pengerjaannya ditujukan untuk sepatu dengan
                material-material khusus
              </p>
            </div>
          </div>
          <div className="showService">
            <div className="img-box">
              <img
                src="/img/close-up-small-dark-blue-shoes.jpg"
                alt="curtains-bedsheet"
              />
            </div>
            <div className="text-box">
              <h2 className="m-heading">UNYELLOWING</h2>
              <p>
                Perawatan yang dikhususkan untuk midsole sepatu yang telah
                menguning.
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
      <section className="features">
        <div className="container-f">
          <div className="box-wrapper">
            <div className="img-box">
              <img src="/img/affordable.png" alt="affordable" />
            </div>
            <div className="img-box">
              <img src="/img/nontoxic.png" alt="eco-friendly" />
            </div>
            <div className="img-box">
              <img src="/img/fastclock.png" alt="fast-service" />
            </div>
            <div className="img-box">
              <img src="/img/delhivery.png" alt="home-delhivery" />
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="social">
          <img src="/img/fb1.png" alt="facebook" />
          <img src="/img/twiter1.png" alt="twitter" />
          <img src="/img/insta.png" alt="instagram" />
        </div>
        <div className="copyright">
          <p className="parafooter">TERIMAKASIH TELAH MENGUNJUNGI CUCIKICK</p>
        </div>
      </footer>
    </div>
  );
}
