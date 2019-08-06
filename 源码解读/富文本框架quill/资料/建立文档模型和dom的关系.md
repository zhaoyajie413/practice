<div class="article fmt article__content" data-id="1190000019114222" data-license="cc">
                    
<h2 id="articleHeader0">概念介绍</h2>
<p>Parchment是Quill的文档模型。是一个和DOM树对应的平行树结构，给内容编辑器Quill提供有用的功能。</p>
<p>一个Parchment 树是由Blots构成。Blot是一个DOM节点的对应物。Blots可以提供结构，格式化，或内容。Attributor可以提供轻量级的格式化信息。</p>
<p>Parchment tree是DOM tree的对应，二者关系紧密。</p>
<h2 id="articleHeader1">官方示例</h2>
<p>LinkBlot</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="import Parchment from 'parchment';

class LinkBlot extends Parchment.Inline {
  static create(url) {
    let node = super.create();
    node.setAttribute('href', url);
    node.setAttribute('target', '_blank');
    node.setAttribute('title', node.textContent);
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href') || true;
  }

  format(name, value) {
    if (name === 'link' &amp;&amp; value) {
      this.domNode.setAttribute('href', value);
    } else {
      super.format(name, value);
    }
  }

  formats() {
    let formats = super.formats();
    formats['link'] = LinkBlot.formats(this.domNode);
    return formats;
  }
}
LinkBlot.blotName = 'link';
LinkBlot.tagName = 'A';

Parchment.register(LinkBlot);" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs scala"><code deep="6"><span class="hljs-keyword">import</span> <span class="hljs-type">Parchment</span> from <span class="hljs-symbol">'parchmen</span>t';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LinkBlot</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Parchment</span>.<span class="hljs-title">Inline</span> </span>{
  static create(url) {
    let node = <span class="hljs-keyword">super</span>.create();
    node.setAttribute(<span class="hljs-symbol">'hre</span>f', url);
    node.setAttribute(<span class="hljs-symbol">'targe</span>t', <span class="hljs-symbol">'_blan</span>k');
    node.setAttribute(<span class="hljs-symbol">'titl</span>e', node.textContent);
    <span class="hljs-keyword">return</span> node;
  }

  static formats(domNode) {
    <span class="hljs-keyword">return</span> domNode.getAttribute(<span class="hljs-symbol">'hre</span>f') || <span class="hljs-literal">true</span>;
  }

  format(name, value) {
    <span class="hljs-keyword">if</span> (name === <span class="hljs-symbol">'lin</span>k' &amp;&amp; value) {
      <span class="hljs-keyword">this</span>.domNode.setAttribute(<span class="hljs-symbol">'hre</span>f', value);
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">super</span>.format(name, value);
    }
  }

  formats() {
    let formats = <span class="hljs-keyword">super</span>.formats();
    formats[<span class="hljs-symbol">'lin</span>k'] = <span class="hljs-type">LinkBlot</span>.formats(<span class="hljs-keyword">this</span>.domNode);
    <span class="hljs-keyword">return</span> formats;
  }
}
<span class="hljs-type">LinkBlot</span>.blotName = <span class="hljs-symbol">'lin</span>k';
<span class="hljs-type">LinkBlot</span>.tagName = '<span class="hljs-type">A</span>';

<span class="hljs-type">Parchment</span>.register(<span class="hljs-type">LinkBlot</span>);</code></pre>
<h2 id="articleHeader2">常见问题</h2>
<h3 id="articleHeader3">富文本编辑器为什么需要自己的一套文档模型？</h3>
<p>为什么必要？<br>为了提供一致的编辑体验，你需要一致的数据和可预测的行为。但是DOM在这两方面都不完美。所以现代的编辑器通过管理自己的文档模型来表示内容。</p>
<p>它的价值？<br>提供一致的数据和可预测的行为</p>
<h3 id="articleHeader4">如何构造出一套文档模型？如何与DOM建立关系?</h3>
<p>首先需要定义出一套基础抽象节点类型, 一套基础的Attributor</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="ParentBlot, 
ContainerBlot,
LeafBlot,
EmbedBlot,
ScrollBlot,
BlockBlot, 
InlineBlot,
TextBlot

Attributor
ClassAttributor
StyleAttributor" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs"><code>ParentBlot, 
ContainerBlot,
LeafBlot,
EmbedBlot,
ScrollBlot,
BlockBlot, 
InlineBlot,
TextBlot

Attributor
ClassAttributor
StyleAttributor</code></pre>
<p>然后会依赖于这些基础节点类型，来构造出一些实际节点类型。Quill中定义了一些实际节点</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="BlockBlot => Block
EmbedBlot => BlockEmbed
EmbedBlot => Break
ContainerBlot => Container
EmbedBlot => Cursor
EmbedBlot => Embed
InlineBlot => Inline
ScrollBlot => Scroll
TextBlot => Text" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs ini"><code><span class="hljs-attr">BlockBlot</span> =&gt; Block
<span class="hljs-attr">EmbedBlot</span> =&gt; BlockEmbed
<span class="hljs-attr">EmbedBlot</span> =&gt; Break
<span class="hljs-attr">ContainerBlot</span> =&gt; Container
<span class="hljs-attr">EmbedBlot</span> =&gt; Cursor
<span class="hljs-attr">EmbedBlot</span> =&gt; Embed
<span class="hljs-attr">InlineBlot</span> =&gt; Inline
<span class="hljs-attr">ScrollBlot</span> =&gt; Scroll
<span class="hljs-attr">TextBlot</span> =&gt; Text</code></pre>
<p>如何与DOM建立关系?<br>新建Blot时会调用<code>static create</code>方法创建dom节点，并设置<code>blot.domNode = dom</code>。 即建立关系。</p>
<h2 id="articleHeader5">源码分析</h2>
<h3 id="articleHeader6">基础设计</h3>
<p>目录结构</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="- src
    - attributor
        - attributor.ts
        - class.ts
        - store.ts
        - style.ts
    - blot
        - abstract
            - blot.ts
            - container.ts
            - format.ts
            - leaf.ts
            - shadow.ts
        - block.ts
        - embed.ts
        - inline.ts
        - scroll.ts
        - text.ts
    - collection
        - linked-list.ts
        - linked.node.ts
    - parchment.ts
    - registry.ts
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs css"><code><span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">src</span>
    <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">attributor</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">attributor</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">class</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">store</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">style</span><span class="hljs-selector-class">.ts</span>
    <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">blot</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">abstract</span>
            <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">blot</span><span class="hljs-selector-class">.ts</span>
            <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">container</span><span class="hljs-selector-class">.ts</span>
            <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">format</span><span class="hljs-selector-class">.ts</span>
            <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">leaf</span><span class="hljs-selector-class">.ts</span>
            <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">shadow</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">block</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">embed</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">inline</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">scroll</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">text</span><span class="hljs-selector-class">.ts</span>
    <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">collection</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">linked-list</span><span class="hljs-selector-class">.ts</span>
        <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">linked</span><span class="hljs-selector-class">.node</span><span class="hljs-selector-class">.ts</span>
    <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">parchment</span><span class="hljs-selector-class">.ts</span>
    <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">registry</span><span class="hljs-selector-class">.ts</span>
</code></pre>
<h4>类图完整版</h4>
<p><span class="img-wrap"><img data-src="/img/bVbsmBq?w=2059&amp;h=3627" src="/img/bVbsmBq?w=2059&amp;h=3627" alt="图片描述" title="图片描述" style="cursor: pointer; display: inline;"></span></p>
<h4>类图简易版</h4>
<p><span class="img-wrap"><img data-src="/img/bVbsmBu?w=1215&amp;h=1130" src="/img/bVbsmBu?w=1215&amp;h=1130" alt="图片描述" title="图片描述" style="cursor: pointer; display: inline;"></span></p>
<h4>在parchment.ts中对外导出的有四类东西。</h4>
<ul>
<li>
<p>节点Blot</p>
<ul>
<li>ParentBlot 【父级节点】能对子节点进行增，删，改，移动，查</li>
<li>ContainerBlot 【容器节点】</li>
<li>LeafBlot 【叶节点】</li>
<li>EmbedBlot 嵌入式节点 【可格式化的叶节点】</li>
<li>ScrollBlot root【文档的根节点，不可格式化】</li>
<li>BlockBlot 块级 【可格式化的父级节点】</li>
<li>InlineBlot 内联 【可格式化的父级节点】</li>
<li>TextBlot 文本【叶节点】</li>
</ul>
</li>
<li>
<p>属性Attributor</p>
<ul>
<li>Attributor 【一种代表格式的方法】</li>
<li>ClassAttributor 【使用classname模式来代表格式】</li>
<li>StyleAttributor 【使用内联样式来代表格式】</li>
<li>AttributorStore  【节点的attributes管理器】在BlockBlot InlineBlot中使用到了</li>
</ul>
</li>
<li>
<p>注册中心</p>
<ul><li>Registry 【static blots = new WeakMap&lt;Node, Blot&gt;， attributes，classes，tags，types 】</li></ul>
</li>
<li>
<p>类型常量Scope</p>
<ul><li>Scope</li></ul>
</li>
</ul>
<h3 id="articleHeader7">从一个例子看源码流程</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="let Inline = Quill.import('blots/inline');

class BoldBlot extends Inline { }
BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';

class ItalicBlot extends Inline { }
ItalicBlot.blotName = 'italic';
ItalicBlot.tagName = 'em';

Quill.register(BoldBlot);
Quill.register(ItalicBlot);

let quill = new Quill('#editor-container');

$('#bold-button').click(function() {
  quill.format('bold', true);
});
$('#italic-button').click(function() {
  quill.format('italic', true);
});
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs scala"><code>let <span class="hljs-type">Inline</span> = <span class="hljs-type">Quill</span>.<span class="hljs-keyword">import</span>(<span class="hljs-symbol">'blots</span>/inline');

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">BoldBlot</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Inline</span> </span>{ }
<span class="hljs-type">BoldBlot</span>.blotName = <span class="hljs-symbol">'bol</span>d';
<span class="hljs-type">BoldBlot</span>.tagName = <span class="hljs-symbol">'stron</span>g';

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ItalicBlot</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Inline</span> </span>{ }
<span class="hljs-type">ItalicBlot</span>.blotName = <span class="hljs-symbol">'itali</span>c';
<span class="hljs-type">ItalicBlot</span>.tagName = <span class="hljs-symbol">'e</span>m';

<span class="hljs-type">Quill</span>.register(<span class="hljs-type">BoldBlot</span>);
<span class="hljs-type">Quill</span>.register(<span class="hljs-type">ItalicBlot</span>);

let quill = <span class="hljs-keyword">new</span> <span class="hljs-type">Quill</span>('#editor-container');

$('#bold-button').click(function() {
  quill.format(<span class="hljs-symbol">'bol</span>d', <span class="hljs-literal">true</span>);
});
$('#italic-button').click(function() {
  quill.format(<span class="hljs-symbol">'itali</span>c', <span class="hljs-literal">true</span>);
});
</code></pre>
<ol>
<li>依赖于Quill提供的Inline类，构造了BoldBlot, ItalicBlot类，并注册到Quill, 会注册出formats/blod, formats/italic（是在Parchment导出的Registry中注册）</li>
<li>传入dom id, 构造出一个Quill实例quill。 这里会初始化大量属性，和它内部的模块，注册一些事件，#editor-container中会插入些个quill自己的dom结构，prev sibling会插入一个div.ql-toolbar。</li>
</ol>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="<div class=&quot;ql-toolbar ql-snow&quot;></div>
<div id=&quot;editor-container&quot; class=&quot;ql-container ql-snow&quot;>
    <div class=&quot;ql-editor&quot; data-gramm=&quot;false&quot; contenteditable=&quot;true&quot;></div>
    <div class=&quot;ql-editor&quot; data-gramm=&quot;false&quot; contenteditable=&quot;true&quot;></div>
    <div class=&quot;ql-tooltip ql-hidden&quot;></div>
</div>" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"ql-toolbar ql-snow"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;div id=<span class="hljs-string">"editor-container"</span> <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"ql-container ql-snow"</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ql-editor"</span> <span class="hljs-attr">data-gramm</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">contenteditable</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    &lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"ql-editor"</span> data-gramm=<span class="hljs-string">"false"</span> contenteditable=<span class="hljs-string">"true"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    &lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"ql-tooltip ql-hidden"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;<span class="hljs-regexp">/div&gt;</span></code></pre>
<p>3.给toolbar上的icon绑定事件，click触发时执行quill的格式化方法（里面会做一些判断，看是否有selection, 进行对应的格式化）。</p>
<h4>quill.format分两种情况</h4>
<h5>A. 选中部分内容后，执行格式化。代码流程：</h5>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="this.editor.formatText -> [this.scroll.formatAt, this.update(delta)] -> scrollBlot.formatAt -> parent.formatAt -> inline.formatAt -> inline.format(DOM修改)" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs kotlin"><code style="word-break: break-word; white-space: initial;"><span class="hljs-keyword">this</span>.editor.formatText -&gt; [<span class="hljs-keyword">this</span>.scroll.formatAt, <span class="hljs-keyword">this</span>.update(delta)] -&gt; scrollBlot.formatAt -&gt; parent.formatAt -&gt; <span class="hljs-keyword">inline</span>.formatAt -&gt; <span class="hljs-keyword">inline</span>.format(DOM修改)</code></pre>
<p><code>quill.format('bold', true)</code>本质上会找到BoldBlot，然后执行它的format方法（格式化选中部分），同步更新delta, 真实的修改DOM，给selection添加strong标签。</p>
<p>delta同步和DOM同步是彼此独立的，delta同步相对简单一些（但会做一些组合优化）</p>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="const delta = new Delta().retain(index).retain(length, clone(formats));
return this.update(delta);`" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs kotlin"><code><span class="hljs-keyword">const</span> delta = new Delta().retain(index).retain(length, clone(formats));
<span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.update(delta);`</code></pre>
<h5>B. 未选中内容，执行格式化。</h5>
<p>未选中内容是对光标进行格式化。 <code>this.selection.format -&gt; this.cursor.format</code>。即会对光标后新写的内容对应格式化。</p>
<h3 id="articleHeader8">另一个例子</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'divider';
DividerBlot.tagName = 'hr';

$('#divider-button').click(function() {
  let range = quill.getSelection(true);
  quill.insertText(range.index, '\n', Quill.sources.USER);
  quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
  quill.setSelection(range.index + 2, Quill.sources.SILENT);
});
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs scala"><code><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DividerBlot</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">BlockEmbed</span> </span>{ }
<span class="hljs-type">DividerBlot</span>.blotName = <span class="hljs-symbol">'divide</span>r';
<span class="hljs-type">DividerBlot</span>.tagName = <span class="hljs-symbol">'h</span>r';

$('#divider-button').click(function() {
  let range = quill.getSelection(<span class="hljs-literal">true</span>);
  quill.insertText(range.index, '\n', <span class="hljs-type">Quill</span>.sources.<span class="hljs-type">USER</span>);
  quill.insertEmbed(range.index + <span class="hljs-number">1</span>, <span class="hljs-symbol">'divide</span>r', <span class="hljs-literal">true</span>, <span class="hljs-type">Quill</span>.sources.<span class="hljs-type">USER</span>);
  quill.setSelection(range.index + <span class="hljs-number">2</span>, <span class="hljs-type">Quill</span>.sources.<span class="hljs-type">SILENT</span>);
});
</code></pre>
<p>insertEmbed基本流程：<code>quill.insertEmbed -&gt; this.editor.insertEmbed -&gt; [this.scroll.insertAt, this.update(delta)] -&gt; 创建DOM，插到指定位置</code><br>同样的，创建DOM，更新delta都会进行。</p>
<h2 id="articleHeader9">参考资料</h2>
<p><a href="https://github.com/quilljs/parchment/" rel="nofollow noreferrer" target="_blank">https://github.com/quilljs/pa...</a></p>
<p><a href="https://quilljs.com/guides/cloning-medium-with-parchment/" rel="nofollow noreferrer" target="_blank">https://quilljs.com/guides/cl...</a></p>

                </div>
