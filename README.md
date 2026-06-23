### Progressive Portfolio Website
A dnyamic and creative way to leverage experience and skills in softwware development.

### Tech-Stack
MongoDB
ExpressJS
ReactJS
NodeJS

<author>
    <h3>geloxh</h3>
</author>

### Project Structure
```
    progressive-portfolio/
    ├── backend-portfolio/
    │   ├── Middleware/        # Functions that run between a request & response
    |   |   ├── Auth
    |   |   ├── ErrorHandler
    |   |   └── Validate
    |   |   
    │   ├── Models/             # Defines database schemas
    |   |   ├── Message
    |   |   ├── Project
    |   |   └── Skill
    |   |
    │   ├── Routes/         # Defines APIs endpoints and connects them to controllers
    |   |   ├── Auth
    |   |   ├── Contact
    |   |   └── Projects
    |   |
    │   ├── Services/            # Business logic that's reusable across controllers
    |   |   ├── AuthService
    |   |   ├── ContactService
    |   |   ├── EmailService
    |   |   └── ProjectService
    |   |
    |   ├── server       # The entry point of the app
    |   |
    |   |
    ├── frontend-portfolio/
    │   ├── public/
    |   |   
    │   ├── src/
    |   |   ├── Pages/
    |   |   |   ├── AdminDashboard
    |   |   |   ├── AdminLogin
    |   |   |   └── HomePage
    |   |   |
    |   |   ├── App
    |   |   └── Main
    
```