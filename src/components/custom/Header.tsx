import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-2 shadow-md px-5'>
      <img src='/logoipsum.svg' alt='' />
      <div>
        <Button>Sign in</Button>
      </div>
    </header>
  )
}

export default Header
