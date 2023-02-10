import React, { useEffect, useState } from "react";
import Admin from "../../Layout/SideBar";
import Footer from "../../Layout/Footer";
import NavbarAdmin from "../../Layout/NavbarAdmin";
import { getAllUsers } from "../../../api/userAPi";

const AdminUsers = () => {
  let [users, setUsers] = useState("");

  useEffect(() => {
    getAllUsers()
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
  }, []);

  return (
    <div>
      <div className="bg-light">
        <NavbarAdmin />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <Admin users />
            </div>

            <div className="col-lg-7">
              <h1>Users</h1>
              <table className="border p-1 table-hover text-center table table-bordered">
                <thead>
                  <tr>
                    <td>S.no</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Is Admin</td>
                    <td>Action</td>
                  </tr>
                </thead>

                <tbody>
                  {
                    users &&
                    users.map((user, i) => {
                      return (
                        <tr key={user._id}>
                          <td>{i + 1}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>
                            {
                                user.role === 0 ?
                                <input type="checkbox" id={`${user._id}`}  className='me-2' checked  />
                                :
                                <input type="checkbox" id={`${user._id}`}  className='me-2'   />

                            }
                            <label htmlFor={`${user._id}`}>Yes</label>
                          </td>
                          <td>
                            <button className="btn btn-info">
                              <i className="bi bi-pencil-square"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminUsers;
