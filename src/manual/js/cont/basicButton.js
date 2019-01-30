var contTmp = `
<div class="button-box">
	<h3>基础用法</h3>
	<p>基础的按钮用法。为&lt;a&gt;、&lt;input&gt;、&lt;button&gt;添加按钮类即可使用。</p>
	<div class="group">
		<div class="show-box">
			<div class="row">
				<button class="sp-btn">默认按钮</button>
				<a class="sp-btn" href="#">默认按钮</a>
				<input class="sp-btn" type="button" value="默认按钮">
			</div>
			<div class="row">
				<button class="sp-btn">默认按钮</button>
				<button class="sp-btn primary">主要按钮</button>
				<button class="sp-btn success">成功按钮</button>
				<button class="sp-btn info">信息按钮</button>
				<button class="sp-btn warning">警告按钮</button>
				<button class="sp-btn danger">危险按钮</button>
			</div>
			<div class="row">
				<button class="sp-btn is-plain">默认按钮</button>
				<button class="sp-btn primary is-plain">主要按钮</button>
				<button class="sp-btn success is-plain">成功按钮</button>
				<button class="sp-btn info is-plain">信息按钮</button>
				<button class="sp-btn warning is-plain">警告按钮</button>
				<button class="sp-btn danger is-plain">危险按钮</button>
			</div>
			<div class="row">
				<button class="sp-btn is-round">默认按钮</button>
				<button class="sp-btn primary is-round">主要按钮</button>
				<button class="sp-btn success is-round">成功按钮</button>
				<button class="sp-btn info is-round">信息按钮</button>
				<button class="sp-btn warning is-round">警告按钮</button>
				<button class="sp-btn danger is-round">危险按钮</button>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="row"&gt;
    &lt;button class="sp-btn"&gt;默认按钮&lt;/button&gt;
    &lt;a class="sp-btn" href="#"&gt;默认按钮&lt;/a&gt;
    &lt;input class="sp-btn" type="button" value="默认按钮"&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;button class="sp-btn"&gt;默认按钮&lt;/button&gt;
    &lt;button class="sp-btn primary"&gt;主要按钮&lt;/button&gt;
    &lt;button class="sp-btn success"&gt;成功按钮&lt;/button&gt;
    &lt;button class="sp-btn info"&gt;信息按钮&lt;/button&gt;
    &lt;button class="sp-btn warning"&gt;警告按钮&lt;/button&gt;
    &lt;button class="sp-btn danger"&gt;危险按钮&lt;/button&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;button class="sp-btn is-plain"&gt;默认按钮&lt;/button&gt;
    &lt;button class="sp-btn primary is-plain"&gt;主要按钮&lt;/button&gt;
    &lt;button class="sp-btn success is-plain"&gt;成功按钮&lt;/button&gt;
    &lt;button class="sp-btn info is-plain"&gt;信息按钮&lt;/button&gt;
    &lt;button class="sp-btn warning is-plain"&gt;警告按钮&lt;/button&gt;
    &lt;button class="sp-btn danger is-plain"&gt;危险按钮&lt;/button&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;button class="sp-btn is-round"&gt;默认按钮&lt;/button&gt;
    &lt;button class="sp-btn primary is-round"&gt;主要按钮&lt;/button&gt;
    &lt;button class="sp-btn success is-round"&gt;成功按钮&lt;/button&gt;
    &lt;button class="sp-btn info is-round"&gt;信息按钮&lt;/button&gt;
    &lt;button class="sp-btn warning is-round"&gt;警告按钮&lt;/button&gt;
    &lt;button class="sp-btn danger is-round"&gt;危险按钮&lt;/button&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁用状态</h3>
	<p>按钮不可用状态。</p>
	<div class="group">
		<div class="show-box">
			<div class="row">
				<button class="sp-btn" disabled>默认按钮</button>
				<button class="sp-btn primary" disabled>主要按钮</button>
				<button class="sp-btn success" disabled>成功按钮</button>
				<button class="sp-btn info" disabled>信息按钮</button>
				<button class="sp-btn warning" disabled>警告按钮</button>
				<button class="sp-btn danger" disabled>危险按钮</button>
			</div>
			<div class="row">
				<button class="sp-btn is-plain" disabled>默认按钮</button>
				<button class="sp-btn primary is-plain" disabled>主要按钮</button>
				<button class="sp-btn success is-plain" disabled>成功按钮</button>
				<button class="sp-btn info is-plain" disabled>信息按钮</button>
				<button class="sp-btn warning is-plain" disabled>警告按钮</button>
				<button class="sp-btn danger is-plain" disabled>危险按钮</button>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">默认使用的是:diasbled选择器添加的样式，可以给节点添加is-disabled样式表示未选中<br>
&lt;div class="row"&gt;
    &lt;button class="sp-btn" disabled&gt;默认按钮&lt;/button&gt;
    &lt;button class="sp-btn primary" disabled&gt;主要按钮&lt;/button&gt;
    &lt;button class="sp-btn success" disabled&gt;成功按钮&lt;/button&gt;
    &lt;button class="sp-btn info" disabled&gt;信息按钮&lt;/button&gt;
    &lt;button class="sp-btn warning" disabled&gt;警告按钮&lt;/button&gt;
    &lt;button class="sp-btn danger" disabled&gt;危险按钮&lt;/button&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;button class="sp-btn is-plain" disabled&gt;默认按钮&lt;/button&gt;
    &lt;button class="sp-btn primary is-plain" disabled&gt;主要按钮&lt;/button&gt;
    &lt;button class="sp-btn success is-plain" disabled&gt;成功按钮&lt;/button&gt;
    &lt;button class="sp-btn info is-plain" disabled&gt;信息按钮&lt;/button&gt;
    &lt;button class="sp-btn warning is-plain" disabled&gt;警告按钮&lt;/button&gt;
    &lt;button class="sp-btn danger is-plain" disabled&gt;危险按钮&lt;/button&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>图标按钮</h3>
	<p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
	<div class="group">
		<div class="show-box">
			<button class="sp-btn primary">
				<i class="sp-icon-edit"></i>
			</button>
			<button class="sp-btn primary">
				<i class="sp-icon-share"></i>
			</button>
			<button class="sp-btn primary">
				<i class="sp-icon-delete"></i>
			</button>
			<button class="sp-btn primary">
				<i class="sp-icon-search"></i><span>搜索</span>
			</button>
			<button class="sp-btn primary">
				<span>上传</span><i class="sp-icon-upload"></i>
			</button>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;button class="sp-btn primary"&gt;
    &lt;i class="sp-icon-edit"&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;button class="sp-btn primary"&gt;
    &lt;i class="sp-icon-share"&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;button class="sp-btn primary"&gt;
    &lt;i class="sp-icon-delete"&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;button class="sp-btn primary"&gt;
    &lt;i class="sp-icon-search"&gt;&lt;/i&gt;&lt;span&gt;搜索&lt;/span&gt;
&lt;/button&gt;
&lt;button class="sp-btn primary"&gt;
    &lt;span&gt;上传&lt;/span&gt;&lt;i class="sp-icon-upload"&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>加载中</h3>
	<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
	<div class="group">
		<div class="show-box">
			<button class="sp-btn primary">加载</button>
			<button class="sp-btn primary is-loading">
				<i class="sp-icon-loading"></i><span>加载中</span>
			</button>
		</div>
		<div class="code-box">
<pre><code class="html">加载中.is-loading类的原理是使用before在按钮上添加一层半透明的遮罩，让button点击不到。<br>
&lt;button class="sp-btn primary"&gt;加载&lt;/button&gt;
&lt;button class="sp-btn primary is-loading"&gt;
    &lt;i class="sp-icon-loading"&gt;&lt;/i&gt;&lt;span&gt;加载中&lt;/span&gt;
&lt;/button&gt;
</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>尺寸</h3>
	<p>额外的尺寸，使用 .medium 、.small 或 .mini 就可以获得不同尺寸的按钮。</p>
	<div class="group">
		<div class="show-box">
			<button class="sp-btn">默认按钮</button>
			<button class="sp-btn medium">中等按钮</button>
			<button class="sp-btn small">小型按钮</button>
			<button class="sp-btn mini">超小按钮</button>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;button class="sp-btn"&gt;默认按钮&lt;/button&gt;
&lt;button class="sp-btn medium"&gt;中等按钮&lt;/button&gt;
&lt;button class="sp-btn small"&gt;小型按钮&lt;/button&gt;
&lt;button class="sp-btn mini"&gt;超小按钮&lt;/button&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>块级元素</h3>
	<p>通过给按钮添加 .is-block 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row">
				<div class="sp-col-12 sp-col-offset-6">
					<button class="sp-btn primary is-block">块级元素</button>
				</div>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;button class="sp-btn primary is-block"&gt;块级元素&lt;/button&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<thead>
			<tr><th width="100">类名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>.sp-btn</td><td>必须。默认按钮</td></tr>
			<tr><td>.primary</td><td>蓝色。主要按钮</td></tr>
			<tr><td>.success</td><td>绿色。成功按钮</td></tr>
			<tr><td>.info</td><td>灰色。信息按钮</td></tr>
			<tr><td>.warning</td><td>黄色。警告按钮</td></tr>
			<tr><td>.danger</td><td>红色。危险按钮</td></tr>
			<tr><td>.is-plain</td><td>背景为白色，普通按钮</td></tr>
			<tr><td>.is-round</td><td>圆角按钮</td></tr>
			<tr><td>.medium</td><td>中等尺寸按钮</td></tr>
			<tr><td>.small</td><td>小型尺寸按钮</td></tr>
			<tr><td>.mini</td><td>超小尺寸按钮</td></tr>
			<tr><td>.is-block</td><td>块级元素，占一行</td></tr>
		</tbody>
	</table>
</div>
`