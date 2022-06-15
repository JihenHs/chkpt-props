import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
    const styleObject = { color: "pink" };
  return (
    <div onLoad={props.myName(props.name)}>
       {props.children}
      <h1 style={styleObject}>I'm {props.name}</h1>
      <h4>{props.bio}</h4>
      <h5>{props.profession}</h5>
    </div>
  );
}
Profile.defaultProps = {
  name: "Jihen",
};
Profile.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

export default Profile;
