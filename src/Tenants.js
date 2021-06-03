export const Tenants = [
    {
        id :0,
        name : "Mahesh",
        age : 28,
        phone : 8899785468,
        occupation : "Professor",
        image: './Images/1.jpg',
        place: "Hyderabad"
    },
    { 
        id : 1,
        name : "Ramesh",
        age : 35,
        phone : 6322343433,
        occupation: "Clerk",
        image: './Images/2.jpg',
        place: "Bangalore"
    },
    {
        id : 2,
        name : "Venkat",
        age : 25,
        phone : 5564374563,
        occupation: "Bank Employee",
        image: './Images/3.jpg',
        place: "Mumbai"
    },
    {
        id : 3,
        name : "Suresh",
        age : 29,
        phone :113232334,
        occupation: "Engineer",        
        image: './Images/4.jpg',
        place: "Delhi"
    },
    {
        id : 4,
        name : "Arun",
        age : 32,
        phone : 997797979,
        occupation: "CA",
        image: './Images/5.jpg',
        place: "Chennai"
    },
    {
        id : 5,
        name : "Praneeth",
        age : 22,
        phone : 123232323,
        occupation: "Software",
        image: './Images/6.jpg',
        place: "Kolkata"
    },
    {
        id : 6,
        name : "Kirti",
        age : 22,
        phone : 3131212121,
        occupation: "Tutor",
        image: './Images/7.jpg',
        place: "Bhopal"
    },
    {
        id : 7,
        name : "Swathi",
        age : 24,
        phone : 443546566,
        occupation: "Accountant",
        image: './Images/8.jpg',
        place: "Gujrat"
    },
    {
        id : 8,
        name : "Karan",
        age : 26,
        phone : 3132553543,
        occupation: "Doctor",
        image: './Images/9.jpg',
        place: "Kashmir"
    }
    
];
localStorage.setItem('data',JSON.stringify(Tenants));