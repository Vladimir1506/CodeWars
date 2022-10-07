function DNAStrand(dna) {
    return dna.split('').map(symb => symb === 'T' ? 'A' : symb === 'A' ? 'T' : symb === 'C' ? 'G' : symb === 'G' ? 'C' : symb).join('')
}