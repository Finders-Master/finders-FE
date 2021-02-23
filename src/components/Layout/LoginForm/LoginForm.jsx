import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoogleLogo } from '../../../assets/svg/GoogleLogo'
import { TwitterLogo } from '../../../assets/svg/TwitterLogo'

export const LoginForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <form 
        className="loginform"
        onSubmit={handleSubmit}
        >
            <div className="loginform__buttons">
                <NavLink className="loginform__buttons__inactive" 
                to="/login" exact 
                activeClassName="loginform__buttons__active">
                    <button>login</button>
                </NavLink>
                <div className="separator__vertical"></div>
                <NavLink className="loginform__buttons__inactive" 
                to="/registro" exact 
                activeClassName="loginform__buttons__active">
                    <button>Registro</button>
                </NavLink>
            </div>
            <div className="loginform__inputs">
                <input type="email"
                placeholder="correo"
                />
                <input type="password"
                placeholder="contraseña"
                />
            </div>
            <input type="submit" className="loginform__submit"/>
            <div className="loginform__social">
                <h3>o entra con tus redes sociales</h3>
                <div className="loginform__social__buttons">
                    <button>
                        <span>
                                <GoogleLogo/>
                        </span>
                            google
                    </button>
                    <button>
                        <span>
                            <TwitterLogo/>
                        </span>
                        twitter
                    </button> 
                </div>
            </div>
        </form>
    )
}
