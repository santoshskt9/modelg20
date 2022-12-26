import React from "react";

const Pointers = () => {
  return (
    <div>
      {/* <!- 75 Pointers under LiFe Mission --> */}
      <div className="pointer">
        <h4 className="fs-2">75 Pointers under LiFe Mission</h4>
        <p className="text-dark mb-2 fs-5">
          Under the progression of LiFe movement, India has ideated unique 75
          active steps divided into seven categories- water saving, single-use
          plastic, sustainable food systems, waste reduction, energy, e-waste,
          and healthy lifestyle.
        </p>
        <p className="text-dark mb-2 fs-5">
          The motive is to aware people across the nation to adopt these steps
          collectively in order to join the climate change fight. The pointers
          are:
        </p>
      </div>
      <div>
        <ul
          className="nav row g-2 g-lg-4 pointer-navs nav-pills g-3 mb-3 justify-content-center rounded-5 border shadow p-2 mt-4 pb-4"
          id="pills-tab-pointers"
          role="tablist"
        >
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline active rounded-pill px-5 py-3"
              id="pointers-pills-tab-0"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-0"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2990/2990815.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">Energy Saved</span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline rounded-pill px-5 py-3"
              id="pointer-pills-tab-1"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-1"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/932/932532.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">Water Saved </span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline rounded-pill px-5 py-3"
              id="pointer-pills-tab-2"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-2"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8044/8044414.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">
                {" "}
                Single Use <br /> Plastic Reduced
              </span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline rounded-pill px-5 py-3"
              id="pointer-pills-tab-3"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-3"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4558/4558307.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">
                Sustainable Food
                <br /> Systems Adopted
              </span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline rounded-pill px-5 py-3"
              id="pointer-pills-tab-4"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-4"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3273/3273920.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">
                Waste Reduced
                <br /> (Swachhata Actions)
              </span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline rounded-pill px-5 py-3"
              id="pointer-pills-tab-5"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-5"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4807/4807765.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">
                Healthy Lifestyles
                <br /> Adopted{" "}
              </span>
            </button>
          </li>
          <li className="nav-item col-12 col-md-4 col-lg-3" role="presentation">
            <button
              className=" btn btn-primary-outline rounded-pill px-5 py-3"
              id="pointer-pills-tab-6"
              data-bs-toggle="pill"
              data-bs-target="#pointer-pills-6"
              type="button"
              role="tab"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3273/3273678.png"
                alt=""
                className="icon-pointer"
              />{" "}
              <span className="ms-2">E-Waste reduced</span>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pointer-pills-0"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              <div className="row">
                {/* Map This Area 
                    data.map((item,index)=>{
                      return <item key={index}>
                      </item>
                    }) */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="p-3 border rounded-3 shadow-sm">
                    <h4 className="fs-3">
                      <span className="text-primary">01.</span>
                      Use LED bulbs/ tube-lights
                    </h4>
                  </div>
                </div>
                {/* End Map Area  */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pointer-pills-1"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              {/* Content  */}
              Content 2
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pointer-pills-2"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              {/* content  */}
              content 3
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pointer-pills-3"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              {/* content  */}
              content 4
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pointer-pills-4"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              {/* content  */}
              content 5
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pointer-pills-5"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              {/* content  */}
              content 6
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pointer-pills-6"
            role="tabpanel"
            tabIndex="0"
          >
            <div className="container py-4">
              {/* content  */}
              content 7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pointers;
