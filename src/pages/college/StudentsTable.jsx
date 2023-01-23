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
  "g20 certification",
  "Actions",
];
const StudentsTable = ({ data, reload }) => {
  console.log("data", data);
  const handleDelete = async (id) => {
    console.log(`Delete ${id}`);
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
        console.log("err", error);
        toast.dismiss();
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      <div className="table-responsive border p-2 py-3">
        <table className="table table-borderless table-striped table-light">
          <thead>
            <tr>
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
                <tr key={i}>
                  <td className="p-3">
                    <Avatar
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
                  <td className="p-3">{row?.g20_certification_num}</td>
                  <td>
                    <div className="d-flex h-100 justify-content-around">
                      <button className="btn p-0 border-0 mx-2">
                        <i className="bi bi-person-circle text-info fs-4"></i>
                      </button>
                      <button
                        className="btn p-0 border-0 mx-2"
                        onClick={() => handleDelete(row?.id)}
                      >
                        <i className="bi bi-trash3-fill text-danger fs-4"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;
