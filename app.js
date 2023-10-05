document.addEventListener("keydown",keyhandler);
document.addEventListener("keyup",keyhandler);
const paragraf = document.getElementById('story');

let sentences = 'Ini adalah kalimat yang harus diketik nanti'
story.innerText = sentences
sentences = sentences.split('')
let index = 0
console.log(sentences)
wrap()

function wrap() {

    paragraf.innerHTML = ''

    for (let count = 0; count < sentences.length; count++) {

        const char = sentences[count]

        const span = document.createElement('span')

        span.classList.add(char === ' ' ? `space-${count}` : `${char}-${count}`)

        span.innerText = char

        story.appendChild(span)
    }
}

function keyhandler(e) {

    const char = e.key.toLowerCase();

    const element = document.getElementById(char === ' ' ? 'space' : char)

    switch (e.type) {

        case "keydown":

            if(!e.shiftKey && char === sentences[index]) {

                element.classList.add('border-2', 'border-zinc-500', 'shadow-lg', 'text-bold')

                if(char !== ' ')
                    document.getElementsByClassName(`${char}-${index}`)[0].classList.add('text-green-600');

                console.log('berhasil')

                index++

            } else if(e.shiftKey && char.toUpperCase() === sentences[index]) {

                element.classList.add('border-2', 'border-zinc-500', 'shadow-lg')
                
                const charWrapper = document.getElementsByClassName(`${char.toUpperCase()}-${index}`)[0]

                charWrapper.classList.add('text-green-600')

                console.log(char.toUpperCase(), index)

                index++

            } else {

                document.getElementsByClassName(`${sentences[index]}-${index}`)[0].classList.add('text-red-500')

            }

            break;
    
        case "keyup":

            console.log(' diangkat')

            element.classList.remove('border-2', 'border-zinc-500', 'shadow-lg')

            break;
    }
}

