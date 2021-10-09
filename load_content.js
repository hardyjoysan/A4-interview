import fs from 'fs';
const path = process.argv[2];

export const getFileContents = (path) => {
    return new Promise((resolve, reject) => {
        // Check for file exists, error if not
        if (!fs.existsSync(path)) {
            reject(new Error('File does not exists'));
        }

        // Get file statitics error if not
        let stats = fs.statSync(path);
        if (!stats) reject(new Error('Error trying to get stats'));
        
        //console.log(stats);

        // Check file size for empty or not
        if (stats && stats.size > 0) {

            // Read file contents and return, error if not
            fs.readFile(path, "utf8", (err, buffer) => {
                if (err) {
                    reject(new Error('Error reading file contents'));
                }
                resolve(buffer);
            })

        } else {
            reject(new Error('File exists but there is no content'));
        }
    });
}

getFileContents(path).then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});