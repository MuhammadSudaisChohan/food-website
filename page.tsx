import Featured from "./component/featured"
import Footer from "./component/footer"
import Hero from "./component/hero"
import Menu from "./component/menu"
import Services from "./component/services"
import Survey from "./component/survey"


const page = () => {
  return (
    <div>
      <main>
        <Hero/>
      <Featured/>
      <Services/>
      <Menu/>
      <Survey/>
      <Footer/>
      </main>

      
    </div>
  )
}

export default page
