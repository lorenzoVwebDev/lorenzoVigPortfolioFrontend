
let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.innerText.split('');
  
  word.textContent="";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span)
  })
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = '1';

function changeText() {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = 'letter out';
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = 'letter behind';
    setTimeout(() => {
      letter.className = 'letter in'
    }, 340 + i * 80);
  })
  
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};



changeText();
setInterval(changeText, 3000);


  function takePercentage() {
    document.querySelectorAll('.percentage').forEach((percentage, indexPercentage) => {
      const barWidth = percentage.innerHTML
        
      document.querySelectorAll('.js-bar').forEach((bar, barindex) => {
        if (indexPercentage === barindex) {
          bar.style.width = barWidth
        }
      })
    })
  }

  takePercentage()


  const circles = document.querySelectorAll('.circle');
  circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var points = '';
    var rotate = 360/dots

    for (let i = 0; i < dots; i++) {
      points += `
        <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>
      `
    }

    points += `
      <big>${marked}%</big>
    `

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add('marked');
    }

    console.log(elem)
  })



//sticky nav

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 50)
});

//menu list x

let menu = document.querySelector('#menu-icon').firstChild;
let navlist = document.querySelector('.navList');
let menuBoolean = false;

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x')
/*   if (!menuBoolean) {
    menu.innerHTML = `<i class='bx bx-x'></i>`;
    menuBoolean = true;
  } else {
    menu.innerHTML = `<i class='bx bx-menu'></i>`
    menuBoolean = false
  } */
  navlist.classList.toggle('open')
});

console.log(Array(menu))

window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x')
navlist.classList.remove('open')
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items');
    } else {
      entry.target.classList.remove('show-items')
    }
  })
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => {
  observer.observe(el)
})

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => {
  observer.observe(el)
});

const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => {
  observer.observe(el)
})

