// let som = function (){
//     return "I am testing arrow...";
// }


//function keyword
// let som = () => {
//     return "I am testing arrow - 1...";
// }

//return keyword the {curly braces}
//let som = () => "I am testing arrow - 1...";

//parameters
//let som = (val) => "I am testing arrow - 1..."+val;

//parameters (parantheses)
//let som = val => "I am testing arrow - 1..."+val;

let decrypt = (encrypted) => {
    let key= 'c937366d-c15b-4f28-8fee-b1cb3467ef6d';
    let valres = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)
    return "Result : "+valres;
}

console.log(decrypt('U2FsdGVkX1+GSZ2AZ1tzDuXWQX6H7adYZf7d9qG4rfq4dvFsZBttxSBQatQFFvKHjA/joo8S0OSHFElybK8S8I5g5TuAdylK0TZZje0rb6dyT4ZRfg4uK3knBUMEwJE0r3RdMRPdCKd2ybmCIPOdaZAib7dnxYILu9nDHctoIFbg44ReMGZwVQi6DojDml8vSOvUdt60VUTcME5Mp5E4i3RCgTHVMAhaFUbPC/JqfoxdrKPoeSEFaB1WYGB2QwT6LFNCi10xec4In4BiTWebkq5/62Jrdk5b8UTD2mtERbf7KLaaMt9fPUM4XVHQ54M1ebrdooVmj4lIAvBMNn4ynMtiORtaSE/0z19xoDZVWylTFrW4h8ET7qDhGF/pJ4B+O3TIyfDYLau4aDzartMj8Z+85ucatLVXbBuJi4kvRvGjRoZE7iqVQBIIcofwW0S/qO0ZBN3OZauJD5+NX+S9HVFCJtcOBXFg+NHndcoqitpSOlleCgt9BZ/3zyUgyp9Ovz2EbrykDC8B3UmxX6dknJbvT0oKPcfw6Mt+VvLlW73H2jOG2NSDwNyKUiUUGe+d6TFSgmpiy9Dc8+BuT2Phvw2sC/b9qvDHm0QNdDrfwFMUXpNgM5vD2sa55TGmviI+ciQ7LmVWn8KkkSBdrXwLVQ=='));
console.log(decrypt('947a3dfe41e895e65fe7532b25b89a416db8106f9f0d76d5c8da7f95646310cf'));
