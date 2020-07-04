const express = require('express');
const businessRoutes = express.Router();
const mongoose = require("mongoose");
const Business = require('./business.model');


businessRoutes.post("/add", (req, res, next) => {
        console.log("calling post API piyu post :"+ req.body.person_name);
        const business = new Business(req.body);
        console.log(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business is added successfully'});
        })
        .catch(err =>{
            res.status(400).send("unable to save to database");
        });
    });

    businessRoutes.route('/').get(function (req, res){
        Business.find(function(err, business){
            if(err)
              console.log(err);
              else{
                  res.json(business);
              }
        });
    });

    businessRoutes.route('/edit/:id').get(function (req,res){
        let id = req.param.id;
        Business.findById(id, function(err, business){
            res.json(businessRoutes);
        });
    });

    businessRoutes.route('/update/:id').post(function (req,res){
        Business.findById(req.params.id, function(err, business){
            if(!business)
              res.status(404).send("data is not found");
            else{
                business.person_name = req.body.person_name;
                business.business_name = req.body.business_name;
                business.business_nic_number = req.body.business_nic_number;

                business.save().then(business => {
                    res.json('Update Complete');
                })
                    .catch(err => {
                        res.status(400).send('unable to update database');
                    });
            }
        });
    });


    businessRoutes.route('/delete/:id').get(function (req,res){
        Business.findByIdAndRemove({_id:req.params.id}, function(err,business){
            if(err)res.json(err);
            else res.json('Successfully removed');           
        });
    });

    module.exports = businessRoutes;