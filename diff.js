let fs = require('fs'); //file system is required to read the two files

const diff = (file1, file2) =>{
    //read files line by line
    let f1lines = fs.readFileSync(file1, "utf-8").split("\n")
    let f2lines = fs.readFileSync(file2, "utf-8").split("\n")

    let result = "";

    //loop through file 2 lines to compare it with file 1 lines.
    for(let i = 0; i < f2lines.length; i++){
        if(f1lines[i] !== f2lines[i]){
            //append to result
            result += `- ${f1lines[i]} \n`  
            result += `+ ${f2lines[i]} \n`  
         }
    }

    //Save differences to a file
    fs.writeFile('output.txt', result, err => {
        if (err) throw err;
        console.log('Output saved in output.txt')
    })

}

//Command Line
if(process.argv.length === 4){
    diff(process.argv[2], process.argv[3]);
    console.log("Output is Saved in output.txt")
}else{
    console.log("Wrong Syntaxx \n. Usage: node diff.js file1.txt file2.txt");
    process.exit();
}
