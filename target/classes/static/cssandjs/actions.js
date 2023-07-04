const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));
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