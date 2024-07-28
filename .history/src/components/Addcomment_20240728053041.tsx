/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

interface commentType {
  showComment: any;
  comment: any;
  newcomment: any;
  handlecomment: any;
  setnewcomment: any;
}
const Addcomment = (props: commentType) => {
  const [user] = useAuthState(auth);

  return (
    <div className="mb-2 mx-2">
      {props.showComment && (
        <div>
          <div className="flex items-center gap-5 justify-between p-1 rounded-md">
            <div className="">
              <img
                className="w-10 h-10 rounded-full "
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="max-w-[500px]   text-black flex-1">
              <textarea
                value={props.newcomment}
                onChange={(e) => props.setnewcomment(e.target.value)}
                placeholder="Type your text"
                className="w-full border p-1 flex-1 rounded-lg focus:outline-none focus:ring-2 resize-none"
              />
            </div>
            <div className="bg-green-600 rounded-lg hover:bg-blue-400">
              <button onClick={props.handlecomment} className="text-white p-2 ">
                Add comment
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div>
              {props.comment.map((comments: any) => (
                <div className="flex gap-5 items-center pb-2 mb-4 border-b ml-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <p className="break-words tablet:max-w-[300px] desktop:max-w-[500px] mobile:max-w-[370px]">
                    {comments}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addcomment;
