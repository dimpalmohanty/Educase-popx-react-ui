const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="profile-page">
      <div className="profile-title">Account Settings</div>

      <div className="profile-content">
        <div className="profile-header-row">
          <div className="avatar-wrapper">
            <img src="./profile.png" className="avatar-img" />
            <img src="./Group 1585.svg" className="camera-icon" />
          </div>

          <div>
            <div className="profile-name">{user?.fullName || "Marry Doe"}</div>
            <div className="profile-email">{user?.email || "Marry@Gmail.Com"}</div>
          </div>
        </div>

        <div className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </div>

        <div className="profile-divider" />
      </div>
    </div>
  );
};

export default Profile;
