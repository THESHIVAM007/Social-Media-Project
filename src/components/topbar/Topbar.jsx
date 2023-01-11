import React from 'react'
import "./topbar.css"
import{Search,Person,Chat, Notifications} from "@mui/icons-material"
const Topbar = () => {
  return (
    <div className='topbarContainer'>
<div className="topbarLeft">
  <span className="logo">Social Call</span>
</div>
<div className="topbarCenter">
  <div className="searchbar">
<Search className='searchIcon'/>
<input placeholder="Search for friend,post or video" className="searchInput" />
  </div>
</div>
<div className="topbarRight">
  <div className="topbarlinks">
    <span className="topbarlink">Homepage</span>
    <span className="topbarlink">TimeLine</span>
  </div>
  <div className="topbarIcons">
    <div className="topbarIconItem">
      <Person/>
      <span className="topbarIconBadge">
        1
      </span>
    </div>
    <div className="topbarIconItem">
      <Chat/>
      <span className="topbarIconBadge">
        2
      </span>
    </div>
    <div className="topbarIconItem">
      <Notifications/>
      <span className="topbarIconBadge">
        1
      </span>
    </div>
  </div>
<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="topbarImg" />
</div>


    </div>
  )
}

export default Topbar