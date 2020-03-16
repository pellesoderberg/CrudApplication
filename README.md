# CrudApplication

Application that perform basic Create, Read, Delete operations on database using NodeJS, Express, MongoDB

## Running the application

The application was built on Docker version 2.2.0.4.
No other tools required.

To run the application enter command:

`docker-compose up --build`

To run application tests enter command:

`docker-compose -f docker-compose.test.yml up --build`

## Features

The application can get all restaurants from database, get specific restaurant based on name, get sorted list of restaurants based on rating. It is possible to add new restaurants and delete restaurants based on id.

### Show restaurants

- **URL**<br/> /api/restaurants

- **Method**<br/> GET

* **URL Params**

  **Required:** <br/> None

- **Data Params**<br/> None

### Show specific restaurant

- **URL**<br/> /api/restaurants/:name

- **Method**<br/> GET

* **URL Params**

  **Required:** <br/> name=[String]

### Show sorted list of restaurants

- **URL**<br/> /api/restaurants/rating

- **Method**<br/> GET

* **URL Params**

  **Required:** <br/> None

### Create new restaurant

- **URL**<br/> /api/restaurants

- **Method**<br/> Post

* **URL Params**

  **Required:** <br/> None

### Delete restaurant

- **URL**<br/> /api/restaurants/:id

- **Method**<br/> DELETE

* **URL Params**

  **Required:** <br/> id=[integer]

## Design Decisions

- Used docker for the server and database which creates a homogeneous environment and in turn simplifies development and testing.

## Improvements

- The test process could be improved by using one docker-compose file. It could also built for continuous integration.

- One improvement would be to add an update-feature to the application.

- To check the type of input data to the database would increase security and usability.

- One improvement would be to store one parameter for opening hours and one parameter for closing hours in the database. That would enable the application to easily check if a restaurant is open at the current time.
