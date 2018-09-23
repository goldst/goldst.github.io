## Functions

<dl>
<dt><a href="#linearDistanceAbsolute">linearDistanceAbsolute(absoluteOrigin, mousePosition)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#linearDistance">linearDistance(absoluteOrigin, mousePosition)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#simpleBellCurve">simpleBellCurve(absoluteOrigin, mousePosition)</a> ⇒ <code>number</code></dt>
<dd><p>Smoother way to do transformations than linear ones. Also based on
distance, but because of the way this function works the return
value stays longer at a value near to the maximum than a negative
linear function.</p>
</dd>
<dt><a href="#advBellCurve">advBellCurve(absoluteOrigin, mousePosition, [min], [max], [slope])</a> ⇒ <code>number</code></dt>
<dd><p>Smoother way to do transformations than linear ones, advanced and
optimized for real use. Also based on distance, but because of the
way this function works the return value stays longer at a value
near to the maximum than a negative linear function.</p>
</dd>
<dt><a href="#scaleBellCurve">scaleBellCurve(absoluteOrigin, mousePosition)</a> ⇒ <code>string</code></dt>
<dd><p>composes a complete smooth scaling transformation based on the
mouse pointer&#39;s distance to the transformation&#39;s origin</p>
</dd>
<dt><a href="#combined3d">combined3d(absoluteOrigin, mousePosition)</a> ⇒ <code>string</code></dt>
<dd><p>composes a complete smooth and light 3d transformation including
scaling and perspective based on the mouse pointer&#39;s distance to
the transformation origin</p>
</dd>
</dl>

<a name="linearDistanceAbsolute"></a>

## linearDistanceAbsolute(absoluteOrigin, mousePosition) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - absolute euclidean distance between the origin of
                         the transformation and the mouse position in px  

| Param | Type | Description |
| --- | --- | --- |
| absoluteOrigin | <code>Array.&lt;number&gt;</code> | absolute transformation origin |
| mousePosition | <code>Array.&lt;number&gt;</code> | absolute mouse position |

<a name="linearDistance"></a>

## linearDistance(absoluteOrigin, mousePosition) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - Relative euclidean distance between the origin of
                         the transformation and the mouse position in px.
                         Values from 0 to 1 if element is perfectly
                         centered. If not, the value can be up to 2  

| Param | Type | Description |
| --- | --- | --- |
| absoluteOrigin | <code>Array.&lt;number&gt;</code> | absolute transformation origin |
| mousePosition | <code>Array.&lt;number&gt;</code> | absolute mouse position |

<a name="simpleBellCurve"></a>

## simpleBellCurve(absoluteOrigin, mousePosition) ⇒ <code>number</code>
Smoother way to do transformations than linear ones. Also based on
distance, but because of the way this function works the return
value stays longer at a value near to the maximum than a negative
linear function.

**Kind**: global function  
**Returns**: <code>number</code> - value between 0 and 1
     Smoother way to do transformations than linear
                         ones. Also based on distance, but because of the
                         way this function works the return value stays
                         longer at a value near to the maximum than a
                         negative linear function. Value always bigger
                         than 0 and the maximum is 1.  

| Param | Type | Description |
| --- | --- | --- |
| absoluteOrigin | <code>Array.&lt;number&gt;</code> | absolute transformation origin |
| mousePosition | <code>Array.&lt;number&gt;</code> | absolute mouse position |

<a name="advBellCurve"></a>

## advBellCurve(absoluteOrigin, mousePosition, [min], [max], [slope]) ⇒ <code>number</code>
Smoother way to do transformations than linear ones, advanced and
optimized for real use. Also based on distance, but because of the
way this function works the return value stays longer at a value
near to the maximum than a negative linear function.

**Kind**: global function  
**Returns**: <code>number</code> - value between min and max  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| absoluteOrigin | <code>Array.&lt;number&gt;</code> |  | absolute transformation origin |
| mousePosition | <code>Array.&lt;number&gt;</code> |  | absolute mouse position |
| [min] | <code>number</code> | <code>0.5</code> | minimum value for the returned values |
| [max] | <code>number</code> | <code>1</code> | maximum value for the returned values |
| [slope] | <code>number</code> | <code>3</code> | natural number. The bigger, the longer                                    the returned value stays near to the                                    maximum |

<a name="scaleBellCurve"></a>

## scaleBellCurve(absoluteOrigin, mousePosition) ⇒ <code>string</code>
composes a complete smooth scaling transformation based on the
mouse pointer's distance to the transformation's origin

**Kind**: global function  
**Returns**: <code>string</code> - valid CSS tranformation-property  

| Param | Type | Description |
| --- | --- | --- |
| absoluteOrigin | <code>Array.&lt;number&gt;</code> | absolute transformation origin |
| mousePosition | <code>Array.&lt;number&gt;</code> | absolute mouse position |

<a name="combined3d"></a>

## combined3d(absoluteOrigin, mousePosition) ⇒ <code>string</code>
composes a complete smooth and light 3d transformation including
scaling and perspective based on the mouse pointer's distance to
the transformation origin

**Kind**: global function  
**Returns**: <code>string</code> - valid CSS tranformation-property  

| Param | Type | Description |
| --- | --- | --- |
| absoluteOrigin | <code>Array.&lt;number&gt;</code> | absolute transformation origin |
| mousePosition | <code>Array.&lt;number&gt;</code> | absolute mouse position |

