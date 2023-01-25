import { Avatar } from "@mui/material";
import React from "react";
const Studentheads = [
  "Profile",
  "Student ID",
  "First Name",
  "Middle Name",
  "Last Name",
  "Certificate_key",
  "Accredited_by",
  "Endorsed by",
  "Actions",
];
const CertificationTable = ({ certificates }) => {
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
            {certificates.map((row, i) => {
              return (
                <tr key={i}>
                  <td className="p-3">
                    <Avatar
                      alt={row.first_name}
                      src={process.env.REACT_APP_API_BASE_URL + row?.profile}
                      sx={{ width: 46, height: 46 }}
                    />
                  </td>
                  <td className="p-3">{row?.studentId}</td>
                  <td className="p-3">{row?.first_name}</td>
                  <td className="p-3">{row?.middle_name}</td>
                  <td className="p-3">{row?.last_name}</td>
                  <td className="p-3">{row?.certificate_key}</td>
                  <td className="p-3">{row?.accredited_by}</td>
                  <td className="p-3">{row?.endorsed_by}</td>
                  <td className="p-3">{row?.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificationTable;
