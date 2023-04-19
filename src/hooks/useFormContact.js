import { useState } from "react";

const URLForm = "https://formsubmit.co/ajax/rubertgonzalez5@gmail.com"

export function useFormContact() {
   const [success, setSuccess] = useState(false)
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault();

      const form = e.target

      const formData = {
         name: form.name.value,
         email: form.email.value,
         message: form.message.value
      }

      setSuccess(false)
      setLoading(true)

      await fetch(URLForm, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify(formData)
      })
         .then(response => response.ok ? emailSuccess() : Promise.reject())
         .catch(() => emailError());
      setLoading(false)
      clearForm(form)
   };

   const emailSuccess = () => {
      setSuccess(true)
      const message = document.querySelector(".message")
      message.classList.remove("error")
      message.classList.add("success")
      message.classList.add("active")
      setTimeout(() => {
         message.classList.remove("active")
      }, 2500)
   }

   const emailError = () => {
      setSuccess(false)
      const message = document.querySelector(".message")
      message.classList.remove("success")
      message.classList.add("error")
      message.classList.add("active")
      setTimeout(() => {
         message.classList.remove("active")
      }, 2500)
   }

   const clearForm = (form) => {
      form.name.value = ""
      form.email.value = ""
      form.message.value = ""
   }

   return {
      handleSubmit,
      loading,
      success
   }
}