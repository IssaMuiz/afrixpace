import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Feeds from "./Feeds.json";
import { useState } from "react";

interface Feeds {
  name: string;
  description: string;
  image: string;
  expanded: boolean;
}

const Feed = () => {
  const [user] = useAuthState(auth);

  const [like, setLike] = useState(5);
  const [vote, setVote] = useState<string | null>(null);
  const [post, setPost] = useState(Feeds);

  const toggleUpvote = (id: any) => {
    if (vote === "upvote") {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }

    setVote(vote === "upvote" ? null : "upvote");

    setPost((prevPost) =>
      prevPost.map((posts) =>
        posts.id === id ? { ...posts, expanded: !posts.expanded } : posts
      )
    );
  };
  const toggleDownvote = () => {
    if (like > 0) {
      if (vote === "downvote") {
        setLike(like + 1);
      } else {
        setLike(like - 1);
      }
    }
    setVote(vote === "downvote" ? null : "downvote");
  };

  return (
    <div className="mt-32 max-w-[900px] tablet:mr-[320px] mx-auto desktop:ml-[300px]  tablet:ml-[30px]  flex flex-1 flex-col">
      {post.map((feed) => (
        <div>
          <hr />
          <div className=" w-full hover:bg-gray-100 hover:rounded-lg cursor-pointer p-2 mt-2">
            <div className=" flex items-center gap-2 pt-1">
              <div className="pt-2 mt-2">
                <img
                  className="rounded-full w-10 h-10 mb-5"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p className="font-bold">{feed.name}</p>
                  <p className="text-blue-600 hover:underline">Follow</p>
                </div>

                <p>
                  posted by {auth.currentUser?.displayName} <span>Feb 14</span>
                </p>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">{feed.description}</div>
            <div>
              <img className="w-full rounded-lg" src={feed.image} alt="" />
            </div>
            <div className="flex gap-10 mt-2 align-center">
              <div
                className={`flex bg-gray-200 ${
                  vote === "upvote" && "bg-orange-600"
                } ${
                  vote === "downvote" && "bg-blue-600"
                }  p-1 gap-3 items-center rounded-2xl justify-center `}
              >
                {vote === "upvote" ? (
                  <div>
                    <svg
                      onClick={() => toggleUpvote(post.id)}
                      className="fill-white"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m4 14h2 2v3 4c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-5-2h1 3c.385 0 .734-.221.901-.566.166-.347.12-.758-.12-1.059l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10c-.24.301-.286.712-.12 1.059.167.345.516.566.901.566z" />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <svg
                      onClick={toggleUpvote}
                      className={vote === null ? "hover:fill-orange-500" : ""}
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10c-.24.301-.286.712-.12 1.059.167.345.516.566.901.566h2 2v3 4c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-5-2h2 2c.385 0 .734-.221.901-.566.166-.347.12-.758-.12-1.059zm2.219 9.625h-1v1 3 4h-4v-3-4-1h-1-2.919l5.919-7.399 5.919 7.399z" />
                    </svg>
                  </div>
                )}

                <p className="font-bold text-sm">{like}</p>
                {vote === "downvote" ? (
                  <div>
                    <svg
                      onClick={toggleDownvote}
                      className="fill-white"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.901 10.566c-.167-.345-.516-.566-.901-.566h-2-2v-3-4c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1v5 2h-1-3c-.385 0-.734.221-.901.566-.166.347-.12.758.12 1.059l8 10c.19.237.477.375.781.375s.591-.138.781-.375l8-10c.24-.301.286-.712.12-1.059z" />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <svg
                      onClick={toggleDownvote}
                      className={vote === null ? "hover:fill-blue-600" : ""}
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.901 10.566c-.167-.345-.516-.566-.901-.566h-2-2v-3-4c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1v5 2h-2-2c-.385 0-.734.221-.901.566-.166.347-.12.758.12 1.059l8 10c.19.237.477.375.781.375s.591-.138.781-.375l8-10c.24-.301.286-.712.12-1.059zm-8.901 8.833-5.919-7.399h2.919 1v-1-3-4h4v3 4 1h1 2.919z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="bg-gray-200 rounded-2xl p-2 flex items-center gap-1 hover:bg-gray-300">
                <svg
                  fill="none"
                  className="comment h-6 w-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4 19-.44721-.2236c-.08733.1746-.06499.3841.05719.5365.12218.1523.32185.2195.51129.1722zm15.5-7.5c0 3.866-3.134 7-7 7v1c4.4183 0 8-3.5817 8-8zm-14 0c0-3.86599 3.13401-7 7-7v-1c-4.41828 0-8 3.58172-8 8zm7-7c3.866 0 7 3.13401 7 7h1c0-4.41828-3.5817-8-8-8zm0 14c-.5821 0-1.252-.2167-1.9692-.4712-.3437-.122-.70179-.2533-1.0332-.3518-.32863-.0977-.67406-.177-.9976-.177v1c.17646 0 .41058.0457.71262.1355.29927.089.62301.2077.98378.3357.692.2455 1.522.5288 2.3036.5288zm-4-1c-.11255 0-.27171.0241-.42258.0504-.16556.0288-.3693.0692-.59449.1166-.45104.0949-1.00237.221-1.53495.3463-.53321.1255-1.0504.2508-1.4341.3448-.19191.047-.35056.0862-.46129.1136-.05536.0137-.09875.0245-.12834.0319-.01479.0037-.02614.0065-.0338.0084-.00383.001-.00674.0017-.0087.0022-.00099.0002-.00173.0004-.00223.0005-.00025.0001-.00045.0001-.00058.0002-.00006 0-.00012 0-.00015 0-.00004 0-.00006 0 .12121.4851s.12128.4851.1213.4851c.00003 0 .00007-.0001.00012-.0001.00011 0 .00029 0 .00052-.0001.00047-.0001.00117-.0003.00212-.0005.00188-.0005.00472-.0012.00847-.0021.0075-.0019.01868-.0047.03331-.0083.02925-.0073.07228-.018.12727-.0316.10997-.0273.26773-.0662.45864-.113.38192-.0935.89598-.2182 1.42527-.3427.52992-.1247 1.07234-.2486 1.51192-.3412.22013-.0463.41092-.084.55982-.1099.07454-.013.13537-.0224.18229-.0285.0515-.0066.07071-.0071.06895-.0071zm-4.5 1.5c.44721.2236.44723.2236.44726.2235.00002 0 .00005-.0001.00008-.0001.00007-.0002.00015-.0004.00026-.0006.00023-.0004.00054-.001.00094-.0018.0008-.0016.00195-.004.00345-.007.00301-.006.00738-.0148.01305-.0263.01133-.0229.02781-.0564.0487-.0991.04177-.0856.10123-.2085.1725-.3589.14238-.3006.33265-.7128.52333-1.1577.19013-.4437.38359-.9266.5304-1.367.14069-.4221.26003-.8658.26003-1.205h-1c0 .1608-.06816.4671-.20872.8888-.13444.4033-.31598.8579-.50085 1.2892-.18432.4301-.36905.8304-.50792 1.1236-.06936.1464-.12708.2657-.16734.3481-.02013.0412-.03588.0732-.04652.0947-.00532.0108-.00936.0189-.01204.0243-.00134.0027-.00233.0047-.00297.006-.00032.0006-.00056.0011-.0007.0014-.00007.0001-.00012.0002-.00014.0003-.00002 0-.00002 0-.00003 0 .00001 0 .00002 0 .44723.2236zm2-4c0-.5586-.13724-1.2669-.25926-1.8921-.12961-.664-.24074-1.2302-.24074-1.6079h-1c0 .4989.13887 1.1827.25926 1.7995.12798.6557.24074 1.2591.24074 1.7005z"
                    fill="#09090b"
                  />
                </svg>
                <p className="text-sm font-bold">2.1k</p>
              </div>
              <div className="bg-gray-200 flex p-2 rounded-2xl gap-1 hover:bg-gray-300">
                <svg
                  className="share h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.5 4c.27614 0 .5.22386.5.5 0 .24545778-.17687704.4496079-.41012499.49194425l-.08987501.00805575h-3c-.77969882 0-1.420449.59488554-1.49313345 1.35553954l-.00686655.14446046v8c0 .7796706.59488554 1.4204457 1.35553954 1.4931332l.14446046.0068668h8c.7796706 0 1.4204457-.5949121 1.4931332-1.3555442l.0068668-.1444558v-1c0-.2761.2239-.5.5-.5.2454222 0 .4496.1769086.4919429.4101355l.0080571.0898645v1c0 1.325472-1.0315469 2.4100378-2.3356256 2.4946823l-.1643744.0053177h-8c-1.3254816 0-2.41003853-1.0315469-2.49468231-2.3356256l-.00531769-.1643744v-8c0-1.3254816 1.03153766-2.41003853 2.33562452-2.49468231l.16437548-.00531769zm3.8776-.42218c0-.44778533.4618631-.70274151.8163008-.51603855l.0740992.04685855.0617.05301 4.4971 4.42118c.1865778.18340444.2224.46564543.1074667.68700565l-.0501667.07984435-.0572.06544-4.4971 4.42258c-.31528.3100533-.8146258.1449156-.9285862-.2465427l-.0183138-.0872573-.0053-.0823v-2.0955l-.2577.0232c-.2489.0266-.4963.0654-.7423.1164-1.53378.3183-3.01312 1.1122-4.44499 2.3907-.38943.3478-.99194.019-.92789-.5063.486252-3.98795475 2.48231514-6.23076163 5.8838529-6.60251607l.2644271-.02490393.2246-.01511zm1 1.03322v2.03152l-1.1513.07744c-1.5737.12605-2.73395.67426-3.5631 1.56852-.66903.72156-1.17827 1.72888-1.47646 3.06698 1.41552133-1.0608267 2.9105751-1.7256288 4.4876574-1.95751891l.3476026-.04395109 1.3556-.1218v2.15597l3.4462-3.38915z"
                    fill="#212121"
                  />
                </svg>
                <p className="text-sm font-bold">Share</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
