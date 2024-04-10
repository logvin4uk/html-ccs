
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const errorModal = document.getElementById('error-modal');
    const closeButton = document.querySelectorAll('.close');
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      
      fetch('your_server_endpoint', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          modal.style.display = 'block';
          contactForm.reset();
        } else {
          errorModal.style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        errorModal.style.display = 'block';
      });
    });
  
    closeButton.forEach(function(button) {
      button.addEventListener('click', function() {
        modal.style.display = 'none';
        errorModal.style.display = 'none';
      });
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
      if (event.target == errorModal) {
        errorModal.style.display = 'none';
      }
    });
  });
  