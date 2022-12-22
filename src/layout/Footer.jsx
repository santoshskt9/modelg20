import React from 'react'

const Footer = () => {
  return (
    <footer>
    {/* main footer */}
    <div class="section bg-secondary">
      <div class="container">
        <div class="row justify-content-between">
          {/* footer content */}
          <div class="col-lg-5 mb-5 mb-lg-0">
            {/* logo */}
            <a class="mb-4 d-inline-block" href="index.html"><img class="img-fluid height-75" src="images/logo.png" alt="G20"
               /></a>
            <p class="text-white fs-6">The official website of Model G20 India event. Engaging the youth in a meaningful
              dialogue
              on international diplomacy, leadership and collective duty; and creating awareness to
              navigate the changing economic scenarios</p>
            <p class="text-white mb-5 fs-6">Proudly representing India to the world for sustainability, peace and
              growth.</p>
            <h4 class="text-white mb-4">Follow Us On</h4>
            {/* social links */}
            <ul class="list-inline social-icon-alt">
              <li class="list-inline-item">
                <a class="hover-ripple" href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a class="hover-ripple" href="#"><i class="bi bi-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a class="hover-ripple" href="#"><i class="bi bi-linkedin"></i></a>
              </li>
              <li class="list-inline-item">
                <a class="hover-ripple" href="#"><i class="bi bi-pinterest"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="row">
              {/* service list */}
              <div class="col-6 mb-5">
                <h4 class="text-white mb-4">Engage with us</h4>
                <ul class="list-styled">
                  <li class="mb-2"><a class="text-white d-block" href="#">Model G20</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">G20 Genius Certification</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">Campus Ambassador Program</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">LiFE 21 day challenge</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">Features Stories</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">PM Speak</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">LiFE</a></li>
                  <li class="mb-2"><a class="text-white d-block" href="#">Upcoming events</a></li>
                </ul>
              </div>
              {/* contact info */}
              <div class="col-6 mb-5">
                <h4 class="text-white mb-4">Contact Info</h4>
                <ul class="list-unstyled">
                  <li class="text-light mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
                    iste illo incidunt ex aliquid repellendus!</li>
                  <li class="text-light mb-3">+91 999999999999 </li>
                  <li class="text-light mb-3">info@G20india.com</li>
                </ul>
              </div>
              {/* newsletter */}
              <div class="col-12">
                <h4 class="text-white mb-4">Subscribe Newsletter</h4>
                <form action="#">
                  <div class="position-relative">
                    <input type="email" class="form-control border-0 text-white newsletter-form" id="newsletter"
                      name="newsletter" placeholder="Enter your email"/>
                    <button type="submit" class="btn btn-primary btn-subscribe">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* copyright */}
    <div class="bg-secondary-darken py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p class="mb-0 text-white"><span class="text-primary">G20 India</span> &copy;
              <script>
                var CurrentYear = new Date().getFullYear();
                var NextYear = new Date().getFullYear() + 1;
                document.write(CurrentYear + " ~ " + NextYear)
              </script>
              All Right Reserved | <i class="bi bi-cloud-fill"></i> Goverdhan Learning Cloud
            </p>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <ul class="list-inline">
              <li class="list-inline-item mx-0"><a class="d-inline-block px-3 text-white border-right"
                  href="terms-conditions.html">Terms of Service</a></li>
              <li class="list-inline-item mx-0"><a class="d-inline-block px-3 text-white"
                  href="privacy-policy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer