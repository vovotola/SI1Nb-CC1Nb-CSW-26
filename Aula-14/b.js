for (let i = 0; i <= 10; i++)
  if (i % 2 === 0) {
    console.log(i);
  }
console.log(Math.PI)
console.log(Math.random(0, 1000))

function éprimo(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(éprimo(7)) 
