var formCheckbox = `
<div class="checkbox-box">
	<h3>基础用法</h3>
	<p>单独使用可以表示两种状态之间的切换。</p>
	<div class="group">
		<div class="show-box">
			<label class="sp-checkbox is-checked">
				<input type="checkbox" checked>看电影
			</label>
			<label class="sp-checkbox">
				<input type="checkbox">听音乐
			</label>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;label class="sp-checkbox is-checked"&gt;
    &lt;input type="checkbox" checked&gt;看电影
&lt;/label&gt;
&lt;label class="sp-checkbox"&gt;
    &lt;input type="checkbox"&gt;听音乐
&lt;/label&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁用状态</h3>
	<p>多选框不可用状态。</p>
	<div class="group">
		<div class="show-box">
			<label class="sp-checkbox is-disabled">
				<input type="checkbox" disabled>看电影
			</label>
			<label class="sp-checkbox is-disabled is-checked">
				<input type="checkbox" disabled checked>听音乐
			</label>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;label class="sp-checkbox is-disabled"&gt;
	&lt;input type="checkbox" disabled&gt;看电影
&lt;/label&gt;
&lt;label class="sp-checkbox is-disabled is-checked"&gt;
	&lt;input type="checkbox" disabled checked&gt;听音乐
&lt;/label&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<thead>
			<tr><th width="120">类名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>.sp-checkbox</td><td>必须。默认为不选中</td></tr>
			<tr><td>.is-checked</td><td>选中状态，可以通过click事件手动设置，也可以通过设置label的is-checked类与input的checked属性设置</td></tr>
			<tr><td>.is-disabled</td><td>禁用状态，可以通过setDisabled事件手动设置，也可通过设置label的is-disabled类与input的disabled属性设置</td></tr>
		</tbody>
	</table>

	<table class="sp-table border mt40">
		<thead>
			<tr><th width="100">事件名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>click</td><td>设置选中状态</td></tr>
			<tr><td>getDisabled</td><td>获取禁用状态</td></tr>
			<tr><td>setDisabled</td><td>设置禁用状态，参数（true/false）</td></tr>
		</tbody>
	</table>
</div>
`;