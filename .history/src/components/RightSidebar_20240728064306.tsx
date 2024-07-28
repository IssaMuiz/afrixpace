const RightSidebar = () => {
  return (
    <div className="mr-7 w-72 bg-[#1f1e1e]  mobile:hidden tablet:block mt-16 fixed desktop:block border-l top-0 h-[100%] right-0 bottom-0">
      <div className="mt-10 hover:bg-gray-400 py-5 cursor-pointer">
        <img
          className="h-52 w-52 ml-10"
          src="assets/Afrixpace logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSidebar;
