import * as React from "react";
import { toast } from "react-hot-toast";
import { apiAuth } from "../../../api";
const heads = [
  "id",
  "institution_name",
  "institution_address",
  "bio",
  "logo",
  "title",
  "first_name",
  "middle_name",
  "last_name",
  "state",
  "pincode",
  "email",
  "contact",
  "created_on",
  "status",
];
  // comment 

export default function InstituteDataTable({ data, reload }) {
  const activate = async (instituteId, email, status) => {
    const formData = new FormData();
    formData.append("instituteId", instituteId);
    formData.append("email", email);
    console.log({ instituteId, email });
    if (status == "active") {
      try {
        const res = await apiAuth.post(
          `admin/institute?req_type=deactivate`,
          formData
        );
        if (res.status == 200) {
          reload();
          toast.success("Institute Deactivated Successfully");
        }
      } catch (error) {
        toast.error("Something Went Wrong");
      }
    } else {
      try {
        const res = await apiAuth.post(
          `admin/institute?req_type=activate`,
          formData
        );
        if (res.status == 200) {
          reload();
          toast.success("Institute Activated Successfully");
        }
      } catch (error) {
        toast.error("Something Went Wrong");
      }
    }
  };
  return (
    <div className="table-responsive border p-2 py-3">
      <table className="table table-borderless table-striped table-light">
        <thead>
          <tr>
            {heads.map((head, i) => {
              return (
                <th scope="col" className="fw-semibold text-capitalize p-3">
                  {head}
                </th>
              );
            })}
            <th scope="col" className="fw-semibold text-capitalize p-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                <td className="p-3">{row.id}</td>
                <td className="p-3">{row.institution_name}</td>
                <td className="p-3">{row.institution_address}</td>
                <td className="p-3">{row.bio}</td>
                <td className="p-3">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}${row.logo}`}
                    alt={row.institution_name}
                  />
                </td>
                <td className="p-3">{row.title}</td>
                <td className="p-3">{row.first_name}</td>
                <td className="p-3">{row.middle_name}</td>
                <td className="p-3">{row.last_name}</td>
                <td className="p-3">{row.state}</td>
                <td className="p-3">{row.pincode}</td>
                <td className="p-3">{row.email}</td>
                <td className="p-3">{row.contact}</td>
                <td className="p-3">{row.created_on}</td>
                <td className="p-3 ">
                  <span
                    className={`${
                      row.status == "active" ? "bg-success" : "bg-danger"
                    } p-1 px-3 rounded-pill text-white`}
                  >
                    {row.status ? row.status : "Inactive"}
                  </span>
                </td>
                <td>
                  <div className="d-flex h-100">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle border-0 p-0 mx-2"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() =>
                              activate(row.id, row.email, row.status)
                            }
                          >
                            {row.status == "active"
                              ? "Mark Inactive"
                              : "Mark Active"}
                          </button>
                        </li>
                      </ul>
                    </div>
                    <button className="btn p-0 border-0 mx-2">
                      <i className="bi bi-pen text-primary"></i>
                    </button>
                    <button className="btn p-0 border-0 mx-2">
                      <i className="bi bi-trash text-danger"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
