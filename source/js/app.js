import { AnimatedBorder } from "./AnimatedBorder";
import { TestForm } from "./TestForm";

var MedicalNecessityTestForm;

function init() {
  new AnimatedBorder();
  new TestForm();
}

(function() {
  init();
})();