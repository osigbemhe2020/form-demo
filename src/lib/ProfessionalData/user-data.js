const Users = [
  {
    id: 1,
    firstname: "Daniel",
    surname: "Okoro",
    job: "Plumber",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit Lorem ipsum dolor sit amet,",
    services : ["Furniture Upholstery", "Kitchen Cabinet","Aluminum Windows","Security Doors"],
    portfolio: [
      {
        title: "Furniture Upholstery",
        photo: "/Images/furniture.jpeg", // ✅ string path
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        title: "Kitchen Cabinet",
        photo: "/Images/kitchen.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        title: "Aluminum Windows",
        photo: "/Images/windows.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        title: "Security Doors",
        photo: "/Images/security.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    projectP : "short term",
    earnings: [
      { total_earnings: "10000" },
      { monthly_earnings: "5000" },
      { pending: "2500" },
    ],
  },
];

export default Users;
