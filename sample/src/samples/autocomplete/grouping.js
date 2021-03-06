export class BasicUse {
  constructor() {
    this.width = '100%';
    this.fields = { groupBy: 'category' };
    this.filterType = ej.filterType.Contains;
    this.countries = [
                 { text: 'Austria', category: 'A' },
                 { text: 'Australia', category: 'A' }, { text: 'Antarctica', category: 'A' },
                 { text: 'Bangladesh', category: 'B' }, { text: 'Belgium', category: 'B' },
                 { text: 'Brazil', category: 'B' },
                 { text: 'Canada', category: 'C' }, { text: 'China', category: 'C' },
                 { text: 'Cuba', category: 'C' },
                 { text: 'Denmark', category: 'D' }, { text: 'Dominica', category: 'D' },
                 { text: 'Europe', category: 'E' }, { text: 'Egypt', category: 'E' },
                 { text: 'England', category: 'E' },
                 { text: 'India', category: 'I' }, { text: 'Indonesia', category: 'I' },
                 { text: 'Ireland', category: 'I' }, { text: 'Italy', category: 'I' },
                 { text: 'France', category: 'F' }, { text: 'Finland', category: 'F' },
                 { text: 'Germany', category: 'G' }, { text: 'Greece', category: 'G' },
                 { text: 'Greenland', category: 'G' }, { text: 'Georgia', category: 'G' },
                 { text: 'Haiti', category: 'H' }, { text: 'Hong Kong', category: 'H' },
                 { text: 'Japan', category: 'J' }, { text: 'Jordan', category: 'J' },
                 { text: 'Jamaica', category: 'J' }, { text: 'Kenya', category: 'K' },
                 { text: 'Kuwait', category: 'K' }, { text: 'Korea', category: 'K' },
                 { text: 'Latvia', category: 'L' }, { text: 'Lebanon', category: 'L' },
                 { text: 'Leichenstein', category: 'L' }, { text: 'Malaysia', category: 'M' },
                 { text: 'Mexico', category: 'M' }, { text: 'Mozambique', category: 'M' },
                 { text: 'Madagascar', category: 'M' }, { text: 'Midway Islands', category: 'M' },
                 { text: 'Nepal', category: 'N' }, { text: 'Netherlands', category: 'N' },
                 { text: 'New Zealand', category: 'N' }, { text: 'Nigeria', category: 'N' },
                 { text: 'Oman', category: 'O' }, { text: 'Philippines', category: 'P' },
                 { text: 'Poland', category: 'P' }, { text: 'Portugal', category: 'P' },
                 { text: 'Qatar', category: 'Q' }, { text: 'Romania', category: 'R' },
                 { text: 'Russia', category: 'R' }, { text: 'Singapore', category: 'S' },
                 { text: 'Switzerland', category: 'S' }, { text: 'Sweden', category: 'S' },
                 { text: 'Scotland', category: 'S' }, { text: 'Tibet', category: 'T' },
                 { text: 'Turkey', category: 'T' }, { text: 'Ukraine', category: 'U' },
                 { text: 'United States', category: 'U' }, { text: 'Uruguay', category: 'U' },
                 { text: 'Vatican City', category: 'V' }, { text: 'Vietnam', category: 'V' },
                 { text: 'Western Sahara', category: 'W' }, { text: 'Wales', category: 'W' },
                 { text: 'Yemen', category: 'Y' }, { text: 'Yugoslavia', category: 'Y' },
                 { text: 'Zambia', category: 'Z' }, { text: 'Zimbabwe', category: 'Z' }
    ];
  }

}
