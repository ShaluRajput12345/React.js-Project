import Button from '../button/Button'
import styles from './ContactForm.module.css'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

function ContactForm() {
  return (
    <section className={styles.Container}>

        <div className={styles.leftcontainer}>
            <div className={styles.btn}>
              <Button  text="VIA SUPPORT CHAT" icon={<MdMessage/>} />
              <Button text="VIA CALL" icon={<FaPhoneAlt/>} />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail/>} />

            <form>
              <div className={styles.form_name}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className={styles.form_name}>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" id="Email" />
              </div>

              <div className={styles.form_name}>
                <label htmlFor="text">Text</label>
                <textarea name='text' rows="5"/>
              </div>
            </form>

            <Button text="Submit Button" />

        </div>

        <div className={styles.rightcontainer}>
            <img src="images/contact.svg" alt="image" />
        </div>

    </section>
  )
}

export default ContactForm
