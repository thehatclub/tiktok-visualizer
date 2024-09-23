import React from "react";

function Profile({ data }) {
  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {data.userName}
      </p>
      <p>
        <strong>Email:</strong> {data.emailAddress}
      </p>
      <p>
        <strong>Bio:</strong> {data.bioDescription || "No bio available"}
      </p>
      <p>
        <strong>Date of Birth:</strong> {data.birthDate}
      </p>
      <img src={data.profilePhoto} alt="Profile" width="150" />
    </div>
  );
}

export default Profile;
