class TestForm {
    constructor() {
        this.SlideInRightClass = "slide-in-right";
        this.BounceInRightClass = "bounce-in-right";
        this.JelloClass = "jello-horizontal";
        this.PulseClass = "test-form-arrow--pulse";
        this.VibrateClass = "vibrate";

        this.Arrow = document.querySelector(".test-form-arrow img");
        this.ArrowContainer = document.querySelector(".test-form-arrow");

        if(this.Arrow && this.ArrowContainer) {
            this.SetupButtonClicks();
        }
    }

    SetupButtonClicks() {
        this.QSelect(".SlideInRightAnim").addEventListener("click", this.SlideInArrowFromRight.bind(this));
        this.QSelect(".BounceInRightAnim").addEventListener("click", this.BounceInArrowRight.bind(this));
        this.QSelect(".JelloAnim").addEventListener("click", this.JelloAnim.bind(this));
        this.QSelect(".PulseAnim").addEventListener("click", this.PulseAnim.bind(this));
        this.QSelect(".VibrateAnim").addEventListener("click", this.VibrateAnim.bind(this));
    }

    SlideInArrowFromRight() {
        this.RemoveAllExtraClass();
        this.Arrow.classList.add(this.SlideInRightClass);
    }

    BounceInArrowRight() {
        this.RemoveAllExtraClass();
        this.Arrow.classList.add(this.BounceInRightClass);
    }

    JelloAnim() {
        this.RemoveAllExtraClass();
        this.Arrow.classList.add(this.JelloClass);
    }

    PulseAnim() {
        this.RemoveAllExtraClass();
        this.ArrowContainer.classList.add(this.PulseClass);
    }

    VibrateAnim() {
        this.RemoveAllExtraClass();
        this.Arrow.classList.add(this.VibrateClass);
    }

    RemoveAllExtraClass() {
        this.Arrow.className = "";
        this.ArrowContainer.className = "test-form-arrow";
    }

    QSelect(classString) {
        return document.querySelector(classString);
    }
}

export { TestForm };