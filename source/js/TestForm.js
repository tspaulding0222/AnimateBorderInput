class TestForm {
    constructor() {
        this.SlideInRightClass = "slide-in-right";
        this.BounceInRightClass = "bounce-in-right";
        this.jelloClass = "jello-horizontal";
        this.PulseClass = "test-form-arrow--pulse";

        this.Arrow = document.querySelector(".test-form-arrow img");
        this.ArrowContainer = document.querySelector(".test-form-arrow");
    }

    SlideInArrowFromRight() {
        this.Arrow.classList.add(this.SlideInRightClass);
    }

    BounceInArrowRight() {
        this.Arrow.classList.add(this.BounceInRightClass);
    }

    JelloAnim() {
        this.Arrow.classList.add(this.jelloClass);
    }

    PulseAnim() {
        this.ArrowContainer.classList.add(this.PulseClass);
    }
}

export { TestForm };