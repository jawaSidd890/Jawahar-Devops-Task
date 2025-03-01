Create a Project Directory:
mkdir travel-app
cd travel-app
Initialize the Node.js Project
npm init -y
Install the express package:
npm install express
Create the Node.js Application
vi server.js
Add Static Files (CSS)
mkdir public
Inside the public folder, create a file named fonts .css
Run the Application
node server.js
Access the Application:Flight app
Open your browser and go to http://localhost:3000. You should see the travel-themed homepage with a search form and offers section
Deploy the app using Docker
Create a Dockerfile:
Build the Docker Image:
Run the following command to build the Docker image
docker build -t travel-app .
Check the status of your containers
docker ps -a
Run the Docker Container:
Start a container from the image and map port 3000 in the container to port 49160
docker run -p 49160:3000 travel-app
 
