# soda-machine



To install the soda machine application and to run the applications, please follow below steps:

git clone https://github.com/surendar07/soda-machine.git

To run the server app,
 Go to application dirrectory where it is cloned and go to server folder
 cd sodamachine-server
 Run below command to start the spring boot application
./mvnw spring-boot:run
Now the Spring boot app will be started and you can run below urls with request body to check the response in Postman

GET:
http://localhost:8080/coin/coinInventory

POST:
http://localhost:8080/coin/insertCoin
Body:application/Json
{"value":"25"}

POST:
http://localhost:8080/coin/deleteCoin
Body:application/Json
{"value":"25"}


POST:
http://localhost:8080/soda/updateSodaPurchaseHistory
Body:application/json
{"name":"Sprite"}


To run the client, 
cd sodamachine-client

and run below commands to install npm and start the server

npm install && npm start

If npm is already installed and running Angular client CLI , use below commands

ng build and ng server to run the client app



