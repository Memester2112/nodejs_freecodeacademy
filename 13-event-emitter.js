const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name)=>{
    console.log(`data recieved ${name}`)
});

customEmitter.on('response', ()=>{
    console.log(`Logic 2 `)
});


customEmitter.emit('response', 'ASingh');