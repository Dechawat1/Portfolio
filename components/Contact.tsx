import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <section id="contact" className="mt-24">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold relative">
          <span className="text-primary ">#</span>Contact
          <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
        </h2>
      </div>
      <div className='mt-10 md:flex-row gap-10'>
        <ContactForm /> 
      </div>
    </section>
  )
}
export default Contact

