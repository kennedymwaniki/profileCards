import ProfileCard from "./ProfileCard";

const users = [
  {
    name: "John Doe",
    age: 28,
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Software developer with a passion for open source.",
  },
  {
    name: "Jane Smith",
    age: 34,
    profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Digital artist and graphic designer.",
  },
  {
    name: "Emily Johnson",
    age: 22,
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Student and aspiring data scientist.",
  },
  {
    name: "Michael Brown",
    age: 45,
    profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Experienced project manager and team leader.",
  },
];

const App = () => {
  return (
    <div className="app">
      {users.map((user, index) => (
        <ProfileCard
          name={user.name}
          bio={user.bio}
          key={index}
          age={user.age}
          image={user.profilePicture}
        />
      ))}
    </div>
  );
};

export default App;
