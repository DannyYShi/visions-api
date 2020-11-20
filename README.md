# Visions (server)

This is the backend code for Visions, a website template for an online professional photography store or portfolio. 

**Link to Live App:** https://visions-iota.vercel.app/
**Link to Client Repo:** https://github.com/danny-shi/visions

## API Documentation
### Lists Endpoints 
### ▸ `GET /api/shop`
Returns an array of objects of each item in the database representing the items available to be purchased. 

**Example**
```JSON
[
    {
        "item_id": 1,
        "item_name": "Mountain",
        "img_file": "mountain.jpg",
        "item_price": 35,
        "item_description": "A picture of a mountain."
    },
    {
        "item_id": 2,
        "item_name": "Ocean",
        "img_file": "ocean.jpg",
        "item_price": 35,
        "item_description": "The seaside view outside of our AirBnb."
    },
    {
        "item_id": 3,
        "item_name": "Woman",
        "img_file": "woman.jpg",
        "item_price": 35,
        "item_description": "Portrait of a woman passing by on the street."
    },
    {
        "item_id": 4,
        "item_name": "Waterfall",
        "img_file": "waterfall.jpg",
        "item_price": 35,
        "item_description": "Hidden waterfall we discovered on a hike."
    },
    {
        "item_id": 5,
        "item_name": "Stones",
        "img_file": "stones.jpg",
        "item_price": 35,
        "item_description": "A stone tower by a river."
    }
]
```

### Cards Endpoints
### ▸ `GET /api/shop/:item_id`
Returns an object of a particular item in the database by the `item_id` assigned to it. 

**Example**
```JSON
{
    "item_id": 3,
    "item_name": "Woman",
    "img_file": "woman.jpg",
    "item_price": 35,
    "item_description": "Portrait of a woman passing by on the street."
}
```

## Technology Stack

* **Express** for handling API requests
* **Node** for interacting with the file system
* **PostgreSQL** for the database 
* **Knex.js** for interfacing with the **PostgreSQL** database
* **Postgrator** for database migration
* **Heroku** for deploying the database
