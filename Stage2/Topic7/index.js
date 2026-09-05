// REST api

// CREATE - POST
// READ - GET
// UPDATE - PUT
// DELETE - DELETE

// https://api.rezneed.com/api/customers - API request

GET -
  [
    {},
    {},
    {},
    {
      id: 4,
      name: 'John',
      surname: 'Doe',
      phone: '+994103193897',
    },
  ]; // HEADER

POST -
  {
    name: 'John',
    surname: 'Doe',
    phone: '+994103193897',
  };

PUT - // https://api.rezneed.com/api/customers
  {
    id: 4,
    name: 'John',
    surname: 'Doe',
    phone: '+994103193897',
  };

DELETE; // https://api.rezneed.com/api/customers/4
