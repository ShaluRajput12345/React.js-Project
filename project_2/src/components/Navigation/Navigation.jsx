import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="images\logo.png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>

    </nav>
  )
}

export default Navigation
