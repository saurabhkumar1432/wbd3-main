import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import axios from "axios";
import { Button, Table } from "antd";
import { toast } from "react-hot-toast";
function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getDoctorsData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/admin/get-all-doctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const changeDoctorStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const response = await axios.put(
        "/api/admin/change-account-doctor-status",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        getDoctorsData();
      }
    } catch (error) {
      toast.error("Error changing doctor account status");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}{" "}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <Button
              className="anchor"
              onClick={() => changeDoctorStatus(record, "approved")}
            >
              Approve
            </Button>
          )}
          {record.status === "approved" && (
            <Button type="primary" danger
              className="anchor"
              onClick={() => changeDoctorStatus(record, "Blocked")}
            >
              Block
            </Button>
          )}
          {(record.status === "Blocked" ||record.status === "blocked") && (
            <Button style={{ background: "lime",}}
              className="anchor"
              onClick={() => changeDoctorStatus(record, "approved")}
            >
              Approve
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="page-header">Doctors List</h1>
      <Table columns={columns} dataSource={doctors} />
    </Layout>
  );
}

export default DoctorList;
