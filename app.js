const notificationBell = document.getElementById('notification-bell')
const notificationMessage = document.getElementById('notification-dropdown')
const overlay = document.getElementById('background-overlay')
const navigationBar = document.getElementsByClassName('navigation-bar')
const displayMenu = document.getElementById('display-menu')
const dropdownMenu = document.getElementById('dropdown-menu')
const closePopupBtn = document.getElementById('close-offer-popup')
const offerPopup = document.getElementById('plans-offer')
const setupGuideSteps = document.getElementById('setup-guide-steps')

const siblings = element => [].slice.call(element.parentNode.children)

const stepOne = document.getElementById('step-one')
let target = siblings(stepOne)[1]
console.log(target)
// const stepTwo = document.getElementById('step-two')
// const stepThree = document.getElementById('step-three')
// const stepFour = document.getElementById('step-four')
// const stepFive = document.getElementById('step-five')
const stepOneHeaderText = siblings(stepOne)[0].querySelector('.steps-header-text')
const stepTwoHeaderText = siblings(stepOne)[1].querySelector('.steps-header-text-closed')
const stepThreeHeaderText = siblings(stepOne)[2].querySelector('.steps-header-text-closed')
const stepFourHeaderText = siblings(stepOne)[3].querySelector('.steps-header-text-closed')
const stepFiveHeaderText = siblings(stepOne)[4].querySelector('.steps-header-text-closed')
const stepOneSubTextAndButton = siblings(stepOne)[0].querySelector('.steps-subtext-and-btn')
const stepTwoSubTextAndButton = siblings(stepOne)[1].querySelector('.steps-subtext-and-btn-closed')
const stepThreeSubTextAndButton = siblings(stepOne)[2].querySelector('.steps-subtext-and-btn-closed')
const stepFourSubTextAndButton = siblings(stepOne)[3].querySelector('.steps-subtext-and-btn-closed')
const stepFiveSubTextAndButton = siblings(stepOne)[4].querySelector('.steps-subtext-and-btn-closed')
const stepOneIllustration = siblings(stepOne)[0].querySelector('.illustration')
const stepTwoIllustration = siblings(stepOne)[1].querySelector('.illustration-closed')
const stepThreeIllustration = siblings(stepOne)[2].querySelector('.illustration-closed')
const stepFourIllustration = siblings(stepOne)[3].querySelector('.illustration-closed')
const stepFiveIllustration = siblings(stepOne)[4].querySelector('.illustration-closed')
console.log(stepOneSubTextAndButton)

const headers = [stepOneHeaderText, stepTwoHeaderText, stepThreeHeaderText, stepFourHeaderText, stepFiveHeaderText];
const subTextsAndButtons = [stepOneSubTextAndButton, stepTwoSubTextAndButton, stepThreeSubTextAndButton, stepFourSubTextAndButton, stepFiveSubTextAndButton];
const illustrations = [stepOneIllustration, stepTwoIllustration, stepThreeIllustration, stepFourIllustration, stepFiveIllustration];

const stepOneSiblings = siblings(stepOne);

const toggleSteps = function(element){
    element.classList.toggle('open');
    element.classList.toggle('closed');
} 
const toggleHeaderText = function(element){
    element.classList.toggle('steps-header-text');
    element.classList.toggle('steps-header-text-closed');
} 
const toggleSubTextAndButton = function(element){
    element.classList.toggle('steps-subtext-and-btn');
    element.classList.toggle('steps-subtext-and-btn-closed');
}
const toggleIllustration = function(element){
    element.classList.toggle('illustration');
    element.classList.toggle('illustration-closed');
}

for (let i = 0; i < stepOneSiblings.length; i++) {
    stepOneSiblings[i].addEventListener("click", function() {
        requestAnimationFrame(() => {
            stepOneSiblings.forEach(function(element, index) {
                //close any open guide
                if (element !==this && element.classList.contains('open')) {
                    toggleSteps(stepOneSiblings[index]);
                    toggleHeaderText(headers[index]);
                    toggleSubTextAndButton(subTextsAndButtons[index]);
                    toggleIllustration(illustrations[index]);
                    console.log(stepOneSiblings[index])
                }
            });
            //open the guide that is clicked
            if ( !stepOneSiblings[i].classList.contains('open')) {

                toggleSteps(stepOneSiblings[i]);
                toggleHeaderText(headers[i]);
                toggleSubTextAndButton(subTextsAndButtons[i]);
                toggleIllustration(illustrations[i]);
            }
        })    
    });
}
const toggleDisplay = function(element) {
    const displayValue = window.getComputedStyle(element).display;
    element.style.display = displayValue === 'none' ? 'flex' : 'none';
    overlay.style.display = displayValue === 'none' ? 'block' : 'none';

}
closePopupBtn.addEventListener("click", () => offerPopup.style.display = 'none')
notificationBell.addEventListener("click", function(){
    // closeDisplay(notificationMessage)
    if(dropdownMenu.style.display === 'flex'){
        dropdownMenu.style.display = 'none'
    }
    toggleDisplay(notificationMessage)
    console.log(dropdownMenu.style.display)

})

displayMenu.addEventListener("click", function(){
    if(notificationMessage.style.display === 'flex'){
        notificationMessage.style.display = 'none'
    }
    toggleDisplay(dropdownMenu)

})
const closeDisplay = function(element) {
    document.addEventListener("click", function(event){
       const hasClass = event.target.classList.contains('navigation-bar')
        if(event.target.id === 'background-overlay' || hasClass === true) {
            element.style.display = 'none'
            overlay.style.display = 'none'
            // console.log(navigationBar)
        }
    })
}
const closeOfferPopup = function() {

}
closeDisplay(notificationMessage)
closeDisplay(dropdownMenu)