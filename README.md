# BovControl

## This project use
    - SOLID principles
    - Typescript
    - Express
    - Mongoose
    - Uuid
    - Dotenv

# How to run
    - Create .env file
        - MONGO_USER=root
        - MONGO_PASS=123456
        - MONGO_DATABASE=bov
    - Run yarn / npm install
    - Run yarn build / npm run build
    - Run docker-compose up -d

# How to use
    - To use as PROD
        - yarn start / npm run start
    - To use as DEV
        - yarn dev / npm run dev

# Routes
## Farmer
    - POST /farmer
        - To Create new Farmer
        - params {
            name: string,
            email: string,
            password: string
        }
    - GET /farmer
        - To Get all Farmers
    - GET /farmer/:public_code
        - To Get Farmer by public_code
    - Delete /farmer/delete/public_code
        - To Delete Farmer by public_code

## Farm
    - Post /farm
        - params {
            name: string,
                - ex: Home sweet home farm
            owner_id: string
                - it is a Farmer public_code
                - ex: afe71e57-4511-4c9c-87be-6f83e77e6f2c
            distance_factory: number
        }
    - Get /farm
        - To Get all Farms
    - Get /farm/:id
        - To Get Farm by id
    - Delete /farm/delete/:id
        - To Delete Farm by id

## Milk
    - Post /milk
        - To Create milk day
        - params {
            amount: number
                - amount of milk
            farmer_code: string
                - farmer public_code
            day: number
                - day to insert milk
                - you can insert more than 1 register by day
            month: number
            year: number
        }
    - Get /milk
        - To Get all registers of milk
    - Get /milk/media/:farmer_public_code/:month/:year
        - To Get the media and total of milk production by month and year
    - Get /milk/price/month/:farmer_public_code/:month/:year
        - To get the milk price of the month
    - Get /milk/price/year/:farmer_public_code/:year
        - Get an array with all month of the year with the price