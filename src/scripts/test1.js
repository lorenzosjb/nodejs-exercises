function sym(args, rest) {
    console.log(args, rest);


    /*
    let { first, others } = args;
  
    let elems = [ ... new Set(args.flat(Infinity)) ];
    console.log(first);
    console.log(others);
    
    let diff = elems.filter((x) => {
      console.log(args[0]);
      //if (args[0].find(y => y === x)) {
      //  return false;
      //} 
      return true;
    }) 
    return diff;
    */
}
  
  sym([1, 2, 3], [5, 2, 1, 4]);