import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="generalQ">
            <div className="container">
                <Link
                    to="/"
                >
                </Link>
                <h2>404 Page not found!</h2>
            </div>
        </div>
    )
}

export default ErrorPage