
import { loadMenu } from "./menuLoad.js";
import {loadHome} from "./homePageLoad.js"

const homeBtn = document.getElementById("homeBtn")
const menuBtn = document.getElementById("menuBtn")
const aboutBtn = document.getElementById("aboutBtn")

homeBtn.addEventListener("click",loadHome)
menuBtn.addEventListener("click",loadMenu)

loadHome();








