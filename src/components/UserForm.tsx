import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addUser } from "../redux-toolkit/slices/userSlice";
import { v4 } from "uuid";

function UserForm() {
  const dispatch = useDispatch();
  const inputRef: any = useRef();
  const handlerAddUser = () => {
    const user = {
      id: v4(),
      name: inputRef.current.value,
      isActive: true,
    };
    dispatch(addUser(user));
  };
  return (
    <div>
      <label>
        Name: <input type="text" ref={inputRef} />{" "}
        <button onClick={handlerAddUser}>Save</button>
      </label>
    </div>
  );
}

export default UserForm;
