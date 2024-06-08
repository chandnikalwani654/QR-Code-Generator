import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//refer documentation for below code
inquirer
  .prompt([
    //in this questions are kept and the questions are the javascript objects therefore kept inside {}
    {
        "message" : "Type in your URL:",
        "name" : "URL",

    },
  ])
  .then((answers) => {
    const url=answers.URL; 
    //genearting the qr image using qr-image package 
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));

   // Creating a txt file to save the user input using the native fs node module.
   fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
