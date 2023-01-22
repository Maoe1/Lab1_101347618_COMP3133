const fs = require('fs')


//Async
console.log("START_1")

fs.createReadStream('input_countries.csv')
  .pipe()
  .on('data', (data) => {
    // Filter data for Canada
    if (data.country === 'Canada') {
      fs.appendFileSync('canada.txt', `${data.country},${data.year},${data.population}\n`);
    }
    // Filter data for United States
    if (data.country === 'United States') {
      fs.appendFileSync('usa.txt', `${data.country},${data.year},${data.population}\n`);
    }
  });



try {
    fs.unlinkSync('canada.txt');
    fs.unlinkSync('usa.txt');
  } catch (err) {
    // Do nothing - the files simply don't exist
  }

  console.log("END_1")