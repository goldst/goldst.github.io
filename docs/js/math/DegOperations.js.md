## Functions

<dl>
<dt><a href="#rad">rad(d)</a> ⇒ <code>number</code></dt>
<dd><p>converts radians to degrees</p>
</dd>
<dt><a href="#deg">deg(r)</a> ⇒ <code>number</code></dt>
<dd><p>converts degrees to radians</p>
</dd>
<dt><a href="#sinDeg">sinDeg(a)</a> ⇒ <code>number</code></dt>
<dd><p>calculates sines with value in degrees</p>
</dd>
<dt><a href="#cosDeg">cosDeg(a)</a> ⇒ <code>number</code></dt>
<dd><p>calculates cosines with value in degrees</p>
</dd>
<dt><a href="#tanDeg">tanDeg(a)</a> ⇒ <code>number</code></dt>
<dd><p>calculates tangent with value in degrees</p>
</dd>
<dt><a href="#atanDeg">atanDeg(x)</a> ⇒ <code>number</code></dt>
<dd><p>calculates arctangent in degrees</p>
</dd>
<dt><a href="#ascent">ascent(p0, p1)</a> ⇒ <code>number</code></dt>
<dd><p>calculates ascent of two two-dimentsional points in radians</p>
</dd>
<dt><a href="#ascentDeg">ascentDeg(p0, p1)</a> ⇒ <code>number</code></dt>
<dd><p>calculates ascent of two two-dimentsional points in degrees</p>
</dd>
<dt><a href="#simplifyRotation">simplifyRotation(val)</a> ⇒ <code>number</code></dt>
<dd><p>Sometimes, it&#39;s inpractical when the angles are bigger than a half
turn or smaller than -a half turn. This function aims to avoid this
problem by &#39;normalizing&#39; the value</p>
</dd>
</dl>

<a name="rad"></a>

## rad(d) ⇒ <code>number</code>
converts radians to degrees

**Kind**: global function  
**Returns**: <code>number</code> - number in radians  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>number</code> | number in degree |

**Example**  
```js
DegOperations.rad(0) //is 0
  DegOperations.rad(90) === Math.PI/2 //is true
  DegOperations.rad(180) === Math.PI //is true
```
<a name="deg"></a>

## deg(r) ⇒ <code>number</code>
converts degrees to radians

**Kind**: global function  
**Returns**: <code>number</code> - number in degree  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | number in radians |

**Example**  
```js
DegOperations.deg(0) //is 0
  DegOperations.deg(Math.PI) //is 180
```
<a name="sinDeg"></a>

## sinDeg(a) ⇒ <code>number</code>
calculates sines with value in degrees

**Kind**: global function  
**Returns**: <code>number</code> - sines value  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | abscissa for the sines function in degrees |

**Example**  
```js
DegOperations.sinDeg(0)  //is 0
  DegOperations.sinDeg(90) //is 1
```
<a name="cosDeg"></a>

## cosDeg(a) ⇒ <code>number</code>
calculates cosines with value in degrees

**Kind**: global function  
**Returns**: <code>number</code> - cosines value  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | abscissa for the cosines function in degrees |

**Example**  
```js
DegOperations.cosDeg(0)   //is 1
  DegOperations.cosDeg(90)  //is 0
  DegOperations.cosDeg(180) //is -1
  DegOperations.cosDeg(270) //is 0
```
<a name="tanDeg"></a>

## tanDeg(a) ⇒ <code>number</code>
calculates tangent with value in degrees

**Kind**: global function  
**Returns**: <code>number</code> - tangent value  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | abscissa for the tangent function in degrees |

**Example**  
```js
DegOperations.tanDeg(0)  //is 0
  DegOperations.tanDeg(90) //is 16331239353195370
```
<a name="atanDeg"></a>

## atanDeg(x) ⇒ <code>number</code>
calculates arctangent in degrees

**Kind**: global function  
**Returns**: <code>number</code> - arctangent value in degrees  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | abscissa for the arctangent function |

**Example**  
```js
DegOperations.atanDeg(0) //is 0
  DegOperations.atanDeg(16331239353195370) //is 90
```
<a name="ascent"></a>

## ascent(p0, p1) ⇒ <code>number</code>
calculates ascent of two two-dimentsional points in radians

**Kind**: global function  
**Returns**: <code>number</code> - ascent in rad  

| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>Array.&lt;number&gt;</code> | first of two two-dimensional points |
| p1 | <code>Array.&lt;number&gt;</code> | second of two two-dimensional points |

**Example**  
```js
const p0 = [0, 0],
      p1 = [1, 1];
  DegOperations.ascent(p0, p1) === Math.PI/4 //is true
```
**Example**  
```js
const p0 = [0, 0],
      p1 = [1, 0];
  DegOperations.ascent(p0, p1) //is 0
```
<a name="ascentDeg"></a>

## ascentDeg(p0, p1) ⇒ <code>number</code>
calculates ascent of two two-dimentsional points in degrees

**Kind**: global function  
**Returns**: <code>number</code> - ascent in deg  

| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>Array.&lt;number&gt;</code> | first of two two-dimensional points |
| p1 | <code>Array.&lt;number&gt;</code> | second of two two-dimensional points |

**Example**  
```js
const p0 = [0, 0],
      p1 = [1, 1];
  DegOperations.ascentDeg(p0, p1) //is 45
```
**Example**  
```js
const p0 = [0, 0],
      p1 = [1, 0];
  DegOperations.ascentDeg(p0, p1) //is 0
```
<a name="simplifyRotation"></a>

## simplifyRotation(val) ⇒ <code>number</code>
Sometimes, it's inpractical when the angles are bigger than a half
turn or smaller than -a half turn. This function aims to avoid this
problem by 'normalizing' the value

**Kind**: global function  
**Returns**: <code>number</code> - angle between -πrad and πrad  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | initial angle in rad that might be too big or   small |

**Example**  
```js
DegOperations.simplifyRotation(0) //is 0
  DegOperations.simplifyRotation(2 * Math.PI) //is 0
  DegOperations.simplifyRotation(10 * Math.PI + 1) //is 1
```
