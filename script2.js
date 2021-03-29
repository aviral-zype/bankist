const checkDogs = function (dogsJulia, dogsKate) {
  dogsJuliaDup = dogsJulia.slice(1, -2);
  allDogs = dogsJuliaDup.concat(dogsKate);

  allDogs.forEach(function (ele, i, arr) {
    const str =
      ele >= 3 ? `an adult, and is ${ele} years old` : `still a puppy`;
    console.log(`Dog number ${i + 1} is ${str}`);
  });
};

juliaDogs = [3, 5, 2, 12, 7];
kateDogs = [4, 1, 15, 8, 3];

checkDogs(juliaDogs, kateDogs);
