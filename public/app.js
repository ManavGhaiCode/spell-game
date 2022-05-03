(async function code() {
    const currentSpelling = document.querySelector('#current-spelling');
    const rw = document.querySelector('#rw');
    const score = document.querySelector('#score');
    const input = document.querySelector('input[type=text]');
    
    let currentWordIndex = 0;
    let points = 0;
    
    const sleep = sec => {
        return new Promise(res => setTimeout(res, (sec * 1000)));
    }

    const spellCheak = (el, spelling) => {
        if (el.value != spelling.trim()) {
            return false;
        } else {
            return true;
        }
    }

    input.addEventListener('keydown',async e => {
        if (e.key === 'Enter') {
            if (spellCheak(input, words[currentWordIndex]) === true) {
                points++;

                input.classList.add('hidden');
                
                rw.textContent = 'yay, right!'
                rw.classList.remove('hidden');

                currentWordIndex++;

                await sleep(1);
                rw.classList.add('hidden');

                currentSpelling.classList.remove('hidden');
                currentSpelling.textContent = `Learn this spelling: ${words[currentWordIndex]}`;
            } else {
                input.classList.add('hidden');
                
                rw.textContent = 'nay, wrong!'
                rw.classList.remove('hidden');

                currentWordIndex++;

                await sleep(1);
                rw.classList.add('hidden');

                currentSpelling.classList.remove('hidden');
                currentSpelling.textContent = `Learn this spelling: ${words[currentWordIndex]}`;
            }
        }
    })

    const main = async () => {
        for (word in words) {
            await sleep(10);

            currentSpelling.classList.add('hidden');
            input.classList.remove('hidden');
        }

        currentSpelling.classList.add('hidden');
        input.classList.add('hidden');
        rw.classList.add('hidden');
    
        score.textContent = `Your score is: ${points}`;
    
        score.classList.remove('hidden');
    
        const data = {
            points,
            pointsPercentage: `${((points / 10) * 100)}%`
        }
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    
        console.log(JSON.stringify(data))
    
        fetch('/save-score', options);
    }

    main();
}())