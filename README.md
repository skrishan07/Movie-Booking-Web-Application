

**Movie Booking Web Application**
<!-- [![Movie Booking Website](/sample/movie_booking.gif)]() -->

# Movie-Booking-WebApp
I built this web application in my sophomore year under Winter Project competition organized by AASF (programming club of the institute). At the end of the competition I secured rank 1 out of the 50+ participants.
## Technology Stack
- NodeJS
- Express
- MongoDB Atlas
- EJS templating engine
- Bootstrap and CSS


## Access
Their are two access-views of the website :
- User View

  Explore and Book Movies. View History, generate Invoice. Explore available seats and Book available ones.
  
- Admin View
    This view is protected by authentication using passport.js
    use the mentioned Username and password to access the admin view.
   >**Username**: admin
   >**Password**: admin
    
    In this view their are multiple admin-side features :
    
   - Screening Movies: View, Edit and Delete currently screening movies or Add new movies for screenings.
    
   - Manange Screen: Assign Auditorium to movies, based on available slots. Their are 4 slots for now.
    
   - Manage movies: Add new movies, update existing. Can also search and add latest movies, it utilizes    OMDB API to fetch and add new movies.

## Prototype
**Main Landing Page**
<!-- [![Movie Booking Website](/sample/images/main_page.png)]() -->
**Seat Booking Page**
<!-- [![Movie Booking Website](/sample/images/booking_page.png)]() -->
**Manage Movies Here**
<!-- [![Movie Booking Website](/sample/images/movies_page.png)]() -->
**Allot Auditorium**
<!-- [![Movie Booking Website](/sample/images/admin_page.png)]() -->
**View History and Generate Invoice**
<!-- [![Movie Booking Website](/sample/images/invoice.png)]() -->



## Installation

### Clone 
- Clone this repository to your local machine.

### Setup
- Run `npm install` to install all the packages and dependencies
- Create a .env file, add the MONGODB_API path corresponding to your MongoDB atlas account in the file.
   A .env.sample file is provided.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

