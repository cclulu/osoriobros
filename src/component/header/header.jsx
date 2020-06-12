import React from "react";
import {Link} from 'react-router-dom'
import styles from './header.module.css'

class Header extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Link to={"/"} className={styles.titleName} >Osorio Bros. </Link>
        <div>
          <Link to={"/aboutus"} className={styles.aboutUs}>About Us</Link>
        </div>
      </div>
    )
  }
}

export default Header;
