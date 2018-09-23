## Members

<dl>
<dt><a href="#X">X</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#Y">Y</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#Z">Z</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#XY">XY</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#XYZ">XYZ</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#matrix">matrix(M)</a> ⇒ <code>Point4d</code></dt>
<dd><p>Return a transformed point using a 2d (3x3 homogenous) matrix.
z coordinate remains unchanged.</p>
</dd>
<dt><a href="#matrix3d">matrix3d(M)</a> ⇒ <code>Point4d</code></dt>
<dd><p>returns a transformed point using a 3d (4x4 homogenous) matrix</p>
</dd>
<dt><a href="#perspective">perspective(d)</a> ⇒ <code>Point4d</code></dt>
<dd><p>returns a transformed point like CSS &#39;transform: perspective(d)&#39;
does</p>
</dd>
<dt><a href="#rotate">rotate(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: rotate(a)&#39; does</p>
</dd>
<dt><a href="#rotate3d">rotate3d(x, y, z, a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: rotate3d(x, y, z, a)&#39; does</p>
</dd>
<dt><a href="#rotateX">rotateX(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: rotateX(a)&#39; does</p>
</dd>
<dt><a href="#rotateY">rotateY(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: rotateY(a)&#39; does</p>
</dd>
<dt><a href="#rotateZ">rotateZ(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: rotateZ(a)&#39; does</p>
</dd>
<dt><a href="#scale">scale(x, [y])</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: scale(x, y)&#39; does</p>
</dd>
<dt><a href="#scale3d">scale3d(x, y, z)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: scale3d(x, y, z)&#39; does</p>
</dd>
<dt><a href="#scaleX">scaleX(s)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: scaleX(s)&#39; does</p>
</dd>
<dt><a href="#scaleY">scaleY(s)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: scaleY(s)&#39; does</p>
</dd>
<dt><a href="#scaleZ">scaleZ(s)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: scaleZ(s)&#39; does</p>
</dd>
<dt><a href="#skew">skew(x, [y])</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: skew(x, y)&#39; does</p>
</dd>
<dt><a href="#skewX">skewX(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: skewX(a)&#39; does</p>
</dd>
<dt><a href="#skewY">skewY(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: skewY(a)&#39; does</p>
</dd>
<dt><a href="#translate">translate(x, [y])</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: translate(x, y)&#39; does</p>
</dd>
<dt><a href="#translate3d">translate3d(x, y, z)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: translate3d(x, y, z)&#39; does</p>
</dd>
<dt><a href="#translateX">translateX(t)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: translateX(t)&#39; does</p>
</dd>
<dt><a href="#translateY">translateY(t)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: translateY(t)&#39; does</p>
</dd>
<dt><a href="#translateZ">translateZ(t)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms point like CSS &#39;transform: translateZ(t)&#39; does</p>
</dd>
</dl>

<a name="X"></a>

## X ⇒ <code>number</code>
**Kind**: global variable  
**Returns**: <code>number</code> - cartesian x-coordinate  
**Example**  
```js
new Point4d(1, 2, 3, 4).X //is 0.25
```
<a name="Y"></a>

## Y ⇒ <code>number</code>
**Kind**: global variable  
**Returns**: <code>number</code> - cartesian y-coordinate  
**Example**  
```js
new Point4d(1, 2, 3, 4).Y //is 0.5
```
<a name="Z"></a>

## Z ⇒ <code>number</code>
**Kind**: global variable  
**Returns**: <code>number</code> - cartesian z-coordinate  
**Example**  
```js
new Point4d(1, 2, 3, 4).Z //is 0.75
```
<a name="XY"></a>

## XY ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global variable  
**Returns**: <code>Array.&lt;number&gt;</code> - cartesian x- and y-coordinates  
**Example**  
```js
new Point4d(1, 2, 3, 4).XY //is equal to [0.25, 0.5]
```
<a name="XYZ"></a>

## XYZ ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global variable  
**Returns**: <code>Array.&lt;number&gt;</code> - cartesian x-, y- and z-coordinates  
**Example**  
```js
new Point4d(1, 2, 3, 4).XYZ //is equal to [0.25, 0.5, 0.75]
```
<a name="matrix"></a>

## matrix(M) ⇒ <code>Point4d</code>
Return a transformed point using a 2d (3x3 homogenous) matrix.
z coordinate remains unchanged.

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  

| Param | Type | Description |
| --- | --- | --- |
| M | <code>Array.&lt;number&gt;</code> | 3x3 homogenous transformation matrix |

**Example**  
```js
const M = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 1]
  ];
  new Point4d(1, 2).matrix(M).XY //is equal to [2, 2]
```
<a name="matrix3d"></a>

## matrix3d(M) ⇒ <code>Point4d</code>
returns a transformed point using a 3d (4x4 homogenous) matrix

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  

| Param | Type | Description |
| --- | --- | --- |
| M | <code>Array.&lt;number&gt;</code> | 4x4 homogenous transformation matrix |

**Example**  
```js
const M = [
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
  ];
  new Point4d(1, 2, 3).matrix3d(M).XYZ //is equal to [2, 3, 3]
```
<a name="perspective"></a>

## perspective(d) ⇒ <code>Point4d</code>
returns a transformed point like CSS 'transform: perspective(d)'
does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2IIQUqD  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>Number</code> | Distance from the user to the z=0 plane.   If it is 0 or a negative value, no perspective transform is   applied. In px. |

**Example**  
```js
new Point4d(2, 2, 2, 2).perspective(2).t //is 1
  new Point4d(2, 2).perspective(-2).t //is 1
```
<a name="rotate"></a>

## rotate(a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: rotate(a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2IJlqRh  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle   denotes a clockwise rotation, a negative angle a   counter-clockwise one. In deg. |

**Example**  
```js
new Point4d(1, 0).rotate(90).XY //is equal to [0, 1]
```
<a name="rotate3d"></a>

## rotate3d(x, y, z, a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: rotate3d(x, y, z, a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2s5Wt89  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | x-coordinate of the vector denoting the axis   of rotation which could between 0 and 1. |
| y | <code>Number</code> | y-coordinate of the vector denoting the axis   of rotation which could between 0 and 1. |
| z | <code>Number</code> | z-coordinate of the vector denoting the axis   of rotation which could between 0 and 1. |
| a | <code>Number</code> | angle of the rotation. A positive angle   denotes a clockwise rotation, a negative angle a   counter-clockwise one. In deg. |

**Example**  
```js
new Point4d(-1, -1, 0).rotate3d(0, 1, 0, 90).XYZ
  //is equal to [0, -1, -1]
```
<a name="rotateX"></a>

## rotateX(a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: rotateX(a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2x6ZhqF  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle denotes   a clockwise rotation, a negative angle a counter-clockwise one.   In deg. |

**Example**  
```js
new Point4d(0, -1).rotateX(180).XY //is equal to [0, 1]
```
<a name="rotateY"></a>

## rotateY(a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: rotateY(a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2KQt6xx  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle denotes   a clockwise rotation, a negative angle a counter-clockwise one.   In deg. |

**Example**  
```js
new Point4d(-1, 0).rotateY(180).XY //is equal to [1, 0]
```
<a name="rotateZ"></a>

## rotateZ(a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: rotateZ(a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2KTCkcD  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle denotes   a clockwise rotation, a negative angle a counter-clockwise one.   In deg. |

**Example**  
```js
new Point4d(1, 0).rotate(90).XY //is equal to [0, 1]
```
<a name="scale"></a>

## scale(x, [y]) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: scale(x, y)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2IMSlAu  
**Todo**

- [ ] didn't test ES6 version yet. test.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | abscissa of the scaling vector |
| [y] | <code>Number</code> | <code>x</code> | Ordinate of the scaling vector. If not   defined, its default value is x, resulting in a uniform scaling   that preserves the element's aspect ratio. |

**Example**  
```js
new Point4d(1, 2).scale(3, 4).XY //is equal to [3, 8]
```
**Example**  
```js
new Point4d(1, 2).scale(3).XY //is equal to [3, 6]
```
<a name="scale3d"></a>

## scale3d(x, y, z) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: scale3d(x, y, z)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2IJ2MVC  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | abscissa of the scaling vector |
| y | <code>Number</code> | ordinate of the scaling vector |
| z | <code>Number</code> | z-component of the scaling vector |

**Example**  
```js
new Point4d(1, 2, 3).scale3d(6, 5, 4).XYZ
  //is equal to [6, 10, 12]
```
<a name="scaleX"></a>

## scaleX(s) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: scaleX(s)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2kp9HZC  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>Number</code> | scaling factor to apply on the abscissa   of each point of the element |

**Example**  
```js
new Point4d(1, 2).scaleX(3).XY //is equal to [3, 2]
```
<a name="scaleY"></a>

## scaleY(s) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: scaleY(s)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2J0TAzc  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>Number</code> | scaling factor to apply on the ordinate   of each point of the element |

**Example**  
```js
new Point4d(1, 2).scaleY(3).XY //is equal to [1, 6]
```
<a name="scaleZ"></a>

## scaleZ(s) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: scaleZ(s)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2KRKOB3  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>Number</code> | scaling factor to apply on the z-coordinate of   each point of the element |

**Example**  
```js
new Point4d(1, 2, 3).scaleZ(3).XYZ //is equal to [1, 2, 9]
```
<a name="skew"></a>

## skew(x, [y]) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: skew(x, y)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2kqeVnQ  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | Angle to use to distort the element along the   abscissa. In deg. |
| [y] | <code>Number</code> | <code>0</code> | Angle to use to distort the element along   the ordinate. In deg. |

**Example**  
```js
new Point4d(1, 2).skew(45).XY //is equal to [3, 2]
  new Point4d(1, 2).skew(45, -45).XY //is equal to [3, 1]
```
<a name="skewX"></a>

## skewX(a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: skewX(a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2xcKtXq  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle to use to distort the element along the   abscissa. In deg. |

**Example**  
```js
new Point4d(1, 2).skewX(45).X //is 3
```
<a name="skewY"></a>

## skewY(a) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: skewY(a)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2sgggBM  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle to use to distort the element along the   ordinate. In deg. |

**Example**  
```js
new Point4d(1, 2).skewY(45).XY //is equal to [1, 3]
```
<a name="translate"></a>

## translate(x, [y]) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: translate(x, y)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2IGzx9Q  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | Abscissa of the translating vector. In px. |
| [y] | <code>Number</code> | <code>0</code> | Ordinate of the translating vector. In px. |

**Example**  
```js
new Point4d(1, 2).translate(-2).XY //is equal to [-1, 2]
  new Point4d(1, 2).translate(-2, 3).XY //is equal to [-1, 5]
```
<a name="translate3d"></a>

## translate3d(x, y, z) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: translate3d(x, y, z)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2s5K6ZE  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Abscissa of the translating vector. In px. |
| y | <code>Number</code> | Ordinate of the translating vector. In px. |
| z | <code>Number</code> | z-component of the translating vector. In px. |

**Example**  
```js
new Point4d(1, 2, 3).translate3d(-3, -2, -1).XYZ
  //is equal to [-2, 0, 2]
```
<a name="translateX"></a>

## translateX(t) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: translateX(t)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2IL1kGm  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>Number</code> | Abscissa of the translating vector. In px. |

**Example**  
```js
new Point4d(1, 2).translateX(-2).X //is -1
```
<a name="translateY"></a>

## translateY(t) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: translateY(t)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2GOb0tH  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>Number</code> | Ordinate of the translating vector. In px. |

**Example**  
```js
new Point4d(1, 2).translateY(-2).XY //is equal to [1, 0]
```
<a name="translateZ"></a>

## translateZ(t) ⇒ <code>Point4d</code>
transforms point like CSS 'transform: translateZ(t)' does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2JeSLD3  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>Number</code> | z-component of the translating vector. A   positive value moves the element towards the viewer, and a   negative value further away. |

**Example**  
```js
new Point4d(1, 2, 3).translateZ(-2).XYZ //is equal to [1, 2, 1]
```
