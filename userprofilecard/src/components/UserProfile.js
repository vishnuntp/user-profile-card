import React from "react";

const UserProfile = (props) => {
  const { user, render } = props;
  return <React.Fragment>{render(user)}</React.Fragment>;
};

export default UserProfile;
