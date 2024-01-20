'use server'
import { Resend } from 'resend'
import { getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/email/Contact-form-email'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

const validateEmail = (email: string) => {
  return String(email).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export const sendEmail = async (formData: FormData) => {
  // console.log(formData.get('email'), formData.get('message'))

  let email = formData.get('email')
  let message = formData.get('message')

  let senderEmail = email?.toString()

  if (
    !senderEmail ||
    typeof senderEmail !== 'string' ||
    senderEmail.length > 128
  )
    return {
      error: 'Invalid Email Id',
    }

  if (senderEmail && !validateEmail(senderEmail))
    return {
      error: 'Invalid Email Id',
    }

  if (!message || typeof message !== 'string' || message.length > 1024)
    return {
      error: 'Invalid Message',
    }

  let data

  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sumanmaji401@gmail.com',
      subject: 'Message from portfolio site',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  } catch (error: unknown) {
    console.log(error)
    return {
      error: getErrorMessage(error),
    }
  }
  console.log(data)

  return {
    data,
  }
}
