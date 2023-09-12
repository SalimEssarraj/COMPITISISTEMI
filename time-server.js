const net = require('net');

const port = process.argv[2];



function getCurrentDateTime() {
  const now = new Date();
  const anno = now.getFullYear();
  const mese = String(now.getMonth() + 1).padStart(2, '0');
  const giorno = String(now.getDate()).padStart(2, '0');
  const ora = String(now.getHours()).padStart(2, '0');
  const minuti = String(now.getMinutes()).padStart(2, '0');

  return `${anno}-${mese}-${giorno} ${ora}:${minuti}`;
}


const server = net.createServer((socket) => {
  const currentTime = getCurrentDateTime();
  socket.end(currentTime + '\n');
});


server.listen(port, () => {
    console.log(`TCP server is listening on port ${port}`);
  });
