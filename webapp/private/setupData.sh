#!/usr/bin/env bash

echo ""
echo "[[[[[ Building reference data for shipafreight ]]]]]"

echo ""
echo "[[[[[ Dropping collections ]]]]]"
mongo localhost:3001/meteor ./removeData.js

echo ""
echo "[[[[[ Importing airports ]]]]]"
mongoimport -h localhost:3001 -d meteor --collection Airports --type csv --file ./airports.csv --headerline

echo ""
echo "[[[[[ Processing airports ]]]]]"
mongo localhost:3001/meteor ./processAirports.js

echo ""
echo "[[[[[ Importing seaports ]]]]]"
mongoimport -h localhost:3001 -d meteor --collection Seaports --type csv --file ./seaports.csv --headerline

echo ""
echo "[[[[[ Processing seaports ]]]]]"
mongo localhost:3001/meteor ./processSeaports.js
