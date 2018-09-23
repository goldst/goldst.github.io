## Functions

<dl>
<dt><a href="#vector">vector(p0, p1)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>creates vector between points p0 and p1 of equal dimensions</p>
</dd>
<dt><a href="#vectorAdd">vectorAdd(v0, v1)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>adds vector or point v0 to vector or point v1</p>
</dd>
<dt><a href="#vectorMultiply">vectorMultiply(v, n)</a> ⇒ <code>number</code></dt>
<dd><p>Multiplies a vector with a number.</p>
</dd>
<dt><a href="#vectorDotProduct">vectorDotProduct(v0, v1)</a> ⇒ <code>Array.&lt;number&gt;</code> | <code>void</code></dt>
<dd><p>calculates the dot product of two vectors of equal dimensions</p>
</dd>
<dt><a href="#vectorLength">vectorLength(v)</a> ⇒ <code>number</code></dt>
<dd><p>calculates the length of a vector using the euclidean distance</p>
</dd>
<dt><a href="#distance">distance(p0, p1)</a> ⇒ <code>number</code></dt>
<dd><p>calculates the euclidean distance between two points</p>
</dd>
<dt><a href="#innerProductAngle">innerProductAngle(v0, v1)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>calculates the inner inner product angle in rad  of two vectors of
equal dimensions</p>
</dd>
<dt><a href="#shortestDistance">shortestDistance(O, P0, P1)</a> ⇒ <code>number</code></dt>
<dd><p>calculates the shortest distance between a point O
and a line, defined through two points p0 and p1</p>
</dd>
</dl>

<a name="vector"></a>

## vector(p0, p1) ⇒ <code>Array.&lt;number&gt;</code>
creates vector between points p0 and p1 of equal dimensions

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - the vector from the input points  
**Throws**:

- <code>Error</code> 'input lengths are not equal' if p0 & p1 have
  different lengths (= different number of dimensions)


| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>Array.&lt;number&gt;</code> | first point |
| p1 | <code>Array.&lt;number&gt;</code> | second point |

**Example**  
```js
LinearAlgebra.vector([0, 0], [0, 0]) //is equal to [0, 0]
```
**Example**  
```js
const
      p0 = [0, 2, 3, 1],
      p1 = [2, 4, 5, 3];
  LinearAlgebra.vector(p0, p1) //is equal to [2, 2, 2, 2]
  linearAlgebra.vector([1, 2], [3, 4, 5]); //throws an error
```
<a name="vectorAdd"></a>

## vectorAdd(v0, v1) ⇒ <code>Array.&lt;number&gt;</code>
adds vector or point v0 to vector or point v1

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - the sum of the inputs  
**Throws**:

- <code>Error</code> 'input lengths are not equal' if v0 & v1 have
  different lengths (= different number of dimensions)


| Param | Type | Description |
| --- | --- | --- |
| v0 | <code>Array.&lt;number&gt;</code> | first summand |
| v1 | <code>Array.&lt;number&gt;</code> | second summand |

**Example**  
```js
LinearAlgebra.vectorAdd([0, 1], [2, 3]) //is equal to [2, 4]
  LinearAlgebra.vectorAdd([0], [1, 2, 3]) //throws an error
```
<a name="vectorMultiply"></a>

## vectorMultiply(v, n) ⇒ <code>number</code>
Multiplies a vector with a number.

**Kind**: global function  
**Returns**: <code>number</code> - output vector  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Array.&lt;number&gt;</code> | input vector |
| n | <code>number</code> | input number |

**Example**  
```js
LinearAlgebra.vectorMultiply([1, -2, 0], 2)
  //is equal to [2, -4, 0]
```
<a name="vectorDotProduct"></a>

## vectorDotProduct(v0, v1) ⇒ <code>Array.&lt;number&gt;</code> \| <code>void</code>
calculates the dot product of two vectors of equal dimensions

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>void</code> - dot product  
**Throws**:

- <code>Error</code> 'input lengths are not equal' if v0 & v1 have
  different lengths (= different number of dimensions)


| Param | Type | Description |
| --- | --- | --- |
| v0 | <code>Array.&lt;number&gt;</code> | first vector |
| v1 | <code>Array.&lt;number&gt;</code> | second vector |

**Example**  
```js
LinearAlgebra.vectorDotProduct([1, 1], [1, -1]) //is 0
```
<a name="vectorLength"></a>

## vectorLength(v) ⇒ <code>number</code>
calculates the length of a vector using the euclidean distance

**Kind**: global function  
**Returns**: <code>number</code> - length of the input vector  
**See**: https://en.wikipedia.org/wiki/Euclidean_distance  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Array.&lt;number&gt;</code> | input vector, described through an array |

**Example**  
```js
LinearAlgebra.vectorLength([4, 4, -4, 4]) //is 8
```
<a name="distance"></a>

## distance(p0, p1) ⇒ <code>number</code>
calculates the euclidean distance between two points

**Kind**: global function  
**Returns**: <code>number</code> - distance between p0 and p1  
**Throws**:

- <code>Error</code> 'input lengths are not equal' if p0 & p1 have
  different lengths (= different number of dimensions)


| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>Array.&lt;number&gt;</code> | first point |
| p1 | <code>Array.&lt;number&gt;</code> | second point |

**Example**  
```js
LinearAlgebra.distance([0, 1, 2, 3], [4, -3, 6, 7]) //is 8
  LinearAlgebra.distance([0, 1], [2]) //throws an error
```
<a name="innerProductAngle"></a>

## innerProductAngle(v0, v1) ⇒ <code>Array.&lt;number&gt;</code>
calculates the inner inner product angle in rad  of two vectors of
equal dimensions

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - inner product angle  
**Throws**:

- <code>Error</code> 'input lengths are not equal' if p0 & p1 have
  different lengths (= different number of dimensions)

**See**: https://commons.wikimedia.org/wiki/File:Inner-product-angle.png  

| Param | Type | Description |
| --- | --- | --- |
| v0 | <code>Array.&lt;number&gt;</code> | first vector |
| v1 | <code>Array.&lt;number&gt;</code> | second vector |

**Example**  
```js
const v0 = [1, 0], v1 = [0, 1];
  LinearAlgebra.innerProductAngle(v0, v1) === Math.PI/2 //is true
```
**Example**  
```js
LinearAlgebra.innerProductAngle([0, 1], [2]) //throws an error
```
<a name="shortestDistance"></a>

## shortestDistance(O, P0, P1) ⇒ <code>number</code>
calculates the shortest distance between a point O
and a line, defined through two points p0 and p1

**Kind**: global function  
**Returns**: <code>number</code> - distance between a and the closest point on
         the line  
**Throws**:

- <code>Error</code> 'input lengths are not equal' if O, P0 & P1 have
  different lengths (= different number of dimensions)


| Param | Type | Description |
| --- | --- | --- |
| O | <code>Array.&lt;number&gt;</code> | point where the distance starts |
| P0 | <code>Array.&lt;number&gt;</code> | point 1 of the line on which the ending          point of the distance lies |
| P1 | <code>Array.&lt;number&gt;</code> | point 2 of the line on which the ending          point of the distance lies |

**Example**  
```js
LinearAlgebra.shortestDistance([0, 0],
                                 [1, 1],
                                 [2, 1]) //is 1
  LinearAlgebra.shortestDistance([1], [2, 3], [4])
  //throws an error
```
