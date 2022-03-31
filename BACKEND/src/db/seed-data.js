// import img1 from ("../img/botella-de-aceite-jpg");

function getSeedUsers() {
  return [
    {
      firstName: "Jordan",
      lastName: "Peterson",
      email: "woga@wi.lu",
      password: "jordan-super-password",
      speaks: ["english", "javascript"],
    },
    {
      firstName: "Margaret",
      lastName: "Watkins",
      email: "edde@kodbi.eh",
      password: "margaret-super-password",
      speaks: ["catalan", "spanish"],
    },
    {
      firstName: "Mable",
      lastName: "Schneider",
      email: "ba@wuf.ws",
      password: "mable-super-password",
      speaks: ["german", "english"],
    },
    {
      firstName: "Alta",
      lastName: "Harris",
      email: "cuk@boeli.gn",
      password: "alta-super-password",
      speaks: ["english", "spanish"],
    },
    {
      firstName: "Darrell",
      lastName: "Wilkerson",
      email: "ecdescu@riwluzhok.pf",
      password: "darrell-super-password",
      speaks: ["english", "javascript"],
    },
    {
      firstName: "Ryan",
      lastName: "McGuire",
      email: "beta@houboem.py",
      password: "ryan-super-password",
      speaks: ["english", "spanish"],
    },
  ];
}

function getSeedProducts() {
  return [
    {
      id: "65d6b269-209b-50ac-a566-ca6a334aa6f0",
      title: "Nike Runner 2000",
      price: 88,
      img: "https://res.cloudinary.com/dacibwste/image/upload/v1648719203/cld-sample.jpg",
      shortDescription:
        "Ipsum sint consequat culpa adipisicing occaecat aliquip aliquip sit labore aute.",
      longDescription:
        "Occaecat nostrud ipsum excepteur adipisicing dolor. Deserunt pariatur commodo duis Lorem laboris irure dolor dolor proident aute pariatur. Nostrud consectetur labore anim est deserunt esse est nostrud ipsum velit incididunt aliqua anim. Occaecat exercitation culpa proident aute aliqua exercitation nulla cillum velit nisi reprehenderit Lorem sunt.",
      isFavorite: false,
      createdAt: "2021-04-23T09:12:24.2424+02",
      updatedAt: "2021-04-23T09:12:24.2424+02",
      unitsInStock: 5,
      quantity: 0,
      votes: {
        upVotes: {
          upperLimit: 10,
          currentValue: 0,
        },
        downVotes: {
          lowerLimit: 10,
          currentValue: 0,
        },
      },
      author: {
        id: "9cb107d1-cc36-5399-a8b2-0ad65daa5d36",
        firstName: "Clyde",
        lastName: "Tucker",
        email: "mepsukjid@riz.jm",
      },
    },
  ];
}

module.exports = {
  getSeedUsers: getSeedUsers,
  getSeedProducts: getSeedProducts,
};
