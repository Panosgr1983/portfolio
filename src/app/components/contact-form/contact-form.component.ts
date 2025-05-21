import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;

    try {
      const result = await emailjs.send(
        'service_dp6q9iv',
        'template_g0v8zbs',
        this.contactForm.value,
        '5xHzaRnQcqSqDQB-T'
      );

      console.log('Email sent successfully:', result.text);
      this.toastr.success('Το μήνυμά σας στάλθηκε με επιτυχία!');
      this.contactForm.reset();
    } catch (error: any) {
      console.error('Failed to send email:', error.text);
      this.toastr.error('Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε ξανά.');
    } finally {
      this.isSubmitting = false;
    }
  }
}