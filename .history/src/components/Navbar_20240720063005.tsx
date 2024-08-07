import { auth } from "../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type sideNavtype = {
  toggleDisplaynav: any;
};
const Navbar = (props: sideNavtype) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signOutUser = async () => {
    await signOut(auth);
  };

  const navLogin = () => {
    navigate("/sign-up");
  };
  return (
    <div className="left-navbar bg-black flex justify-between fixed top-0 left-0 right-0 h-16 items-center ">
      <div
        onClick={props?.toggleDisplaynav}
        className="ml-2 h-9 w-9 rounded-full hover:bg-[#1c1e21] active:bg-[#182947] content-center cursor-pointer "
      >
        <img
          className="desktop:hidden m-auto h-6 w-6 p-1 "
          src="assets/hamburger-menu (1).png"
          alt="hambuger-icon"
        />
      </div>

      <div className="relative group">
        <Link to="/" className="text-white text-3xl ml-2  ">
          AfriXpace
        </Link>
        <div className="bg-gray-300 rounded-lg w-14 absolute left-6 top-10 transform translate-x-1/2 duration-300 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="pl-1">Home</p>
        </div>
      </div>
      <div className="middle-navbar flex flex-1 mx-2">
        <input
          className="h-10 w-full px-2 text-xl border rounded-l-md"
          placeholder="Search"
          type="text"
        />

        <div className="rounded-r-md h-10 w-10 bg-green-500">
          <img
            className="items-center h-6 w-6 m-auto mt-2"
            src="assets/search-icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="right-navbar flex gap-2 whitespace-nowrap mr-5">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1c1e21]  cursor-pointer hover:bg-[#182947]">
          <img
            className="p-1 h-7 w-7"
            src="assets/create-removebg-preview (1).png"
            alt=""
          />
        </div>
        <div className="h-8 w-8 rounded-full bg-[#1c1e21] hover:bg-[#182947] cursor-pointer">
          <img
            className="p-1"
            src="assets/noti-removebg-preview-removebg-preview.png"
            alt=""
          />
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="text-white">{user?.displayName}</p>
                <button
                  onClick={signOutUser}
                  className=" border bg-gray-200 rounded-md px-1 hover:bg-gray-300"
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={navLogin}
                className="border bg-gray-200 px-1 rounded-md"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
