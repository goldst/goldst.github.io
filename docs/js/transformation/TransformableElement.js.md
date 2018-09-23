## Members

<dl>
<dt><a href="#XY">XY</a> ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#updateCornerPoints">updateCornerPoints()</a> ⇒ <code>void</code></dt>
<dd><p>sets the internal corner points to the points of
the actual DOM element</p>
</dd>
<dt><a href="#internalTransform">internalTransform(css)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal edge points according to a transformation in
css syntax</p>
</dd>
<dt><a href="#surroundingBackground">surroundingBackground(col1, [size], [col2], [margin])</a> ⇒ <code>string</code></dt>
<dd><p>generates background that surrounds the transformed element</p>
</dd>
<dt><a href="#internalMatrix">internalMatrix(M)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points using a 2d (3x3 homogenous) matrix
z coordinate remains unchanged.</p>
</dd>
<dt><a href="#internalMatrix3d">internalMatrix3d(M)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points using a 3d (4x4 homogenous) matrix</p>
</dd>
<dt><a href="#internalPerspective">internalPerspective(d)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: perspective(d)&#39; does</p>
</dd>
<dt><a href="#internalRotate">internalRotate(a)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: rotate(a)&#39;
does</p>
</dd>
<dt><a href="#internalRotate3d">internalRotate3d(x, y, z, a)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: rotate3d(x, y, z, a)&#39; does</p>
</dd>
<dt><a href="#internalRotateX">internalRotateX(a)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: rotateX(a)&#39;
does</p>
</dd>
<dt><a href="#internalRotateY">internalRotateY(a)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: rotateY(a)&#39;
does</p>
</dd>
<dt><a href="#internalRotateZ">internalRotateZ(a)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: rotateZ(a)&#39;
does</p>
</dd>
<dt><a href="#internalScale">internalScale(x, [y])</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: scale(x, y)&#39;
does</p>
</dd>
<dt><a href="#internalScale3d">internalScale3d(x, y, z)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: scale3d(x, y, z)&#39; does</p>
</dd>
<dt><a href="#internalScaleX">internalScaleX(s)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: scaleX(s)&#39;
does</p>
</dd>
<dt><a href="#internalScaleY">internalScaleY(s)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: scaleY(s)&#39;
does</p>
</dd>
<dt><a href="#internalScaleZ">internalScaleZ(s)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: scaleZ(s)&#39;
does</p>
</dd>
<dt><a href="#internalSkew">internalSkew(x, [y])</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: skew(x, y)&#39;
does</p>
</dd>
<dt><a href="#internalSkewX">internalSkewX(a)</a> ⇒ <code>Point4d</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: skewX(a)&#39;
does</p>
</dd>
<dt><a href="#internalSkewY">internalSkewY(a)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS &#39;transform: skewY(a)&#39;
does</p>
</dd>
<dt><a href="#internalTranslate">internalTranslate(x, [y])</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: translate(x, y)&#39; does</p>
</dd>
<dt><a href="#internalTranslate3d">internalTranslate3d(x, y, z)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: translate3d(x, y, z)&#39; does</p>
</dd>
<dt><a href="#internalTranslateX">internalTranslateX(t)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: translateX(t)&#39; does</p>
</dd>
<dt><a href="#internalTranslateY">internalTranslateY(t)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: translateY(t)&#39; does</p>
</dd>
<dt><a href="#internalTranslateZ">internalTranslateZ(t)</a> ⇒ <code>void</code></dt>
<dd><p>transforms internal corner points like CSS
&#39;transform: translateZ(t)&#39; does</p>
</dd>
<dt><a href="#transform">transform(css, [alsoTransformInternal])</a> ⇒ <code>void</code></dt>
<dd><p>runs a css transformation</p>
</dd>
</dl>

<a name="XY"></a>

## XY ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
**Kind**: global variable  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - cartesian x- and y-coordinates of
                            corner points  
<a name="updateCornerPoints"></a>

## updateCornerPoints() ⇒ <code>void</code>
sets the internal corner points to the points of
the actual DOM element

**Kind**: global function  
<a name="internalTransform"></a>

## internalTransform(css) ⇒ <code>void</code>
transforms internal edge points according to a transformation in
css syntax

**Kind**: global function  
**Todo**

- [ ] Function only supports matrices. Add other types.


| Param | Type | Description |
| --- | --- | --- |
| css | <code>string</code> | CSS <transform-function> value. Only one                              function at a time is allowed. See                              https://mzl.la/2JhGw8A for syntax. |

<a name="surroundingBackground"></a>

## surroundingBackground(col1, [size], [col2], [margin]) ⇒ <code>string</code>
generates background that surrounds the transformed element

**Kind**: global function  
**Returns**: <code>string</code> - CSS background that can be applied or appended to
                        a parent element  
**Todo**

- [ ] I don't like the  ' + Math.PI' in the loop because there is
             no plausible reason for that for the reader. Some minor
             refactoring on this would be nice.
- [ ] still some issues with high translate values (test case:
             directly applied 'perspective(1000px) rotateZ(182deg)
             rotateY(60deg) translateX(200px) translateY(-300px)' on a
             450x450 div (equal size background)) probable reason:
             css-gradient doesn't support negative numbers


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| col1 | <code>string</code> | <code>&quot;black&quot;</code> | css color name or code for the surrounding                               color. |
| [size] | <code>Array.&lt;number&gt;</code> | <code>this._size</code> | Width and height of the                                                bg element. Normally                                                and thus when no value is                                                given, equal to the size of                                                the foreground dom element. |
| [col2] | <code>string</code> | <code>&quot;&#x27;transparent&#x27;&quot;</code> | CSS color name or code for                                               the color behind the                                               transformed element. Due to                                               the way CSS linear-gradients                                               work, this value should                                               always be transparent or                                               equal to col1, but with a                                               lower opacity. Everything                                               else could result in a                                               broken background. |
| [margin] | <code>number</code> | <code>0</code> | Additional pixels to the surrounding                                     to prevent flickering lines of col2.                                     Set to 0 by default but in most cases                                     more is recommended. |

<a name="internalMatrix"></a>

## internalMatrix(M) ⇒ <code>void</code>
transforms internal corner points using a 2d (3x3 homogenous) matrix
z coordinate remains unchanged.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| M | <code>Array.&lt;number&gt;</code> | 3x3 homogenous transformation matrix |

<a name="internalMatrix3d"></a>

## internalMatrix3d(M) ⇒ <code>void</code>
transforms internal corner points using a 3d (4x4 homogenous) matrix

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| M | <code>Array.&lt;number&gt;</code> | 4x4 homogenous transformation matrix |

<a name="internalPerspective"></a>

## internalPerspective(d) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: perspective(d)' does

**Kind**: global function  
**See**: https://mzl.la/2IIQUqD  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>Number</code> | Distance from the user to the z=0 plane.                            If it is 0 or a negative value, no perspective                            transform is applied. In px. |

<a name="internalRotate"></a>

## internalRotate(a) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: rotate(a)'
does

**Kind**: global function  
**See**: https://mzl.la/2IJlqRh  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle                            denotes a clockwise rotation, a negative                            angle a counter-clockwise one. In deg. |

<a name="internalRotate3d"></a>

## internalRotate3d(x, y, z, a) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: rotate3d(x, y, z, a)' does

**Kind**: global function  
**See**: https://mzl.la/2s5Wt89  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | x-coordinate of the vector denoting the axis                            of rotation which could between 0 and 1. |
| y | <code>Number</code> | y-coordinate of the vector denoting the axis                            of rotation which could between 0 and 1. |
| z | <code>Number</code> | z-coordinate of the vector denoting the axis                            of rotation which could between 0 and 1. |
| a | <code>Number</code> | angle of the rotation. A positive angle                            denotes a clockwise rotation, a negative angle                            a counter-clockwise one. In deg. |

<a name="internalRotateX"></a>

## internalRotateX(a) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: rotateX(a)'
does

**Kind**: global function  
**See**: https://mzl.la/2x6ZhqF  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle                            denotes a clockwise rotation, a negative                            angle a counter-clockwise one. In deg. |

<a name="internalRotateY"></a>

## internalRotateY(a) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: rotateY(a)'
does

**Kind**: global function  
**See**: https://mzl.la/2KQt6xx  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle                            denotes a clockwise rotation, a negative                            angle a counter-clockwise one. In deg. |

<a name="internalRotateZ"></a>

## internalRotateZ(a) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: rotateZ(a)'
does

**Kind**: global function  
**See**: https://mzl.la/2KTCkcD  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle of the rotation. A positive angle                            denotes a clockwise rotation, a negative                            angle a counter-clockwise one. In deg. |

<a name="internalScale"></a>

## internalScale(x, [y]) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: scale(x, y)'
does

**Kind**: global function  
**See**: https://mzl.la/2IMSlAu  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | abscissa of the scaling vector |
| [y] | <code>Number</code> | <code>x</code> | Ordinate of the scaling vector.                                If not defined, its default value is x,                                resulting in a uniform scaling that                                preserves the element's aspect ratio. |

<a name="internalScale3d"></a>

## internalScale3d(x, y, z) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: scale3d(x, y, z)' does

**Kind**: global function  
**See**: https://mzl.la/2IJ2MVC  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | abscissa of the scaling vector |
| y | <code>Number</code> | ordinate of the scaling vector |
| z | <code>Number</code> | z-component of the scaling vector |

<a name="internalScaleX"></a>

## internalScaleX(s) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: scaleX(s)'
does

**Kind**: global function  
**See**: https://mzl.la/2kp9HZC  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>Number</code> | scaling factor to apply on the abscissa                            of each point of the element |

<a name="internalScaleY"></a>

## internalScaleY(s) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: scaleY(s)'
does

**Kind**: global function  
**See**: https://mzl.la/2J0TAzc  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>Number</code> | scaling factor to apply on the ordinate                            of each point of the element |

<a name="internalScaleZ"></a>

## internalScaleZ(s) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: scaleZ(s)'
does

**Kind**: global function  
**See**: https://mzl.la/2KRKOB3  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>Number</code> | scaling factor to apply on the z-coordinate                            of each point of the element |

<a name="internalSkew"></a>

## internalSkew(x, [y]) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: skew(x, y)'
does

**Kind**: global function  
**See**: https://mzl.la/2kqeVnQ  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | Angle to use to distort the element                            along the abscissa. In deg. |
| [y] | <code>Number</code> | <code>0</code> | Angle to use to distort the element                                along the ordinate. If not defined,                                its default value is 0, resulting in a                                purely horizontal skewing. In deg. |

<a name="internalSkewX"></a>

## internalSkewX(a) ⇒ <code>Point4d</code>
transforms internal corner points like CSS 'transform: skewX(a)'
does

**Kind**: global function  
**Returns**: <code>Point4d</code> - changed Point4d  
**See**: https://mzl.la/2xcKtXq  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle to use to distort the element                            along the abscissa. In deg. |

<a name="internalSkewY"></a>

## internalSkewY(a) ⇒ <code>void</code>
transforms internal corner points like CSS 'transform: skewY(a)'
does

**Kind**: global function  
**See**: https://mzl.la/2sgggBM  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Angle to use to distort the element                            along the ordinate. In deg. |

<a name="internalTranslate"></a>

## internalTranslate(x, [y]) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: translate(x, y)' does

**Kind**: global function  
**See**: https://mzl.la/2IGzx9Q  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> |  | Abscissa of the translating vector. In px. |
| [y] | <code>Number</code> | <code>0</code> | Ordinate of the translating vector.                                If unspecified, its default value is 0.                                For example, translate(2) is equivalent                                to translate(2, 0). In px. |

<a name="internalTranslate3d"></a>

## internalTranslate3d(x, y, z) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: translate3d(x, y, z)' does

**Kind**: global function  
**See**: https://mzl.la/2s5K6ZE  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Abscissa of the translating vector. In px. |
| y | <code>Number</code> | Ordinate of the translating vector. In px. |
| z | <code>Number</code> | z-component of the translating vector. In px. |

<a name="internalTranslateX"></a>

## internalTranslateX(t) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: translateX(t)' does

**Kind**: global function  
**See**: https://mzl.la/2IL1kGm  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>Number</code> | Abscissa of the translating vector. In px. |

<a name="internalTranslateY"></a>

## internalTranslateY(t) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: translateY(t)' does

**Kind**: global function  
**See**: https://mzl.la/2GOb0tH  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>Number</code> | Ordinate of the translating vector. In px. |

<a name="internalTranslateZ"></a>

## internalTranslateZ(t) ⇒ <code>void</code>
transforms internal corner points like CSS
'transform: translateZ(t)' does

**Kind**: global function  
**See**: https://mzl.la/2JeSLD3  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>Number</code> | z-component of the translating vector.                            A positive value moves the element towards                            the viewer, and a negative value further away. |

<a name="transform"></a>

## transform(css, [alsoTransformInternal]) ⇒ <code>void</code>
runs a css transformation

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| css | <code>string</code> |  | css value for the transformation |
| [alsoTransformInternal] | <code>boolean</code> | <code>true</code> | defines if the                                                internal information should                                                be transformed too. Set to                                                true by default, but call                                                should be called with false                                                if element is managed with                                                TransformationController |

