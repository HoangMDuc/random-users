import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../interface/UserInterface";

interface Props {
  users: Array<User>;
}

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 80%;
  text-align: center;
  tr,
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px;
  }
`;

const Users: React.FC<Props> = (props: Props) => {
  const { users } = props;
  return (
    <StyledTable border={1}>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Thumbnail Icon</th>
        </tr>
      </thead>
      {users &&
        users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td>{user.login.username}</td>
              <td>
                <img src={user.picture.thumbnail} alt="" />
              </td>
            </tr>
          );
        })}
    </StyledTable>
  );
};

export default Users;
