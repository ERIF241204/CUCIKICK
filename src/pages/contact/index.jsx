import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section>
      <nav class="navbar bgnavcolor">
        <div class="container">
          <img src="/img/LOGO1.png" alt="crown cleaners logo" />
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
      <section class="A-head">
        <div class="container">
          <h1 class="m-heading">TANGGAPAN ANDA TENTANG SERVICE KAMI</h1>
          <hr class="horizontal" />
          <ul class="aboutul">
            <li>&#x2022; bagaimana kebersihannya?</li>
            <li>&#x2022; apakah anda cukup puas dengan pelayanan kami?</li>
            <li>&#x2022; ditunggu kedatangannya kembali</li>
          </ul>
          <div class="count">
            <div class="count-item">
              <span>1</span>
              <p>
                <b>KOTA</b>
              </p>
            </div>
            <div class="count-item">
              <span>10</span>
              <p>
                <b>Outlet</b>
              </p>
            </div>
            <div class="count-item">
              <span>1000+</span>
              <p>
                <b>Customers</b>
              </p>
            </div>
            <div class="clearfix"></div>
          </div>
          <h2 class="l-heading abouth2">
            Meningkatkan proses pembersihan pengeringan{" "}
          </h2>
        </div>
      </section>
    </section>
  );
}
