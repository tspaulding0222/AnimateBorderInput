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

    // MedicalNecessityTestForm.SlideInArrowFromRight();
    // MedicalNecessityTestForm.BounceInArrowRight();
    MedicalNecessityTestForm.JelloAnim();
    // MedicalNecessityTestForm.PulseAnim();

  }, 2000);
})();