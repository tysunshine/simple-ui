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
	<p>分栏之间存在间隔，设置space属性将通过sp-col的padding来分隔，调用SimpleUi.layout.setSpace函数可以设置间隔距离。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row space-row" space="20">
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
			<div>
				<input class="space-ipt" type="text" value="20">
				<button class="sp-btn medium space-btn">设置间隔</button>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-row space-row" space="20"&gt;
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
&lt;div&gt;
    &lt;input class="space-ipt" type="text" value="20"&gt;
    &lt;button class="sp-btn medium space-btn"&gt;设置间隔&lt;/button&gt;
&lt;/div&gt;</code></pre>
<pre><code class="js">this.oSpaceBtn.onclick = function () {
    var iNum = _this.oSpaceIpt.value;
    if ( !(iNum > 0) ) {
        _this.oSpaceIpt.value = 0;
        return false;
    }
    // 调用设置间隔的函数，_this.oSpaceRow是需要设置间隔的sp-row节点
    SimpleUi.layout.setSpace(_this.oSpaceRow, iNum);
}</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>分栏偏移</h3>
	<p>支持偏移指定的栏数。offset是通过margin-left设置偏移、pull与push是通过相对定位的left与right偏移。</p>
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
				<div class="sp-col-6 sp-col-offset-12 sp-col-push-6">
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
    &lt;div class="sp-col-6 sp-col-offset-12 sp-col-push-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>设置分栏偏移</h3>
	<p>直接在sp-col节点上添加offset、pull、push属性，可以自行设置需要偏移的距离。pull与push不要一起设置</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row">
				<div class="sp-col-6">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-6" offset="100">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-6" push="100">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
			<div class="sp-row">
				<div class="sp-col-6 sp-col-offset-6" pull="100">
					<div class="group-cont bg-blue"></div>
				</div>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6" offset="100"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6" push="100"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-6 sp-col-offset-6" pull="100"&gt;
        &lt;div class="group-cont bg-blue"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<thead>
			<tr><th width="160">类名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>.sp-row</td><td>必须。行</td></tr>
			<tr><td>.sp-col-{0, 24}</td><td>必须。列，0的时候为display:none</td></tr>
			<tr><td>.sp-col-offset-{0, 24}</td><td>列向左偏移24分之几，margin-left</td></tr>
			<tr><td>.sp-col-push-{0, 24}</td><td>列向左偏移24分之几，left</td></tr>
			<tr><td>.sp-col-pull-{0, 24}</td><td>列向有偏移24分之几，right</td></tr>
		</tbody>
	</table>
	<table class="sp-table border mt40">
		<thead>
			<tr><th width="100">属性名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>offset</td><td>通过设置margin-left设置向左偏移</td></tr>
			<tr><td>push</td><td>通过设置相对定位left设置向左偏移</td></tr>
			<tr><td>pull</td><td>通过设置相对定位right设置向右偏移</td></tr>
		</tbody>
	</table>
	<table class="sp-table border mt40">
		<thead>
			<tr><th width="100">方法名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>setSpace</td><td>设置两个sp-col之间的间隔</td></tr>
			<tr><td>setOffset</td><td>设置margin-left</td></tr>
			<tr><td>setPush</td><td>设置left</td></tr>
			<tr><td>setPull</td><td>设置right</td></tr>
		</tbody>
	</table>
</div>
`;