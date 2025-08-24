# Contact Form Setup Guide

Your contact form is now fully functional with client-side validation, loading states, and error handling. To complete the setup, you need to integrate with an email service.

## 🚀 What's Already Implemented

✅ **Form State Management** - Custom React hook with TypeScript
✅ **Client-side Validation** - Real-time validation with error messages
✅ **Loading States** - Loading indicators and disabled states
✅ **Success/Error Handling** - User feedback and form reset
✅ **API Route** - Next.js API route ready for email integration
✅ **Responsive Design** - Mobile-friendly form layout

## 📧 Email Service Integration Options

### Option 1: Resend (Recommended)

Resend is modern, developer-friendly, and has great Next.js integration.

```bash
npm install resend
```

**Environment Variables (.env.local):**
```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=contact@yourdomain.com
RESEND_TO_EMAIL=ocaba.ricky@gmail.com
```

**Update API Route:**
```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace the TODO section with:
await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL!,
  to: process.env.RESEND_TO_EMAIL!,
  subject: `Contact Form: ${subject}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      </div>
      <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Sent from your portfolio contact form at ${new Date().toLocaleString()}
      </p>
    </div>
  `,
});
```

### Option 2: Nodemailer with Gmail

Free option using Gmail SMTP.

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

**Environment Variables (.env.local):**
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

**Setup Gmail App Password:**
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate an app password for "Mail"

**Update API Route:**
```typescript
// src/app/api/contact/route.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Replace the TODO section with:
await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'ocaba.ricky@gmail.com',
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${message}</p>
  `,
});
```

### Option 3: SendGrid

Enterprise-grade email service.

```bash
npm install @sendgrid/mail
```

**Environment Variables (.env.local):**
```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

**Update API Route:**
```typescript
// src/app/api/contact/route.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Replace the TODO section with:
await sgMail.send({
  to: 'ocaba.ricky@gmail.com',
  from: 'contact@yourdomain.com', // Must be verified in SendGrid
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${message}</p>
  `,
});
```

## 🗄️ Optional: Database Storage

To store form submissions in a database, you can add Prisma or another ORM:

```bash
npm install prisma @prisma/client
npx prisma init
```

**Schema Example (schema.prisma):**
```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  firstName String
  lastName  String
  email     String
  subject   String
  message   String
  createdAt DateTime @default(now())
  
  @@map("contact_submissions")
}
```

**Add to API Route:**
```typescript
// After email sending
await prisma.contactSubmission.create({
  data: {
    firstName,
    lastName,
    email,
    subject,
    message,
  },
});
```

## 🔒 Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **CAPTCHA**: Add reCAPTCHA for additional spam protection
3. **Input Sanitization**: The current implementation includes basic validation
4. **Environment Variables**: Never commit API keys to version control

## 🧪 Testing

Test your form with:
1. Valid submissions
2. Invalid email formats
3. Empty required fields
4. Very long messages
5. Special characters in inputs

## 📱 Features Included

- **Real-time Validation**: Errors clear as user types
- **Loading States**: Button shows "Sending..." during submission
- **Success Feedback**: Green success message with checkmark
- **Error Handling**: Red error messages with alert icons
- **Form Reset**: Reset button appears after submission or errors
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Responsive Design**: Works on all screen sizes
- **TypeScript**: Full type safety throughout

## 🎨 Customization

You can customize:
- Validation rules in `useContactForm.ts`
- Email templates in the API route
- Styling in the contact page component
- Success/error messages
- Form fields (add/remove as needed)

Your contact form is production-ready! Just choose an email service and add your API keys.
