import { useSelector } from "react-redux";

function User() {
  const name = useSelector((state: any) => state.user.name);
  const sname = useSelector((state: any) => state.user.surname);
  return (
    <div>
      Name {name}. Surname: {sname}
    </div>
  );
}

export default User;
