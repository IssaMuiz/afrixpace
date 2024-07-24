import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event: any) => {
    const file = event?.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const post = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center ">
        <div className="bg-white h-[500px] w-[700px] rounded-sm">
          <div className="mt-5 text-center border-b pb-3">
            <p className="text-3xl">Create Post</p>
          </div>
          <div>
            <textarea
              placeholder="Create your post"
              className="w-[660px] m-5 outline-none mb-20 border pl-2 pt-1"
              name=""
              id=""
            ></textarea>
            <div className="w-20 h-24 mb-20 pl-5">
              {image && <img src={image} alt="" />}
            </div>
          </div>

          <div className="flex flex-row justify-between mx-5 items-center">
            <input type="file" accept="image/*" onChange={handleImageUpload} />

            <button
              onClick={post}
              className="bg-blue-600 p-2 rounded-xl font-bold w-20 hover:bg-blue-500 text-white"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
