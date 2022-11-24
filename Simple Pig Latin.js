const pigIt = (str) => str.split(' ').map(el => /[a-z]/i.test(el) ? el.slice(1) + el[0] + 'ay' : el).join(' ')
