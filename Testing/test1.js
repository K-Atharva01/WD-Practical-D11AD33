const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('customEvent', (data) => {
 console.log('Custom event data:', data);
});

emitter.emit('customEvent', "Helooowww");
