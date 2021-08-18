const fetch = require("node-fetch")
module.exports = async function(url){
 const res = await (await fetch(`https://glowml.googlefan.repl.co/api?url=${encodeURIComponent(url)}`)).text()
 if(res.includes("is not"))return "not-an-url"
 if(res.length !== 6)return "error"
 return res;
}
