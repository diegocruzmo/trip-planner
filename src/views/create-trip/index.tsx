import { useLocations } from '@/hooks/useLocations'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SelectBudgetOptions, selectTravelesList } from '@/constants/options'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const CreateTrip = () => {
  const { locations, loading, error, getLocations } = useLocations()
  const [query, setQuery] = useState('')
  const [formData, setFormData] = useState({
    location: '',
    days: '',
    budget: '',
    travelers: ''
  })

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    if (query.trim() !== '') {
      getLocations(query)
    }
  }, [query, getLocations])

  return (
    <div className='px-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10'>
      <h2 className='font-bold text-xl md:text-3xl text-center'>
        Tell Us Your Travel Preferences ✈️
      </h2>
      <p className='mt-3 text-gray-500 text-md md:text-xl'>
        Simply share a few details, and our trip planner will create a bespoke
        itinerary tailored to your unique tastes and interests.
      </p>
      <div className='flex flex-col gap-1'>
        <div className='mt-10'>
          <h2 className='text-xl my-3 font-medium'>What's your destination?</h2>
          <Input onChange={(e) => setQuery(e.target.value)} className='mb-4' />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {locations.length > 0 && (
          <Select
            name='location'
            value={formData.location}
            onValueChange={(value) => handleInputChange('location', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select an option' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose a City</SelectLabel>
                {locations.map((location, index) => (
                  <SelectItem key={index} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        <div>
          <h2 className='text-xl my-3 font-medium mt-8'>
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder='Ex.3'
            type='number'
            value={formData.days}
            onChange={(e) => handleInputChange('days', e.target.value)}
          />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium mt-8'>
            What is Your Budget?
          </h2>
          <p className='text-md my-3 font-small'>
            The budget is exclusively allocated for activities and dining
            purposes.
          </p>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item) => (
              <div
                key={item.id}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer text-center ${
                  formData.budget === item.title && 'shadow-xl bg-slate-100'
                }`}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h3 className='font-bold text-lg'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium mt-8'>
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {selectTravelesList.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer text-center ${
                  item.people === formData.travelers && 'shadow-xl bg-slate-100'
                }`}
                onClick={() => handleInputChange('travelers', item.people)}
              >
                <h2 className='text-3xl'>{item.icon}</h2>
                <h3 className='font-bold text-lg'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-5 flex justify-end items-center'>
        <Button>Generate Trip</Button>
      </div>
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
    </div>
  )
}

export default CreateTrip
