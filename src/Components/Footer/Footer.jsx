import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full text-center p-3 bg-pink-100'>
            <p>© 2026 <Link to={'/'} className='text-blue-500'>Puja's Ice cream</Link>. All rights reserved.</p>
        </div>
    )
}

export default Footer;