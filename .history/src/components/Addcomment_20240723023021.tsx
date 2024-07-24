import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Addcomment = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex">
        <div className="">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <p>Add comment</p>
        </div>
      </div>
    </div>
  );
};

export default Addcomment;
