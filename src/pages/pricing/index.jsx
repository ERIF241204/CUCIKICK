import React from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function Pricing() {
  return (
    <section className="pricing-container">
      <nav classNameName="navbar bgnavcolor">
        <div classNameName="container">
          <ul classNameName="nav-items">
          {/* <img src="/img/close-up-small-dark-blue-shoes.jpg" style={{width:500}}/> */}
            <li classNameName="nav-item btn">
              <Link to="/">HOME</Link>
            </li>
            <li classNameName="nav-item btn">
              <Link to="/pricing">PRICE DESCRIPTION</Link>
            </li>
            <li classNameName="nav-item btn">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li classNameName="nav-item btn">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="Pricing">
        <div className="pricing-container">
          <h1>Harga Layanan Cucikick</h1>

          <div classNameName="card">
            <h2>Paket Cuci Reguler</h2>
            <p>
                Termasuk pembersihan dasar untuk semua bagian sepatu.</p>
            <p
             classNameName="price">Rp 50.000</p>
            <a href="#" className="btn">
              Pilih Paket
            </a>
          </div>

          <div className="card">
            <h2>Paket Cuci Premium</h2>
            <p>
              Termasuk pembersihan mendalam, perawatan anti-air, dan
              penghilangan noda khusus.
            </p>
            <p className="price">Rp 100.000</p>
            <a href="#" className="btn">
              Pilih Paket
            </a>
          </div>

          <div className="card">
            <h2>Paket Cuci dan Pewarnaan</h2>
            <p>
              Termasuk cuci premium dan layanan pewarnaan ulang untuk sepatu
              yang pudar.
            </p>
            <p className="price">Rp 150.000</p>
            <a href="#" className="btn">
              Pilih Paket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
