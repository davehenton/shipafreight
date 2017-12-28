#!/usr/bin/env bash

echo ""
echo "[[[[[ Building reference data for shipafreight ]]]]]"

echo ""
echo "[[[[[ Importing airports ]]]]]"
mongoimport --host cluster0-shard-00-00-rdywu.mongodb.net:27017,cluster0-shard-00-01-rdywu.mongodb.net:27017,cluster0-shard-00-02-rdywu.mongodb.net:27017 --authenticationDatabase admin --db shipafreight --ssl --username admin --password Cdjuices1 --collection Airports --type csv --drop --file ./airports.csv --headerline

echo ""
echo "[[[[[ Processing airports ]]]]]"
mongo "mongodb://cluster0-shard-00-00-rdywu.mongodb.net:27017,cluster0-shard-00-01-rdywu.mongodb.net:27017,cluster0-shard-00-02-rdywu.mongodb.net:27017/shipafreight?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username admin --password Cdjuices1 ./processAirports.js

echo ""
echo "[[[[[ Importing seaports ]]]]]"
mongoimport --host cluster0-shard-00-00-rdywu.mongodb.net:27017,cluster0-shard-00-01-rdywu.mongodb.net:27017,cluster0-shard-00-02-rdywu.mongodb.net:27017 --authenticationDatabase admin --db shipafreight --ssl --username admin --password Cdjuices1 --collection Seaports --type csv --drop --file ./seaports.csv --headerline

echo ""
echo "[[[[[ Processing seaports ]]]]]"
mongo "mongodb://cluster0-shard-00-00-rdywu.mongodb.net:27017,cluster0-shard-00-01-rdywu.mongodb.net:27017,cluster0-shard-00-02-rdywu.mongodb.net:27017/shipafreight?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username admin --password Cdjuices1 ./processSeaports.js
