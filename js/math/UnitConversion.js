/**
 * helps converting CSS units so that they are more usable in JavaScript
 */
export default class UnitConversion {
    /**
     * Converts CSS centimeters to CSS pixels.
     * Pixels are the unit you want to work with in JavaScript.
     * @see https://mzl.la/2xAwniR
     * @param {number} cm - value that will be converted to px
     * @returns {number} input value in px
     * @example
     *   UnitConversion.cmToPx(0) //is 0
     *   UnitConversion.cmToPx(2.54/96) //is 1
     */
    static cmToPx(cm) {
        return cm * 96/2.54;
    }

    /**
     * Converts CSS millimeters to CSS pixels.
     * Pixels are the length unit you want to work with in JavaScript.
     * @see https://mzl.la/2LiyyK3
     * @param {number} mm - value that will be converted to px
     * @returns {number} input value in px
     * @example
     *   UnitConversion.mmToPx(0) //is 0
     *   UnitConversion.mmToPx(25.4/96) //is 1
     */
    static mmToPx(mm) {
        return this.cmToPx(mm/10);
    }

    /**
     * Converts CSS quarters of millimeters to CSS pixels.
     * The Q unit is an experimental unit and is not supported in most
     * browsers.
     * Pixels are the length unit you want to work with in JavaScript.
     * @see https://mzl.la/2LPH9Vr
     * @param {number} Q - value that will be converted to px
     * @returns {number} input value in px
     * @example
     *   UnitConversion.qToPx(0) //is 0
     *   UnitConversion.qToPx(101.6/96) //is 1
     */
    static qToPx(Q) {
        return this.mmToPx(Q/4);
    }

    /**
     * Converts CSS inches to CSS pixels.
     * Pixels are the length unit you want to work with in JavaScript.
     * @see https://mzl.la/2LRYRrv
     * @param {number} inches - value that will be converted to px
     * @returns {number} input value in px
     * @example
     *   UnitConversion.inToPx(0) //is 0
     *   UnitConversion.inToPx(1/96) //is 1
     */
    static inToPx(inches) {
        return inches * 96;
    }

    /**
     * Converts CSS picas to CSS pixels.
     * Pixels are the length unit you want to work with in JavaScript.
     * @see https://mzl.la/2kGAJf8
     * @param {number} pc - value that will be converted to px
     * @returns {number} input value in px
     * @example
     *   UnitConversion.pcToPx(0) //is 0
     *   UnitConversion.pcToPx(6/96) //is 1
     */
    static pcToPx(pc) {
        return this.inToPx(pc/6);
    }

    /**
     * Converts CSS points to CSS pixels.
     * Pixels are the length unit you want to work with in JavaScript.
     * @see https://mzl.la/2kGBk0m
     * @param {number} pt - value that will be converted to px
     * @returns {number} input value in px
     * @example
     *   UnitConversion.ptToPx(0) //is 0
     *   UnitConversion.ptToPx(72/96) //is 1
     */
    static ptToPx(pt) {
        return this.inToPx(pt/72);
    }

    /**
     * Converts CSS <length>s to CSS pixels.
     * Pixels are the length unit you want to work with in JavaScript.
     * @param {number} val - value that will be converted to px
     * @param {string} unit - unit of the input value
     * @returns {number} input value converted to px
     * @throws {Error} throws '<unit> is not a known unit' if the unit
     *   isn't supported (yet). In case you need other units, please
     *   contribute.
     * @example
     *   UnitConversion.toPx(72/96, 'pt') //is 1
     *   UnitConversion.toPx(0.00000001, 'light-years') //throws an error
     */
    static toPx(val, unit) {
        switch(unit) {
        case 'px':
            return val;
        case 'cm':
            return this.cmToPx(val);
        case 'mm':
            return this.mmToPx(val);
        case 'Q':
            return this.qToPx(val);
        case 'in':
            return this.inToPx(val);
        case 'pc':
            return this.pcToPx(val);
        case 'pt':
            return this.ptToPx(val);
        default:
            throw unit + ' is not a known unit';
        }
    }

    /**
     * Parses and converts CSS <length>s in strings to CSS pixels.
     * Pixels are the length unit you want to work with in JavaScript.
     * @todo bug: numbers with '.' don't work. Change Regex
     * @param {string} val - length string from a CSS property
     * @returns {number | void} input value converted to px
     * @throws {Error} throws "can't parse value" if the string isn't
     *   formatted well.
     * @example
     *   UnitConversion.stringToPx('0pt') //is 0
     *   UnitConversion.stringToPx('ABC0.01DEF') //throws an error
     */
    static stringToPx(val) {
        const parsed = val.split(/(\d+)/);

        //returns undefined if string can't be processed,
        //e.g. when it doesn't have a unit
        if(parsed.length < 2) {
            throw "can't parse value";
        }

        return this.toPx(
            parseInt(parsed.slice(0, -1).join('')),
            parsed[parsed.length-1].trim()
        );
    }
}
