export type ProfileProps = {
  name: string;
};
const Profile = ({ name }: ProfileProps) => {
  return <div>hello Profile name is {name}</div>;
};

export default Profile;