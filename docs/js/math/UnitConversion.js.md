## Functions

<dl>
<dt><a href="#cmToPx">cmToPx(cm)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS centimeters to CSS pixels.
Pixels are the unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#mmToPx">mmToPx(mm)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS millimeters to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#qToPx">qToPx(Q)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS quarters of millimeters to CSS pixels.
The Q unit is an experimental unit and is not supported in most
browsers.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#inToPx">inToPx(inches)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS inches to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#pcToPx">pcToPx(pc)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS picas to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#ptToPx">ptToPx(pt)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS points to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#toPx">toPx(val, unit)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS <length>s to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
<dt><a href="#stringToPx">stringToPx(val)</a> ⇒ <code>number</code> | <code>void</code></dt>
<dd><p>Parses and converts CSS <length>s in strings to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.</p>
</dd>
</dl>

<a name="cmToPx"></a>

## cmToPx(cm) ⇒ <code>number</code>
Converts CSS centimeters to CSS pixels.
Pixels are the unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value in px  
**See**: https://mzl.la/2xAwniR  

| Param | Type | Description |
| --- | --- | --- |
| cm | <code>number</code> | value that will be converted to px |

**Example**  
```js
UnitConversion.cmToPx(0) //is 0
  UnitConversion.cmToPx(2.54/96) //is 1
```
<a name="mmToPx"></a>

## mmToPx(mm) ⇒ <code>number</code>
Converts CSS millimeters to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value in px  
**See**: https://mzl.la/2LiyyK3  

| Param | Type | Description |
| --- | --- | --- |
| mm | <code>number</code> | value that will be converted to px |

**Example**  
```js
UnitConversion.mmToPx(0) //is 0
  UnitConversion.mmToPx(25.4/96) //is 1
```
<a name="qToPx"></a>

## qToPx(Q) ⇒ <code>number</code>
Converts CSS quarters of millimeters to CSS pixels.
The Q unit is an experimental unit and is not supported in most
browsers.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value in px  
**See**: https://mzl.la/2LPH9Vr  

| Param | Type | Description |
| --- | --- | --- |
| Q | <code>number</code> | value that will be converted to px |

**Example**  
```js
UnitConversion.qToPx(0) //is 0
  UnitConversion.qToPx(101.6/96) //is 1
```
<a name="inToPx"></a>

## inToPx(inches) ⇒ <code>number</code>
Converts CSS inches to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value in px  
**See**: https://mzl.la/2LRYRrv  

| Param | Type | Description |
| --- | --- | --- |
| inches | <code>number</code> | value that will be converted to px |

**Example**  
```js
UnitConversion.inToPx(0) //is 0
  UnitConversion.inToPx(1/96) //is 1
```
<a name="pcToPx"></a>

## pcToPx(pc) ⇒ <code>number</code>
Converts CSS picas to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value in px  
**See**: https://mzl.la/2kGAJf8  

| Param | Type | Description |
| --- | --- | --- |
| pc | <code>number</code> | value that will be converted to px |

**Example**  
```js
UnitConversion.pcToPx(0) //is 0
  UnitConversion.pcToPx(6/96) //is 1
```
<a name="ptToPx"></a>

## ptToPx(pt) ⇒ <code>number</code>
Converts CSS points to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value in px  
**See**: https://mzl.la/2kGBk0m  

| Param | Type | Description |
| --- | --- | --- |
| pt | <code>number</code> | value that will be converted to px |

**Example**  
```js
UnitConversion.ptToPx(0) //is 0
  UnitConversion.ptToPx(72/96) //is 1
```
<a name="toPx"></a>

## toPx(val, unit) ⇒ <code>number</code>
Converts CSS <length>s to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> - input value converted to px  
**Throws**:

- <code>Error</code> throws '<unit> is not a known unit' if the unit
  isn't supported (yet). In case you need other units, please
  contribute.


| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | value that will be converted to px |
| unit | <code>string</code> | unit of the input value |

**Example**  
```js
UnitConversion.toPx(72/96, 'pt') //is 1
  UnitConversion.toPx(0.00000001, 'light-years') //throws an error
```
<a name="stringToPx"></a>

## stringToPx(val) ⇒ <code>number</code> \| <code>void</code>
Parses and converts CSS <length>s in strings to CSS pixels.
Pixels are the length unit you want to work with in JavaScript.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>void</code> - input value converted to px  
**Throws**:

- <code>Error</code> throws "can't parse value" if the string isn't
  formatted well.

**Todo**

- [ ] bug: numbers with '.' don't work. Change Regex


| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | length string from a CSS property |

**Example**  
```js
UnitConversion.stringToPx('0pt') //is 0
  UnitConversion.stringToPx('ABC0.01DEF') //throws an error
```
