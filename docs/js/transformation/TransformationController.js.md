## Functions

<dl>
<dt><a href="#add">add(elements)</a> ⇒ <code>void</code></dt>
<dd><p>Adds an array of elements to the system. Calling this method from
outside this class only makes sense in few cases, because changes
to the element are not observed if itn&#39;t child of the baseElement.</p>
</dd>
<dt><a href="#getTransformableElement">getTransformableElement(domElement)</a> ⇒ <code>TransformableElement</code> | <code>void</code></dt>
<dd><p>finds the TransformableElement that belongs to a certain domElement</p>
</dd>
<dt><a href="#addTransformableElement">addTransformableElement(domElement)</a> ⇒ <code>void</code></dt>
<dd><p>Similar to add(), but for a single DOM element and without query
filters. Again, calling this method from outside this class only
makes sense in few cases, because changes to the element are not
observed if itn&#39;t child of the baseElement.</p>
</dd>
<dt><a href="#mousemoveEventTransform">mousemoveEventTransform([transformationFunction], [additionalFilter], [postFunction])</a> ⇒ <code>void</code></dt>
<dd><p>Adds an mousemove eventListener for each DOM element that matches
the criteria. Defines how the function should be transformed in
case of a mousemove and what should happen afterwards</p>
</dd>
</dl>

<a name="add"></a>

## add(elements) ⇒ <code>void</code>
Adds an array of elements to the system. Calling this method from
outside this class only makes sense in few cases, because changes
to the element are not observed if itn't child of the baseElement.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array.&lt;object&gt;</code> | Array of DOM elements. Only elements                                     that pass the queryFilter are added. |

<a name="getTransformableElement"></a>

## getTransformableElement(domElement) ⇒ <code>TransformableElement</code> \| <code>void</code>
finds the TransformableElement that belongs to a certain domElement

**Kind**: global function  
**Returns**: <code>TransformableElement</code> \| <code>void</code> - TransformableElement that
                                              belongs to a certain
                                              domElement if there is one  

| Param | Type | Description |
| --- | --- | --- |
| domElement | <code>object</code> | DOM element which's                                     TransformableElement is sought |

<a name="addTransformableElement"></a>

## addTransformableElement(domElement) ⇒ <code>void</code>
Similar to add(), but for a single DOM element and without query
filters. Again, calling this method from outside this class only
makes sense in few cases, because changes to the element are not
observed if itn't child of the baseElement.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| domElement | <code>object</code> | Element which's TransformableElement                                     is about to be added to the array |

<a name="mousemoveEventTransform"></a>

## mousemoveEventTransform([transformationFunction], [additionalFilter], [postFunction]) ⇒ <code>void</code>
Adds an mousemove eventListener for each DOM element that matches
the criteria. Defines how the function should be transformed in
case of a mousemove and what should happen afterwards

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [transformationFunction] | <code>function</code> | <code>(o, m)&#x3D;&gt;&#x27;none&#x27;</code> | returns                                            a css transformation string.                                            params: absolute transformation                                            origin and mouse position, both                                            in arrays. See                                            {TransformationFunctions} for                                            examples and predefined                                            functions |
| [additionalFilter] | <code>string</code> | <code>&quot;&#x27;*&#x27;&quot;</code> | css query that has to                                                 apply additionaly to the                                                 one passed in the                                                 constructor |
| [postFunction] | <code>function</code> | <code>(event, element)&#x3D;&gt;{}</code> | optional                                            function that runs after the                                            transformation is sucessfully                                            handeled internally. See                                            {PostTransformFunctions} for                                            examples and predefined                                            functions. |

