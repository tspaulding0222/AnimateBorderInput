import { AnimatedBorder } from "./AnimatedBorder";
import { TestForm } from "./TestForm";

var MedicalNecessityTestForm;

function init() {
  new AnimatedBorder();
  MedicalNecessityTestForm = new TestForm();
}

(function() {
  init();

  window.setTimeout(function() {
    MedicalNecessityTestForm.SlideInArrowFromRight();
  }, 2000);
})();