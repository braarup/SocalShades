import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const emailContent = `
      New Retailer Application Received
      
      Business Information:
      - Business Name: ${body.businessName}
      - Contact Name: ${body.contactName}
      - Email: ${body.email}
      - Phone: ${body.phone}
      - Address: ${body.address}, ${body.city}, ${body.state} ${body.zipCode}
      - Business Type: ${body.businessType}
      
      Business Details:
      - Years in Business: ${body.yearsInBusiness}
      - Monthly Foot Traffic: ${body.monthlyFootTraffic}
      - Current Products: ${body.currentProducts}
      
      Services Interested In:
      ${body.servicesInterested.map((service: string) => `- ${service}`).join('\n')}
      
      Additional Information:
      ${body.additionalInfo}
    `

    // Send email to SocalShades team
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || 'info@socalshades.com',
      subject: `New Retailer Application - ${body.businessName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    })

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: 'SocalShades Retailer Application Received',
      text: `Dear ${body.contactName},

Thank you for your interest in partnering with So‑Cal Shades Wholesale!

We've received your retailer application for ${body.businessName}. Our team will review your information and contact you within 24-48 hours to discuss next steps.

In the meantime, if you have any questions, feel free to reach out to us directly.

Best regards,
The So‑Cal Shades Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff4fa3;">Thank you for your interest!</h2>
          <p>Dear ${body.contactName},</p>
          <p>We've received your retailer application for <strong>${body.businessName}</strong>. Our team will review your information and contact you within 24-48 hours to discuss next steps.</p>
          <p>In the meantime, if you have any questions, feel free to reach out to us directly.</p>
          <p>Best regards,<br>The So‑Cal Shades Team</p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing retailer application:', error)
    return NextResponse.json({ message: 'Error processing application' }, { status: 500 })
  }
}