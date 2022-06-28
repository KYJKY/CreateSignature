// 카카오톡 알림톡 Signature 발급
// Express, Module
const express = require("express");
const CryptoJS = require("crypto-js");

// My Setting Value
const serviceId = "String";        // 서비스 아이디(NCP 프로젝트 생성 후)
const accessKey = "String";                       // access key id (from portal or Sub Account)
const secretKey = "String";   // secret key (from portal or Sub Account)
const url = `https://sens.apigw.ntruss.com/alimtalk/v2/services/${serviceId}/messages`;	    // 풀 url
const url2 = `/alimtalk/v2/services/${serviceId}/messages`;                                 // 
const method = "POST";				    // method
const nowDate = Date.now().toString();  // 실제 시간과 5분 이상 차이날 경우 X
const timestamp = nowDate;		        // current timestamp (epoch)
const space = " ";				        // one space
const newLine = "\n";				    // new line

// Hashing
let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
hmac.update(method);
hmac.update(space);
hmac.update(url2);
hmac.update(newLine);
hmac.update(timestamp);
hmac.update(newLine);
hmac.update(accessKey);
const hash = hmac.finalize();
const signature = hash.toString(CryptoJS.enc.Base64);

// 출력
console.log(signature);