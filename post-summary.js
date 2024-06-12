const fs = require("fs");

// Define the directory containing the files
const directory = './';

// Read the contents of the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter files with names matching the pattern
  const matchingFiles = files.filter(file => file.startsWith('lh-results') && file.endsWith('.json'));

  // Iterate through matching files
  matchingFiles.forEach(file => {
    fs.readFile(directory + file, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      const results = JSON.parse(data);
      const metrics = [
        'first-contentful-paint',
        'interactive',
        'speed-index',
        'total-blocking-time',
        'largest-contentful-paint',
        'cumulative-layout-shift',
      ];

      /**
       * Returns a symbol for the score.
       * @param {number} score from 0 to 1
       */
      function evalEmoji(score) {
        if (score >= 0.9) {
          return '🟢';
        }
        if (score >= 0.5) {
          return '🟧';
        }
        return '🔺';
      }

      const rows = [];

      metrics.forEach((key) => {
        const audit = results.audits[key];
        // be safe and always push strings
        rows.push({
          Metric: audit.title,
          Time: String(audit.displayValue),
          Score: evalEmoji(audit.score)
        });
      });
      console.log(`Results for ${file}:`);
      console.table(rows);
    });
  });
});
