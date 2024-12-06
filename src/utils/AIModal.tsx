import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash'
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json'
}

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: 'Generate Travel Plan for Location: Las Vegas, Nevada, Vereinigte Staaten von Amerika, for 3 days for 1 person with a Moderate budget, give me hotels options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, time travel each of the location for 1 days with each day plan with best time to visit in JSON format.'
        }
      ]
    },
    {
      role: 'model',
      parts: [
        {
          text: '```json\n{\n  "trip": {\n    "location": "Las Vegas, Nevada, USA",\n    "duration": "3 days",\n    "budget": "Moderate",\n    "traveler_count": 1\n  },\n  "hotels": [\n    {\n      "name": "The LINQ Hotel + Experience",\n      "address": "3545 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price_range": "$100-$200/night",\n      "image_url": "https://example.com/linq_hotel.jpg",  //Replace with actual image URL\n      "geo_coordinates": {\n        "latitude": 36.1222,\n        "longitude": -115.1682\n      },\n      "rating": 4.0,\n      "description": "Centrally located hotel on the Strip with a vibrant atmosphere and High Roller observation wheel."\n    },\n    {\n      "name": "Park MGM",\n      "address": "3770 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price_range": "$150-$250/night",\n      "image_url": "https://example.com/park_mgm.jpg", //Replace with actual image URL\n      "geo_coordinates": {\n        "latitude": 36.1216,\n        "longitude": -115.1674\n      },\n      "rating": 4.5,\n      "description": "Modern hotel with a sophisticated vibe, connected to the ARIA resort and casino."\n    },\n    {\n      "name": "Planet Hollywood Resort & Casino",\n      "address": "3667 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price_range": "$80-$180/night",\n      "image_url": "https://example.com/planet_hollywood.jpg", //Replace with actual image URL\n      "geo_coordinates": {\n        "latitude": 36.1206,\n        "longitude": -115.1695\n      },\n      "rating": 4.0,\n      "description": "Themed hotel with a celebrity focus, offering various dining and entertainment options."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "theme": "Strip Exploration",\n      "plan": [\n        {\n          "name": "Bellagio Fountains",\n          "details": "Free water show with music and lights.",\n          "image_url": "https://example.com/bellagio_fountains.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": 36.1146,\n            "longitude": -115.1729\n          },\n          "ticket_price": "Free",\n          "time": "Afternoon/Evening"\n        },\n        {\n          "name": "High Roller Observation Wheel (The LINQ)",\n          "details": "Stunning views of the Las Vegas Strip.",\n          "image_url": "https://example.com/high_roller.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": 36.1227,\n            "longitude": -115.1697\n          },\n          "ticket_price": "$30-$50",\n          "time": "Late Afternoon/Sunset"\n        },\n        {\n          "name": "Dinner at In-N-Out Burger",\n          "details": "Casual and affordable Californian burger chain.",\n          "image_url": "https://example.com/in_n_out.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": 36.1313,\n            "longitude": -115.1604 //Example location, find a closer one\n          },\n          "ticket_price": "$15-$20",\n          "time": "Evening"\n        }\n      ]\n    },\n    "day2": {\n      "theme": "Beyond the Strip",\n      "plan": [\n        {\n          "name": "Seven Magic Mountains",\n          "details": "Colorful art installation south of Las Vegas.",\n          "image_url": "https://example.com/seven_magic_mountains.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": 35.9876,\n            "longitude": -114.9389\n          },\n          "ticket_price": "Free",\n          "time": "Morning"\n        },\n        {\n          "name": "Red Rock Canyon National Conservation Area",\n          "details": "Hiking and scenic drives through red rock formations.",\n          "image_url": "https://example.com/red_rock_canyon.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": 36.2062,\n            "longitude": -115.8059\n          },\n          "ticket_price": "$15 (per vehicle)",\n          "time": "Afternoon"\n        },\n        {\n          "name": "Dinner at a local restaurant",\n          "details": "Explore options near your hotel or in a different area.",\n          "image_url": "https://example.com/local_restaurant.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": null,\n            "longitude": null\n          },\n          "ticket_price": "$20-$35",\n          "time": "Evening"\n        }\n      ]\n    },\n    "day3": {\n      "theme": "Pool Day & Shows",\n      "plan": [\n        {\n          "name": "Pool time at your hotel",\n          "details": "Relax and enjoy the amenities.",\n          "image_url": "https://example.com/hotel_pool.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": null,\n            "longitude": null\n          },\n          "ticket_price": "Included in hotel stay",\n          "time": "Morning/Afternoon"\n        },\n        {\n          "name": "Explore a different casino/hotel",\n          "details": "Check out unique features of other casinos like the Venetian or Caesars Palace.",\n          "image_url": "https://example.com/casino.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": null,\n            "longitude": null\n          },\n          "ticket_price": "Free entry, gambling optional",\n          "time": "Afternoon/Evening"\n        },\n        {\n          "name": "Optional: Cirque du Soleil show",\n          "details": "World-renowned acrobatic show (check showtimes and pricing).",\n          "image_url": "https://example.com/cirque_du_soleil.jpg", //Replace with actual image URL\n          "geo_coordinates": {\n            "latitude": null,\n            "longitude": null\n          },\n          "ticket_price": "$100+",\n          "time": "Evening"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Remember to replace all placeholder image URLs with actual URLs.**  Also, the geo-coordinates for some locations are examples; you should use accurate coordinates from Google Maps or a similar service.  The pricing is an estimate and can vary depending on the season and availability.  Consider using online booking platforms to get up-to-date pricing for hotels, shows, and attractions.\n'
        }
      ]
    }
  ]
})
