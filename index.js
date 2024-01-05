"use strict";
import { gsap } from "gsap";

const prenom = "Lilian, bien joué ma poule mdrrr";
console.log(`Salut ${prenom} ! 😃`);

// Animation simple avec GSAP
gsap.from(".fs0", { duration: 1, y: 50, opacity: 0 });
