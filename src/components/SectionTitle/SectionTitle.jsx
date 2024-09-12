import './SectionTitle.css'

const SectionTitle = ({ title , description }) => {

  return (
   <>
   <div className='SectionTitle position-relative d-flex justify-content-center align-items-center flex-column text-center px-5 py-5'>
    <h2 className='pt-5 mb-3 pb-3 Title position-relative'>{title}</h2>
    <p className='SectionTitle-desc'>{description}</p>
   </div>
   </>
  )
}

export default SectionTitle
