import React, { useEffect, useRef } from 'react'
import './ContactForm.css'
import { Box, Typography } from '@mui/material'
const ContactForm = () => {
  const formRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '4754261',
          formId: '28e34d26-94c1-4759-9d80-2ef615b20e05',
          target: `#${formRef.current.id}`,
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Box id="formContainer">
        <Box
          sx={{ border: '1px solid #333146', padding: 5, borderRadius: '10px' }}
          id="formComponent"
          ref={formRef}
        ></Box>
        <Typography
          sx={{
            marginTop: 2,
            fontFamily: 'Lato, sans-serif',
            color: '#4e4d4d',
            textAlign: 'left',
            width: '100%',
            fontSize: { xs: 14, sm: 16, md: 18 },
          }}
        >
          *By submitting this form, you agree to the Cassandra Tools’ Terms of Service.
        </Typography>
      </Box>
    </>
  )
}

export default ContactForm
