import React, { useState } from 'react'
import '../App.css'

export default function Modal() {
  const [open, setOpen] = useState(false)

  return (
    <div className="modal-wrapper">
      <button
        type="button"
        className="modal-toggle"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
      >
        {open ? 'Cerrar' : 'Abrir modal'}
      </button>

      {open && (
        <div className="modal-inline" role="dialog" aria-label="Iniciar sesión">
          <header className="modal-inline__header">
            <h3>Iniciar sesión</h3>
            <button
              type="button"
              className="modal-inline__close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
          </header>

          <form
            className="modal-inline__body"
            onSubmit={(e) => {
              e.preventDefault()
              // Simular envío
              setOpen(false)
            }}
          >
            <label className="modal-inline__label">
              Correo
              <input className="modal-inline__input" type="email" required placeholder="tu@ejemplo.com" />
            </label>

            <label className="modal-inline__label">
              Contraseña
              <input className="modal-inline__input" type="password" required placeholder="********" />
            </label>

            <div className="modal-inline__actions">
              <button type="button" className="btn btn-outline" onClick={() => setOpen(false)}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}