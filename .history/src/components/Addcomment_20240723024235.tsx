import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Addcomment = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="ml-0">
          <img
            className="w-10 h-10 rounded-full ml-0"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className="w-80">
          <input
            placeholder="comment"
            className="w-full border p-1 flex-1"
            type="text"
          />
        </div>
        <div className="bg-blue-400 rounded-lg ml-10">
          <p className="text-white p-2">Add comment</p>
        </div>
      </div>
    </div>
  );
};

export default Addcomment;
