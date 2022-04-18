

const doWorkPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve({ success: "Sucesso na chamada do promise" });
    } else {
      reject({ error: "Erro na chamada do promise" });
    }
  }, 2000);
});

doWorkPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));

async function usingPromise() {
  try {
    // const result = await doWorkPromise();

    // const result2 = await doWorkPromise();

    // const result3 = await doWorkPromise();

    const [result, result2, result3] = await Promise.all([
      doWorkPromise(),
      doWorkPromise(),
      doWorkPromise(),
    ]);

    console.log({ result, result2, result3 });

  } catch (error) {
    console.error(error);
  }
}
usingPromise();

