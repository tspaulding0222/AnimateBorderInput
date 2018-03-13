import { AnimatedBorder } from "./AnimatedBorder";
import { TestForm } from "./TestForm";
import { ArrowFollow } from "./ArrowFollow";

var MedicalNecessityTestForm;

function init() {
  new AnimatedBorder();
  new TestForm();
  new ArrowFollow();
}

(function() {
  init();
})();