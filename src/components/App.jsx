import Profile from "./Profile";
import user from "../json/user.json";

import Statistics from "./Statistics";
import data from "../json/data.json";

import Friendlist from "./Friendlist";
import friends from "../json/friends.json";

import TransactionHistory from "./TransactionHistory";
import transactions from "../json/transactions.json";



export const App = () => {
  return (
    <div 

      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: 'black',
        alignContent:'center'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics
title="Upload stats"
stats={data}
></Statistics>

<Friendlist
friends={friends}></Friendlist>

<TransactionHistory
 items={transactions}>

</TransactionHistory>


    </div>
  );
};
