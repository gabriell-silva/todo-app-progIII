
const doWorkCallback = (callback) => {
  const randomError = Math.random() > 0.5 ? true : false;
  setTimeout(() => {
    if (randomError) {
      return callback('Erro na chamada do callback', undefined);
    }
    callback(undefined, {
      message: "Sucesso na chamada do callback",
    });
  }, 2000);
}

doWorkCallback((error, result) => {
  if (error) {
    return console.error(error);
  }
  console.log(result);
});