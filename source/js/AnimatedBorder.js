import { TweenMax } from "gsap";

class AnimatedBorder {
    constructor() {
        this.AnimatedBorderElement = document.querySelector(".nameInput-animatedBorderMask");
        this.NameInput = document.querySelector(".nameInput-input");

        if(this.AnimatedBorderElement && this.NameInput) {
            this.GreenBorder = document.querySelector(".nameInput-animatedBorder");
            this.AnimatedBorderCompleteClass = "nameInput-animatedBorder--complete";
    
            this.NameInputNumCharacters = 0;
            this.CharacterMinLength = parseInt(this.NameInput.getAttribute("data-val-min-length"));
    
            this.resetAnimatedBorder();
            this.onInputType();
        } 
    }

    resetAnimatedBorder() {
        this.NameInputNumCharacters = 0;
        TweenMax.set(this.AnimatedBorderElement, {width: 0});
    }

    onInputType() {
        var that = this;
        this.NameInput.addEventListener("input", function() {
            that.NameInputNumCharacters = this.value.length;
            that.animateBorderMask();
        });
    }

    animateBorderMask() {
        var that = this;

        var currentInputWidth = this.NameInput.offsetWidth;

        var ratio = (this.NameInputNumCharacters / this.CharacterMinLength);
        var animateRatio = ratio > 1 ? 1 : ratio;
        var animateAmount = currentInputWidth * animateRatio;

        if(animateRatio < 1) {
            this.breakCompleteBorder();
        }
        
        TweenMax.killAll();
        TweenMax.to(this.AnimatedBorderElement, 0.5, {width: animateAmount +'px', onComplete: function(){that.completeBorderAnimation(animateRatio)}});
    }

    breakCompleteBorder () {
        this.GreenBorder.classList.remove(this.AnimatedBorderCompleteClass);
    }

    completeBorderAnimation(animateRatio) {
        console.log("complete");
        if(animateRatio >=1) {
            this.GreenBorder.classList.add(this.AnimatedBorderCompleteClass);
        }
    }
}

export { AnimatedBorder };