import { IoIceCreamOutline } from 'react-icons/io5'
import { MdLogin, MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='mb-20'>
      <div className='fixed z-50 w-full flex justify-between items-center bg-pink-300 py-4 px-6'>
        <h2 className='font-semibold text-2xl logo'>
          <Link to={'/'} className='flex items-center'>
            Puja's Ice<IoIceCreamOutline size={30} />Cream
          </Link>
        </h2>
        <div className='flex items-center gap-3'>
          <div className='bg-white shadow-lg rounded-full hover:shadow-xl hover:bg-pink-200 transition-all duration-300'>
            <Link to={'/login'}>
              <div className='flex items-center gap-3 text-xl p-3'>
                <MdLogin size={25} />
              </div>
            </Link>
          </div>
          <div className='bg-white shadow-lg rounded-full hover:shadow-xl hover:bg-pink-200 transition-all duration-300'>
            <Link to={'/place-order'}>
              <div className='flex items-center gap-3 text-xl p-3'>
                <MdOutlineShoppingCart size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
