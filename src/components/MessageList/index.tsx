import styles from './styles.module.scss'

import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'
import { useEffect, useState } from 'react'

export function MessageList() {

    const messages = useState([])

    useEffect( () => {
        api.get('messages/last3').then(response => {
            console.log(response.data)
        })

    }, [])


    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                <p className={styles.messageContent}>Nao vejo a hora de comecar esse evento. Vai ser daora bacana top de mais vamos ver vai ser depois do natal bla bla bla</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/rodrigoPQF.png" alt="Rodrigo Pereira" />
                        </div>
                        <span>Rodrigo Pereira</span>
                    </div>
                </li>
                <li className={styles.message}>
                <p className={styles.messageContent}>Nao vejo a hora de comecar esse evento. Vai ser daora bacana top de mais vamos ver vai ser depois do natal bla bla bla</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/rodrigoPQF.png" alt="Rodrigo Pereira" />
                        </div>
                        <span>Rodrigo Pereira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Nao vejo a hora de comecar esse evento. Vai ser daora bacana top de mais vamos ver vai ser depois do natal bla bla bla</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/rodrigoPQF.png" alt="Rodrigo Pereira" />
                        </div>
                        <span>Rodrigo Pereira</span>
                    </div>
                </li>
            </ul>

        </div>
    
    )
}