import { TweenMax } from "gsap";

(function() {
    var animatedBorder = document.querySelector(".nameInput-animatedBorderMask");
    var nameInput = document.querySelector(".nameInput-input");

    var greenBorder = document.querySelector(".nameInput-animatedBorder");
    var animatedBorderCompleteClass = "nameInput-animatedBorder--complete";

    var nameInputNumCharacters = 0;
    var characterMinLength = parseInt(nameInput.getAttribute("data-val-min-length"));

    function resetAnimatedBorder() {
        nameInputNumCharacters = 0;
        TweenMax.set(animatedBorder, {width: 0});
    }

    function animateBorderMask() {
        var animateToTotalWidth = document.querySelector(".nameInput-input").offsetWidth;
    }

    function onInputType() {
        nameInput.addEventListener("input", function() {
            nameInputNumCharacters = nameInput.value.length;
            
            animateBorderMask();
        });
    }

    function animateBorderMask() {
        var currentInputWidth = nameInput.offsetWidth;

        var ratio = (nameInputNumCharacters / characterMinLength);
        var animateRatio = ratio > 1 ? 1 : ratio;
        var animateAmount = currentInputWidth * animateRatio;

        if(animateRatio < 1) {
            breakCompleteBorder();
        }
        
        TweenMax.killAll();
        TweenMax.to(animatedBorder, 0.5, {width: animateAmount +'px', onComplete: function(){completeBorderAnimation(animateRatio)}});
    }

    function breakCompleteBorder () {
        greenBorder.classList.remove(animatedBorderCompleteClass);
    }

    function completeBorderAnimation(animateRatio) {
        console.log("complete");
        if(animateRatio >=1) {
            greenBorder.classList.add(animatedBorderCompleteClass);
        }
    }

    resetAnimatedBorder();
    onInputType();
})();