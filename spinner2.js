const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']

let delay = 100;
for (let i of chars) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay);
  delay += 200;
};