# SOLITA Vaccine Exercise 2021

### This is frontend-backend-database exercise for Solita Dev Academy
### Original [Vaccine Exercise](https://github.com/solita/vaccine-exercise-2021)

## Technologies used:  

### Docker   
    - Containers for Frontend, backend and database
    - docker-compose to create network for them  
  
### Frontend:  
    - React / Typescript  
    - MaterialUI for visual flare
    - TypeORM for operating with database  
    
### Backend:  
    - NodeJS / Typescript  
    - Express  
    - n-readlines , for reading source files line by line because JSON.parse() errors without it.
### Database:  
    - PostgreSQL , currently no data persistance as using Docker's Volume caused ownership issues with folders. So there is script to populate database from source files.   


## How to make it go
    - create .env file in to the Solitavaccine folder with lines
        `DBPASSWORD=2306VaccinesDB`  
        `DBUSER=postgres`  
