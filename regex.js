let re, str;
/*
//Literal Characters
re = /hello/;     //Matches case sensitve
str = "hello";

re = /hello/i;    //Matches case insensitve
str = "Hello";

//Metacharacter Symbols
//Must start with
re = /^h/i;
str = "hello";

//Must ends with
re = / world$/i;
str = "hello world";

//Must begin and end with
re = /^hello$/i;
str = "hello";

//Matches any ONE character
re = /h.llo/i;
str = "hxllo";

//Matches any character 0 or more times
re = /h*llo/i;
str = "hXYZllo";

//Optional characeter
re = /gre?a?y/i;
str = "gray"; // "grey" | "gry"

//Escape characeter
re = /gre?a?y\?/i;
str = "gray?";

// Brackets [] - Character Sets
//Must be an 'a' or 'e'
re = /gr[ae]y/i;
str = "gray";

//Must be an 'G' or 'F'
re = /[GF]ray/;
str = "Gray"; //"Fray"

//Match anything except a G or F : insiede brackets means NOT
re = /[^GF]ray/;
str = "fray"; //"Fray"

//Match any uppercase letter
re = /[A-Z]ray/;
str = "Rray"; //"Fray"

//Match any lowercase letter
re = /[a-z]ray/;
str = "rray"; //"fray"

//Match any letter
re = /[A-Za-z]ray/;
str = "Gray"; //"gray"

//Match any digit
re = /[0-9]ray/;
str = "1ray"; //"8ray"

//Braces {} - Quantifiers
re = /Hel{2}o/i;  //Must occur exactly {m} amount of times
str = "Hello world"; 

re = /Hel{2,4}o/i;  //Must occur exactly {m} amount of times
str = "Helllo world"; 

re = /Hel{2,}o/i;  //Must occur at least {m} times
str = "Helllllllllllllo world"; 

//Parentesis () - Grouping
//Must occur exactly {m} amount of times.
re = /[0-9]x{3}/;   //The 'x' must be 3 times
str = "3x3x3x3xxx";

re = /([0-9]x){3}/;  //The '3x' must be 3 times
str = "ANYTHING3x3x3xANYTHING";

re = /^([0-9]x){3}$/;  //The '3x' must be 3 times strting^ and ending$
str = "3x3x3x";

//Shorthand Character Classes
re = /\w/;  //Word character - alphanumeric or _
str = "3x3x3x";

re = /\w+/;  //+ equals One or More Word character - alphanumeric or _
str = "3x3x3x";

re = /\W/;  //NOon-Word character - alphanumeric or _
str = " ?!@#";

re = /\d/;  //Matches any ONE digit
str = "43534";

re = /\d+/;  //Matches any many digit one or more times
str = "43534";

re = /\D/;  //Matches any non-digit
str = "asdsadassad";

re = /\s/;  //Matches whitespaces char
str = " ";

re = /\S/;  //Matches non-whitespaces char
str = "dsfsdf";

re = /Hell\b/i;  //Word boundary
str = "hello welcome to Hell";

//Assertions
re = /x(?=y)/; //MAtch x only if followed by y
str = "xy";
*/
re = /x(?!y)/; //MAtch x only if not followed by y
str = "xZy";


//LogResults
function reTest(re, str) {
  console.group("re.exec");
  const result = re.exec(str);
  console.log(result);
  console.groupEnd();

  console.group("re.test");
  if (re.test(str))
    console.log(`${str} matches ${re.source}`);
  else
    console.log(`${str} does NOT match ${re.source}`);
  console.groupEnd();
}

reTest(re, str);