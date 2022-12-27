import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import blogs from "./content";

const News = () => {
  const route = useLocation().pathname;
  const routeArr = route.split("/");
  const blogName = routeArr[2];
  return (
    <>
      {blogs.map((blogItem) => {
        if (blogItem.slug === blogName) {
          return (
            <div>
              {/* <!-- page title --> */}
              <section
                className="section"
                style={{
                  background:
                    "url(../images/banner/bnr1.webp) no-repeat center",
                  backgroundSize: "cover",
                  boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.618)",
                }}
              >
                <div className="container pt-5">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="text-white mb-3 col-lg-6 lh-1">
                        <span
                          className=" fs-1"
                          style={{ textStyle: "lowercase" }}
                        >
                          {blogItem.title}{" "}
                        </span>
                      </h1>
                      {/* <!-- breadcrumb --> */}
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent p-0">
                          <li className="breadcrumb-item font-weight-semebold">
                            <a className="text-white" href="/">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item font-weight-semebold">
                            News
                          </li>
                          <li
                            className="breadcrumb-item font-weight-semebold active text-primary"
                            aria-current="page"
                          >
                            {blogItem.title}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- /page title --> */}
              <section className="section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      {/* post thumb */}
                      <div className="position-relative mb-5">
                        <img
                          src={blogItem.image}
                          alt="post thumb"
                          className="img-fluid w-100"
                        />
                        <div className="card-type hover-ripple">News</div>
                      </div>
                      <div className="card-meta text-uppercase mb-2">
                        by <strong className="text-dark">{blogItem.author}</strong> / on{" "}
                        <strong className="text-dark">{blogItem.date}</strong>
                      </div>
                      <h2>{blogItem.title}</h2>
                      <p className="fs-5">{blogItem.subpara}</p>
                      {blogItem.section.map((section, index) => {
                        return (
                          <div key={index}>
                            <h3 className="fs-3">{section.title}</h3>
                            {section.paragraph.map((para) => {
                              return <p className="text-dark mb-4">{para}</p>;
                            })}
                            {section.list.map((list) => {
                              return (
                                <>
                                  <h5>{list.title}</h5>
                                  {list.paragraph.map((para) => {
                                    return (
                                      <p className="text-dark mb-4">{para}</p>
                                    );
                                  })}
                                </>
                              );
                            })}
                          </div>
                        );
                      })}

                      {/* <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed eiusmod tempor incididunt labore dolore magna
                        aliqua. enim minim veniam quis nostrud exercitation
                        ullamco. laboris nisi ut aliquip ex ea commodo.
                        <p className="mb-0">
                          by{" "}
                          <span className="text-primary">JENNIFER GARNER</span>
                        </p>
                      </blockquote> */}
                      {/* share */}
                      <div className="mb-5">
                        <h5 className="d-inline-block me-3">Share:</h5>
                        {/* <!-- AddToAny BEGIN --> */}
                        <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                          <a
                            className="a2a_dd"
                            href="https://www.addtoany.com/share"
                          ></a>
                          <a className="a2a_button_facebook"></a>
                          <a className="a2a_button_twitter"></a>
                          <a className="a2a_button_email"></a>
                        </div>
                        <Helmet>
                          <script
                            async
                            src="https://static.addtoany.com/menu/page.js"
                          ></script>
                        </Helmet>
                        {/* <!-- AddToAny END --> */}
                      </div>
                    </div>
                    {/* sidebar */}
                    <aside className="col-lg-4">
                      {/* latest post */}
                      <div className="bg-white px-4 py-5 box-shadow mb-5">
                        <h4 className="mb-4">Latest News</h4>
                        {/* post-item */}
                        {blogs.map((blog, index) => {
                          return (
                            <div className="media d-flex border-bottom border-color pb-3 mb-3">
                              <img
                                className="me-3 mini-blog-image"
                                src={blog.image}
                                alt="post-thumb"
                              />
                              <div className="media-body">
                                <h5 className="mt-0">
                                  <a
                                    href={`/news/${blog.slug}`}
                                    className="text-dark"
                                  >
                                    {blog.title}
                                  </a>
                                </h5>
                                {blogItem.date}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </aside>
                  </div>
                </div>
              </section>
            </div>
          );
        }
      })}
    </>
  );
};

export default News;
