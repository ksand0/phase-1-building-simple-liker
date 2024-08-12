// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  // Hiding the modal on page load
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');

  // Adding event listeners to all like elements
  const likeElements = document.querySelectorAll('.like-glyph');
  likeElements.forEach(likeElement => {
    likeElement.addEventListener('click', () => {
      // Simulate server call
      mimicServerCall()
        .then(() => {
          // Toggle heart and activated-heart class on success
          if (likeElement.innerText === EMPTY_HEART) {
            likeElement.innerText = FULL_HEART;
            likeElement.classList.add('activated-heart');
          } else {
            likeElement.innerText = EMPTY_HEART;
            likeElement.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          // Display the error modal and message on failure
          const modalMessage = document.getElementById('modal-message');
          modalMessage.innerText = error;
          modal.classList.remove('hidden');

          // Hide the modal after 3 seconds
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}