import React, { useState} from 'react';
import { Link } from "react-router-dom";
import "./Navigation.scss";

import { IconContext } from "react-icons";

import * as MdIcons from "react-icons/md";

import * as GiIcons from "react-icons/gi";

import * as RiIcons from "react-icons/ri";

import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";



const navBarRoutes = [
  {
    title: "Calorie BMI",
    path: "/calories",
    icon: < RiIcons.RiHealthBookFill />,
    styleName: "nav-text"
  },
  {
    title: "Meal Plan",
    path: "/mealplan",
    icon: < GiIcons.GiMeal />,
    styleName: "nav-text"
  },
  {
    title: "Fitness",
    path: "/fitness",
    icon: < MdIcons.MdFitnessCenter />,
    styleName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdContactSupport />,
    styleName: "nav-text"
  }
]

function Navigation(){

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF"}}>

        <div className="sidebar">
          <Link to='#' className="menu-bar">
            < FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-items" onClick={showSidebar}>
              <li className="nav-toggle">
                <Link to="#" className="menu-bar">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>

              {navBarRoutes.map((item, index) => {
                return (
                  <li key={index} className={item.styleName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })

              }
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  )
  
}

export default Navigation;

