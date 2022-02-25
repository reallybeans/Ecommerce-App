import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const IconEdit = styled.div`
  color: green;
  &:hover {
    opacity: 0.6;
  }
`;
const IconDelete = styled.div`
  color: red;
  margin-left: 20px;
  &:hover {
    opacity: 0.6;
  }
`;
export const UserList = () => {
  const [data, setData] = useState(userRows);
  console.log(data);
  const handleDelete = (id) => {
    return setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Full name",
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <Avatar src={params.row.avatar} alt="" />
            {params.row.username}
          </User>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volumn",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <Button>
            <Link to={"user/" + params.row.id}>
              <IconEdit>
                <EditOutlinedIcon />
              </IconEdit>
            </Link>

            <IconDelete>
              <DeleteOutlineOutlinedIcon
                onClick={() => handleDelete(params.row.id)}
              />
            </IconDelete>
          </Button>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[5]}
        checkboxSelection
        DisableSelectionOnClick
        pageSize={8}
      />
    </Container>
  );
};
