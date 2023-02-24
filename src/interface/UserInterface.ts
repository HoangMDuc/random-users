export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  picture: {
    thumbnail: string;
  };
}
