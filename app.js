var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var selfBio = document.getElementById('self-bio')
var contactEmail = document.getElementById('contact-email')
var contactPhone = document.getElementById('contact-phone')

var preview = document.getElementById('preview')
var htmlPreview = document.getElementById('html-preview')

function updateHTML() {
  var outputFormat =
    '<h1>' + 'Hi, my name is ' + firstName.value + ' ' + lastName.value + '</h1>' +
    '<p>' + selfBio.value + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + contactEmail.value + '"' + 'target="_blank">' + contactEmail.value + '</a>' +
      ' or give me a call at ' +
      '<a href="tel:' + contactPhone.value + '"' + 'target="_blank">' + contactPhone.value + '</a>' + '.' +
    '</p>'
  preview.innerHTML = outputFormat
  htmlPreview.textContent = outputFormat
}

firstName.addEventListener('input', updateHTML)
lastName.addEventListener('input', updateHTML)
selfBio.addEventListener('input', updateHTML)
contactEmail.addEventListener('input', updateHTML)
contactPhone.addEventListener('input', updateHTML)