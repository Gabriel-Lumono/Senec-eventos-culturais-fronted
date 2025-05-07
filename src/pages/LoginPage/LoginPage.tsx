import styles from './LoginPage.module.css'

function LoginPage() {
    return (
        <div>
            <header  className={styles.header}  >
                <h3>Senac Eventos Cultural</h3>

                <a href="http://localhost:5173/login">Login</a>
            </header>
            <main>
                <div  className={styles.form}>
                    <form>
                        <div>
                            <label>Email</label>
                            <input type='email'/>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type='password'/>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    )
}
export default LoginPage