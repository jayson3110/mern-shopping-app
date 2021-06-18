import React from "react"
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const SideDrawer = ({show, click}) => {
	const sidedrawerClass = ["sidedrawer"];

	console.log(show);

	if(show){
		sidedrawerClass.push("show");
	}
	return  <div className={sidedrawerClass.join(" ")}>


	   <ul className="sidedrawer__links" onClick={click}>
	      <li>

	         <Link to="/cart">
	           <span>
	            <i className="fas fa-shopping-cart"></i>

	            </span>
	            Cart <span className="sidedrawer__cartbadge">0</span>
	         </Link>
	      </li>
	      <li>
	        <Link to="/"> Shop</Link>
	      </li>
	   </ul>

	</div>
}

export default SideDrawer;