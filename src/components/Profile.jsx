import PropTypes from 'prop-types';
export default function Profile ({
    username,
    tag,
    location,
    avatar,
    stats:{
    followers,
    views,
    likes,
    },
}){
    return (
        <div className="profile">
  <div className="description">
    <img 
    style={{height:100,
     with:100}}
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name" style={{margin:0,padding:0}}>{username}</p>
    <p className="tag" style={{fontSize:30}}>@{tag}</p>
    <p className="location" style={{fontSize:30}}>{location}</p>
  </div>

  <ul className="stats" style={{display: "flex", fontSize:30, gap:30, listStyle: "none", margin: 0, padding:0, paddingLeft:550}}>
    <li style={{display: 'flex', flexDirection:'column', height:20}}>
      <span className="label">Followers</span>
      <span className="quantity" style={{height:10}}>{followers}</span>
    </li>
    <li style={{display: 'flex', flexDirection:'column', height:20}}>
      <span className="label">Views</span>
      <span className="quantity" style={{height:10}}>{views}</span>
    </li>
    <li style={{display: 'flex', flexDirection:'column', height:20}}>
      <span className="label">Likes</span>
      <span className="quantity" style={{height:10}}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    likes: PropTypes.number,
  };