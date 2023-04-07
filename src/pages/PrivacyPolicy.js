import React from 'react'
import Loader from '../components/Loader/Loader'
import HeaderOne from '../components/Header/HeaderOne'
import FooterOne from '../components/Footer/FooterOne'

export const PrivacyPolicy = () => {
  return (
    <Loader>
    <HeaderOne />
    <section
    className="title-hero-bg service-cover-bg"
    data-stellar-background-ratio="0.2"
  >
    <div className="container">
      <div className="page-title text-center">
      <h1>Privacy Policy</h1>
        <h4 className="text-uppercase mt-30 white-color">Get to know out privacy notice</h4>
      </div>
    </div>
  </section>
  <p>
        Thank you for choosing our app. At JCM Expansion, we take user privacy seriously and are committed to protecting the personal information that you provide to us. This Privacy Policy outlines how we collect, use, and disclose information when you use our app. By using our app, you agree to the terms outlined in this Privacy Policy.

Information We Collect
We collect various types of information from users when they use our app, including:

Personal Information: This includes information such as your name, email address, and phone number.
Device Information: We collect information about the device you are using to access our app, including the device type, operating system, and unique device identifiers.
Usage Information: We collect information about how you use our app, including which features you use, how long you use the app, and your interactions with our app.
Log Information: We collect log information when you use our app, including your IP address, browser type, and access times.

How We Use Your Information
We use the information we collect from you for the following purposes:

To provide and improve our app
To personalize your experience
To communicate with you about our app
To provide customer support
To conduct research and analysis
To comply with legal obligations

How We Share Your Information
We may share your information with third parties in the following circumstances:

With your consent
With service providers who help us to provide and improve our app
With law enforcement or other government officials if required by law or to protect our legal rights
In connection with a business transaction such as a merger, acquisition, or sale of assets

Data Retention
We will retain your personal information for as long as necessary to provide you with our app and to comply with our legal obligations.

Your Rights
You have certain rights regarding your personal information, including the right to access, correct, and delete your personal information. You may also have the right to object to or restrict certain types of processing of your personal information. If you have any questions or concerns about your personal information, please contact us at [Contact Information].

Security
We take appropriate measures to protect your personal information from unauthorized access, use, and disclosure.

Changes to this Privacy Policy
We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our app.

Contact Us
If you have any questions or concerns about this Privacy Policy, please contact us at camposmoron@hotmail.com.
        </p>
        <FooterOne/>
        </Loader>
  )
}
