/* eslint-disable react/prop-types */
const ProfileCard = ({ name, bio, age, image }) => {
  return (
    <div className="card">
      <img src={image} className="img" />
      <h1> Name: {name}</h1>
      <p>age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default ProfileCard;
