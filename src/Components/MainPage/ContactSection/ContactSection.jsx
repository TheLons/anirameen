import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

import styles from './ContactSection.module.css'

import Avatar from '../../../assets/contacts/avatar.png'

const ContactSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Map the form field names to our state keys
    const fieldMapping = {
      'from_name': 'name',
      'from_email': 'email',
      'message': 'message'
    }
    
    const stateKey = fieldMapping[name] || name
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }))
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const testEmailJS = async () => {
    console.log('=== Testing EmailJS Configuration ===')
    
    const serviceId = 'service_td9zx3k'
    const templateId = 'template_tpguiqe'
    const publicKey = 'gzKnyzlHyRBzmYoQO'
    
    const testParams = {
      user_name: 'Test User',
      user_email: 'test@example.com',
      user_message: 'This is a test message from the contact form.',
      to_email: 'nimarina20@gmail.com'
    }
    
    try {
      console.log('Testing with params:', testParams)
      const result = await emailjs.send(serviceId, templateId, testParams, publicKey)
      console.log('Test successful:', result)
      alert('Test email sent successfully! Check your EmailJS dashboard.')
    } catch (error) {
      console.error('Test failed:', error)
      alert(`Test failed: ${error.message}`)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      alert('Please fill in all fields')
      return
    }

    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = 'service_td9zx3k'
      const templateId = 'template_tpguiqe'
      const publicKey = 'gzKnyzlHyRBzmYoQO'

      // Try simpler template parameters first
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message,
        to_email: 'nimarina20@gmail.com'
      }

      console.log('=== EmailJS Debug Info ===')
      console.log('Service ID:', serviceId)
      console.log('Template ID:', templateId)
      console.log('Public Key:', publicKey)
      console.log('Template Params:', templateParams)
      console.log('Form Data:', formData)

      // Try the send method first
      let result
      try {
        console.log('Attempting emailjs.send...')
        result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        console.log('emailjs.send result:', result)
      } catch (sendError) {
        console.log('Send method failed:', sendError)
        console.log('Trying sendForm method...')
        // Fallback: try sendForm method
        const formElement = e.target
        result = await emailjs.sendForm(serviceId, templateId, formElement, publicKey)
        console.log('emailjs.sendForm result:', result)
      }
      
      console.log('Final EmailJS result:', result)
      
      if (result.status === 200) {
        setSubmitStatus('success')
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        alert('Message sent successfully! Check your EmailJS dashboard to verify delivery.')
      } else {
        setSubmitStatus('error')
        alert(`Failed to send message. Status: ${result.status}`)
      }
    } catch (error) {
      console.error('=== EmailJS Error Details ===')
      console.error('Error message:', error.message)
      console.error('Error text:', error.text)
      console.error('Error status:', error.status)
      console.error('Error stack:', error.stack)
      setSubmitStatus('error')
      alert(`Failed to send message: ${error.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={styles.contactContainer} aria-labelledby="contact-title">
      <motion.div 
        className={styles.container} 
        ref={ref}
        initial="hidden" 
        animate={inView ? 'visible' : 'hidden'} 
        variants={containerVariants}
      >
        <motion.div className={styles.description} variants={itemVariants}>
          <motion.div className={styles.title} variants={itemVariants}>
            <motion.h2 id="contact-title" variants={itemVariants}>Have an idea?</motion.h2>
            <motion.h3 variants={itemVariants}>Let's get in touch</motion.h3>
          </motion.div>

          <motion.form className={styles.form} onSubmit={handleSubmit} noValidate variants={itemVariants}>
            <motion.label className={styles.name} htmlFor="contact-name" variants={itemVariants}>
              <p>Name</p>
              <input
                id="contact-name"
                name="from_name"
                type="text"
                placeholder="Your name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </motion.label>

            <motion.label className={styles.email} htmlFor="contact-email" variants={itemVariants}>
              <p>Email</p>
              <input
                id="contact-email"
                name="from_email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </motion.label>

            <motion.label className={styles.message} htmlFor="contact-message" variants={itemVariants}>
              <p>Message</p>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us a bit about your project..."
                required
                value={formData.message}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </motion.label>

            <motion.div className={styles.submitRow} variants={itemVariants}>
              <button 
                type="submit" 
                className={`${styles.submitBtn} ${isLoading ? styles.loading : ''} ${submitStatus === 'success' ? styles.success : ''} ${submitStatus === 'error' ? styles.error : ''}`}
                aria-label="Send message"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send message'}
              </button>
              
              {/* Test button for debugging */}
              <button 
                type="button" 
                onClick={testEmailJS}
                style={{ 
                  marginLeft: '10px', 
                  padding: '10px 15px', 
                  backgroundColor: '#666', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Test EmailJS
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

        <motion.div className={styles.photo} aria-hidden variants={itemVariants}>
          <img src={Avatar} alt="" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection