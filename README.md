# Diff (UNIX Command) Algorithm with Javascript

This algorithm seeks to achieve what the diff command in UNIX does. The diff utility compares the contents of file1 and file2 and write to a file (output.txt) a list of changes necessary to convert file1 into file2. If the two files have no differences then no output is produced.

For example, diff command can used to find the differences between file1.txt and file2.txt and the result is saved in output.txt.
When a line is in file1.txt and not in file2 then the line is preceeded with a '-' sign. The line replacing it in file2.txt is preceeded with a '+' sign in the output.txt file.

## Installation

The package manager [npm](https://www.npmjs.com) will be used install.

## Prerequisites
Ensure you have [node.js](https://nodejs.org/en/download) installed on your PC.

Ensure [npm](https://www.npmjs.com/package/npm) is installed. If not installed, run:
```python
npm i npm
```

## How to install
```bash
#clone the project
git clone https://github.com/Benson306/diff_algorithm

#Get into project directory
cd diff_algorithm

#install the requirements
npm install
```

## Usage

```python
#run the program
node diff.js file1.txt file.txt 


# The algorithm takes file1.txt and file2.txt to generate output.txt .
# Output.txt contains the differences in file1.txt and file2.txt
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)