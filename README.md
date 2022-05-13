# FreeCodeCamp_Js

The repository includes five programs I wrote while working on FreeCodeCamp's **javaScript Algorithms and Data Structures** certification.
These include: 

## Palindrome Checker
A palindrome is a word or sentence that is spelled the same way both forward and backward, ignoring punctuation, case and spacing.
This program includes a function that returns **true** if the given string is a palindrome. Otherwise, it returns **false**

## Roman Numeral Converter
The program comprises of a function that converts the given number into a roman numeral.
All roman numeral answers are provided in upper case.

## Ceasars Cipher
The Caesars Cipher is also known as the **shift cipher**. In a shift cipher, the meanings of letters are shifted by some set amount.
In this program is a function which takes **ROT13** encoded string as input and returns a decoded string. 
In the ROT13 cipher, the values of the letters are shifted by 13 places. Thus A=>N, B=>O and so on.

## Telephone Number validator
Includes a function that returns **true** if the passed string looks like a valid US phone number. 
Numbers should follow any of the format below: 
555-555-5555 <br>
(555)555-5555 <br>
(555) 555-5555 <br>
555 555 5555 <br>
5555555555 <br>
1 555 555 5555 <br>
**NB:** The number '5' has been used just to describe the format, it may be replaced with other numbers. However, if the country code is provided as in the last number, it
should always be 1.

The program uses regex to validate the phone number.

## Cash Register
Includes a cash register drawer function **checkCashRegister()** that accepts purchase price as the first arguemnt **(price)**, payment as the second argument **(cash)**,
and cash-in-drawer **(cid)** as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function always returns an object with a status key and a change key.

Returns {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Returns {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, returns {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

