# cookedin

bower install
npm install -g grunt grunt-cli
grunt

# turn on mongo server
mkdir data; cd data; mkdir db; cd ..;
mongod --dbpath data

# turn on node server
node server/server.js

