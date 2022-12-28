import React from 'react'
import "./topbar.css"
import{Search,Person} from "@material-ui/icons"
const Topbar = () => {
  return (
    <div className='topbarContainer'>Topbar
<div className="topbarLeft">
  <span className="logo">Social Call</span>
</div>
<div className="topbarCenter">
  <div className="searchbar">
<Search/>
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
  </div>

</div>


    </div>
  )
}

export default Topbar