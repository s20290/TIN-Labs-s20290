// const filename = "D:\\pjatk\\3rd year\\5thSemester\\TIN\\labs\\Lab7"
const filename = "./Lab7/7b.js"
// const filename = ".\\sup.txt" 
const { watch } = require('fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 20000);

(async () => {
  try {
    const watcher = watch(filename, { signal });
    for await (const event of watcher)
      console.log(event);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})();