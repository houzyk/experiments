const ids = [];

// with promise all
const requests = ids.map(id => fetch(`https://api.github.com/users/${id}`).then(res => res.json()));

const beforePromiseAll = Date.now();

Promise.all(requests).finally(() => {
  const afterPromiseAll = Date.now();

  console.log(`Promise All Time Taken ${afterPromiseAll - beforePromiseAll}`);
});

// with loop
(async () => {
  const beforeLoop = Date.now();

  for await (const id of ids) (await fetch(`https://api.github.com/users/${id}`)).json();

  const afterLoop = Date.now();

  console.log(`Loop Time Taken ${afterLoop - beforeLoop}`);
})();
