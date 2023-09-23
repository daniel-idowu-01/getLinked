import React, { useEffect, useState } from 'react'
import { NavBar, Success } from '../components'

const Register = () => {

    const [category, setCategory] = useState(0)
    const [success, setSuccess] = useState(false)
    const [categories, setCategories] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    const headerStyle = 'clash-display text-secondary-color text-lg font-semibold'
    const box = 'flex flex-col gap-7 bg-white bg-opacity-[0.03] p-10 md:p-20 rounded-md'
    const container = 'relative flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center p-10 md:p-20'
    const inputStyle = 'block w-full bg-transparent border border-white px-4 py-2 rounded-md outline-none placeholder:text-sm'

    // source of the image
    const imageSource = 'https://s3-alpha-sig.figma.com/img/a70f/d340/66fca8d9215c65352fc6e3a1082aa32c?Expires=1696204800&Signature=Vc5nlG8cyYQDxGUV736MANc03HWMfC4Bqdyk4tSrpcjUQovBKc5EIzQmRPRyAiWIDjOBgjpDfImsTuzAWqRSvCPxMD9JaMvxyZtxDnz~XREosX1zQKfA6EseTdSSvY581feLBjrae4M7lUfVSb7RCWY5v5ayNan6WJZ4rXsyG-r129CIvnQfK4d6j3QBrnLfR~bjW3ZxoXc8cA9sVMpqOd3KGCqh9tg-jSfsEMRXoOCMqQNWVsegPhnvBlxJ0E88F~ZIEZ~-W2EPAKpGDRMgM-7h1YawFnjBcTeTz74EWmHcMD4-Oln-soI2qBcEJaFRKzTneAw4q8AcSuw-RYWQrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'


    // info to be sent to the backend
    const [userInfo, setUserInfo] = useState({
        team_name: '',
        phone_number: '',
        email: '',
        project_topic: '',
        group_size: 0,
        privacy_poclicy_accepted: isChecked
    })

    const newUserInfo = {...userInfo, category}

    // function to be handled when user inputs a value
  const handleChange = (event) => {
    setUserInfo((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }


   // function to be handled when user submits form
   const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('https://backend.getlinked.ai/hackathon/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserInfo)
        })
        const data = await response.json()
        if(data) {
            setSuccess(true)
        }
   }

    // to fetch the category list
    useEffect(() => {
        const getCategories = async () => {
            await fetch('https://backend.getlinked.ai/hackathon/categories-list')
                .then(res => res.json())
                .then(data => setCategories(data))
                .catch(err => alert(err))
         }
         getCategories();
    }, [])

    // functions tp change the category and size value
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className='text-white'>
        <NavBar />

        {/* div for the register page container */}
        <article className={container}>
            <div className='md:w-1/2'>
                <img src={imageSource} alt="" />
            </div>
            
            {/* div for the registration content */}
            <div>
                {/* created a section to design the content as a box */}
                <section className={box}>
                    <div className='flex flex-col gap-1'>
                        <p className={headerStyle}>
                            Register
                        </p>
                        <p className='text-sm'>
                            Be part of this movement
                        </p>
                        <p className='text-xl'>
                            CREATE YOUR ACCOUNT
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} method='post'>
                        {/* created a section to grid the inputs */}
                        <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="team_name">Team's name</label>
                                <input 
                                    type="text" 
                                    name="team_name" 
                                    id="team_name" 
                                    placeholder='Enter the name of your group'
                                    className={inputStyle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone_number">Phone</label>
                                <input 
                                    type="number" 
                                    name="phone_number" 
                                    id="phone_number" 
                                    placeholder='Enter your phone number'
                                    className={inputStyle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder='Enter your email address'
                                    className={inputStyle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="project_topic">Project Topic</label>
                                <input 
                                    type="text" 
                                    name="project_topic" 
                                    id="project_topic" 
                                    placeholder='What is your group project topic'
                                    className={inputStyle}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="category">Category</label>
                                <select
                                 name="category" 
                                 id="category"
                                 onChange={handleCategoryChange}
                                 value={category}
                                 className={`${inputStyle} px-3 bg-transparent`}>
                                    <option value="" className='bg-[#150E28]' disabled>
                                        Select Category
                                    </option>
                                    {categories.map(category => (
                                        <option
                                         value={category.id} 
                                         key={category.id} c
                                         className='bg-[#150E28]'
                                         >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="group_size">Group Size</label>
                                <input type="number" 
                                name="group_size" 
                                id="group_size" 
                                placeholder='What is the size of your group'
                                className={inputStyle}
                                onChange={handleChange}/>
                            </div>
                            
                        </section>

                        {/* created a section for the details below the input elements */}
                        <section className='relative top-5'>
                            <p className='text-sm text-secondary-color italic'>
                                Please review your registration details before submitting
                            </p>
                            <input
                             type="checkbox" 
                             checked={isChecked}
                             onChange={handleCheckboxChange}
                             name="privacy_poclicy_accepted" 
                             id="agree" />
                            <span className='ml-3 text-sm'>
                                I agreed with the event terms and conditions and privacy policy
                            </span>
                            <button 
                                type='submit' 
                                className='btn w-full mt-3'>
                                Submit
                            </button>
                        </section> 
                    </form>
                </section>
            </div>
        </article>
        {/* {success && <Success />} */}
    </section>
  )
}

export default Register
