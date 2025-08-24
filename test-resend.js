// Test script to verify Resend configuration
// Run with: node test-resend.js

require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

async function testResend() {
  console.log('🔍 Testing Resend Configuration...\n');
  
  // Check if API key is loaded
  const apiKey = process.env.RESEND_API_KEY;
  console.log('API Key loaded:', apiKey ? `✅ ${apiKey.substring(0, 10)}...` : '❌ Not found');
  
  if (!apiKey) {
    console.log('\n❌ RESEND_API_KEY not found in .env.local');
    console.log('Please check your .env.local file and make sure it contains:');
    console.log('RESEND_API_KEY=re_your_actual_api_key_here');
    return;
  }

  if (!apiKey.startsWith('re_')) {
    console.log('\n⚠️  API key format looks incorrect. It should start with "re_"');
    return;
  }

  // Test sending email
  const resend = new Resend(apiKey);
  
  try {
    console.log('\n📧 Sending test email...');
    
    const result = await resend.emails.send({
      from: 'contact@resend.dev',
      to: 'ocabafox@gmail.com', // Must match your Resend account email
      subject: 'Test Email from Portfolio Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>🎉 Test Email Successful!</h2>
          <p>Your Resend configuration is working correctly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p>You can now use your contact form with confidence!</p>
        </div>
      `,
    });

    if (result.error) {
      console.log('❌ Resend API Error:', result.error);
    } else {
      console.log('✅ Email sent successfully!');
      console.log('📧 Email ID:', result.data?.id);
      console.log('\n🎯 Check your email (ocabafox@gmail.com) for the test message.');
      console.log('📱 Don\'t forget to check your spam folder!');
    }
  } catch (error) {
    console.log('❌ Error sending email:', error.message);
    
    if (error.message.includes('Invalid API key')) {
      console.log('\n💡 Your API key appears to be invalid. Please:');
      console.log('1. Go to https://resend.com/api-keys');
      console.log('2. Create a new API key');
      console.log('3. Update your .env.local file');
    }
  }
}

testResend();
