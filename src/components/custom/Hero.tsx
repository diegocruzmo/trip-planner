import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-9 m-auto'>
      <h2 className='font-extrabold  text-[25px] md:text-[40px] text-center mt-16'>
        <span className='text-cyan-900'>
          Embark on Your Dream Journey with AI:
        </span>{' '}
        Tailored Travel Plans at the Click of a Button
      </h2>
      <p className='text-xl text-gray-500 text-center'>
        Your bespoke travel designer, crafting personalized itineraries
        perfectly matched to your preferences and budget.
      </p>

      <Link to={'/create-trip'}>
        <Button>Get Started</Button>
      </Link>
    </div>
  )
}

export default Hero
