import React from "react";

const Life = () => {
  return (
    <div>
      {/* <!-- page title --> */}
      <section
        className="section"
        style={{
          background: "url(images/banner/bnr1.webp) no-repeat center",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.618)",
        }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white mb-3">LiFE <span className="fs-5">(Lifestyle for Environment) Initiative</span></h1>
              {/* <!-- breadcrumb --> */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0">
                  <li className="breadcrumb-item font-weight-semebold">
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item font-weight-semebold active text-primary"
                    aria-current="page"
                  >
                    LiFE
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /page title --> */}
    </div>
  );
};

export default Life;
