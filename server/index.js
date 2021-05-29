import express from 'express';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';
import cors from 'cors';

const App = express();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());