export const selectTravelesList = [
  {
    id: 1,
    title: 'Just Me',
    description: 'A sole travels in exploration',
    icon: '👱‍♂️',
    people: '1 person'
  },
  {
    id: 2,
    title: 'A Couple',
    description: 'Two travels in tandem',
    icon: '🥂',
    people: '2 people'
  },
  {
    id: 3,
    title: 'Family',
    description: 'A group of fun loving adv',
    icon: '👨‍👩‍👦‍👦',
    people: '3 to 5 people'
  },
  {
    id: 4,
    title: 'Friends',
    description: 'A bunch of thrill-seekes',
    icon: '🏄‍♀️',
    people: '5 to 10 people'
  }
]

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    description: 'Stay conscious of costs',
    icon: '🥉'
  },
  {
    id: 2,
    title: 'Moderate',
    description: 'Keep cost on the average side',
    icon: '🥈'
  },
  {
    id: 3,
    title: 'Luxury',
    description: 'Dont worry about cost',
    icon: '🥇'
  }
]

export const AI_PROMPT =
  'Generate Travel Plan for Location: {location}, for {days} days for {travelers} with a {budget} budget, give me hotels options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, time travel each of the location for {days} days with each day plan with best time to visit in JSON format.'
