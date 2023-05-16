import { useDispatch } from "react-redux";
import { setName, setSname } from "../redux-toolkit/slices/userSlice";

function UserForm() {
  const dispatch = useDispatch();

  const changeName = (name: any) => {
    dispatch(setName(name));
  };
  const changeSname = (sname: any) => {
    dispatch(setSname(sname));
  };

  return (
    <div>
      UserForm
      <label>
        Name:{" "}
        <input type="text" onChange={(ev) => changeName(ev.target.value)} />
      </label>
      <label>
        Sname:{" "}
        <input type="text" onChange={(ev) => changeSname(ev.target.value)} />
      </label>
    </div>
  );
}

export default UserForm;
