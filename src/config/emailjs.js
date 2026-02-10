// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get your credentials

export const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Template variables that will be sent:
// - from_name: sender's name
// - from_email: sender's email
// - message: message content
// - to_name: your name (recipient)