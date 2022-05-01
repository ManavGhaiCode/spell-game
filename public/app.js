(async function() {
    const currentSpelling = document.querySelector('#current-spelling');
    const rw = document.querySelector('#rw');
    const input = document.querySelector('input[type=text]');
    
    let currentWordIndex = 0;
    let score = 0;
    
    const sleep = sec => {
        return new Promise(res => setTimeout(res, (sec * 1000)));
    }

    const spellCheak = (el, spelling) => {
        console.log(el.value);
        console.log(spelling);

        if (el.value != spelling.trim()) {
            return false;
        } else {
            return true;
        }
    }

    input.addEventListener('keydown',async e => {
        if (e.key === 'Enter') {
            if (spellCheak(input, words[currentWordIndex]) === true) {
                score++;

                input.classList.add('hidden');
                
                rw.textContent = 'yay, right!'
                rw.classList.remove('hidden');

                currentWordIndex++;

                await sleep(1);
                rw.classList.add('hidden');
            } else {
                input.classList.add('hidden');
                
                rw.textContent = 'nay, wrong!'
                rw.classList.remove('hidden');

                currentWordIndex++;

                await sleep(1);
                rw.classList.add('hidden');
            }
        }
    })

    const main = async () => {
        for (word in words) {
            if (currentWordIndex === 0) {
                await sleep(10);

                currentSpelling.classList.add('hidden');
                input.classList.remove('hidden');
            } else {
                currentSpelling.textContent = `Learn this spelling: ${words[currentWordIndex]}`;

                currentSpelling = document.querySelector('#current-spelling');
                currentSpelling.textContent = word[currentWordIndex];

                console.log(words[currentWordIndex]);

                currentSpelling.classList.add('hidden');

                await sleep(10);

                currentSpelling.classList.add('hidden');
                input.classList.remove('hidden');
            }
        }
    }

    main();
}())