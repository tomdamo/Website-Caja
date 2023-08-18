import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">&copy; Caja Boogers - website by <a href="https://daamn.nl" target="_blank" className="text-muted">daamn.nl</a></p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="/Work" class="nav-link px-2 text-muted">Work</a></li>
      <li class="nav-item"><a href="/Contact" class="nav-link px-2 text-muted">Contact</a></li>
      <li class="nav-item"><a href="/CV" class="nav-link px-2 text-muted">CV</a></li>
      <li class="nav-item"><a href="https://www.instagram.com/cajaboogers/"
              target="_blank" class="nav-link px-2 text-muted" rel="noreferrer">              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
</a></li>
    </ul>
  </footer>
</div>
    </>
  );
}

export default Footer;
