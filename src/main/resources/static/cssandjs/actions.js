let activeIndex = 0;

const groups = document.getElementsByClassName("cards");
// for card swap animation

const view1 = document.querySelector(`[data-index-project="0"]`),
    view2 = document.querySelector(`[data-index-project="1"]`),
    view3 = document.querySelector(`[data-index-project="2"]`),
    view4 = document.querySelector(`[data-index-project="3"]`),
view5 = document.querySelector(`[data-index-project="4"]`);


const butt = document.querySelector(`[data-index-project="5"]`),
    inbutt = document.querySelector(`[data-index-project="6"]`);
const handleRButton = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        currentGroupName = document.querySelector(`[data-index-name="${activeIndex}"]`),
        nextGroupName = document.querySelector(`[data-index-name="${nextIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";
    currentGroupName.dataset.status = "after";
    nextGroupName.dataset.status = "becoming-active-from-before";
    setTimeout(() => {
        nextGroup.dataset.status = "active";
        nextGroupName.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
const handleLButton = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        currentGroupName = document.querySelector(`[data-index-name="${activeIndex}"]`),
        nextGroupName = document.querySelector(`[data-index-name="${nextIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status = "before";
    nextGroup.dataset.status = "becoming-active-from-after";
    currentGroupName.dataset.status = "before";
    nextGroupName.dataset.status = "becoming-active-from-after";
    setTimeout(() => {
        nextGroup.dataset.status = "active";
        nextGroupName.dataset.status = "active";
        activeIndex = nextIndex;
    });
}


const handleToggleButton = () => {
    view1.dataset.status = "inactive";
    view2.dataset.status = "inactive";
    view3.dataset.status = "inactive";
    view4.dataset.status = "inactive";
    view5.dataset.status = "inactive";
    butt.dataset.status = "active";
    inbutt.dataset.status = "inactive";
}

const handleInToggleButton = () => {
    view1.dataset.status = "active";
    view2.dataset.status = "active";
    view3.dataset.status = "active";
    view4.dataset.status = "active";
    view5.dataset.status = "active";
    butt.dataset.status = "inactive";
    inbutt.dataset.status = "active";
}

// for header animation
const left = document.getElementById("left-slider");
const handleOnMuve = e => {
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = `${p}%`;

}
document.onmousemove = e => handleOnMuve(e);
document.ontouchmove = e => handleOnMuve(e.touches[0]);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// for coping from footer
function copyToClipboardNr() {
    navigator.clipboard.writeText
    ("534313071");
    var tooltip = document.getElementById("myTooltipnr");
    tooltip.innerHTML = "Copied!";
}

function copyToClipboardMail() {
    navigator.clipboard.writeText
    ("karbialasol@gmail.com");
    var tooltip = document.getElementById("myTooltipmail");
    tooltip.innerHTML = "Copied!";
}

function outFuncNr() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function outFuncMail() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
