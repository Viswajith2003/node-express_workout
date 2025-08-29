const EventEmitter=require("events");
const emitter=new EventEmitter();


emitter.on("msg",(data)=>{
    console.log(data.text);
})
emitter.on("logout",(data)=>{
    console.log(data.text);
})

emitter.emit("msg",{text:"User logged"})
emitter.emit("logout",{text:"User logged out"})