class NOAATextProduct {
    constructor(text) {
        let match = text.match(/000\n(.+\n){2}\n/);
        this.productHeader = match[0];
        this.text = text.substr(match.index + match[0].length);
    }
}


class NOAADiscussion extends NOAATextProduct{
    constructor(text) {
        super(text);

        if (this.text.indexOf('$$') !== -1) {
            this.text = this.text.substr(0, this.text.indexOf('$$'));
        }

        let match = this.text.match(/(.+\n)+\n\./);
        if (match !== null) {
            this.header = match[0].substr(0, match[0].length - 3);
            this.text = this.text.substr(match.index + match[0].length - 1);
        }

        const regexSection = /[\n\.]{1}([A-Z /]+)\.{3}/;
        this.sections = [];

        match = this.text.match(regexSection);
        while(match !== null) {
            this.text = this.text.substr(match.index + match[0].length);
            let section = {
                'header': match[1]
            };
            this.sections.push(section);
            this.parseSection(section);
            match = this.text.match(regexSection);
        }
    }

    parseSection(section) {
        let match = this.text.match(/[&]{2}|\.([A-Z /]+)\.{3}/);
        section['text'] = this.text.substr(0, match.index)
            .split('\n\n')
            .filter(t => t !== '')
            .map(t => t.replace(/\n/g, ' '))
            .join('\n');
        this.text = this.text.substr(match.index);
    }
}
