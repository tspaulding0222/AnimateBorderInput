class TestForm {
    constructor() {
        this.SlideInRightClass = "slide-in-right";
        this.Arrow = document.querySelector(".test-form-arrow img");
    }

    SlideInArrowFromRight() {
        this.Arrow.classList.add(this.SlideInRightClass);
    }
}

export { TestForm };