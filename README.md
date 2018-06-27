# Scrabble_Validator

This app is currently in development. Once functional it will allow a user to take a picture of a set of Scrabble Tiles from their smartphone and have the program return a message if they have extra/missing tiles or a complete Scrabble set. This can be especially useful for Scrabble tournaments where many sets are used or hand-me-downs, and tiles can occasionally get mixed up in other sets. 

The message returned to the user will have complete information: it will tell how many of each letter are missing/extra or if the set is complete. It will thus go well beyond merely counting total tiles. 

At the time of writing (Jun 27 2018) the validation.js file is fully functional and, given a data string of tile letters, returns an exact message of what is missing/extra. 

The roadblock has been finding a smart image parser that can correctly convert an image of letters to an accurate data string. While the validation.js file has been coded to correct some mistakes, such as when the program interpret L as '1' or 'I', other mistakes such as ignoring a tile entirely or interpreting an H as '4 T' are more difficult to correct. 

Once an acceptable image parser has been developed or found, it is then a matter of wiring up an external api where a picture taken can automatically return a text string that is then parsed in this app's backend. 
Ideally, the way this app is intended to work with a user is the following:

1) User takes a picture of a set of Scrabble tiles
2) The picture is automatically routed to an external api with an image parser or, alternatively, its own image parser on the backend. 
3) The image parser converts it to a text string that is then processed by validation.js
4) validation.js turns the string into an interpolated return message that tells the user what tile(s) are extra or missing or validates the set as complete. (This programming step is complete although it may require refactoring depending on how the image parser behaves)
5) User receives the return message. 

Additional functionality can also be added later: it might also be fascinating and useful for the validator to look at a game in progress and validate the words played as legitimate scrabble words, for example. 

This can be a very useful app for Scrabble players with additional development of an image parser and connection to an api. 