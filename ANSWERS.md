<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
The client's front-end server and the back-end server we use to manage and host data need help communicating between one another. Middleware is a set of processes or functions that help with this communication, and gives us more flexibility when designing our programs.

Sessions are requests sent between two devices, usually with one initiating the request and the other verifying or listening for the request. The session is later terminated, and allows for applications to implement authentication or resitrict access to certain controls or functionality based on the conditions included in the request. 

bcrypt is a package used for hashing user passwords during authentication. By running the package, we can easily implement a hash function to protect our users and create an authenticated login in our applications.

JWT are tokens used for user authentication. They are used by clients to communicating certain conditions to a server, which
would allow the client to have access to parts of the server that may normally be restricted or limited.

2.  What does bcrypt do in order to prevent attacks?
First, it hashes information passed to it, which codes it and makes it unreadable without a specific key. 

Second, it adds 'time' to the hashing process which makes it take exponentially longer for an attacker to get access to the key.  

3.  What are the three parts of the JSON Web Token?
(1) Header, (2) payload, (3) signature

The header identifies the algorthim
The payload contains the conditions or other information to be read by the server
The signature encodes the header and payload.