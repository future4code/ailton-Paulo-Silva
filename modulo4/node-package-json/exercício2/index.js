let result;

process.argv[2] === "add"
  ? (result = Number(process.argv[3]) + Number(process.argv[4]))
  : false;
process.argv[2] === "sub"
  ? (result = Number(process.argv[3]) - Number(process.argv[4]))
  : false;
process.argv[2] === "mult"
  ? (result = Number(process.argv[3]) * Number(process.argv[4]))
  : false;
process.argv[2] === "div"
  ? (result = Number(process.argv[3]) / Number(process.argv[4]))
  : false;

console.log(result);
