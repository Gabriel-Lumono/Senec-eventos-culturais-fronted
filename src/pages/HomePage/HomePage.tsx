import styles from './HomePage.module.css'

function HomePage() {
  return (
  <div>  
    <header className={styles.header} >
      <h3>Senac Eventos Cultural</h3>

      <a href="http://localhost:5173/login">Login</a>
    </header>
    
    <main>
      <div className={styles.title} >
        <h1>Bem-Vindo!</h1>
      </div>
    </main>
  </div>  
  )
}

export default HomePage