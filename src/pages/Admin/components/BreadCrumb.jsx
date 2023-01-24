import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const route = useLocation().pathname;
  const routeArr = route.split("/");
  // comment 
  return (
    <section
      className="section breadcrumb"
      style={{
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.618)",
      }}
    >
      <div className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-white mb-3 text-initial">ADMIN PANEL</h2>
            {/* <!-- breadcrumb --> */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0">
                {routeArr.map((rout, index) => {
                  return index === 0 ? (
                    <li
                      key={index}
                      className="breadcrumb-item font-weight-semebold"
                    >
                      <Link className="text-white" to="/">
                        Home
                      </Link>
                    </li>
                  ) : (
                    <li
                      key={index}
                      className="breadcrumb-item font-weight-semebold"
                    >
                      <Link
                        className="text-white text-uppercase"
                        to={"/" + rout}
                      >
                        {rout}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
