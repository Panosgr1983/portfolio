import React, { useState } from 'react';
import { sendTestEmail, testFormData } from '../testEmailForm';
import { toast } from 'react-hot-toast';

const TestEmailButton: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);

  const handleTestEmail = async () => {
    setIsTesting(true);
    toast.loading('Sending test email...', { id: 'test-email' });
    
    try {
      const result = await sendTestEmail();
      
      if (result.success) {
        toast.success('Test email sent successfully!', { id: 'test-email' });
        console.log('Test email sent with data:', testFormData);
      } else {
        toast.error('Failed to send test email. Check console for details.', { id: 'test-email' });
      }
    } catch (error) {
      toast.error('Error sending test email', { id: 'test-email' });
      console.error('Error in test email process:', error);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleTestEmail}
        disabled={isTesting}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isTesting ? 'Sending...' : 'Send Test Email'}
      </button>
    </div>
  );
};

export default TestEmailButton;