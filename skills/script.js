function toggleContent(contentId) {
  // Hide all content sections
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove('active');
  }
  
  // Show the selected content section
  var selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');
  
  // Update active state for toggle buttons
  var buttons = document.getElementsByClassName('toggle-buttons')[0].getElementsByTagName('button');
  for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
  }
  event.currentTarget.classList.add('active');
}