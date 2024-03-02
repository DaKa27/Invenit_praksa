function showDiv(event, divNumber) {
    event.preventDefault();
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.link-content');
    contentDivs.forEach(function(div) {
      div.style.display = 'none';
    });

    // Show the selected content div
    var selectedDiv = document.getElementById('div' + divNumber);
    if (selectedDiv) {
      selectedDiv.style.display = 'flex';
    }
  }