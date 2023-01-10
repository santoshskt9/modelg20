import React, { useEffect, useState } from "react";
import { getResourcesLibrary } from "../../api";

const ResourceLibrary = () => {
  const [resourceLib, setResourceLib] = useState([]);
  const fetchLibs = async () => {
    try {
      const data = await getResourcesLibrary();
      if (data.data.resources) {
        setResourceLib(data.data.resources);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLibs();
  }, []);
  return (
    <>
      <section id="scrollspyLibrary" className="bg-gray section mb-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center">RESOURCE LIBRARY</h1>
          </div>
          <div className="row">
            <p>
              The Model G20 summit organising committee every time prepares
              significant resource material that is helpful for all the
              participating delegates. Every year, these resources are updated
              and revised with the latest topics, publications, and regulations
              to stay parallel with actual G20 summit meetings.
            </p>
          </div>
          <div className="row">
            <p>
              For 2023, the participating delegations for Model G20 will get
              access to newly curated resources once they successfully register
              into the model G20 summit portal.
            </p>
          </div>
          <div className="row">
            <h2>PAST G20 COMMUNIQUES</h2>
            <p>
              Every member of the delegation will receive a copy of previous G20
              publications. These copies will carry a detailed thesis of special
              statements, Track negotiations, Communique documents and reform
              plans from each G20 member country.
            </p>
          </div>
          <div className="row row-cols-1 ">
            <div className="col">
              {/* <!-- Publications  --> */}
              {resourceLib.map((lib, index) => {
                if (lib.group_id == 1) {
                  return (
                    <div className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                      <div className="d-flex g-3 justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="pe-3">
                            <img
                              src="images/icons/pdf.png"
                              alt=""
                              className=""
                              style={{
                                height: "50px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <div className="text-start">
                            <h4
                              className="fw-regular"
                              style={{ textTransform: "initial" }}
                            >
                              {lib.title}
                            </h4>
                          </div>
                        </div>
                        <div className="text-end">
                          <a
                            href={`${process.env.REACT_APP_API_BASE_URL}${lib.pdf}`}
                            target={"_blank"}
                            download={`${lib.title}`}
                          >
                            <i className="bx bx-link-external fs-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            {/* D-NONE  */}
            <div className="row row-cols-1 d-none">
              <h3>PREVIOUS G20 DECLARATIONS</h3>
              <div className="col">
                {/* <!-- Publications  --> */}
                <div className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                  <div className="d-flex g-3 justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="pe-3">
                        <img
                          src="images/icons/pdf.png"
                          alt=""
                          className=""
                          style={{
                            height: "50px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div className="text-start">
                        <h5>
                          G20 BALI LEADERS’ DECLARATION Bali, Indonesia, 15-16
                          November 2022
                        </h5>
                      </div>
                    </div>
                    <div className="text-end">
                      <a href="#">
                        <i className="bx bx-link-external fs-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceLibrary;
