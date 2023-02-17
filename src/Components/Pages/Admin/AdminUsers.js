import React, { useEffect, useState } from "react";
import Admin from "../../Layout/SideBar";
import Footer from "../../Layout/Footer";
import NavbarAdmin from "../../Layout/NavbarAdmin";
import {
  deleteUser,
  getAllUsers,
  isAuthenticated,
  updateRoles,
  updateRoleUser,
} from "../../../api/userAPi";
import Swal from "sweetalert2";
import swal from "sweetalert";

const AdminUsers = () => {
  let [users, setUsers] = useState("");
  const { token } = isAuthenticated();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getAllUsers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
  }, [success]);

  const handleEdit = (id) => (e) => {
    e.preventDefault();
    setSuccess(false);
    swal("Make Admin", "Are you sure you want to make Admin", {
      buttons: {
        Admin: "Make Admin",
        User: "Make User",
        Cancel: "Cancel",
      },
      icon: "info",
    }).then((value) => {
      switch (value) {
        case "Cancel":
          swal("Canceled!", "Delete Canceled", "warning");
          break;

        case "Admin":
          updateRoles(id, token).then((data) => {
            if (data.error) {
              swal("Error!", data.error, "error");
            } else {
              setSuccess(true);
              swal("Success!", data.message, "success");
            }
          });

        case "User":
          updateRoleUser(id, token).then((data) => {
            if (data.error) {
              swal("Error!", data.error, "error");
            } else {
              setSuccess(true);
              swal("Success!", data.message, "success");
            }
          });
          
          break;
        default:
          swal("something went wrong (109)!");
      }
    });
  };

  const handleDelete = (id) => (e) => {
    e.preventDefault();
    setSuccess(false);
    swal("Delete User", "Are you sure you want to delete", {
      buttons: {
        Cancel: "Cancel",
        Delete: "Delete",
      },
      icon: "info",
    }).then((value) => {
      switch (value) {
        case "Cancel":
          swal("Canceled!", "Delete Canceled", "warning");
          break;

        case "Delete":
          deleteUser(id, token).then((data) => {
            if (data.error) {
              swal("Error!", data.error, "error");
            } else {
              setSuccess(true);
              swal("Success!", data.message, "success");
            }
          });
          break;
        default:
          swal("something went wrong (109)!");
      }
    });
  };

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
                  {users &&
                    users.map((user, i) => {
                      return (
                        <tr key={user._id}>
                          <td>{i + 1}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>
                            {user && user.role === 1 ? (
                              <label
                                htmlFor={`${user._id}`}
                                className="btn btn-success"
                              >
                                Yes
                              </label>
                            ) : (
                              <label className="btn btn-danger">No</label>
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={handleEdit(user._id)}
                            >
                              <i className="bi bi-pencil-square"></i>Edit &nbsp;
                            </button>
                            &nbsp; &nbsp; &nbsp;
                            <button
                              className="btn btn-info"
                              onClick={handleDelete(user._id)}
                            >
                              <i className="bi bi-person-x-fill"></i>Delete
                              &nbsp;
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
