import React, {useState} from 'react';
function SimpleInstagram() {
    const [followers, setFollowers] = useState(['aaron', 'bogdan']);
    const [following, setFollowing] = useState(['olha', 'olga', 'olya']);
    const [newName, setNewName] = useState([]);
    let [followersActive, setFollowersActive] = useState(true);
    return (
      <div>
        {followersActive ? (
          <ul>
            {followers.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        ) : (
          <div>
            {following.map((el) => (
              <li>{el}</li>
            ))}
          </div>
        )}
        <div
          onClick={() => {
            setFollowersActive(true);
          }}
        >
          <h4>{followers.length}</h4>
          <p>Followers</p>
        </div>
        <div
          onClick={() => {
            setFollowersActive(false);
          }}
        >
          <h4>{following.length}</h4>
          <p>Following</p>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if(followersActive == true) {
            setFollowers([...followers, newName])
          }else {
            setFollowing([...following, newName])
          }
        }}>
          <input type="text" onChange={(e) => setNewName(e.target.value)}></input>
          <button>Add new {followersActive ? 'follower' : 'following'}</button>
        </form>
      </div>
    );
}

export default SimpleInstagram;
