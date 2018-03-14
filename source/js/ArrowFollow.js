import { TweenMax } from "gsap";

class ArrowFollow {
    constructor() {
        this.inputBox = document.querySelector(".input-container-location");
        this.arrow = document.querySelector(".arrow");

        this.inputBoxStartingY = this.inputBox.getBoundingClientRect().top;
        this.arrowStartingY = this.arrow.getBoundingClientRect().top;

        if (this.inputBox && this.arrow) {
            this.initArrowAnimation();
        }
    }

    setArrowHorizontalStart() {
        var inputBoxBoundingRect = this.inputBox.getBoundingClientRect();
        var inputBoxLeft = inputBoxBoundingRect.left;
        var inputBoxHalfWidth = this.inputBox.offsetWidth / 2;
        var arrowWidth = this.arrow.offsetWidth;
        var halfPoint = inputBoxHalfWidth - arrowWidth / 2;
        var leftPosition = inputBoxLeft + halfPoint;

        TweenMax.set(this.arrow, { x: leftPosition });
    }

    getDistanceBetweenInputAndCenterScreen() {
        var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var inputYLocation = this.inputBox.getBoundingClientRect().top;

        var diff = inputYLocation - windowHeight / 2;
        var diffResult = diff >= 0 ? diff : 0;

        return diffResult;
    }

    getDistanceBetweenInputAndArrow() {
        var inputYLocation = this.inputBox.getBoundingClientRect().top;
        var arrowYLocation = this.arrow.getBoundingClientRect().bottom;

        var diff = inputYLocation - arrowYLocation;
        var diffResult = diff >= 0 ? diff : 0;
        return diffResult;
    }

    animateArrowTowardsInput() {
        const distDiff = this.getDistanceBetweenInputAndArrow();
        const startAnimChangeDistance = 100;

        if (distDiff <= 0) {
            window.removeEventListener("scroll", this.animateFunction);
            return;
        }

        if (distDiff <= startAnimChangeDistance) {
            var animateRatio = 1 - (distDiff/startAnimChangeDistance);
            var rotation = 90 * animateRatio;
            console.log(rotation);

            TweenMax.set(this.arrow, { y: window.pageYOffset, rotation: rotation }); //TODO Rotation needs work
        } else {
            TweenMax.set(this.arrow, { y: window.pageYOffset });
        }

        //TODO: calculate X animation
        //TODO: calculate rotation
    }

    onScroll() {
        this.animateFunction = this.animateArrowTowardsInput.bind(this);
        window.addEventListener("scroll", this.animateFunction);
    }

    initArrowAnimation() {
        this.setArrowHorizontalStart();

        this.onScroll();
    }
}

export { ArrowFollow };
