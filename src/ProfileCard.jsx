/* eslint-disable react/prop-types */
const ProfileCard = ({ name, bio, age, image }) => {
  return (
    <div className="card">
      <img src={image} className="img" />
      <div className="bio">
        <h1> Name: {name}</h1>
        <p>age: {age}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
