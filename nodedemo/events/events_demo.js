// import events library 
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const countHandler = (count) => console.log(count)

// Register event handlers/listeners with event 
eventEmitter.on('count', countHandler) // first handler/listener
eventEmitter.on('count', (count) => console.log(`Count = ${count}`))  // second handler 

// Raise event 
eventEmitter.emit('count', 1)

eventEmitter.removeListener('count', countHandler)

// Raise event
eventEmitter.emit('count', 10)
