# Technical Design Document: Online Opinion Polls Website - Umfrage
## Introduction
- **Purpose**: To provide a platform where users can create opinion polls and respondents can answer them to earn money.
- **Scope**: The system will cater to both poll creators and respondents, offering tools for poll management, response analysis, and reward distribution.
- **Definitions and Acronyms**:
  - **JWT**: JSON Web Token
  - **API**: Application Programming Interface
  - **Umfrage**: The name of the online opinion polls website

## System Overview
- **Architecture**: Monolithic
- **Technology Stack**: Next.js, MongoDB, Tailwind CSS, JavaScript, Stripe (Payment Gateway)

## User Roles and Features
### Poll Creator
- **Features**:
    - Poll Creation and Management
    - Analytics and Reporting
    - User Feedback

### Poll Respondent
- **Features**:
    - Answer Polls
    - Earn Rewards
    - Pre-qualification through Questionnaire to determine fit for specific polls

## User Authentication
- **Method**: JWT (JSON Web Tokens)

## System Architecture
- **Component Diagram**: 
- **Data Flow**:

## Detailed Design
### Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Pages**:
    - Home
    - Poll Creation
    - Dashboard
    - Poll Response
    - Pre-qualification Questionnaire

### Backend
- **Framework**: Next.js (API Routes)
- **Database**: MongoDB
- **Services**:
    - Data Validation and Sanitization
    - Real-time Updates with Sockets
    - Backup and Recovery
    - Payment Processing with Stripe

## Security Considerations
- **Rate Limiting**: Protect against abuse by limiting the number of requests per user/IP.
- **Role-Based Access Control**: Different access levels for creators and respondents.

## Performance Metrics
- **Load Time**: Ensure the website loads within 3 seconds for optimal user experience.
- **Response Time**: API responses should be within 200ms under normal load.

## Database Design
- **Schema**: MongoDB schema design for users, polls, responses, and payments.
- **Relationships**: Users linked to polls they create or respond to, payment records associated with user accounts.

## API Design
- **Endpoints**:
    - **POST /api/signup**: User registration
    - **POST /api/login**: User authentication
    - **POST /api/polls**: Create a new poll
    - **GET /api/polls**: Retrieve available polls
    - **POST /api/polls/:id/respond**: Submit poll response
    - **POST /api/qualify**: Submit pre-qualification questionnaire
    - **POST /api/payments**: Process payments via Stripe
- **Requests and Responses**: Defined with JSON format for all API communications.

## Error Handling and Logging
- **Error Handling Strategy**: Use standardized error codes and messages; graceful degradation for user-facing errors.

## Testing Strategy
- **Unit Testing**: Test individual components and API routes for correctness.
- **Tools and Frameworks**: Jest, React Testing Library, Postman for API testing.

## Deployment and Scaling
- **Strategy**: Auto-scaling and Load Balancing using cloud services.
- **Tools**: Vercel for deployment, MongoDB Atlas for database hosting, Stripe for payment processing.

## Appendix
- **Glossary**: 
  - **Poll**: A survey or questionnaire designed to collect opinions.
  - **Respondent**: A user who answers polls.
  - **Creator**: A user who creates polls.
- **References**: Documentation for Next.js, MongoDB, Tailwind CSS, JWT, and Stripe.

