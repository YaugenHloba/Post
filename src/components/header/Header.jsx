import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


function Header({user}) {

	return (
		  <div className='header'>
			  <div className="headerName">
				  <p>
					  Blog Space
				  </p>
			  </div>
			  <div className="headerMenu">
				  <Link className="headerMenuBlock headerMenuMain" to="/">
					  <div >Main</div>
				  </Link>
				  <Link className="headerMenuBlock headerMenuPost" to="/post">
					  <div >MyPost</div>
				  </Link>
				  <Link className="headerMenuBlock headerMenuAuthor" to="/author">
					  <div >Authors</div>
				  </Link>
				  <div className="headerMenuBlock headerMenuSearch">
					  <input type="search" placeholder="Search"/>
				  </div>
				  <Link className="headerMenuBlock headerMenuLogOut" to="/login">
					  <div >Log Out</div>
				  </Link>
			  </div>
			  <div className="headerPage">
				  <p className="hederPageText">
					  Main Page
				  </p>
			  </div>
			  <div className="headerSort">
				  <p className="headerSortText">
					  order by
					  <input type="" list="reiting"/>
				  </p>
				  <datalist id="reiting">
					  <option>Data</option>
					  <option>Like</option>
					  <option>Visits</option>
				  </datalist>
			  </div>
		  </div>
	)

}
export default Header;