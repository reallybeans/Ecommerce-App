import PermIdentity from "@mui/icons-material/PermIdentity";
import React from "react";
import styled from "styled-components";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PublishIcon from "@mui/icons-material/Publish";
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PageTitle = styled.h3``;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserDetail = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;
const UserUpdate = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-left: 20px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Bottom = styled.div``;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const Users = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserName = styled.span`
  font-weight: 600;
`;
const UserTitle = styled.span`
  font-weight: 300;
`;
const UserBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #555;
  margin-top: 20px;
`;
const Icon = styled.div`
  font-size: 16px !important;
  margin-right: 5px;
`;
const UserInfo = styled.span``;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UpdateLeft = styled.div``;
const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const UpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;
const LabelUpload = styled.label``;
const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;
const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const ButtonUpdate = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const User = () => {
  return (
    <Container>
      <TitleContainer>
        <PageTitle>Edit User</PageTitle>
        <AddButton>Create</AddButton>
      </TitleContainer>
      <UserContainer>
        <UserDetail>
          <Top>
            <Image
              src="https://gravatar.com/avatar/ac4827cf0816c3cc51ab186e58c4113a?s=400&d=robohash&r=x"
              alt=""
            />
            <Users>
              <UserName>Bean Really</UserName>
              <UserTitle>Software Engineer</UserTitle>
            </Users>
          </Top>
          <Bottom>
            <UserBottomTitle>Account Detail</UserBottomTitle>
            <Info>
              <Icon>
                <PermIdentity />
              </Icon>{" "}
              <UserInfo>IronBig</UserInfo>
            </Info>
            <Info>
              <Icon>
                <CalendarTodayOutlinedIcon />
              </Icon>
              <UserInfo>17.10.2000</UserInfo>
            </Info>
            <UserBottomTitle>Contact</UserBottomTitle>
            <Info>
              <Icon>
                <PhoneOutlined />
              </Icon>{" "}
              <UserInfo>0944747911</UserInfo>
            </Info>
            <Info>
              <Icon>
                <EmailOutlined />
              </Icon>{" "}
              <UserInfo>IronBig</UserInfo>
            </Info>
            <Info>
              <Icon>
                <LocationOnOutlinedIcon />
              </Icon>{" "}
              <UserInfo>HCM | VietNam</UserInfo>
            </Info>
          </Bottom>
        </UserDetail>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>

          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <Label>Username</Label>
                <Input type="text" placeholder="IronBig" />
              </UpdateItem>
              <UpdateItem>
                <Label>Full Name</Label>
                <Input type="text" placeholder="IronBig" />
              </UpdateItem>
              <UpdateItem>
                <Label>Email</Label>
                <Input type="text" placeholder="IronBig@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <Label>Phone</Label>
                <Input type="text" placeholder="0944747911" />
              </UpdateItem>
              <UpdateItem>
                <Label>Address</Label>
                <Input type="text" placeholder="HCM | VietNam" />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <Upload>
                <UploadImage src="https://gravatar.com/avatar/ac4827cf0816c3cc51ab186e58c4113a?s=400&d=robohash&r=x" />
                <LabelUpload htmlFor="file">
                  <PublishIcon style={{ cursor: "pointer" }} />
                </LabelUpload>
                <Input type="file" id="file" style={{ display: "none" }} />
              </Upload>
              <ButtonUpdate>Update</ButtonUpdate>
            </UpdateRight>
          </UpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};
