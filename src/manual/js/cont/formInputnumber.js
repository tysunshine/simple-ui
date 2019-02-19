var formInputnumber = `
<div class="input-number-box">
	<h3>基础用法</h3>
	<p>.sp-input-number类名，给div添加默认样式。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number"></div>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;div class="sp-input-number"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>初始值</h3>
	<p>value属性设置初始值，默认值1。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number" value="0"></div>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;div class="sp-input-number" value="0"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>精度</h3>
	<p>precision属性设置精度，值在0到20之间，默认值0。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number" precision="2" value="3.14159"></div>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;div class="sp-input-number" precision="2" value="3.14159"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>范围</h3>
	<p>min属性设置最小值，max属性设置最大值，默认无限制。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number" min="1" max="4"></div>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;div class="sp-input-number" min="1" max="4"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>步数</h3>
	<p>step属性设置步数，默认值1。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number" step="2"></div>
		</div>
		<div class="code-box">
			<pre><code class="html">&lt;div class="sp-input-number" step="2"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>尺寸</h3>
	<p>.medium、.small、.mini类名，设置计数器尺寸。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number"></div>
			<div class="sp-input-number medium"></div>
			<div class="sp-input-number small"></div>
			<div class="sp-input-number mini"></div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-input-number"&gt;&lt;/div&gt;
&lt;div class="sp-input-number medium"&gt;&lt;/div&gt;
&lt;div class="sp-input-number small"&gt;&lt;/div&gt;
&lt;div class="sp-input-number mini"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>是否使用控件</h3>
	<p>controls属性，设置是否使用控件，默认使用，可选值false、'false'。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number" controls="false"></div>
			<div class="sp-input-number medium" controls="false"></div>
			<div class="sp-input-number small" controls="false"></div>
			<div class="sp-input-number mini" controls="false"></div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-input-number" controls="false"&gt;&lt;/div&gt;
&lt;div class="sp-input-number medium" controls="false"&gt;&lt;/div&gt;
&lt;div class="sp-input-number small" controls="false"&gt;&lt;/div&gt;
&lt;div class="sp-input-number mini" controls="false"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>控件位置</h3>
	<p>controls-position属性，设置控件位置，可选值right。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-input-number" controls-position="right"></div>
			<div class="sp-input-number medium" controls-position="right" min="1"></div>
			<div class="sp-input-number small" controls-position="right"></div>
			<div class="sp-input-number mini" controls-position="right"></div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-input-number" controls-position="right"&gt;&lt;/div&gt;
&lt;div class="sp-input-number medium" controls-position="right" min="1"&gt;&lt;/div&gt;
&lt;div class="sp-input-number small" controls-position="right"&gt;&lt;/div&gt;
&lt;div class="sp-input-number mini" controls-position="right"&gt;&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<tr><th width="150">类名</th><th>说明</th></tr>
		<tr><td>.sp-input-number</td><td>必须。默认样式</td></tr>
		<tr><td>.medium</td><td>中级尺寸输入框</td></tr>
		<tr><td>.small</td><td>小级尺寸输入框</td></tr>
		<tr><td>.mini</td><td>超小型尺寸</td></tr>
	</table>

	<table class="sp-table border mt40">
		<tr><th width="150">属性</th><th>说明</th></tr>
		<tr><td>value</td><td>初始值，默认值1</td></tr>
		<tr><td>precision</td><td>精度，默认值0</td></tr>
		<tr><td>min</td><td>最小值，无默认值</td></tr>
		<tr><td>max</td><td>最大值，无默认值</td></tr>
		<tr><td>step</td><td>步数，默认值1</td></tr>
		<tr><td>controls</td><td>是否使用控件，默认使用，可选参数false、'false'</td></tr>
		<tr><td>controls-position</td><td>控件位置，默认两边，可选参数'right'</td></tr>
	</table>

	<table class="sp-table border mt40">
		<tr><th width="150">方法</th><th>说明</th></tr>
		<tr><td>getDisabled</td><td>获取计数器禁用状态</td></tr>
		<tr><td>setDisabled</td><td>设置计数器禁用状态，参数1（true/false）</td></tr>
		<tr><td>getValue</td><td>获取计数器值</td></tr>
		<tr><td>setValue</td><td>设置计数器值，参数1（值）</td></tr>
	</table>
</div>
`;