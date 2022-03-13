import SignInButton from '../SignInButton'
import styles from './styles.module.scss'

export function Header () {
    return (
        <header className={styles.headerContaider}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active}href="">Home</a>
                    <a href="">Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}