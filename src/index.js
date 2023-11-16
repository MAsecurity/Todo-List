//Create a class and a constructor , as well as a an array to hold those objects
//Create a dialog with the specific input values needed for a Todo object
//Add those objects into the array.
//Keep things from application logic seperate from DOM related stuff
import { listen } from "./functions/listener";
import { getRenderDefault } from "./functions/renderDefault";
(function deploy(){
  getRenderDefault();
  listen();
})();
