const mongoose = require('mongoose')
const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/bus-Ticket-Software'
mongoose.connect(DB_URI).then(() => console.log('DB connected')).catch((err) => console.log(err));

const Buses = require('./Models/Bus');
const busRoutes = [
    {
        start: 'Coimbatore',
        end: 'Vadodara',
        price: 2200,
        startTime: new Date('2023-12-11T09:00:00Z'),
        endTime: new Date('2023-12-11T20:00:00Z')
    },
    {
        start: 'Ranchi',
        end: 'Shimla',
        price: 1800,
        startTime: new Date('2023-12-12T10:00:00Z'),
        endTime: new Date('2023-12-12T22:00:00Z')
    },
    {
        start: 'Durgapur',
        end: 'Warangal',
        price: 1900,
        startTime: new Date('2023-12-13T08:30:00Z'),
        endTime: new Date('2023-12-13T19:30:00Z')
    },
    {
        start: 'Jamshedpur',
        end: 'Guwahati',
        price: 2100,
        startTime: new Date('2023-12-14T07:45:00Z'),
        endTime: new Date('2023-12-14T17:45:00Z')
    },
    {
        start: 'Raipur',
        end: 'Allahabad',
        price: 2000,
        startTime: new Date('2023-12-15T08:15:00Z'),
        endTime: new Date('2023-12-15T20:15:00Z')
    },
    {
        start: 'Jhansi',
        end: 'Agartala',
        price: 2400,
        startTime: new Date('2023-12-16T09:30:00Z'),
        endTime: new Date('2023-12-16T21:30:00Z')
    },
    {
        start: 'Gangtok',
        end: 'Amravati',
        price: 2000,
        startTime: new Date('2023-12-17T10:45:00Z'),
        endTime: new Date('2023-12-17T22:45:00Z')
    },
    {
        start: 'Siliguri',
        end: 'Bikaner',
        price: 2300,
        startTime: new Date('2023-12-18T08:00:00Z'),
        endTime: new Date('2023-12-18T18:00:00Z')
    },
    {
        start: 'Gwalior',
        end: 'Bhilai',
        price: 1900,
        startTime: new Date('2023-12-19T07:30:00Z'),
        endTime: new Date('2023-12-19T17:30:00Z')
    },
    {
        start: 'Moradabad',
        end: 'Jamnagar',
        price: 2200,
        startTime: new Date('2023-12-20T08:00:00Z'),
        endTime: new Date('2023-12-20T20:00:00Z')
    },
    {
        start: 'Kochi',
        end: 'Rajkot',
        price: 2100,
        startTime: new Date('2023-12-21T09:30:00Z'),
        endTime: new Date('2023-12-21T21:30:00Z')
    },
    {
        start: 'Visakhapatnam',
        end: 'Varanasi',
        price: 1900,
        startTime: new Date('2023-12-22T10:15:00Z'),
        endTime: new Date('2023-12-22T22:15:00Z')
    },
    {
        start: 'Nagpur',
        end: 'Patna',
        price: 2000,
        startTime: new Date('2023-12-23T08:45:00Z'),
        endTime: new Date('2023-12-23T18:45:00Z')
    },
    {
        start: 'Agra',
        end: 'Kanpur',
        price: 1800,
        startTime: new Date('2023-12-24T07:30:00Z'),
        endTime: new Date('2023-12-24T17:30:00Z')
    },
    {
        start: 'Indore',
        end: 'Cuttack',
        price: 2300,
        startTime: new Date('2023-12-25T08:00:00Z'),
        endTime: new Date('2023-12-25T20:00:00Z')
    },
    {
        start: 'Bhubaneswar',
        end: 'Jodhpur',
        price: 2400,
        startTime: new Date('2023-12-26T10:30:00Z'),
        endTime: new Date('2023-12-26T22:30:00Z')
    },
    {
        start: 'Chandigarh',
        end: 'Dehradun',
        price: 2000,
        startTime: new Date('2023-12-27T09:15:00Z'),
        endTime: new Date('2023-12-27T21:15:00Z')
    },
    {
        start: 'Kota',
        end: 'Gorakhpur',
        price: 2200,
        startTime: new Date('2023-12-28T08:30:00Z'),
        endTime: new Date('2023-12-28T20:30:00Z')
    },
    {
        start: 'Srinagar',
        end: 'Dhanbad',
        price: 2100,
        startTime: new Date('2023-12-29T07:45:00Z'),
        endTime: new Date('2023-12-29T17:45:00Z')
    },
    {
        start: 'Bareilly',
        end: 'Mangalore',
        price: 2300,
        startTime: new Date('2023-12-30T08:00:00Z'),
        endTime: new Date('2023-12-30T18:00:00Z')
    }
];



async function seedRoutes() {
    for(let i = 0; i < busRoutes.length; i++) {
        const ele = busRoutes[i];
        const bus = new Buses(ele);
        await bus.save();
    }
    console.log('seeded');
}
seedRoutes();

