const products = [
  {
    name: "BadASS Biker Shorts",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634223419/clothes/badASS%20biker%20shorts/etsy1_ev196l.jpg",

    description:
      "The BadASS biker shorts are all about feeling fantASStic and looking badASS. Simple, sporty, fun and versatile. From strutting in the street to dancing at a party, so comfy you're not gonna want to take them off, but someone else might..Material: 0,5 mm latex sheeting",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "At Your Service Apron",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634223378/clothes/At%20Your%20Service%20Apron/Alps_1_141_of_362_h08yuv.jpg",

    description:
      "...At your service! From a light dusting to mopping the floors, this outfit will help you get all the jobs done! Inspired by classic maid attire, this apron dress is playful yet sexy bringing some innocence back into everyone's fantasies... At home or at the party everyone will be asking for you!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Basic Bear",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634222073/clothes/Basic%20Bear/Alps_1_119_of_362_copia_prycnq.jpg",

    description:
      "Basic doesn't have to be boring! It can't be all frills and ruffles, sometimes you need to release your inner basic bitch... and it's ok. Just you, wrapped in a piece of rubber... what more to ask for? A perfect beginner-friendly item, the Basic Bear Top is the ultimate crop top: it features a square neckline and trim details on armhole and neck. If you don't know where to start, going back to basics is always a good choice.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Black Ruff",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634223144/clothes/Black%20Ruff/Alps_1_117_of_362_mugbjs.jpg",

    description:
      "Feeling Ruff? This Ruff Choker is the perfect accessory to add an Elizabethan flare to every outfit. Worn by itself or with any other item from our collection, it adds a bit of drama to everyone's wardrobe! From the ballroom to the boudoir, an accessory for every occasion.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Body Count Bodysuit",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634222282/clothes/body%20count%20bodysuit/etsy4_vy9p5c.jpg",

    description:
      "Let the bodies hit the floor! Feeling this good should be illegal... The Body Count Bodysuit is designed to make you feel as powerful as your favourite Superhero. The zip up front makes it easy to transform at a moment's notice: no one will be able to escape your sexiness!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Cashing Checks",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634222699/clothes/Cashing%20checks/1_gdjsjs.jpg",

    description:
      "Forget Daddy's credit card, you're cashing your own checks now! Inspired by power suits skirts, the Cashing Checks skirt will bring you to the top of the corporate ladder or make you the boss of every party! High waisted, with a straight fit and a front slit, this skirt is another classic... From the office to the bedroom, people will listen when you tell them what to do.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Eat Me Shorts",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634220079/clothes/Eat%20me%20shorts/6_qoupmh.jpg",

    description:
      "Dinner is served... Bon Appétit! A favourite from our first collections, these shorts need no introduction! Booty cut, high waisted with a zipper that runs from front to back, we made these thinking about everyone that wants to feel empowered and is not afraid of making heads turn. Feel yourself and feel your body!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Frivolous Guy Garter",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634218529/clothes/Frivolous%20Guy%20Garter/Alps_1_129_of_362_copia_dns5wk.jpg",

    description:
      "I'm just a Simple Guy! For every individual who enjoys simple pleasures, vintage beauty and timeless seduction, this garter embodies the fascination for lingerie at its core. Sometimes less is more, this garter is simple yet effective when it comes to feeling sexy and making jaws drop.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Frivolous Guy Stockings",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634222963/clothes/Frivolous%20Guy%20Stockings/Alps_1_108_of_362_ufcexf.jpg",

    description:
      "I'm just a Simple Guy! For every individual who enjoys simple pleasures, vintage beauty and timeless seduction, these stockings embody the fascination for lingerie at its core. Sometimes less is more, these stockings are simple yet effective when it comes to feeling sexy and making jaws drop.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Gloves",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634221206/clothes/Gloves/Alps_1_262_of_362_uo8anl.jpg",

    description:
      "Give 'em the Finger...less Opera Gloves! Accessories can make or break one outfit, this is why we have you sorted! Whether you have the royal ball at 8pm and a shift at the dungeon at 9pm or you don't want to compromise between being a classy lady or a metal head, the Fingerless Opera Gloves bring every outfit to the next level!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Isabel Bow Top",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634220641/clothes/Isabel%20Bow%20Top/1-1_o7zx0p.jpg",

    description:
      "Make them Bow! Strong, Sporty, Sexy and feminine, the Isabel Bow Top will have ready you for action in every occasion. It is comfortable to wear and goes with everything, a perfect item for first time latex wearers and experienced latex lovers alike. Get ready to feel unstoppable!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Ruff",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634221641/clothes/Pruff/Alps_1_150_of_362_ypswhh.jpg",

    description:
      "Feeling Ruff? This Ruff Choker is the perfect accessory to add an Elizabethan flare to every outfit. Worn by itself or with any other item from our collection, it adds a bit of drama to everyone's wardrobe! From the ballroom to the boudoir, an accessory for every occasion.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Rubberspice Dress",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634221746/clothes/Rubbersprice%20dress/3_gwavbf.jpg",

    description:
      "If you wanna be my lover you gotta get in some rubber! Spice up your life with the Rubber Spice Dress, an homage to everything we love about the 90's and 00's! Backless, strappy and slick, perfect for releasing your inner party animal this dress is the essence of GRL PWR.",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "Sleeping Booty Shorts",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634221465/clothes/Sleeping%20Booty%20Shorts/8_drlduz.jpg",

    description:
      "Don't be waiting for Prince Charming...The Sleeping Booty Shorts are straight out of a fairy tale! Delicate and playful, yet sexy, they're perfect for those days in which you want to feel like a Princess or, better, the Queen... High waisted, booty cut with a pleated trim, they fit like a dream!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
  {
    name: "That Skirt",
    image:
      "https://res.cloudinary.com/drpdq0pui/image/upload/v1634221938/clothes/That%20skirt/etsy2_lvpnfv.jpg",

    description:
      "Don't be waiting for Prince Charming...The Sleeping Booty Shorts are straight out of a fairy tale! Delicate and playful, yet sexy, they're perfect for those days in which you want to feel like a Princess or, better, the Queen... High waisted, booty cut with a pleated trim, they fit like a dream!",
    brand: "Schraubstock",
    category: "Cold Wave",
    price: 19.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    carousel: [],
  },
];

module.exports = products;
