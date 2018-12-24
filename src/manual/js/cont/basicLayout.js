var contTmp = `
<div class="layout-box">
	<h3>基础布局</h3>
	<p>使用单一分栏创建基础的栅格布局。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row">
				<div class="sp-col-24">
					<div class="group-cont bg-blue-dark"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-12">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-12">
					<div class="group-cont bg-blue-light"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-8">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-8">
					<div class="group-cont bg-blue-light"></div>
				</div>
				<div class="sp-col-8">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-6">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-6">
					<div class="group-cont bg-blue-light"></div>
				</div>
				<div class="sp-col-6">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-6">
					<div class="group-cont bg-blue-light"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-4">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-4">
					<div class="group-cont bg-blue-light"></div>
				</div>
				<div class="sp-col-4">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-4">
					<div class="group-cont bg-blue-light"></div>
				</div>
				<div class="sp-col-4">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-4">
					<div class="group-cont bg-blue-light"></div>
				</div>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-24"&gt;
        &lt;div class="group-cont bg-blue-dark"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-12"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-12"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-6"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-6"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
		<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>分栏间隔</h3>
	<p>分栏之间存在间隔。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row" space="20">
				<div class="sp-col-8">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-8">
					<div class="group-cont bg-blue-light"></div>
				</div>
				<div class="sp-col-8">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-row" space="20"&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;div class="group-cont bg-blue-light"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>分栏偏移</h3>
	<p>支持偏移指定的栏数。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row">
				<div class="sp-col-6">
					<div class="group-cont bg-blue"></div>
				</div>
				<div class="sp-col-6 sp-col-offset-6">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-6 sp-col-push-6">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-6 sp-col-offset-18 sp-col-pull-6">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-6 sp-col-offset-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6 sp-col-push-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6 sp-col-offset-18 sp-col-pull-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>
</div>
`;