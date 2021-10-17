const urlEncode = document.getElementById('input_urlencode');
const urlOutputEncode = document.getElementById('output_urlencode');
const urlDecode = document.getElementById('input_urldecode');
const urlOutputDecode = document.getElementById('output_urldecode');
const base64Encode = document.getElementById('input_base64encode');
const base64OutputEncode = document.getElementById('output_base64encode');
const base64Decode = document.getElementById('input_base64decode');
const base64OutputDecode = document.getElementById('output_base64decode');
const htmlEncode = document.getElementById('input_htmlencode');
const htmlOutputEncode = document.getElementById('output_htmlencode');
const htmlDecode = document.getElementById('input_htmldecode');
const htmlOutputDecode = document.getElementById('output_htmldecode');
const md5Encode = document.getElementById('input_md5generate');
const md5OutputEncode = document.getElementById('output_md5generate');
const md5Decode = document.getElementById('input_md5decrypt');
const md5OutputDecode = document.getElementById('output_md5decrypt');
const sha1Encode = document.getElementById('input_sha1generate');
const sha1OutputEncode = document.getElementById('output_sha1generate');
const sha256Encode = document.getElementById('input_sha256generate');
const sha256OutputEncode = document.getElementById('output_sha256generate');
const sha512Encode = document.getElementById('input_sha512generate');
const sha512OutputEncode = document.getElementById('output_sha512generate');
const plainJSON = document.getElementById('input_json');
const prettyJSON = document.getElementById('output_json');


urlEncode.addEventListener('input', function (e) {
    encodedValue = encodeURIComponent(e.target.value);
    urlOutputEncode.innerHTML = encodedValue;
});


urlDecode.addEventListener('input', function (e) {
    decodedValue = decodeURIComponent(e.target.value);
    urlOutputDecode.innerHTML = decodedValue;
});


base64Encode.addEventListener('input', function (e) {
    encodedValue = btoa(e.target.value);
    base64OutputEncode.innerHTML = encodedValue;
});


base64Decode.addEventListener('input', function (e) {
    decodedValue = atob(e.target.value);
    base64OutputDecode.innerHTML = decodedValue;
});


htmlEncode.addEventListener('input', function (e) {
    var textArea = document.createElement('textarea');
    textArea.innerText = e.target.value;
    htmlOutputEncode.innerText = textArea.innerHTML;
});


htmlDecode.addEventListener('input', function (e) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = e.target.value;
    htmlOutputDecode.innerText = textArea.value;
});


md5Encode.addEventListener('input', function (e) {
    var md5Hash = CryptoJS.MD5(e.target.value);
    md5OutputEncode.innerHTML = md5Hash;
});


md5Decode.addEventListener('input', async function (e) {
    var hash = e.target.value;
    // To bypass Browser's default CORS restriction,
    // I've used Public CORS-Anywhere server deployed to Heroku.
    var url = "https://powerful-headland-44735.herokuapp.com/https://md5decrypt.net/en/Api/api.php?hash=" + hash + "&hash_type=md5&email=palesob641@fada55.com&code=da2e8c971a0f5d7a"
    let response = await fetch(url);
    if (response.ok) {
        let text = await response.text();
        md5OutputDecode.innerHTML = text;
    } else {
        alert("Network Error");
    }
});


sha1Encode.addEventListener('input', function (e) {
    var sha1Hash = CryptoJS.SHA1(e.target.value);
    sha1OutputEncode.innerHTML = sha1Hash;
});


sha256Encode.addEventListener('input', function (e) {
    var sha256Hash = CryptoJS.SHA256(e.target.value);
    sha256OutputEncode.innerHTML = sha256Hash;
});


sha512Encode.addEventListener('input', function (e) {
    var sha512Hash = CryptoJS.SHA512(e.target.value);
    sha512OutputEncode.innerHTML = sha512Hash;
});


plainJSON.addEventListener('input', function (e) {
    var obj = JSON.parse(e.target.value);
    var prettifyJSON = JSON.stringify(obj, undefined, 4);
    prettyJSON.innerHTML = prettifyJSON;
});