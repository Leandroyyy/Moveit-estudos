import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){

    const {level} = useContext(ChallengesContext)
    
    return(
        <div className={styles.profileContainer}>
            <img src="https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/167934958_137029031694066_4119052659844079987_n.jpg?tp=1&_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=uOhQ6ef-96UAX_0gQs9&edm=ABfd0MgAAAAA&ccb=7-4&oh=c8e5611d5be81814c9ffd406a5cdc562&oe=609290D1&_nc_sid=7bff83" alt="Leandroyy photo"/>
            <div>
                <strong>Leandro Cavallari</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}