import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Users from "../../components/Users/Users";
import { sort_users_by_name } from "../../helpers/sort_users_by_name";
import { User } from "../../interface/UserInterface";
import Header from "../../layouts/Header/Header";

const Home: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect((): void => {
    async function getUsers(): Promise<void> {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${
            searchParams.get("p") || 1
          }&results=${searchParams.get("l") || 10}&inc=name,login,picture`
        );
        let data: Array<User> = sort_users_by_name(response.data.results);
        setUsers(data);
      } catch (e) {
        throw new Error("Something wrong!");
      }
    }
    getUsers();
  }, [searchParams]);

  return (
    <div>
      <Header></Header>
      {users && <Users users={users}></Users>}
      {users && (
        <Pagination
          currentPage={Number(searchParams.get("p")) || 1}
        ></Pagination>
      )}
    </div>
  );
};

export default Home;
