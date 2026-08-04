function convertHTML(str) { // if you wnat to print tag symbole in html then you can't directly print it <p>5 < 10</p> you cant do this 
  let result = '' // so question is that user enter symbole and your functtion should provide it entity 
  for(let char of str) {
    if(char === "&") {
      result += "&amp;"
    } else if(char === "<") {
      result += "&lt;"
    } else if(char === ">") {
      result += "&gt;"
    } else if(char === '"') {
      result += "&quot;"
    } else if(char === "'"){
      result += "&apos;"
    }
    else {
      result += char
    }
  }
  return result 
}



/*
| Normal Character | HTML Entity |
| ---------------- | ----------- |
| `&`              | `&amp;`     |
| `<`              | `&lt;`      |
| `>`              | `&gt;`      |
| `"`              | `&quot;`    |
| `'`              | `&apos;`    |

*/
