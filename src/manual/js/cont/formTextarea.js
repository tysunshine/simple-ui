var formTextarea = `
<div class="textarea-box">
	<h3>基础用法</h3>
	<p>使用sp-textarea给文本域添加默认样式。</p>
	<div class="group">
		<div class="show-box">
			<textarea class="sp-textarea" placeholder="请输入数据"></textarea>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;textarea class="sp-textarea"&gt;&lt;/textarea&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁用输入</h3>
	<p>添加disabled属性，启用禁用状态。</p>
	<div class="group">
		<div class="show-box">
			<textarea class="sp-textarea" disabled placeholder="请输入数据"></textarea>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;textarea class="sp-textarea" disabled&gt;&lt;/textarea&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁止拉伸</h3>
	<p>使用is-noreisze类，禁止文本域拉伸。</p>
	<div class="group">
		<div class="show-box">
			<textarea class="sp-textarea is-noresize" placeholder="请输入数据"></textarea>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;textarea class="sp-textarea is-noresize"&gt;&lt;/textarea&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>块级元素</h3>
	<p>使用is-block类，设置元素站一行。</p>
	<div class="group">
		<div class="show-box">
			<textarea class="sp-textarea is-block" placeholder="请输入数据"></textarea>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;textarea class="sp-textarea is-block"&gt;&lt;/textarea&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>行列字符数</h3>
	<p>使用rows设置列字符数，cols设置行字符数，注意1个汉字站2个行字符位。</p>
	<div class="group">
		<div class="show-box">
			<textarea class="sp-textarea" rows="3" cols="10" placeholder="请输入数据"></textarea>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;textarea class="sp-textarea" rows="3" cols="10"&gt;&lt;/textarea&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<tr><th width="100">类名</th><th>说明</th></tr>
		<tr><td>.sp-textarea</td><td>必须。默认样式</td></tr>
		<tr><td>.is-noresize</td><td>禁止拉伸</td></tr>
		<tr><td>.is-block</td><td>块级元素，占一行</td></tr>
	</table>

	<table class="sp-table border mt40">
		<tr><th width="100">属性名</th><th>说明</th></tr>
		<tr><td>disabled</td><td>为true时禁止输入</td></tr>
		<tr><td>rows</td><td>默认列字符数</td></tr>
		<tr><td>cols</td><td>默认行字符数</td></tr>
	</table>
</div>
`;