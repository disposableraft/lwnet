import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return <div>
    © {new Date().getFullYear()} Lance Wakeling — <a href="https://instagram.com/disposableraft">Instagram</a> — <Link to="/2020-resume">Resume / CV</Link>
  </div>
}

export default Navigation
