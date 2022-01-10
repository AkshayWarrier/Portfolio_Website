function removeHover(elementclass){
    var hover_area = document.getElementsByClassName(elementclass)[0];
    rect = hover_area.children[0];
    rect.style.opacity = "100%";
    rect.style.height = "100%";
}