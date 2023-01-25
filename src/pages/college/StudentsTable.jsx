import { Avatar } from "@mui/material";
import { apiAuth } from "api";
import React from "react";
import { toast } from "react-hot-toast";
import { useContext } from "react";
const Studentheads = [
  "Profile",
  "First Name",
  "Middle Name",
  "Last Name",
  "state",
  "pincode",
  "email",
  "contact",
  "Actions",
];
const StudentsTable = ({ data, reload }) => {
  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete");
    if (confirmation) {
      try {
        const res = await apiAuth.delete("/institute/student?studentId=" + id);
        if (res.status == 200) {
          toast.dismiss();
          toast.success(res.data.message);
          reload();
        }
      } catch (error) {
        toast.dismiss();
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      <div className="table-responsive border p-2 py-3">
        <table className="table table-borderless table-striped table-secondary">
          <thead>
            <tr className="" style={{ backgroundColor: "Red !important" }}>
              {Studentheads.map((head, i) => {
                return (
                  <th
                    key={i}
                    scope="col"
                    className="fw-semibold text-capitalize p-3"
                  >
                    {head}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              return (
                <>
                  <tr key={i}>
                    <td className="p-3">
                      <Avatar
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={"#ProfileModal" + i}
                        alt={row.first_name}
                        src={process.env.REACT_APP_API_BASE_URL + row?.profile}
                        sx={{ width: 46, height: 46 }}
                      />
                    </td>
                    <td className="p-3">{row?.first_name}</td>
                    <td className="p-3">{row?.middle_name}</td>
                    <td className="p-3">{row?.last_name}</td>
                    <td className="p-3">{row?.state}</td>
                    <td className="p-3">{row?.pincode}</td>
                    <td className="p-3">{row?.email}</td>
                    <td className="p-3">{row?.contact}</td>
                    <td>
                      <div className="d-flex h-100 justify-content-around">
                        <button
                          className="btn p-0 border-0 mx-2"
                          onClick={() => handleDelete(row?.id)}
                        >
                          <i className="bi bi-trash3-fill text-danger fs-4"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <div id={"ProfileModal" + i} class="modal" tabindex="-1">
                    <div
                      class="modal-dialog p-0"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div class="modal-content rounded-4">
                        <div class="modal-body p-0 rounded-4">
                          <div className="p-relative shadow-lg">
                            <button
                              type="button"
                              class="btn-close bg-white p-2 text-white p-absolute"
                              data-bs-dismiss="modal"
                              style={{ top: "0px", right: "0px",zIndex:2000 }}
                              aria-label="Close"
                            ></button>
                            <div className="d-flex p-absolute text-white justify-content-center align-items-center w-100 h-100 ">
                              <div
                                className="row align-items-center bg-white py-4 bg-opacity-50 "
                                style={{ borderRadius: "50px 16px 16px 50px" }}
                              >
                                <div className="col-4">
                                  <Avatar
                                    alt={row.first_name}
                                    className={"shadow-lg"}
                                    src={
                                      process.env.REACT_APP_API_BASE_URL +
                                      row?.profile
                                    }
                                    style={{ transform: "scale(1.5)" }}
                                    sx={{ width: 106, height: 106 }}
                                  />
                                </div>
                                <div className="col-8">
                                  <h4>
                                    {row?.first_name} {row?.last_name}{" "}
                                    {row?.middle_name}
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <img
                              src="https://img.freepik.com/free-vector/abstract-shape-with-halftone-background_1409-1277.jpg?t=st=1674384483~exp=1674385083~hmac=c15416d4a9483d729a0d4b544a11cd5eb151ac8ae4ba8757adcf420aaa7565bb"
                              alt=""
                              className="w-100  rounded-4"
                              style={{ height: "230px", objectFit: "cover" }}
                            />
                          </div>
                          <div className="container p-3">
                            <div className="row fs-5 gy-2">
                              <div className="col-4">
                                <span className="fw-bold">Email</span>
                              </div>
                              <div className="col-8">
                                <span>{row?.email}</span>
                              </div>
                              <div className="col-4">
                                <span className="fw-bold">Contact</span>
                              </div>
                              <div className="col-8">
                                <span>{row?.contact}</span>
                              </div>
                              <div className="col-4">
                                <span className="fw-bold">Father Name</span>
                              </div>
                              <div className="col-8">
                                <span>{row?.father_name}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <button className="btn btn-outline-danger px-5 py-2 d-flex align-items-center justify-content-center"  onClick={() => handleDelete(row?.id)}>
                            <i className="bi bi-trash3-fill me-2 fs-4"></i>  Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;

//TODO: Table Search Option
//TODO: Table Pagination