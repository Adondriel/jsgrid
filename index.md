---
layout: default
title: jsGrid Lightweight Grid jQuery Plugin
description: jsGrid is a lightweight client-side data grid jQuery plugin
keywords: datagrid, jsGrid, jQuery grid
---

<p><strong>jsGrid</strong> is a lightweight client-side data grid control based on jQuery.
It supports basic grid operations like inserting, filtering, editing, deleting, paging and sorting.
Although jsGrid is tunable and allows to customize appearance and components.</p>

<p><img src="http://content.screencast.com/users/tabalinas/folders/Jing/media/beada891-57fc-41f3-ad77-fbacecd01d15/00000002.png" alt="jsGrid lightweight client-side data grid"></p>

<h2>
<a id="table-of-contents" class="anchor" href="#table-of-contents" aria-hidden="true"><span class="octicon octicon-link"></span></a>Table of contents</h2>

<ul>
<li><a href="#requirement">Requirement</a></li>
<li><a href="#demo">Demo</a></li>
<li><a href="#compatibility">Compatibility</a></li>
<li><a href="#basic-usage">Basic Usage</a></li>
<li><a href="#configuration">Configuration</a></li>
<li><a href="#grid-fields">Grid Fields</a></li>
<li><a href="#methods">Methods</a></li>
<li><a href="#callbacks">Callbacks</a></li>
<li><a href="#grid-controller">Grid Controller</a></li>
<li><a href="#sorting-strategies">Sorting Strategies</a></li>
</ul>

<h2>
<a id="requirement" class="anchor" href="#requirement" aria-hidden="true"><span class="octicon octicon-link"></span></a>Requirement</h2>

<p>jQuery (1.8.3 or later)</p>

<h2>
<a id="demo" class="anchor" href="#demo" aria-hidden="true"><span class="octicon octicon-link"></span></a>Demo</h2>

<p><a href="http://www.googledrive.com/host/0BwcJihi374AsdnhNeFk5bm1NaDA/demos/index.html">Demos</a>
temporary hosted on GoogleDrive (demos using external rest api don't work)</p>

<h2>
<a id="compatibility" class="anchor" href="#compatibility" aria-hidden="true"><span class="octicon octicon-link"></span></a>Compatibility</h2>

<p><strong>Desktop</strong></p>

<ul>
<li>Chrome</li>
<li>Safari</li>
<li>Firefox</li>
<li>Opera 15+</li>
<li>IE 8+</li>
</ul>

<p><strong>Mobile</strong></p>

<ul>
<li>Safari for iOS</li>
<li>Chrome for Android</li>
<li>IE10 for WP8</li>
</ul>

<h2>
<a id="basic-usage" class="anchor" href="#basic-usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Basic Usage</h2>

<p>Ensure that jQuery library of version 1.8.3 or later is included.</p>

<p>Include <code>jsgrid.min.js</code> and <code>jsgrid.min.css</code> files into the web page.</p>

<p>Create grid applying jQuery plugin <code>jsGrid</code> with grid config as follows:</p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#jsGrid<span class="pl-pds">"</span></span>).jsGrid({
    width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>100%<span class="pl-pds">"</span></span>,
    height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>400px<span class="pl-pds">"</span></span>,

    filtering<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    editing<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    sorting<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    paging<span class="pl-k">:</span> <span class="pl-c1">true</span>,

    data<span class="pl-k">:</span> db.clients,

    fields<span class="pl-k">:</span> [
        { name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span>, type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">150</span> },
        { name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Age<span class="pl-pds">"</span></span>, type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">50</span> },
        { name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Address<span class="pl-pds">"</span></span>, type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span>, width<span class="pl-k">:</span> <span class="pl-c1">200</span> },
        { name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Country<span class="pl-pds">"</span></span>, type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>select<span class="pl-pds">"</span></span>, items<span class="pl-k">:</span> db.countries, valueField<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Id<span class="pl-pds">"</span></span>, textField<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span> },
        { name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Married<span class="pl-pds">"</span></span>, type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span>, title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Is Married<span class="pl-pds">"</span></span>, sorting<span class="pl-k">:</span> <span class="pl-c1">false</span> },
        { type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>control<span class="pl-pds">"</span></span> }
    ]
});
</pre></div>

<h2>
<a id="configuration" class="anchor" href="#configuration" aria-hidden="true"><span class="octicon octicon-link"></span></a>Configuration</h2>

<p>The config object may contain following options (default values are specified below):</p>

<div class="highlight highlight-javascript"><pre>
{
    fields<span class="pl-k">:</span> [],
    data<span class="pl-k">:</span> [],

    autoload<span class="pl-k">:</span> <span class="pl-c1">false</span>,
    controller<span class="pl-k">:</span> {
        loadData<span class="pl-k">:</span> $.noop,
        insertItem<span class="pl-k">:</span> $.noop,
        updateItem<span class="pl-k">:</span> $.noop,
        deleteItem<span class="pl-k">:</span> $.noop
    },

    width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>auto<span class="pl-pds">"</span></span>,
    height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>auto<span class="pl-pds">"</span></span>,

    heading<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    filtering<span class="pl-k">:</span> <span class="pl-c1">false</span>,
    inserting<span class="pl-k">:</span> <span class="pl-c1">false</span>,
    editing<span class="pl-k">:</span> <span class="pl-c1">false</span>,
    selecting<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    sorting<span class="pl-k">:</span> <span class="pl-c1">false</span>,
    paging<span class="pl-k">:</span> <span class="pl-c1">false</span>,
    pageLoading<span class="pl-k">:</span> <span class="pl-c1">false</span>,

    <span class="pl-en">rowClass</span>: <span class="pl-st">function</span>(<span class="pl-vpf">item</span>, <span class="pl-vpf">itemIndex</span>) { ... },
    <span class="pl-en">rowClick</span>: <span class="pl-st">function</span>(<span class="pl-vpf">args</span>) { ... },

    noDataContent<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Not found<span class="pl-pds">"</span></span>,

    confirmDeleting<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    deleteConfirm<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Are you sure?<span class="pl-pds">"</span></span>,

    pagerContainer<span class="pl-k">:</span> <span class="pl-c1">null</span>,
    pageIndex<span class="pl-k">:</span> <span class="pl-c1">1</span>,
    pageSize<span class="pl-k">:</span> <span class="pl-c1">20</span>,
    pageButtonCount<span class="pl-k">:</span> <span class="pl-c1">15</span>,
    pagerFormat<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Pages: {first} {prev} {pages} {next} {last} &amp;nbsp;&amp;nbsp; {pageIndex} of {pageCount}<span class="pl-pds">"</span></span>,
    pagePrevText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Prev<span class="pl-pds">"</span></span>,
    pageNextText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Next<span class="pl-pds">"</span></span>,
    pageFirstText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>First<span class="pl-pds">"</span></span>,
    pageLastText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Last<span class="pl-pds">"</span></span>,
    pageNavigatorNextText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>...<span class="pl-pds">"</span></span>,
    pageNavigatorPrevText<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>...<span class="pl-pds">"</span></span>,

    loadIndication<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    loadIndicationDelay<span class="pl-k">:</span> <span class="pl-c1">500</span>,
    loadMessage<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Please, wait...<span class="pl-pds">"</span></span>,
    loadShading<span class="pl-k">:</span> <span class="pl-c1">true</span>,

    updateOnResize<span class="pl-k">:</span> <span class="pl-c1">true</span>,

    rowRenderer<span class="pl-k">:</span> <span class="pl-c1">null</span>,
    headerRowRenderer<span class="pl-k">:</span> <span class="pl-c1">null</span>,
    filterRowRenderer<span class="pl-k">:</span> <span class="pl-c1">null</span>,
    insertRowRenderer<span class="pl-k">:</span> <span class="pl-c1">null</span>,
    editRowRenderer<span class="pl-k">:</span> <span class="pl-c1">null</span>
}
</pre></div>

<h3>
<a id="fields" class="anchor" href="#fields" aria-hidden="true"><span class="octicon octicon-link"></span></a>fields</h3>

<p>An array of fields (columns) of the grid.</p>

<p>Each field has general options and specific options depending on field type.</p>

<p>General options peculiar to all field types:</p>

<div class="highlight highlight-javascript"><pre>
{
    type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,
    name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,
    title<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,
    css<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,
    align<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,
    width<span class="pl-k">:</span> <span class="pl-c1">100</span>,

    filtering<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    inserting<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    editing<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    sorting<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    sorter<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>string<span class="pl-pds">"</span></span>,

    <span class="pl-en">headerTemplate</span>: <span class="pl-st">function</span>() { ... },
    <span class="pl-en">itemTemplate</span>: <span class="pl-st">function</span>(<span class="pl-vpf">value</span>, <span class="pl-vpf">item</span>) { ... },
    <span class="pl-en">filterTemplate</span>: <span class="pl-st">function</span>() { ... },
    <span class="pl-en">insertTemplate</span>: <span class="pl-st">function</span>() { ... },
    <span class="pl-en">editTemplate</span>: <span class="pl-st">function</span>(<span class="pl-vpf">value</span>, <span class="pl-vpf">item</span>) { ... },

    <span class="pl-en">filterValue</span>: <span class="pl-st">function</span>() { ... },
    <span class="pl-en">insertValue</span>: <span class="pl-st">function</span>() { ... },
    <span class="pl-en">editValue</span>: <span class="pl-st">function</span>() { ... },

    cellRenderer<span class="pl-k">:</span> <span class="pl-c1">null</span>
}
</pre></div>

<ul>
<li>
<strong>type</strong> is a string key of field (<code>"text"|"number"|"checkbox"|"select"|"textarea"|"control"</code>) in fields registry <code>jsGrid.fields</code> (the registry can be easily extended with custom field types).</li>
<li>
<strong>name</strong> is a property of data item associated with the column.</li>
<li>
<strong>title</strong> is a text to be displayed in the header of the column. If <code>title</code> is not specified, the <code>name</code> will be used instead.</li>
<li>
<strong>css</strong> is a string representing css classes to be attached to the table cell.</li>
<li>
<strong>align</strong> is alignment of text in the cell. Accepts following values <code>"left"|"center"|"right"</code>.</li>
<li>
<strong>width</strong> is a width of the column.</li>
<li>
<strong>filtering</strong> is a boolean specifying whether or not column has filtering (<code>filterTemplate()</code> is rendered and <code>filterValue()</code> is included in load filter object).</li>
<li>
<strong>inserting</strong> is a boolean specifying whether or not column has inserting (<code>insertTemplate()</code> is rendered and <code>insertValue()</code> is included in inserting item).</li>
<li>
<strong>editing</strong> is a boolean specifying whether or not column has editing (<code>editTemplate()</code> is rendered and <code>editValue()</code> is included in editing item).</li>
<li>
<strong>sorting</strong> is a boolean specifying whether or not column has sorting ability.</li>
<li>
<strong>sorter</strong> is a string or a function specifying how to sort item by the field. The string is a key of sorting strategy in the registry <code>jsGrid.sortStrategies</code> (the registry can be easily extended with custom sorting functions). Sorting function has the signature <code>function(value1, value2) { return -1|0|1; }</code>.</li>
<li>
<strong>headerTemplate</strong> is a function to create column header content. It should return markup as string, DomNode or jQueryElement.</li>
<li>
<strong>itemTemplate</strong> is a function to create cell content. It should return markup as string, DomNode or jQueryElement. The function signature is <code>function(value, item)</code>, where <code>value</code> is a value of column property of data item, and <code>item</code> is a row data item.</li>
<li>
<strong>filterTemplate</strong> is a function to create filter row cell content. It should return markup as string, DomNode or jQueryElement.</li>
<li>
<strong>insertTemplate</strong> is a function to create insert row cell content. It should return markup as string, DomNode or jQueryElement.</li>
<li>
<strong>editTemplate</strong> is a function to create cell content of editing row. It should return markup as string, DomNode or jQueryElement. The function signature is <code>function(value, item)</code>, where <code>value</code> is a value of column property of data item, and <code>item</code> is a row data item.</li>
<li>
<strong>filterValue</strong> is a function returning the value of filter property associated with the column.</li>
<li>
<strong>insertValue</strong> is a function returning the value of inserting item property associated with the column.</li>
<li>
<strong>editValue</strong> is a function returning the value of editing item property associated with the column.</li>
<li>
<strong>cellRenderer</strong> is a function to customize cell rendering. The function signature is <code>function(value, item)</code>, where <code>value</code> is a value of column property of data item, and <code>item</code> is a row data item. The function should return markup as a string, jQueryElement or DomNode representing table cell <code>td</code>.</li>
</ul>

<p>Specific field options depends on concrete field type.
Read about build-in fields in <a href="#grid-fields">Grid Fields</a> section.</p>

<h3>
<a id="data" class="anchor" href="#data" aria-hidden="true"><span class="octicon octicon-link"></span></a>data</h3>

<p>An array of items to be displayed in the grid. The option should be used to provide static data. Use the <code>controller</code> option to provide non static data.</p>

<h3>
<a id="autoload-default-false" class="anchor" href="#autoload-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>autoload (default <code>false</code>)</h3>

<p>A boolean value specifying whether <code>controller.loadData</code> will be called when grid is rendered.</p>

<h3>
<a id="controller" class="anchor" href="#controller" aria-hidden="true"><span class="octicon octicon-link"></span></a>controller</h3>

<p>An object or function returning an object with the following structure:</p>

<div class="highlight highlight-javascript"><pre>
{
    loadData<span class="pl-k">:</span> $.noop,
    insertItem<span class="pl-k">:</span> $.noop,
    updateItem<span class="pl-k">:</span> $.noop,
    deleteItem<span class="pl-k">:</span> $.noop
}
</pre></div>

<ul>
<li>
<strong>loadData</strong> is a function returning an array of data or jQuery promise that will be resolved with an array of data (when <code>pageLoading</code> is <code>true</code> instead of object the structure <code>{ data: [items], itemsCount: [total items count] }</code> should be returned). Accepts filter parameter including current filter options and paging parameters when <code>pageLoading</code> is <code>true</code>.</li>
<li>
<strong>insertItem</strong> is a function returning inserted item or jQuery promise that will be resolved with inserted item. Accepts inserting item object.</li>
<li>
<strong>updateItem</strong> is a function returning updated item or jQuery promise that will be resolved with updated item. Accepts updating item object.</li>
<li>
<strong>deleteItem</strong> is a function deleting item. Returns jQuery promise that will be resolved when deletion is completed. Accepts deleting item object.</li>
</ul>

<p>Read more about controller interface in <a href="#grid-controller">Grid Controller</a> section.</p>

<h3>
<a id="width-default-auto" class="anchor" href="#width-default-auto" aria-hidden="true"><span class="octicon octicon-link"></span></a>width (default: <code>"auto"</code>)</h3>

<p>Specifies the overall width of the grid.
Accepts all value types accepting by <code>jQuery.width</code>.</p>

<h3>
<a id="height-default-auto" class="anchor" href="#height-default-auto" aria-hidden="true"><span class="octicon octicon-link"></span></a>height (default: <code>"auto"</code>)</h3>

<p>Specifies the overall height of the grid including the pager.
Accepts all value types accepting by <code>jQuery.height</code>.</p>

<h3>
<a id="heading-default-true" class="anchor" href="#heading-default-true" aria-hidden="true"><span class="octicon octicon-link"></span></a>heading (default: <code>true</code>)</h3>

<p>A boolean value specifies whether to show grid header or not.</p>

<h3>
<a id="filtering-default-false" class="anchor" href="#filtering-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>filtering (default: <code>false</code>)</h3>

<p>A boolean value specifies whether to show filter row or not.</p>

<h3>
<a id="inserting-default-false" class="anchor" href="#inserting-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>inserting (default: <code>false</code>)</h3>

<p>A boolean value specifies whether to show inserting row or not.</p>

<h3>
<a id="editing-default-false" class="anchor" href="#editing-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>editing (default: <code>false</code>)</h3>

<p>A boolean value specifies whether editing is allowed.</p>

<h3>
<a id="selecting-default-true" class="anchor" href="#selecting-default-true" aria-hidden="true"><span class="octicon octicon-link"></span></a>selecting (default: <code>true</code>)</h3>

<p>A boolean value specifies whether to highlight grid rows on hover.</p>

<h3>
<a id="sorting-default-false" class="anchor" href="#sorting-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>sorting (default: <code>false</code>)</h3>

<p>A boolean value specifies whether sorting is allowed.</p>

<h3>
<a id="paging-default-false" class="anchor" href="#paging-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>paging (default: <code>false</code>)</h3>

<p>A boolean value specifies whether data is displayed by pages.</p>

<h3>
<a id="pageloading-default-false" class="anchor" href="#pageloading-default-false" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageLoading (default: <code>false</code>)</h3>

<p>A boolean value specifies whether to load data by page.
When <code>pageLoading</code> is <code>true</code> the <code>loadData</code> method of controller accepts <code>filter</code> parameter with two additional properties <code>pageSize</code> and <code>pageIndex</code>.</p>

<h3>
<a id="rowclass" class="anchor" href="#rowclass" aria-hidden="true"><span class="octicon octicon-link"></span></a>rowClass</h3>

<p>A string or a function specifying row css classes.
A string contains classes separated with spaces.
A function has signature <code>function(item, itemIndex)</code>. It accepts the data item and index of the item. It should returns a string containing classes separated with spaces.</p>

<h3>
<a id="rowclick" class="anchor" href="#rowclick" aria-hidden="true"><span class="octicon octicon-link"></span></a>rowClick</h3>

<p>A function handling row click. Accepts single argument with following structure:</p>

<div class="highlight highlight-javascript"><pre>
{
     item       <span class="pl-c">// data item</span>
     itemIndex  <span class="pl-c">// data item index</span>
     <span class="pl-s3">event</span>      <span class="pl-c">// jQuery event</span>
}
</pre></div>

<p>By default <code>rowClick</code> performs row editing when <code>editing</code> is <code>true</code>.</p>

<h3>
<a id="nodatacontent-default-not-found" class="anchor" href="#nodatacontent-default-not-found" aria-hidden="true"><span class="octicon octicon-link"></span></a>noDataContent (default <code>"Not found"</code>)</h3>

<p>A string or a function returning a markup, jQueryElement or DomNode specifying the content to be displayed when <code>data</code> is an empty array.</p>

<h3>
<a id="confirmdeleting-default-true" class="anchor" href="#confirmdeleting-default-true" aria-hidden="true"><span class="octicon octicon-link"></span></a>confirmDeleting (default <code>true</code>)</h3>

<p>A boolean value specifying whether to ask user to confirm item deletion.</p>

<h3>
<a id="deleteconfirm-default-are-you-sure" class="anchor" href="#deleteconfirm-default-are-you-sure" aria-hidden="true"><span class="octicon octicon-link"></span></a>deleteConfirm (default <code>"Are you sure?"</code>)</h3>

<p>A string or a function returning string specifying delete confirmation message to be displayed to the user.
A function has the signature <code>function(item)</code> and accepts item to be deleted.</p>

<h3>
<a id="pagercontainer-default-null" class="anchor" href="#pagercontainer-default-null" aria-hidden="true"><span class="octicon octicon-link"></span></a>pagerContainer (default <code>null</code>)</h3>

<p>A jQueryElement or DomNode to specify where to render a pager. Used for external pager rendering. When it is equal to <code>null</code>, the pager is rendered at the bottom of the grid.</p>

<h3>
<a id="pageindex-default-1" class="anchor" href="#pageindex-default-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageIndex (default <code>1</code>)</h3>

<p>An integer value specifying current page index. Applied only when <code>paging</code> is <code>true</code>.</p>

<h3>
<a id="pagesize-default-20" class="anchor" href="#pagesize-default-20" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageSize (default <code>20</code>)</h3>

<p>An integer value specifying the amount of items on the page. Applied only when <code>paging</code> is <code>true</code>.</p>

<h3>
<a id="pagebuttoncount-default-15" class="anchor" href="#pagebuttoncount-default-15" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageButtonCount (default <code>15</code>)</h3>

<p>An integer value specifying the maximum amount of page buttons to be displayed in the pager.</p>

<h3>
<a id="pagerformat" class="anchor" href="#pagerformat" aria-hidden="true"><span class="octicon octicon-link"></span></a>pagerFormat</h3>

<p>A string specifying pager format.
The default value is  <code>"Pages: {first} {prev} {pages} {next} {last} &amp;nbsp;&amp;nbsp; {pageIndex} of {pageCount}"</code></p>

<p>There are placeholders that can be used in the format:</p>

<div class="highlight highlight-javascript"><pre>
{first}     <span class="pl-c">// link to first page</span>
{prev}      <span class="pl-c">// link to previous page</span>
{pages}     <span class="pl-c">// page links</span>
{next}      <span class="pl-c">// link to next page</span>
{last}      <span class="pl-c">// link to last page</span>
{pageIndex} <span class="pl-c">// current page index</span>
{pageCount} <span class="pl-c">// total amount of pages</span>
</pre></div>

<h3>
<a id="pagenexttext-default-next" class="anchor" href="#pagenexttext-default-next" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageNextText (default <code>"Next"</code>)</h3>

<p>A string specifying the text of the link to the next page.</p>

<h3>
<a id="pageprevtext-default-prev" class="anchor" href="#pageprevtext-default-prev" aria-hidden="true"><span class="octicon octicon-link"></span></a>pagePrevText (default <code>"Prev"</code>)</h3>

<p>A string specifying the text of the link to the previous page.</p>

<h3>
<a id="pagefirsttext-default-first" class="anchor" href="#pagefirsttext-default-first" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageFirstText (default <code>"First"</code>)</h3>

<p>A string specifying the text of the link to the first page.</p>

<h3>
<a id="pagelasttext-default-last" class="anchor" href="#pagelasttext-default-last" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageLastText (default <code>"Last"</code>)</h3>

<p>A string specifying the text of the link to the last page.</p>

<h3>
<a id="pagenavigatornexttext-default-" class="anchor" href="#pagenavigatornexttext-default-" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageNavigatorNextText (default <code>"..."</code>)</h3>

<p>A string specifying the text of the link to move to next set of page links, when total amount of pages more than <code>pageButtonCount</code>.</p>

<h3>
<a id="pagenavigatorprevtext-default-" class="anchor" href="#pagenavigatorprevtext-default-" aria-hidden="true"><span class="octicon octicon-link"></span></a>pageNavigatorPrevText (default <code>"..."</code>)</h3>

<p>A string specifying the text of the link to move to previous set of page links, when total amount of pages more than <code>pageButtonCount</code>.</p>

<h3>
<a id="loadindication-default-true" class="anchor" href="#loadindication-default-true" aria-hidden="true"><span class="octicon octicon-link"></span></a>loadIndication (default <code>true</code>)</h3>

<p>A boolean value specifying whether to show loading indication during controller operations execution.</p>

<h3>
<a id="loadindicationdelay-default-500" class="anchor" href="#loadindicationdelay-default-500" aria-hidden="true"><span class="octicon octicon-link"></span></a>loadIndicationDelay (default <code>500</code>)</h3>

<p>An integer value specifying the delay in ms before showing load indication. Applied only when <code>loadIndication</code> is <code>true</code>.</p>

<h3>
<a id="loadmessage-default-please-wait" class="anchor" href="#loadmessage-default-please-wait" aria-hidden="true"><span class="octicon octicon-link"></span></a>loadMessage (default <code>"Please, wait..."</code>)</h3>

<p>A string specifying the text of loading indication panel. Applied only when <code>loadIndication</code> is <code>true</code>.</p>

<h3>
<a id="loadshading-default-true" class="anchor" href="#loadshading-default-true" aria-hidden="true"><span class="octicon octicon-link"></span></a>loadShading (default <code>true</code>)</h3>

<p>A boolean value specifying whether to show overlay (shader) over grid content during loading indication. Applied only when <code>loadIndication</code> is <code>true</code>.</p>

<h3>
<a id="updateonresize-default-true" class="anchor" href="#updateonresize-default-true" aria-hidden="true"><span class="octicon octicon-link"></span></a>updateOnResize (default <code>true</code>)</h3>

<p>A boolean value specifying whether to refresh grid on window resize event.</p>

<h3>
<a id="rowrenderer-default-null" class="anchor" href="#rowrenderer-default-null" aria-hidden="true"><span class="octicon octicon-link"></span></a>rowRenderer (default <code>null</code>)</h3>

<p>A function to customize row rendering. The function signature is <code>function(item, itemIndex)</code>, where <code>item</code> is row data item, and <code>itemIndex</code> is the item index.
The function should return markup as a string, jQueryElement or DomNode representing table row <code>tr</code>.</p>

<h3>
<a id="headerrowrenderer-default-null" class="anchor" href="#headerrowrenderer-default-null" aria-hidden="true"><span class="octicon octicon-link"></span></a>headerRowRenderer (default <code>null</code>)</h3>

<p>A function to customize grid header row.
The function should return markup as a string, jQueryElement or DomNode representing table row <code>tr</code>.</p>

<h3>
<a id="filterrowrenderer-default-null" class="anchor" href="#filterrowrenderer-default-null" aria-hidden="true"><span class="octicon octicon-link"></span></a>filterRowRenderer (default <code>null</code>)</h3>

<p>A function to customize grid filter row.
The function should return markup as a string, jQueryElement or DomNode representing table row <code>tr</code>.</p>

<h3>
<a id="insertrowrenderer-default-null" class="anchor" href="#insertrowrenderer-default-null" aria-hidden="true"><span class="octicon octicon-link"></span></a>insertRowRenderer (default <code>null</code>)</h3>

<p>A function to customize grid inserting row.
The function should return markup as a string, jQueryElement or DomNode representing table row <code>tr</code>.</p>

<h3>
<a id="editrowrenderer-default-null" class="anchor" href="#editrowrenderer-default-null" aria-hidden="true"><span class="octicon octicon-link"></span></a>editRowRenderer (default <code>null</code>)</h3>

<p>A function to customize editing row rendering. The function signature is <code>function(item, itemIndex)</code>, where <code>item</code> is row data item, and <code>itemIndex</code> is the item index.
The function should return markup as a string, jQueryElement or DomNode representing table row <code>tr</code>.</p>

<h2>
<a id="grid-fields" class="anchor" href="#grid-fields" aria-hidden="true"><span class="octicon octicon-link"></span></a>Grid Fields</h2>

<p>All fields supporting by grid are stored in <code>jsGrid.fields</code> object, where key is a type of the field and the value is the field class.</p>

<p><code>jsGrid.fields</code> contains following build-in fields:</p>

<div class="highlight highlight-javascript"><pre>
{
    text<span class="pl-k">:</span> { ... },      <span class="pl-c">// simple text input</span>
    number<span class="pl-k">:</span> { ... },    <span class="pl-c">// number input</span>
    select<span class="pl-k">:</span> { ... },    <span class="pl-c">// select control</span>
    checkbox<span class="pl-k">:</span> { ... },  <span class="pl-c">// checkbox input</span>
    textarea<span class="pl-k">:</span> { ... },  <span class="pl-c">// textarea control (renders textarea for inserting and editing and text input for filtering)</span>
    control<span class="pl-k">:</span> { ... }    <span class="pl-c">// control field with delete and editing buttons for data rows, search and add buttons for filter and inserting row</span>
}
</pre></div>

<p>Each build-in field can be easily customized with general configuration properties described in <a href="#fields">fields</a> section and custom field-specific properties described below.</p>

<h3>
<a id="text" class="anchor" href="#text" aria-hidden="true"><span class="octicon octicon-link"></span></a>text</h3>

<p>Text field renders <code>&lt;input type="text"&gt;</code> in filter, inserting and editing rows.</p>

<p>Custom properties:</p>

<div class="highlight highlight-javascript"><pre>
{
    autosearch<span class="pl-k">:</span> <span class="pl-c1">true</span>    <span class="pl-c">// triggers searching when the user presses `enter` key in the filter input</span>
}
</pre></div>

<h3>
<a id="number" class="anchor" href="#number" aria-hidden="true"><span class="octicon octicon-link"></span></a>number</h3>

<p>Number field renders <code>&lt;input type="number"&gt;</code> in filter, inserting and editing rows.</p>

<p>Custom properties:</p>

<div class="highlight highlight-javascript"><pre>
{
    sorter<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span>,   <span class="pl-c">// uses sorter for numbers</span>
    align<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>right<span class="pl-pds">"</span></span>      <span class="pl-c">// right text alignment</span>
}
</pre></div>

<h3>
<a id="select" class="anchor" href="#select" aria-hidden="true"><span class="octicon octicon-link"></span></a>select</h3>

<p>Select field renders <code>&lt;select&gt;</code> control in filter, inserting and editing rows.</p>

<p>Custom properties:</p>

<div class="highlight highlight-javascript"><pre>
{
    align<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>center<span class="pl-pds">"</span></span>,        <span class="pl-c">// center text alignment</span>
    autosearch<span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// triggers searching when the user changes the selected item in the filter</span>
    items<span class="pl-k">:</span> [],              <span class="pl-c">// an array of items for select</span>
    valueField<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,         <span class="pl-c">// name of property of item to be used as value</span>
    textField <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,         <span class="pl-c">// name of property of item to be used as displaying value</span>
    selectedIndex<span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>       <span class="pl-c">// index of selected item by default</span>
}
</pre></div>

<p>If valueField is not defined, then the item index is used instead.
If textField is not defined, then item itself is used to display value.</p>

<p>For instance the simple select field config may look like:</p>

<div class="highlight highlight-javascript"><pre>
{
    name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Country<span class="pl-pds">"</span></span>,
    type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>select<span class="pl-pds">"</span></span>,
    items<span class="pl-k">:</span> [ <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s1"><span class="pl-pds">"</span>United States<span class="pl-pds">"</span></span>, <span class="pl-s1"><span class="pl-pds">"</span>Canada<span class="pl-pds">"</span></span>, <span class="pl-s1"><span class="pl-pds">"</span>United Kingdom<span class="pl-pds">"</span></span> ]
}
</pre></div>

<p>or more complex with items as objects:</p>

<div class="highlight highlight-javascript"><pre>
{
    name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Country<span class="pl-pds">"</span></span>,
    type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>select<span class="pl-pds">"</span></span>
    items<span class="pl-k">:</span> [
         { Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, Id<span class="pl-k">:</span> <span class="pl-c1">0</span> },
         { Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>United States<span class="pl-pds">"</span></span>, Id<span class="pl-k">:</span> <span class="pl-c1">1</span> },
         { Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Canada<span class="pl-pds">"</span></span>, Id<span class="pl-k">:</span> <span class="pl-c1">2</span> },
         { Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>United Kingdom<span class="pl-pds">"</span></span>, Id<span class="pl-k">:</span> <span class="pl-c1">3</span> }
    ],
    valueField<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Id<span class="pl-pds">"</span></span>,
    textField<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span>
}
</pre></div>

<h3>
<a id="checkbox" class="anchor" href="#checkbox" aria-hidden="true"><span class="octicon octicon-link"></span></a>checkbox</h3>

<p>Checkbox field renders <code>&lt;input type="checkbox"&gt;</code> in filter, inserting and editing rows.
Filter checkbox supports intermediate state for, so click switches between 3 states (checked|intermediate|unchecked).</p>

<p>Custom properties:</p>

<div class="highlight highlight-javascript"><pre>
{
    sorter<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span>,   <span class="pl-c">// uses sorter for numbers</span>
    align<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>center<span class="pl-pds">"</span></span>     <span class="pl-c">// center text alignment</span>
    autosearch<span class="pl-k">:</span> <span class="pl-c1">true</span>    <span class="pl-c">// triggers searching when the user clicks checkbox in filter</span>
}
</pre></div>

<h3>
<a id="textarea" class="anchor" href="#textarea" aria-hidden="true"><span class="octicon octicon-link"></span></a>textarea</h3>

<p>Textarea field renders '<code>in inserting and editing rows and</code>` in filter row.</p>

<p>Custom properties:</p>

<div class="highlight highlight-javascript"><pre>
{
    autosearch<span class="pl-k">:</span> <span class="pl-c1">true</span>    <span class="pl-c">// triggers searching when the user presses `enter` key in the filter input</span>
}
</pre></div>

<h3>
<a id="control" class="anchor" href="#control" aria-hidden="true"><span class="octicon octicon-link"></span></a>control</h3>

<p>Control field renders delete and editing buttons in data row, search and add buttons in filter and inserting row accordingly.
It also renders button switching between filtering and searching in header row.</p>

<p>Custom properties:</p>

<div class="highlight highlight-javascript"><pre>
{
    editButton<span class="pl-k">:</span> <span class="pl-c1">true</span>,                               <span class="pl-c">// show edit button</span>
    deleteButton<span class="pl-k">:</span> <span class="pl-c1">true</span>,                             <span class="pl-c">// show delete button</span>
    clearFilterButton<span class="pl-k">:</span> <span class="pl-c1">true</span>,                        <span class="pl-c">// show clear filter button</span>
    modeSwitchButton<span class="pl-k">:</span> <span class="pl-c1">true</span>,                         <span class="pl-c">// show switching filtering/inserting button</span>

    align<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>center<span class="pl-pds">"</span></span>,                                <span class="pl-c">// center content alignment</span>
    width<span class="pl-k">:</span> <span class="pl-c1">50</span>,                                      <span class="pl-c">// default column width is 50px</span>
    filtering<span class="pl-k">:</span> <span class="pl-c1">false</span>,                               <span class="pl-c">// disable filtering for column</span>
    inserting<span class="pl-k">:</span> <span class="pl-c1">false</span>,                               <span class="pl-c">// disable inserting for column</span>
    editing<span class="pl-k">:</span> <span class="pl-c1">false</span>,                                 <span class="pl-c">// disable editing for column</span>
    sorting<span class="pl-k">:</span> <span class="pl-c1">false</span>,                                 <span class="pl-c">// disable sorting for column</span>

    searchModeButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Switch to searching<span class="pl-pds">"</span></span>, <span class="pl-c">// tooltip of switching filtering/inserting button in inserting mode</span>
    insertModeButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Switch to inserting<span class="pl-pds">"</span></span>, <span class="pl-c">// tooltip of switching filtering/inserting button in filtering mode</span>
    editButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Edit<span class="pl-pds">"</span></span>,                      <span class="pl-c">// tooltip of edit item button</span>
    deleteButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Delete<span class="pl-pds">"</span></span>,                  <span class="pl-c">// tooltip of delete item button</span>
    searchButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Search<span class="pl-pds">"</span></span>,                  <span class="pl-c">// tooltip of search button</span>
    clearFilterButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Clear filter<span class="pl-pds">"</span></span>,       <span class="pl-c">// tooltip of clear filter button</span>
    insertButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Insert<span class="pl-pds">"</span></span>,                  <span class="pl-c">// tooltip of insert button</span>
    updateButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Update<span class="pl-pds">"</span></span>,                  <span class="pl-c">// tooltip of update item button</span>
    cancelEditButtonTooltip<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Cancel edit<span class="pl-pds">"</span></span>,         <span class="pl-c">// tooltip of cancel editing button</span>
}
</pre></div>

<h3>
<a id="custom-field" class="anchor" href="#custom-field" aria-hidden="true"><span class="octicon octicon-link"></span></a>Custom Field</h3>

<p>If you need a completely custom field, the object <code>jsGrid.fields</code> can be easily extended.</p>

<p>In this example we define new grid field <code>date</code>:</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-s">var</span> <span class="pl-en">MyDateField</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">config</span>) {
    jsGrid.Field.<span class="pl-s3">call</span>(<span class="pl-v">this</span>, config);
};

<span class="pl-s3">MyDateField</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">jsGrid.Field</span>({

    css<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>date-field<span class="pl-pds">"</span></span>,            <span class="pl-c">// redefine general property 'css'</span>
    align<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>center<span class="pl-pds">"</span></span>,              <span class="pl-c">// redefine general property 'align'</span>

    myCustomProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>,      <span class="pl-c">// custom property</span>

    <span class="pl-en">sorter</span>: <span class="pl-st">function</span>(<span class="pl-vpf">date1</span>, <span class="pl-vpf">date2</span>) {
        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(date1) <span class="pl-k">-</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(date2);
    },

    <span class="pl-en">itemTemplate</span>: <span class="pl-st">function</span>(<span class="pl-vpf">value</span>) {
        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(value).toDateString();
    },

    <span class="pl-en">insertTemplate</span>: <span class="pl-st">function</span>(<span class="pl-vpf">value</span>) {
        <span class="pl-k">return</span> <span class="pl-v">this</span>._insertPicker <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">"</span>&lt;input&gt;<span class="pl-pds">"</span></span>).datepicker({ defaultDate<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>() });
    },

    <span class="pl-en">editTemplate</span>: <span class="pl-st">function</span>(<span class="pl-vpf">value</span>) {
        <span class="pl-k">return</span> <span class="pl-v">this</span>._editPicker <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">"</span>&lt;input&gt;<span class="pl-pds">"</span></span>).datepicker().datepicker(<span class="pl-s1"><span class="pl-pds">"</span>setDate<span class="pl-pds">"</span></span>, <span class="pl-k">new</span> <span class="pl-en">Date</span>(value));
    },

    <span class="pl-en">insertValue</span>: <span class="pl-st">function</span>() {
        <span class="pl-k">return</span> <span class="pl-v">this</span>._insertPicker.datepicker(<span class="pl-s1"><span class="pl-pds">"</span>getDate<span class="pl-pds">"</span></span>).toISOString();
    },

    <span class="pl-en">editValue</span>: <span class="pl-st">function</span>() {
        <span class="pl-k">return</span> <span class="pl-v">this</span>._editPicker.datepicker(<span class="pl-s1"><span class="pl-pds">"</span>getDate<span class="pl-pds">"</span></span>).toISOString();
    }
});

jsGrid.fields.date <span class="pl-k">=</span> MyDateField;
</pre></div>

<p>To have all general grid field properties custom field class should inherit <code>jsGrid.Field</code> class or any other field class.
Here <code>itemTemplate</code> just returns the string representation of a date.
<code>insertTemplate</code> and <code>editTemplate</code> create jQuery UI datePicker for inserting and editing row.
Of course jquery ui library should be included to make it work.
<code>insertValue</code> and <code>editValue</code> return date to insert and update items accordingly.
We also defined date specific sorter.</p>

<p>Now, our new field <code>date</code> can be used in the grid config as follows:</p>

<div class="highlight highlight-javascript"><pre>
{
    fields<span class="pl-k">:</span> [
      ...
      { type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>date<span class="pl-pds">"</span></span>, myCustomProperty<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span> },
      ...
    ]
}
</pre></div>

<h2>
<a id="methods" class="anchor" href="#methods" aria-hidden="true"><span class="octicon octicon-link"></span></a>Methods</h2>

<p>jsGrid methods could be called with <code>jsGrid</code> jQuery plugin or directly.</p>

<p>To use jsGrid plugin to call a method, just call <code>jsGrid</code> with method name and required parameters as next arguments:</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// calling method with jQuery plugin</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>methodName<span class="pl-pds">"</span></span>, param1, param2);
</pre></div>

<p>To call method directly you need to retrieve grid instance or just create grid with the constructor:</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// retrieve grid instance from element data</span>
<span class="pl-s">var</span> grid <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">"</span>JSGrid<span class="pl-pds">"</span></span>);

<span class="pl-c">// create grid with the constructor</span>
<span class="pl-s">var</span> grid <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">jsGrid.Grid</span>($(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>), { ... });

<span class="pl-c">// call method directly</span>
grid.methodName(param1, param2); 
</pre></div>

<h3>
<a id="canceledit" class="anchor" href="#canceledit" aria-hidden="true"><span class="octicon octicon-link"></span></a>cancelEdit()</h3>

<p>Cancels row editing. </p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>cancelEdit<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="clearfilter-promise" class="anchor" href="#clearfilter-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>clearFilter(): <code>Promise</code>
</h3>

<p>Clears current filter and performs search with empty filter.
Returns jQuery promise resolved when data filtering is completed. </p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>clearFilter<span class="pl-pds">"</span></span>).done(<span class="pl-st">function</span>() {
    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">"</span>filtering completed<span class="pl-pds">"</span></span>);
});
</pre></div>

<h3>
<a id="clearinsert" class="anchor" href="#clearinsert" aria-hidden="true"><span class="octicon octicon-link"></span></a>clearInsert()</h3>

<p>Clears current inserting row. </p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>clearInsert<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="deleteitemitemrowrownode-promise" class="anchor" href="#deleteitemitemrowrownode-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>deleteItem(item|$row|rowNode): <code>Promise</code>
</h3>

<p>Removes specified row from the grid.
Returns jQuery promise resolved when deletion is completed.</p>

<p><strong>item|$row|rowNode</strong> is the reference to the item or the row jQueryElement or the row DomNode.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// delete row by item reference</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>deleteItem<span class="pl-pds">"</span></span>, item);

<span class="pl-c">// delete row by jQueryElement</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>deleteItem<span class="pl-pds">"</span></span>, $(<span class="pl-s1"><span class="pl-pds">"</span>.specific-row<span class="pl-pds">"</span></span>));

<span class="pl-c">// delete row by DomNode</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>deleteItem<span class="pl-pds">"</span></span>, rowNode);
</pre></div>

<h3>
<a id="destroy" class="anchor" href="#destroy" aria-hidden="true"><span class="octicon octicon-link"></span></a>destroy()</h3>

<p>Destroys the grid and brings the Node to its original state.</p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>destroy<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="edititemitemrowrownode" class="anchor" href="#edititemitemrowrownode" aria-hidden="true"><span class="octicon octicon-link"></span></a>editItem(item|$row|rowNode)</h3>

<p>Sets grid editing row.</p>

<p><strong>item|$row|rowNode</strong> is the reference to the item or the row jQueryElement or the row DomNode.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// edit row by item reference</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>editItem<span class="pl-pds">"</span></span>, item);

<span class="pl-c">// edit row by jQueryElement</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>editItem<span class="pl-pds">"</span></span>, $(<span class="pl-s1"><span class="pl-pds">"</span>.specific-row<span class="pl-pds">"</span></span>));

<span class="pl-c">// edit row by DomNode</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>editItem<span class="pl-pds">"</span></span>, rowNode);
</pre></div>

<h3>
<a id="insertitemitem-promise" class="anchor" href="#insertitemitem-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>insertItem([item]): <code>Promise</code>
</h3>

<p>Inserts row into the grid based on item.
Returns jQuery promise resolved when insertion is completed. </p>

<p><strong>item</strong> is the item to pass to <code>controller.insertItem</code>. </p>

<p>If <code>item</code> is not specified the data from inserting row will be inserted.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// insert item from inserting row</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>insertItem<span class="pl-pds">"</span></span>);

<span class="pl-c">// insert item</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>insertItem<span class="pl-pds">"</span></span>, { Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>, Age<span class="pl-k">:</span> <span class="pl-c1">25</span>, Country<span class="pl-k">:</span> <span class="pl-c1">2</span> }).done(<span class="pl-st">function</span>() {
    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">"</span>insertion completed<span class="pl-pds">"</span></span>);
});
</pre></div>

<h3>
<a id="openpagepageindex" class="anchor" href="#openpagepageindex" aria-hidden="true"><span class="octicon octicon-link"></span></a>openPage(pageIndex)</h3>

<p>Opens the page of specified index.</p>

<p><strong>pageIndex</strong> is one-based index of the page to open. The value should be in range from 1 to [total amount of pages].</p>

<h3>
<a id="optionkey-value" class="anchor" href="#optionkey-value" aria-hidden="true"><span class="octicon octicon-link"></span></a>option(key, [value])</h3>

<p>Gets or sets the value of an option.</p>

<p><strong>key</strong> is the name of the option.</p>

<p><strong>value</strong> is the new option value to set. </p>

<p>If <code>value</code> is not specified, then the value of the option <code>key</code> will be returned.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// turn off paging</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>option<span class="pl-pds">"</span></span>, <span class="pl-s1"><span class="pl-pds">"</span>paging<span class="pl-pds">"</span></span>, <span class="pl-c1">false</span>);

<span class="pl-c">// get current page index</span>
<span class="pl-s">var</span> pageIndex <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>option<span class="pl-pds">"</span></span>, <span class="pl-s1"><span class="pl-pds">"</span>pageIndex<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="refresh" class="anchor" href="#refresh" aria-hidden="true"><span class="octicon octicon-link"></span></a>refresh()</h3>

<p>Refreshes the grid. Renders the grid body and pager content, recalculates sizes.</p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>refresh<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="render-promise" class="anchor" href="#render-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>render(): <code>Promise</code>
</h3>

<p>Performs complete grid rendering. If option <code>autoload</code> is <code>true</code> calls <code>controller.loadData</code>. The state of the grid like current page and sorting is retained. 
Returns jQuery promise resolved when data loading is completed. If auto-loading is disabled the promise is instantly resolved.   </p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>render<span class="pl-pds">"</span></span>).done(<span class="pl-st">function</span>() {
    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">"</span>rendering completed and data loaded<span class="pl-pds">"</span></span>);
});
</pre></div>

<h3>
<a id="reset" class="anchor" href="#reset" aria-hidden="true"><span class="octicon octicon-link"></span></a>reset()</h3>

<p>Resets the state of the grid. Goes to the first data page, resets sorting, and then calls <code>refresh</code>.  </p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>reset<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="searchfilter-promise" class="anchor" href="#searchfilter-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>search([filter]): <code>Promise</code>
</h3>

<p>Performs filtering of the grid.
Returns jQuery promise resolved when data loading is completed. </p>

<p><strong>filter</strong> is a filter to pass to <code>controller.loadData</code>. </p>

<p>If <code>filter</code> is not specified the current filter (filtering row values) will be applied.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// search with current grid filter</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>search<span class="pl-pds">"</span></span>);

<span class="pl-c">// search with custom filter</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>search<span class="pl-pds">"</span></span>, { Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span> }).done(<span class="pl-st">function</span>() {
    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">"</span>filtering completed<span class="pl-pds">"</span></span>);
});
</pre></div>

<h3>
<a id="showprevpages" class="anchor" href="#showprevpages" aria-hidden="true"><span class="octicon octicon-link"></span></a>showPrevPages()</h3>

<p>Shows previous set of pages, when total amount of pages more than <code>pageButtonCount</code>.</p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>showPrevPages<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="shownextpages" class="anchor" href="#shownextpages" aria-hidden="true"><span class="octicon octicon-link"></span></a>showNextPages()</h3>

<p>Shows next set of pages, when total amount of pages more than <code>pageButtonCount</code>.</p>

<div class="highlight highlight-javascript"><pre>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>showNextPages<span class="pl-pds">"</span></span>);
</pre></div>

<h3>
<a id="sortsortconfigfield-order-promise" class="anchor" href="#sortsortconfigfield-order-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>sort(sortConfig|field, [order]): <code>Promise</code>
</h3>

<p>Sorts grid by specified field.
Returns jQuery promise resolved when sorting is completed.</p>

<p><strong>sortConfig</strong> is the plain object of the following structure <code>{ field: (fieldIndex|fieldName|field), order: ("asc"|"desc") }</code></p>

<p><strong>field</strong> is the field to sort by. It could be zero-based field index or field name or field reference</p>

<p><strong>order</strong> is the sorting order. Accepts the following values: "asc"|"desc"</p>

<p>If <code>order</code> is not specified, then data is sorted in the reversed to current order, when grid is already sorted by the same field. Or <code>"asc"</code> for sorting by another field.</p>

<p>When grid data is loaded by pages (<code>pageLoading</code> is <code>true</code>) sorting calls <code>controller.loadData</code> with sorting parameters. Read more in <a href="#grid-controller">Grid Controller</a> section.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// sorting grid by first field</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>sort<span class="pl-pds">"</span></span>, <span class="pl-c1">0</span>);

<span class="pl-c">// sorting grid by field "Name" in descending order</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>sort<span class="pl-pds">"</span></span>, { field<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span>, order<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>desc<span class="pl-pds">"</span></span> });

<span class="pl-c">// sorting grid by myField in ascending order </span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>sort<span class="pl-pds">"</span></span>, myField, <span class="pl-s1"><span class="pl-pds">"</span>asc<span class="pl-pds">"</span></span>).done(<span class="pl-st">function</span>() {
    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">"</span>sorting completed<span class="pl-pds">"</span></span>);
});
</pre></div>

<h3>
<a id="updateitemitemrowrownode-editeditem-promise" class="anchor" href="#updateitemitemrowrownode-editeditem-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>updateItem([item|$row|rowNode], [editedItem]): <code>Promise</code>
</h3>

<p>Updates item and row of the grid.
Returns jQuery promise resolved when update is completed.</p>

<p><strong>item|$row|rowNode</strong> is the reference to the item or the row jQueryElement or the row DomNode.</p>

<p><strong>editedItem</strong> is the changed item to pass to <code>controller.updateItem</code>.</p>

<p>If <code>item|$row|rowNode</code> is not specified then editing row will be updated.</p>

<p>If <code>editedItem</code> is not specified the data from editing row will be taken.</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// update currently editing row</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>updateItem<span class="pl-pds">"</span></span>);

<span class="pl-c">// update currently editing row with specified data</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>updateItem<span class="pl-pds">"</span></span>, { ID<span class="pl-k">:</span> <span class="pl-c1">1</span>, Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>, Age<span class="pl-k">:</span> <span class="pl-c1">25</span>, Country<span class="pl-k">:</span> <span class="pl-c1">2</span> });

<span class="pl-c">// update specified item with particular data (row DomNode or row jQueryElement can be used instead of item reference)</span>
$(<span class="pl-s1"><span class="pl-pds">"</span>#grid<span class="pl-pds">"</span></span>).jsGrid(<span class="pl-s1"><span class="pl-pds">"</span>updateItem<span class="pl-pds">"</span></span>, item, { ID<span class="pl-k">:</span> <span class="pl-c1">1</span>, Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>, Age<span class="pl-k">:</span> <span class="pl-c1">25</span>, Country<span class="pl-k">:</span> <span class="pl-c1">2</span> }).done(<span class="pl-st">function</span>() {
    <span class="pl-en">console</span><span class="pl-s3">.log</span>(<span class="pl-s1"><span class="pl-pds">"</span>update completed<span class="pl-pds">"</span></span>);
});
</pre></div>

<h2>
<a id="callbacks" class="anchor" href="#callbacks" aria-hidden="true"><span class="octicon octicon-link"></span></a>Callbacks</h2>

<h3>
<a id="ondataloading" class="anchor" href="#ondataloading" aria-hidden="true"><span class="octicon octicon-link"></span></a>onDataLoading</h3>

<p>Fires before data loading.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    filter              <span class="pl-c">// loading filter object</span>
}
</pre></div>

<h3>
<a id="ondataloaded" class="anchor" href="#ondataloaded" aria-hidden="true"><span class="octicon octicon-link"></span></a>onDataLoaded</h3>

<p>Fires after data loading.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    data                <span class="pl-c">// load result (array of items or data structure for loading by page scenario) </span>
}
</pre></div>

<h3>
<a id="onerror" class="anchor" href="#onerror" aria-hidden="true"><span class="octicon octicon-link"></span></a>onError</h3>

<p>Fires when controller handler promise failed.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    args                <span class="pl-c">// an array of arguments provided to fail promise handler </span>
}
</pre></div>

<h3>
<a id="onitemdeleting" class="anchor" href="#onitemdeleting" aria-hidden="true"><span class="octicon octicon-link"></span></a>onItemDeleting</h3>

<p>Fires before item deletion.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    row                 <span class="pl-c">// deleting row jQuery element</span>
    item                <span class="pl-c">// deleting item</span>
    itemIndex           <span class="pl-c">// deleting item index</span>
}
</pre></div>

<h3>
<a id="onitemdeleted" class="anchor" href="#onitemdeleted" aria-hidden="true"><span class="octicon octicon-link"></span></a>onItemDeleted</h3>

<p>Fires after item deletion.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    row                 <span class="pl-c">// deleted row jQuery element</span>
    item                <span class="pl-c">// deleted item</span>
    itemIndex           <span class="pl-c">// deleted item index</span>
}
</pre></div>

<h3>
<a id="oniteminserting" class="anchor" href="#oniteminserting" aria-hidden="true"><span class="octicon octicon-link"></span></a>onItemInserting</h3>

<p>Fires before item insertion.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    item                <span class="pl-c">// inserting item</span>
}
</pre></div>

<h3>
<a id="oniteminserted" class="anchor" href="#oniteminserted" aria-hidden="true"><span class="octicon octicon-link"></span></a>onItemInserted</h3>

<p>Fires after item insertion.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    item                <span class="pl-c">// inserted item</span>
}
</pre></div>

<h3>
<a id="onitemupdating" class="anchor" href="#onitemupdating" aria-hidden="true"><span class="octicon octicon-link"></span></a>onItemUpdating</h3>

<p>Fires before item update.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    row                 <span class="pl-c">// updating row jQuery element</span>
    item                <span class="pl-c">// updating item</span>
    itemIndex           <span class="pl-c">// updating item index</span>
}
</pre></div>

<h3>
<a id="onitemupdated" class="anchor" href="#onitemupdated" aria-hidden="true"><span class="octicon octicon-link"></span></a>onItemUpdated</h3>

<p>Fires after item update.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    row                 <span class="pl-c">// updated row jQuery element</span>
    item                <span class="pl-c">// updated item</span>
    itemIndex           <span class="pl-c">// updated item index</span>
}
</pre></div>

<h3>
<a id="onoptionchanging" class="anchor" href="#onoptionchanging" aria-hidden="true"><span class="octicon octicon-link"></span></a>onOptionChanging</h3>

<p>Fires before grid option value change.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    option              <span class="pl-c">// name of option to be changed</span>
    oldValue            <span class="pl-c">// old value of option</span>
    newValue            <span class="pl-c">// new value of option</span>
}
</pre></div>

<h3>
<a id="onoptionchanged" class="anchor" href="#onoptionchanged" aria-hidden="true"><span class="octicon octicon-link"></span></a>onOptionChanged</h3>

<p>Fires after grid option value change.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
    option              <span class="pl-c">// name of changed option</span>
    value               <span class="pl-c">// changed option value</span>
}
</pre></div>

<h3>
<a id="onrefreshing" class="anchor" href="#onrefreshing" aria-hidden="true"><span class="octicon octicon-link"></span></a>onRefreshing</h3>

<p>Fires before grid refresh.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
}
</pre></div>

<h3>
<a id="onrefreshed" class="anchor" href="#onrefreshed" aria-hidden="true"><span class="octicon octicon-link"></span></a>onRefreshed</h3>

<p>Fires after grid refresh.</p>

<p>Has following arguments:</p>

<div class="highlight highlight-javascript"><pre>
{
    grid                <span class="pl-c">// grid instance</span>
}
</pre></div>

<h2>
<a id="grid-controller" class="anchor" href="#grid-controller" aria-hidden="true"><span class="octicon octicon-link"></span></a>Grid Controller</h2>

<p>The controller is a gateway between grid and data storage. All data manipulations call accordant controller methods.
By default grid has an empty controller and can work with static array of items stored in option <code>data</code>.</p>

<p>A controller should implement following interface:</p>

<div class="highlight highlight-javascript"><pre>
{
    loadData
    insertItem
    updateItem
    deleteItem
}
</pre></div>

<p>For instance the controller for typical REST service might look like:</p>

<div class="highlight highlight-javascript"><pre>
{
    <span class="pl-en">loadData</span>: <span class="pl-st">function</span>(<span class="pl-vpf">filter</span>) {
        <span class="pl-k">return</span> $.ajax({
            type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>GET<span class="pl-pds">"</span></span>,
            url<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>/items<span class="pl-pds">"</span></span>,
            data<span class="pl-k">:</span> filter,
            dataType<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>json<span class="pl-pds">"</span></span>
        });
    },

    <span class="pl-en">insertItem</span>: <span class="pl-st">function</span>(<span class="pl-vpf">item</span>) {
        <span class="pl-k">return</span> $.ajax({
            type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>POST<span class="pl-pds">"</span></span>,
            url<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>/items<span class="pl-pds">"</span></span>,
            data<span class="pl-k">:</span> item,
            dataType<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>json<span class="pl-pds">"</span></span>
        });
    },

    <span class="pl-en">updateItem</span>: <span class="pl-st">function</span>(<span class="pl-vpf">item</span>) {
        <span class="pl-k">return</span> $.ajax({
            type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>PUT<span class="pl-pds">"</span></span>,
            url<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>/items<span class="pl-pds">"</span></span>,
            data<span class="pl-k">:</span> item,
            dataType<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>json<span class="pl-pds">"</span></span>
        });
    },

    <span class="pl-en">deleteItem</span>: <span class="pl-st">function</span>(<span class="pl-vpf">filter</span>) {
        <span class="pl-k">return</span> $.ajax({
            type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>DELETE<span class="pl-pds">"</span></span>,
            url<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>/items<span class="pl-pds">"</span></span>,
            data<span class="pl-k">:</span> filter,
            dataType<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>json<span class="pl-pds">"</span></span>
        });
    },
}
</pre></div>

<h3>
<a id="loaddatafilter-promisedataresult" class="anchor" href="#loaddatafilter-promisedataresult" aria-hidden="true"><span class="octicon octicon-link"></span></a>loadData(filter): <code>Promise|dataResult</code>
</h3>

<p>Called on data loading.</p>

<p><strong>filter</strong> contains all filter parameters of fields with enabled filtering</p>

<p>When <code>pageLoading</code> is <code>true</code> and data is loaded by page, <code>filter</code> includes two more parameters:</p>

<div class="highlight highlight-javascript"><pre>
{
    pageIndex     <span class="pl-c">// current page index</span>
    pageSize      <span class="pl-c">// the size of page</span>
}
</pre></div>

<p>When grid sorting is enabled, <code>filter</code> includes two more parameters:</p>

<div class="highlight highlight-javascript"><pre>
{
    sortField     <span class="pl-c">// the name of sorting field</span>
    sortOrder     <span class="pl-c">// the order of sorting as string "asc"|"desc"</span>
}
</pre></div>

<p>Method should return <code>dataResult</code> or jQuery promise that will be resolved with <code>dataResult</code>.</p>

<p><strong>dataResult</strong> depends on <code>pageLoading</code>. When <code>pageLoading</code> is <code>false</code> (by default), then data result is a plain javascript array of objects.
If <code>pageLoading</code> is <code>true</code> data result should have following structure </p>

<div class="highlight highlight-javascript"><pre>
{
    data          <span class="pl-c">// array of items</span>
    itemsCount    <span class="pl-c">// total items amount in storage</span>
}
</pre></div>

<h3>
<a id="insertitemitem-promiseinserteditem" class="anchor" href="#insertitemitem-promiseinserteditem" aria-hidden="true"><span class="octicon octicon-link"></span></a>insertItem(item): <code>Promise|insertedItem</code>
</h3>

<p>Called on item insertion.</p>

<p>Method should return <code>insertedItem</code> or jQuery promise that will be resolved with <code>insertedItem</code>. 
If no item is returned, inserting item will be used as inserted item. </p>

<p><strong>item</strong> is the item to be inserted.</p>

<h3>
<a id="updateitemitem-promiseupdateditem" class="anchor" href="#updateitemitem-promiseupdateditem" aria-hidden="true"><span class="octicon octicon-link"></span></a>updateItem(item): <code>Promise|updatedItem</code>
</h3>

<p>Called on item update.</p>

<p>Method should return <code>updatedItem</code> or jQuery promise that will be resolved with <code>updatedItem</code>.
If no item is returned, updating item will be used as updated item.</p>

<p><strong>item</strong> is the item to be updated.</p>

<h3>
<a id="deleteitemitem-promise" class="anchor" href="#deleteitemitem-promise" aria-hidden="true"><span class="octicon octicon-link"></span></a>deleteItem(item): <code>Promise</code>
</h3>

<p>Called on item deletion.</p>

<p>If deletion is asynchronous, method should return jQuery promise that will be resolved when deletion is completed.</p>

<p><strong>item</strong> is the item to be deleted.</p>

<h2>
<a id="sorting-strategies" class="anchor" href="#sorting-strategies" aria-hidden="true"><span class="octicon octicon-link"></span></a>Sorting Strategies</h2>

<p>All supported sorting strategies are stored in <code>jsGrid.sortStrategies</code> object, where key is a name of the strategy and the value is a <code>sortingFunction</code>.</p>

<p><code>jsGrid.sortStrategies</code> contains following build-in sorting strategies:</p>

<div class="highlight highlight-javascript"><pre>
{
    string<span class="pl-k">:</span> { ... },          <span class="pl-c">// string sorter</span>
    number<span class="pl-k">:</span> { ... },          <span class="pl-c">// number sorter</span>
    date<span class="pl-k">:</span> { ... },            <span class="pl-c">// date sorter</span>
    numberAsString<span class="pl-k">:</span> { ... }   <span class="pl-c">// numbers are parsed before comparison</span>
}
</pre></div>

<p><strong>sortingFunction</strong> is a sorting function with the following format:</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-st">function</span>(<span class="pl-vpf">value1</span>, <span class="pl-vpf">value2</span>) {
    <span class="pl-k">if</span>(value1 <span class="pl-k">&lt;</span> value2) <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; <span class="pl-c">// return negative value when first is less than second</span>
    <span class="pl-k">if</span>(value1 <span class="pl-k">===</span> value2) <span class="pl-k">return</span> <span class="pl-c1">0</span>; <span class="pl-c">// return zero if values are equal</span>
    <span class="pl-k">if</span>(value1 <span class="pl-k">&gt;</span> value2) <span class="pl-k">return</span> <span class="pl-c1">1</span>; <span class="pl-c">// return positive value when first is greater than second</span>
}
</pre></div>

<h3>
<a id="custom-sorting-strategy" class="anchor" href="#custom-sorting-strategy" aria-hidden="true"><span class="octicon octicon-link"></span></a>Custom Sorting Strategy</h3>

<p>If you need a custom sorting strategy, the object <code>jsGrid.sortStrategies</code> can be easily extended.</p>

<p>In this example we define new sorting strategy for our client objects:</p>

<div class="highlight highlight-javascript"><pre>
<span class="pl-c">// client object format</span>
<span class="pl-s">var</span> clients <span class="pl-k">=</span> [{
    Name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>,
    Age<span class="pl-k">:</span> <span class="pl-c1">25</span>
}, ...];

<span class="pl-c">// sort clients by name and then by age</span>
<span class="pl-s3">jsGrid.sortStrategies</span>.<span class="pl-en">client</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">client1</span>, <span class="pl-vpf">client2</span>) {
    <span class="pl-k">return</span> client1.Name.localeCompare(client2.Name) 
        <span class="pl-k">||</span> client1.Age <span class="pl-k">-</span> client2.Age;
};
</pre></div>

<p>Now, our new sorting strategy <code>client</code> can be used in the grid config as follows:</p>

<div class="highlight highlight-javascript"><pre>
{
    fields<span class="pl-k">:</span> [
      ...
      { type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span>, name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span>, sorter<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>client<span class="pl-pds">"</span></span> },
      ...
    ]
}
</pre></div>

<p>Worth to mention, that if you need particular sorting only once, you can just inline sorting function in <code>sorter</code> not registering the new strategy:</p>

<div class="highlight highlight-javascript"><pre>
{
    fields<span class="pl-k">:</span> [
      ...
      { 
          type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span>, 
          name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span>, 
          <span class="pl-en">sorter</span>: <span class="pl-st">function</span>(<span class="pl-vpf">client1</span>, <span class="pl-vpf">client2</span>) {
              <span class="pl-k">return</span> client1.Name.localeCompare(client2.Name) 
                  <span class="pl-k">||</span> client1.Age <span class="pl-k">-</span> client2.Age;
          } 
      },
      ...
    ]
}
</pre></div>
        </section>

        <aside id="sidebar">
          <a href="https://github.com/tabalinas/jsgrid/zipball/master" class="button">
            <small>Download</small>
            .zip file
          </a>
          <a href="https://github.com/tabalinas/jsgrid/tarball/master" class="button">
            <small>Download</small>
            .tar.gz file
          </a>

          <p class="repo-owner"><a href="https://github.com/tabalinas/jsgrid"></a> is maintained by <a href="https://github.com/tabalinas">tabalinas</a>.</p>

          <p>This page was generated by <a href="https://pages.github.com">GitHub Pages</a> using the Architect theme by <a href="https://twitter.com/jasonlong">Jason Long</a>.</p>
        </aside>
      </div>
    </div>

  