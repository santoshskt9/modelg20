import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import blogs from "./content";

const AllBlog = () => {
  const route = useLocation().pathname;
  const routeArr = route.split("/");
  const blogName = routeArr[2];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <!-- page title --> */}
      <section
        className="section"
        style={{
          background: "url(../images/backgrounds/g20.jpg) no-repeat center",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.618)",
        }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white mb-3 col-lg-6 lh-1">
                <span className=" fs-1" style={{ textStyle: "lowercase" }}>
                  Blogs
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
                  <li
                    className="breadcrumb-item font-weight-semebold active text-primary"
                    aria-current="page"
                  >
                    Blogs
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
              <div className="row">
                {/* <!-- blog post --> */}
                {blogs.map((blog, index) => {
                  return (
                    <div className="col-sm-6 mb-4">
                      <article className="card border-0 rounded-0 position-relative box-shadow zindex-1">
                        <div className="card-type">Blog</div>
                        <img
                          className="card-img-top rounded-top-0 clip-half-cycle"
                          src={blog.image}
                          alt="blog-thumb"
                        />
                        <div className="card-body">
                          <div className="title-border-left">
                            <div className="card-meta text-uppercase mb-2">
                              by{" "}
                              <strong className="text-dark">
                                {blog.author}
                              </strong>{" "}
                              /
                              <strong className="text-dark">{blog.date}</strong>
                            </div>
                            <h4 className="card-title">
                              <a href="blog-single.html" className="text-dark">
                                {blog.title}
                              </a>
                            </h4>
                          </div>
                          <p className="card-text">
                            {blog.subpara.slice(0,85)+"..."}
                          </p>
                          <a
                            href={"/blog/"+blog.slug}
                            className="btn btn-secondary btn-arrow"
                          >
                            read more
                          </a>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* sidebar */}
            <aside className="col-lg-4">
              {/* latest post */}
              <div className="bg-white px-4 py-5 box-shadow mb-5">
                <h4 className="mb-4">Latest Article</h4>
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
                          <a href={`/blog/${blog.slug}`} className="text-dark">
                            {blog.title}
                          </a>
                        </h5>
                        {/* Aug 02, 2018 */}
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
};

export default AllBlog;
