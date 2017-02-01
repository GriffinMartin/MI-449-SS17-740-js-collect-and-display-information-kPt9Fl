var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var personalDescriptionInput = document.getElementById('personal-description')
var contactEmailInput = document.getElementById('contact-email')
var contactPhoneInput = document.getElementById('contact-phone')
var outputParagraph = document.getElementById('preview')
var outputHTML = document.getElementById('update-html')

var updateHTML = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var personalDescription = personalDescriptionInput.value
  var contactEmail = contactEmailInput.value
  var contactPhone = contactPhoneInput.value
  outputParagraph.innerHTML =
    '<h1>' + 'Hi, my name is ' + firstName + ' ' + lastName + '</h1>' +
    '<p>' + personalDescription + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + contactEmail + '"' + 'target="_blank">' + contactEmail + '</a>' +
      ' or give me a call at ' +
      '<a href="tel:' + contactPhone + '"' + 'target="_blank">' + contactPhone + '</a>' + '.' +
    '</p>'
  outputHTML.textContent =
    '<h1>' + 'Hi, my name is ' + firstName + ' ' + lastName + '</h1>' +
    '<p>' + personalDescription + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + contactEmail + '"' + 'target="_blank">' + contactEmail + '</a>' +
      ' or give me a call at ' +
      '<a href="tel:' + contactPhone + '"' + 'target="_blank">' + contactPhone + '</a>' + '.' +
    '</p>'
}

firstNameInput.addEventListener('input', updateHTML)
lastNameInput.addEventListener('input', updateHTML)
personalDescriptionInput.addEventListener('input', updateHTML)
contactEmailInput.addEventListener('input', updateHTML)
contactPhoneInput.addEventListener('input', updateHTML)

firstNameInput.addEventListener('input', updateHTML)
lastNameInput.addEventListener('input', updateHTML)
personalDescriptionInput.addEventListener('input', updateHTML)
contactEmailInput.addEventListener('input', updateHTML)
contactPhoneInput.addEventListener('input', updateHTML)
