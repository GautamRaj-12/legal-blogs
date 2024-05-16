import logo from "../../assets/images/legal-blogs-logo.svg"
import searchIcon from "../../assets/images/search.svg"
const Navbar = () => {
  return (
    <>
    <header className="pt-4">
        <nav className="flex justify-between items-center text-dark text-buttonText uppercase border border-dark/25 px-6 py-4 rounded-full">
            <div><img src={logo} alt="Legal blogs by rohan logo" /></div>
            <ul className="flex items-center gap-6">
              <li>Home</li>
              <li>Posts</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className="flex items-center gap-4">
              <img src={searchIcon} alt="A clickable search icon for searching blog posts" className="bg-dark/10 rounded-full p-2"/>
              <li className="py-3 px-6 bg-dark text-light rounded-[24px]">Login</li>
              <li className="py-3 px-6 bg-dark text-light rounded-[24px]">Write</li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar