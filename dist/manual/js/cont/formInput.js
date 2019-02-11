var formInput = `
<div class="input-box">
	<h3>基础用法</h3>
	<p>使用sp-input给输入框添加默认样式。</p>
	<div class="group">
		<div class="show-box">
			<input class="sp-input" type="text" placeholder="请输入内容">
		</div>
		<div class="code-box">
<pre><code class="html">&lt;input class="sp-input" type="text" placeholder="请输入内容"&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁用状态</h3>
	<p>给sp-input输入框添加is-disabled，与disabled属性设置为禁用状态。</p>
	<div class="group">
		<div class="show-box">
			<input class="sp-input is-disabled" type="text" placeholder="请输入内容" disabled>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;input class="sp-input is-disabled" type="text" placeholder="请输入内容" disabled&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>块级元素</h3>
	<p>添加is-block类</p>
	<div class="group">
		<div class="show-box">
			<input class="sp-input is-block" type="text" placeholder="请输入内容">
		</div>
		<div class="code-box">
<pre><code class="html">&lt;input class="sp-input is-block" type="text" placeholder="请输入内容"&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>尺寸</h3>
	<p>中型.medium，小型.small，超小.mini</p>
	<div class="group">
		<div class="show-box">
			<input class="sp-input medium" type="text" placeholder="请输入内容">
			<input class="sp-input small" type="text" placeholder="请输入内容">
			<input class="sp-input mini" type="text" placeholder="请输入内容">
		</div>
		<div class="code-box">
<pre><code class="html">&lt;input class="sp-input medium" type="text" placeholder="请输入内容"&gt;
&lt;input class="sp-input small" type="text" placeholder="请输入内容"&gt;
&lt;input class="sp-input mini" type="text" placeholder="请输入内容"&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<thead>
			<tr>
				<th width="100">类名</th><th>说明</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>.sp-table</td><td>必须。默认样式</td>
			</tr>
			<tr>
				<td>.is-disabled</td><td>禁用状态、需和disabled属性一起使用</td>
			</tr>
			<tr>
				<td>.is-block</td><td>块级元素</td>
			</tr>
			<tr>
				<td>.medium</td><td>中级尺寸输入框</td>
			</tr>
			<tr>
				<td>.small</td><td>小级尺寸输入框</td>
			</tr>
			<tr>
				<td>.mini</td><td>超小型尺寸</td>
			</tr>
		</tbody>
	</table>
</div>
`;