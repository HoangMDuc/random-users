import React from "react";

interface Props {
  a: number;
  b: string;
}

const User: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default User;
