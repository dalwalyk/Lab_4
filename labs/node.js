const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Server Info</h1>');

  // Hostname
  res.write(`<p>Hostname: ${os.hostname()}</p>`);

  // IP Address
  const ifaces = os.networkInterfaces();
  let ipAddress = '';
  Object.keys(ifaces).forEach(ifname => {
    ifaces[ifname].forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
      }
    });
  });
  res.write(`<p>IP Address: ${ipAddress}</p>`);

  // Server uptime
  const uptime = os.uptime();
  const days = Math.floor(uptime / (24 * 60 * 60));
  const hours = Math.floor((uptime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((uptime % (60 * 60)) / 60);
  const seconds = uptime % 60;
  res.write(`<p>Server uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</p>`);

  // Total memory
  const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
  res.write(`<p>Total memory: ${totalMemory} MB</p>`);

  // Free memory
  const freeMemory = Math.round(os.freemem() / 1024 / 1024);
  res.write(`<p>Free memory: ${freeMemory} MB</p>`);

  // Number of CPUs
  const numCPUs = os.cpus().length;
  res.write(`<p>Number of CPUs: ${numCPUs}</p>`);

  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
