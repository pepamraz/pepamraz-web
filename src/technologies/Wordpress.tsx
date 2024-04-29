import React from 'react'
import { Accordion } from '../components/Accordion'

export const Wordpress = () => {
  return (
    <>
    <div>Jsem dobrý wordpress maniak</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
      purus ut arcu malesuada varius. Sed nec lacinia arcu. Sed vel massa
      euismod, fermentum justo nec, tincidunt sapien. In hac habitasse platea
      dictumst. Nulla facilisi. Nullam nec purus ut arcu malesuada varius. Sed
      nec lacinia arcu. Sed vel massa euismod, fermentum justo nec, tincidunt
      sapien. In hac habitasse platea dictumst. Nulla facilisi.
    </p>
    <Accordion title={"Co je to Wordpress?"} content={"To nejlepší"} />
    </>
  )
}

export default Wordpress