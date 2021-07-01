import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/navbar.module.css"
import logo from "./utils/logo.png"
import { Button, FormControl } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"

import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../store/user"

const Navbar = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = e => {
    if (user.id) dispatch(userLogout())
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.boxCenter}>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      </div>

      <div className={styles.boxRight}>
        <div className={styles.btns}>
          <Link to={`/${user.id ? "" : "login"}`}>
            <Button onClick={handleLogout}>{user.id ? "Log out" : "Log in"}</Button>
          </Link>
        </div>
        <div className={styles.btns}>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>

        <div className={styles.btns}>
          <Button>
            <FaShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
