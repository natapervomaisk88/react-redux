import { useDispatch } from "react-redux";
import { addUser } from "../redux-toolkit/slices/userSlice";

function UserForm() {
  const dispatch = useDispatch();

  return (
    <div>
      UserForm
      <label>
        Name: <input type="text" /> <button>Save</button>
      </label>
    </div>
  );
}

export default UserForm;
