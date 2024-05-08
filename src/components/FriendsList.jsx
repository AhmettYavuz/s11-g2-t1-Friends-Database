import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { loggedInUser, isUserLoggedIn } = useAuth();
  console.log("userlog : ", loggedInUser);
  console.log("token : ", loggedInUser.token);

  console.log("isUserLoggedIn1 : ", isUserLoggedIn);
  const token = loggedInUser.token;

  useEffect(() => {
    if (isUserLoggedIn) {
      axios
        .get("https://nextgen-project.onrender.com/api/s11d2/friends", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setFriends(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [isUserLoggedIn, loggedInUser]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
