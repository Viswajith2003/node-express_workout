// const EventEmitter=require("events");
// const emitter=new EventEmitter();


// emitter.on("msg",(data)=>{
//     console.log(data.text);
// })
// emitter.on("logout",(data)=>{
//     console.log(data.text);
// })

// emitter.emit("msg",{text:"User logged"})
// emitter.emit("logout",{text:"User logged out"})



const EventEmitter=require("events")
const emittor=new EventEmitter;

emittor.on("greet",()=>{
    console.log("hey,Welcome to node.js");
})
emittor.emit('greet');
