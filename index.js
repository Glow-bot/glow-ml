const fetch = require("node-fetch")
module.exports = async function(url){
 const res = await (await fetch(`https://glow.ml/api?url=${encodeURIComponent(url)}`)).text()
 if(res.includes("is not"))return "not-an-url"
 return res;
}
