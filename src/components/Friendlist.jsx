export default function Friendlist({ friends }) {
  return (
    <ul className="friend-list" style={{listStyle:'none'}}>
      {friends.map((friend) => (
        <li className="item" key={friend.id} style={{display:'flex', height: 50, gap:20}}>
          {friend.isOnline === true ? (
        <div className="status" style={{background:'green', width:50, borderRadius:50}}>{friend.isOnline}</div>
      ):(
<div className="status" style={{background:'red', width:50,borderRadius:50}}>{friend.isOnline}</div>
      )}
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name" style={{height:50, margin: 0}}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
