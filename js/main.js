const animatedTags = document.querySelectorAll (".fade")


animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function () {
    // look through all the animated tags and see
    // With the get getBoundClientRect if it's in the window
    let delay = 0.25

    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const Tagbottom = tag.getBoundingClientRect.bottom

        if (tagTop < window.innerHeight) {
            tag.style.animation = `fadein 1.5s ${delay}s both`
            delay = delay + 0.25
        }

    })
}

//On load, run fade in
fadeIn()

//On scroll
document.addEventListener("scroll", function () {
    fadeIn()
})


//on browser resize, run fadeIn
window.addEventListener("resize", function () {
    fadeIn()
})


const imageHolders = document.querySelectorAll("div.image-up")
  const headers = document.querySelectorAll(".image-svg")

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.1) {
        entry.target.classList.add("in-view")
      } else {
        entry.target.classList.remove("in-view")
      }
    })
  }, {
    threshold: [0, 0.1, 1]
  })
  
  imageHolders.forEach(holder => {
    observer.observe(holder)
  })

  headers.forEach(holder => {
    observer.observe(holder)
  })





let xs = []
for (var i = 0; i <= 500; i++) {
  xs.push(i)
}

let t = 0

function animate() {

  let points = xs.map(x => {

    let y = 25 + 10 * Math.sin((x + t) / 10)

    return [x, y]
  })

  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  document.querySelector("path.wavez").setAttribute("d", path)

  t += 0.5

  requestAnimationFrame(animate)
}

animate()





//Implement Skew feeling
const section = document.querySelector(".skew-image")

let currentPixel = window.pageYOffset

const looper = function () {
  const newPixel = window.pageYOffset 
  const diff = newPixel - currentPixel
   const top = 5
   const intensity = 1.5
  const speed = top * ((2 / (1 + Math.exp(-1 * intensity * diff))) -  1)
  
  section.style.transform = "skewY(" + speed + "deg)"

  currentPixel = newPixel


  requestAnimationFrame(looper)
 }

looper()






const sections = document.querySelectorAll("section")
const wavesBoxes = document.querySelectorAll("g.wave")

const checkCircles = function () {  
  sections.forEach((section, index) => {
   	const waves = wavesBoxes[index].querySelectorAll("circle, path")
    
    if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
      waves.forEach(wave => {
        wave.classList.add("in-view")
      })
    } else {
      waves.forEach(wave => {
        wave.classList.remove("in-view")
      })	  	
    }
  })
}

sections.forEach(section => {
  section.style.backgroundColor = "transparent"
  section.style.color = "#000000"
})

checkCircles()

window.addEventListener("scroll", function () {
  checkCircles()
})