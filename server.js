const express = require("express");
const nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const axios = require('axios');
require("dotenv").config();
const db = require('./config');


// middleware
app.use(express.json());
app.use(cors());

var jsonParser = bodyParser.json();


let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jeroldtablo@gmail.com',
        pass: 'vipxygnnmbtwchqg'
      }
    });

transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/banner-form", jsonParser, async function (req, res) {
 
 
 const g_response = req.body.obj.token;

//  console.log(g_response);

 try {

  const secret_key = "6LfeM_AlAAAAACJOuvSmlWuOPMmpVx86OSe0t9z4";   
  const res456 = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${g_response}`);
  
  
    if (res456.data.success) {   

      const bad_words123 = ["google",
          "Google",
          "sex",
          "porn",
          "virus",
          "tatoos",
          "adult",
          "massage",
          "parlors",
          "casino",
          "xvideos",
          "tiktok",
          "lottery",
          "viagra",
          "pills",
          "Act now",
          "Action",
          "Apply now",
          "Apply online",
          "Buy",
          "Buy direct",
          "Call",
          "Call now",
          "Click here",
          "Clearance",
          "Click here",
          "Do it today",
          "Don’t delete",
          "Drastically reduced",
          "Exclusive deal",
          "Expire",
          "Get",
          "Get it now",
          "Get started now",
          "Important information regarding",
          "Instant",
          "Limited time",
          "New customers only",
          "Now only",
          "Offer expires",
          "Once in a lifetime",
          "Order now",
          "Please read",
          "Special promotion",
          "Take action",
          "This won’t last",
          "Urgent",
          "While stocks last",
          "100%",
          "All-new",
          "Bargain",
          "Best price",
          "Bonus",
          "Email marketing",
          "Free",
          "For instant access",
          "Free gift",
          "Free trial",
          "Have you been turned down?",
          "Great offer",
          "Join millions of Americans",
          "Incredible deal",
          "Prize",
          "Satisfaction guaranteed",
          "Will not believe your eyes",
          "As seen on",
          "Click here",
          "Click below",
          "Deal",
          "Direct email",
          "Direct marketing",
          "Do it today",
          "Order now",
          "Order today",
          "Unlimited",
          "What are you waiting for?",
          "Visit our website",
          "Acceptance",
          "Access",
          "Avoid bankruptcy",
          "Boss",
          "Cancel",
          "Card accepted",
          "Certified",
          "Cheap",
          "Compare",
          "Compare rates",
          "Congratulations",
          "Credit card offers",
          "Cures",
          "Dear ",
          "Dear friend",
          "Drastically reduced",
          "Easy terms",
          "Free grant money",
          "Free hosting",
          "Free info",
          "Free membership",
          "Friend",
          "Get out of debt",
          "Giving away",
          "Guarantee",
          "Guaranteed",
          "Have you been turned down?",
          "Hello",
          "Information you requested",
          "Join millions",
          "No age restrictions",
          "No catch",
          "No experience",
          "No obligation",
          "No purchase necessary",
          "No questions asked",
          "No strings attached",
          "Offer",
          "Opportunity",
          "Save big",
          "Winner",
          "Winning",
          "Won",
          "You are a winner!",
          "You’ve been selected!",
      ];

      let name = req.body.obj.name;
      let phone = req.body.obj.phone;
      let email = req.body.obj.email;
      let message = req.body.obj.message;

      
      let stringIncludesFruit456 = bad_words123.some(fruit => message.includes(fruit));
      let stringIncludesFruit789 = bad_words123.some(fruit => name.includes(fruit));    


      if (stringIncludesFruit456 === false && stringIncludesFruit789 === false) {


          
        let insert = "INSERT INTO banner_form(name, phone, email, message) VALUES ('" + name + "', '" + phone + "', '" + email + "', '" + message + "' )";

         // execute the insert statement
         db.query(insert);
        
         // disconnect from database
        //  db.end();
        
        
         let mailOptions = {
           from: 'jeroldtablo@gmail.com',
           to: 'jeroldjeis06@gmail.com, jerold@tablonoir.com',
           subject: `Banner Form`,
           'html': '<table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:650px; background-color:#fff; border: 1px groove;">' +
           '<thead>' +
           '<tr height="100">' +  
           '<th colspan="4" style="background-color:#242424; color:#fff; font-size:25px; border: 5px groove;">' +
           '<img src="https://abiteoffrance.com/marquis-elegance/img/Marquis_Elegance_Assets-01.png" alt="logo" title="logo" style="height:auto; width:50%; max-width:50%;" />' +      
           '</th>' + 
           '</tr>' +
               
           '</thead>' +
           '<tbody>' + 
           '<th colspan="4" style="background-color:#242424; font-family: Roboto-Regular; color:#fff; font-size:20px; border: 5px groove;"> Banner Form </th>' + 
           '<tr align="left" height="50">' +
                  '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Name</th>' +
                  '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + name + '</td>' +      
            '</tr>' +
        
            '<tr align="left" height="50">' +
            '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Phone</th>' +
            '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + phone + '</td>' +      
            '</tr>' +  
            
            '<tr align="left" height="50">' +
            '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Email</th>' +
            '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + email + '</td>' +      
            '</tr>' +  
        
            '<tr align="left" height="50">' +
            '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Comment</th>' +
            '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + message + '</td>' +      
            '</tr>' +    
           '</tbody>' +
         '</table>'
         };
        
         transporter.sendMail(mailOptions, function (err, data) {
           if (err) {
             res.json({
               status: "fail",
             });
           } else {
             console.log("== Banner Form Message Sent ==");
             res.json({
               status: "success",
             });
           }
         });    
         
        }
      }
     
  
      res.send("1 record inserted");
   
    } catch(error) {
    console.log(error);
    
    return res.status(500).json({
    success:false,
    message: "Error verifying token"
    })
  }

});

app.post("/agent-form", jsonParser, async function (req, res) {  

 const g_response = req.body.obj.token;


 try {

    const secret_key = "6LfeM_AlAAAAACJOuvSmlWuOPMmpVx86OSe0t9z4";   
    const res124 = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${g_response}`);
  
  
    if (res124.data.success) {   

      const bad_words = ["google",
          "Google",
          "sex",
          "porn",
          "virus",
          "tatoos",
          "adult",
          "massage",
          "parlors",
          "casino",
          "xvideos",
          "tiktok",
          "lottery",
          "viagra",
          "pills",
          "Act now",
          "Action",
          "Apply now",
          "Apply online",
          "Buy",
          "Buy direct",
          "Call",
          "Call now",
          "Click here",
          "Clearance",
          "Click here",
          "Do it today",
          "Don’t delete",
          "Drastically reduced",
          "Exclusive deal",
          "Expire",
          "Get",
          "Get it now",
          "Get started now",
          "Important information regarding",
          "Instant",
          "Limited time",
          "New customers only",
          "Now only",
          "Offer expires",
          "Once in a lifetime",
          "Order now",
          "Please read",
          "Special promotion",
          "Take action",
          "This won’t last",
          "Urgent",
          "While stocks last",
          "100%",
          "All-new",
          "Bargain",
          "Best price",
          "Bonus",
          "Email marketing",
          "Free",
          "For instant access",
          "Free gift",
          "Free trial",
          "Have you been turned down?",
          "Great offer",
          "Join millions of Americans",
          "Incredible deal",
          "Prize",
          "Satisfaction guaranteed",
          "Will not believe your eyes",
          "As seen on",
          "Click here",
          "Click below",
          "Deal",
          "Direct email",
          "Direct marketing",
          "Do it today",
          "Order now",
          "Order today",
          "Unlimited",
          "What are you waiting for?",
          "Visit our website",
          "Acceptance",
          "Access",
          "Avoid bankruptcy",
          "Boss",
          "Cancel",
          "Card accepted",
          "Certified",
          "Cheap",
          "Compare",
          "Compare rates",
          "Congratulations",
          "Credit card offers",
          "Cures",
          "Dear ",
          "Dear friend",
          "Drastically reduced",
          "Easy terms",
          "Free grant money",
          "Free hosting",
          "Free info",
          "Free membership",
          "Friend",
          "Get out of debt",
          "Giving away",
          "Guarantee",
          "Guaranteed",
          "Have you been turned down?",
          "Hello",
          "Information you requested",
          "Join millions",
          "No age restrictions",
          "No catch",
          "No experience",
          "No obligation",
          "No purchase necessary",
          "No questions asked",
          "No strings attached",
          "Offer",
          "Opportunity",
          "Save big",
          "Winner",
          "Winning",
          "Won",
          "You are a winner!",
          "You’ve been selected!",
      ];



      let firstname = req.body.obj.firstname;
      let lastname = req.body.obj.lastname;
      let email = req.body.obj.email;
      let phone = req.body.obj.phone; 
      let designation = req.body.obj.designation;
      let selected_city = req.body.obj.selected_city;
      let selected_country = req.body.obj.selected_country;
      let selected_nationality = req.body.obj.selected_nationality;
      let address = req.body.obj.address;

      let countries = req.body.obj.countries;     

      let countries1 = countries;
      let nationalities1 = countries;

      Object.keys(countries1).forEach(function(key) {
        
        if((countries1[key].id) == selected_country ){

         country1 = countries1[key].name;
        //  phonecode1 = countries1[key].phonecode;

        }
      })

      Object.keys(nationalities1).forEach(function(key) {
        
        if((nationalities1[key].id) == selected_nationality ){

         nation1 = nationalities1[key].name;

        }
      })

      // const phone2 = phonecode1 + phone;
      // let phone2 = phonecode1 + phone;

      var stringIncludesFruit = bad_words.some(fruit => firstname.includes(fruit));
      var stringIncludesFruit123 = bad_words.some(fruit => lastname.includes(fruit));

      if (stringIncludesFruit === false && stringIncludesFruit123 === false) {

        let insert = "INSERT INTO agent_form(first_name, last_name, email, phone, destination, city, address, nationality, country) VALUES ('" + firstname + "', '" + lastname + "', '" + email + "', '" + phone + "', '" + designation + "', '" + selected_city + "', '" + address + "', '" + country1 + "', '" + nation1 + "' )";

         // execute the insert statement
         db.query(insert);
        
         

         let mailOptions = {
          from: 'jeroldtablo@gmail.com',
          to: 'jeroldjeis06@gmail.com, jerold@tablonoir.com',
          subject: `Agent Form`,
          'html': '<table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:650px; background-color:#fff; border: 1px groove;">' +
          '<thead>' +
          '<tr height="100">' +  
          '<th colspan="4" style="background-color:#242424; color:#fff; font-size:25px; border: 5px groove;">' +
          '<img src="https://abiteoffrance.com/marquis-elegance/img/Marquis_Elegance_Assets-01.png" alt="logo" title="logo" style="height:auto; width:50%; max-width:50%;" />' +      
          '</th>' + 
          '</tr>' +
              
          '</thead>' +
          '<tbody>' + 
          '<th colspan="4" style="background-color:#242424; font-family: Roboto-Regular; color:#fff; font-size:20px; border: 5px groove;"> Agent Form </th>' + 
          '<tr align="left" height="50">' +
                 '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Name</th>' +
                 '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + firstname + ' ' + lastname +'</td>' +      
           '</tr>' +

           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Email</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + email + '</td>' +      
           '</tr>' +  
       
           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Phone</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + phone + '</td>' +      
           '</tr>' +           
           
       
           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Designation</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + designation + '</td>' +      
           '</tr>' + 
           
           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">City</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + selected_city + '</td>' +      
           '</tr>' + 

           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Address</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + address + '</td>' +      
           '</tr>' + 

           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Country</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + country1 + '</td>' +      
           '</tr>' + 

           '<tr align="left" height="50">' +
           '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Nationality</th>' +
           '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + nation1 + '</td>' +      
           '</tr>' + 

          '</tbody>' +
        '</table>'
        };
       
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            res.json({
              status: "fail",
            });
          } else {
            console.log("== Agent form Message Sent ==");
            res.json({
              status: "success",
            });
          }
        });    
        
        // disconnect from database
        //db.end();

      }
    }
   

    res.send("1 record inserted");


    } catch(error) {

    console.log(error);
    
    return res.status(500).json({
    success:false,
    message: "Error verifying token"
    })
  }

});


app.post("/brochure-form", jsonParser, async function (req, res) {
 
 
  const g_response = req.body.obj.token;
 
 //  console.log(g_response);
 
  try {
 
   const secret_key = "6LfeM_AlAAAAACJOuvSmlWuOPMmpVx86OSe0t9z4";   
   const res456 = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${g_response}`);
   
   
     if (res456.data.success) {   
 
       const bad_words123 = ["google",
           "Google",
           "sex",
           "porn",
           "virus",
           "tatoos",
           "adult",
           "massage",
           "parlors",
           "casino",
           "xvideos",
           "tiktok",
           "lottery",
           "viagra",
           "pills",
           "Act now",
           "Action",
           "Apply now",
           "Apply online",
           "Buy",
           "Buy direct",
           "Call",
           "Call now",
           "Click here",
           "Clearance",
           "Click here",
           "Do it today",
           "Don’t delete",
           "Drastically reduced",
           "Exclusive deal",
           "Expire",
           "Get",
           "Get it now",
           "Get started now",
           "Important information regarding",
           "Instant",
           "Limited time",
           "New customers only",
           "Now only",
           "Offer expires",
           "Once in a lifetime",
           "Order now",
           "Please read",
           "Special promotion",
           "Take action",
           "This won’t last",
           "Urgent",
           "While stocks last",
           "100%",
           "All-new",
           "Bargain",
           "Best price",
           "Bonus",
           "Email marketing",
           "Free",
           "For instant access",
           "Free gift",
           "Free trial",
           "Have you been turned down?",
           "Great offer",
           "Join millions of Americans",
           "Incredible deal",
           "Prize",
           "Satisfaction guaranteed",
           "Will not believe your eyes",
           "As seen on",
           "Click here",
           "Click below",
           "Deal",
           "Direct email",
           "Direct marketing",
           "Do it today",
           "Order now",
           "Order today",
           "Unlimited",
           "What are you waiting for?",
           "Visit our website",
           "Acceptance",
           "Access",
           "Avoid bankruptcy",
           "Boss",
           "Cancel",
           "Card accepted",
           "Certified",
           "Cheap",
           "Compare",
           "Compare rates",
           "Congratulations",
           "Credit card offers",
           "Cures",
           "Dear ",
           "Dear friend",
           "Drastically reduced",
           "Easy terms",
           "Free grant money",
           "Free hosting",
           "Free info",
           "Free membership",
           "Friend",
           "Get out of debt",
           "Giving away",
           "Guarantee",
           "Guaranteed",
           "Have you been turned down?",
           "Hello",
           "Information you requested",
           "Join millions",
           "No age restrictions",
           "No catch",
           "No experience",
           "No obligation",
           "No purchase necessary",
           "No questions asked",
           "No strings attached",
           "Offer",
           "Opportunity",
           "Save big",
           "Winner",
           "Winning",
           "Won",
           "You are a winner!",
           "You’ve been selected!",
       ];
 
       let name = req.body.obj.name;
       let phone = req.body.obj.phone;      
 
       
      //  let stringIncludesFruit456 = bad_words123.some(fruit => phone.includes(fruit));
       let stringIncludesFruit789 = bad_words123.some(fruit => name.includes(fruit));    
 
 
       if (stringIncludesFruit789 === false) {
 
 
           
         let insert = "INSERT INTO broucher_form(name, phone) VALUES ('" + name + "', '" + phone + "')";
 
          // execute the insert statement
          db.query(insert);
         
          // disconnect from database
         //  db.end();
         
         
          let mailOptions = {
            from: 'jeroldtablo@gmail.com',
            to: 'jeroldjeis06@gmail.com, jerold@tablonoir.com',
            subject: `Broucher Form`,
            'html': '<table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:650px; background-color:#fff; border: 1px groove;">' +
            '<thead>' +
            '<tr height="100">' +  
            '<th colspan="4" style="background-color:#242424; color:#fff; font-size:25px; border: 5px groove;">' +
            '<img src="https://abiteoffrance.com/marquis-elegance/img/Marquis_Elegance_Assets-01.png" alt="logo" title="logo" style="height:auto; width:50%; max-width:50%;" />' +      
            '</th>' + 
            '</tr>' +
                
            '</thead>' +
            '<tbody>' + 
            '<th colspan="4" style="background-color:#242424; font-family: Roboto-Regular; color:#fff; font-size:20px; border: 5px groove;"> Broucher Form </th>' + 
            '<tr align="left" height="50">' +
                   '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Name</th>' +
                   '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + name + '</td>' +      
             '</tr>' +
         
             '<tr align="left" height="50">' +
             '<th style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">Phone</th>' +
             '<td style="font-size:15px; border: 1px groove; padding-left: 15px; font-family: Roboto-Regular;">' + phone + '</td>' +      
             '</tr>' +               
                
            '</tbody>' +
          '</table>'
          };
         
          transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
              res.json({
                status: "fail",
              });
            } else {
              console.log("== Broucher Form Message Sent ==");
              res.json({
                status: "success",
              });
            }
          });    
          
         }
       }
      
   
       res.send("1 record inserted");
    
     } catch(error) {
     console.log(error);
     
     return res.status(500).json({
     success:false,
     message: "Error verifying token"
     })
   }
 
 });

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});