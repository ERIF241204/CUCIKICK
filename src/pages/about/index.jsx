import React from "react";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <section>
      <nav className="navbar bgnavcolor">
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
      <section className="A-head">
        <div className="container">
          <h1 className="m-heading">TENTANG KAMI</h1>
          <hr className="horizontal" />
          <p>
            Solusi Terpercaya Perawatan Sepatu Kesayangan Kamu. Kami memberikan
            layanan terbaik untuk perawatan sepatu. Bekerja secara profesional,
            menggunakan teknik khusus dengan alat dan bahan premium.
          </p>
          <ul className="aboutul">
            <li>&#x2022; Pendekatan khusus untuk sepatu</li>
            <li>&#x2022; pengalaman bebas bakteri, bebas bau dan bebas noda</li>
            <li>
              &#x2022; Pendekatan ramah lingkungan dan hemat air terhadap
              pembersihan kering
            </li>
          </ul>
          <div className="count">
            <div className="count-item">
              <span>1</span>
              <p>
                <b>KOTA</b>
              </p>
            </div>
            <div className="count-item">
              <span>10</span>
              <p>
                <b>Outlet</b>
              </p>
            </div>
            <div className="count-item">
              <span>1000+</span>
              <p>
                <b>Customers</b>
              </p>
            </div>
            <div className="clearfix"></div>
          </div>
          <h2 className="l-heading abouth2">
            Meningkatkan proses pembersihan pengeringan{" "}
          </h2>
        </div>
      </section>
    </section>
  );
}
