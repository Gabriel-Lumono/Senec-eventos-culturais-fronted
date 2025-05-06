import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import styles from './EventPages.module.css'

function EventsPage (){
    return (
        <div>
            <h1 className={styles.title} >Página de enventos</h1>
            <ButtonComponent />
        </div>
    )
}

export default EventsPage