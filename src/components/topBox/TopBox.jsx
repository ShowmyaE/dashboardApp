import "./topBox.scss"
// import {topDealUsers} from "../../data.js"
import React,{useEffect}from 'react'
import {useState} from 'react'




const TopBox = () => {

  const [users, setUsers] = useState([]);
 

  useEffect( () => {
    // Simulate fetching user data from an API
    fetch('http://localhost:5000/topdealers')
      .then(async(response) => 
        {
         const data= await response.json()
         console.log("RES DAT", data)
         setUsers(data)
      })
      // .then((data) => {
      // setUsers(data);
        
      // });
  }, []);
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {users.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox