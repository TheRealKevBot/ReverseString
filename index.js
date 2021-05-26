// Reverse the provided string. 

function reverseString(str) {
    let string = str.split('')
    string.reverse()
    var str = string.join('')
    return str;
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("Howdy"));
  console.log(reverseString("Greetings from Earth"));
  console.log(reverseString("Hello World!"));
  console.log(reverseString("To be or not to be"));
  console.log(reverseString("I'm going on an adventure!"));
  console.log(reverseString("If life were predictable it would cease to be life, and be without flavor."));
  console.log(reverseString("Give a man a fish and you feed him for a day; teach a man to fish and he'll eat forever."));


  // Some Palindromes
  console.log(reverseString("madam"));
  console.log(reverseString("kayak"));
  console.log(reverseString("radar"));
  console.log(reverseString("racecar"));
  console.log(reverseString("tacocat"));
  console.log(reverseString("solos"));
  console.log(reverseString("rotor"));
  console.log(reverseString("tenet"));
  console.log(reverseString("Red rum, sir, is murder"));
  console.log(reverseString("Was it a cat I saw"));
  console.log(reverseString("No lemon, no melon"));
  console.log(reverseString("Step on no pets"));
  console.log(reverseString("A nut for a jar of tuna"));
  console.log(reverseString("Are we not pure? No, sir! Panama’s moody Noriega brags. It is garbage! Irony dooms a man—a prisoner up to new era"));
  console.log(reverseString("Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned"));
  console.log(reverseString("Murder for a jar of red rum"));