// Test script for EmailJS form submission
import emailjs from '@emailjs/browser';

// Initialize EmailJS (not needed for this test as we're directly calling sendForm)
// emailjs.init("5xHzaRnQcqSqDQB-T");

// Create a test form data object
const testFormData = {
  user_name: "Test User",
  user_email: "test@example.com",
  message: "This is a test message to verify the EmailJS integration is working correctly."
};

// Function to create a form element with test data
function createTestForm() {
  const form = document.createElement('form');
  
  // Add name field
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'user_name';
  nameInput.value = testFormData.user_name;
  form.appendChild(nameInput);
  
  // Add email field
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'user_email';
  emailInput.value = testFormData.user_email;
  form.appendChild(emailInput);
  
  // Add message field
  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.value = testFormData.message;
  form.appendChild(messageTextarea);
  
  return form;
}

// Send the test email
async function sendTestEmail() {
  console.log("Preparing to send test email...");
  
  try {
    const form = createTestForm();
    
    const result = await emailjs.sendForm(
      'service_dp6q9iv',
      'template_g0v8zbs',
      form,
      '5xHzaRnQcqSqDQB-T'
    );
    
    console.log('Test email sent successfully!', result.text);
    return { success: true, result };
  } catch (error) {
    console.error('Failed to send test email:', error.text);
    return { success: false, error };
  }
}

// Export the test function
export { sendTestEmail, testFormData };