import React, { useState } from 'react'

const SAMPLE_APPS = ['Email', 'Slack', 'WhatsApp', 'Trello', 'Calendario']

export default function Notifications() {
    const [items, setItems] = useState([])

    function pushNotification() {
        const app = SAMPLE_APPS[Math.floor(Math.random() * SAMPLE_APPS.length)]
        const text = `Tienes un nuevo mensaje de ${app}`
        const id = Date.now() + Math.random()
        const newItem = { id, app, text }
        setItems(prev => [newItem, ...prev])

        // auto-dismiss after 4s
        setTimeout(() => {
            setItems(prev => prev.filter(i => i.id !== id))
        }, 4000)
    }

    function dismiss(id) {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    return (
        <div className="notifications-wrapper">
            <div className="notifications-controls">
                <button onClick={pushNotification} className="btn-simulate">Simular notificación</button>
            </div>

            <div className="notifications-list">
                {items.map(item => (
                    <div key={item.id} className="notification">
                        <div className="notification__header">
                            <strong className="notification__app">{item.app}</strong>
                            <button className="notification__close" onClick={() => dismiss(item.id)} aria-label="Cerrar">×</button>
                        </div>
                        <div className="notification__body">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}