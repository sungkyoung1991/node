var express = require('express');

var favicon = require('serve-favicon');

var app=express();
app.use(favicon(_dirname+'/public/favicon.ico'));
