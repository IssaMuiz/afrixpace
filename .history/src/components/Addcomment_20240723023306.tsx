import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Addcomment = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex items-center gap-5 justify-between">
        <div className="">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <div>
          <input className="border" type="text" />
        </div>
        <div className="bg-blue-400">
          <p className="text-white p-3">Add comment</p>
        </div>
      </div>
    </div>
  );
};

export default Addcomment;