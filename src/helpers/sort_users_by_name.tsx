import { User } from "../interface/UserInterface";

const sort_users_by_name = (users: Array<User>): Array<User> => {
  for (let i = 0; i < users.length - 1; i++) {
    for (let j = 0; j < users.length - 1 - i; j++) {
      if (users[j].name.first > users[j + 1].name.first) {
        let temp: User = users[j];
        users[j] = users[j + 1];
        users[j + 1] = temp;
      }
    }
  }
  return users;
};
export { sort_users_by_name };
