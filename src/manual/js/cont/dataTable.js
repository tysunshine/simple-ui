var contTmp = `
<div class="table-box">
	<h3>基本表格</h3>
	<p>添加sp-table类，th默认加粗</p>
	<div class="group">
		<div class="show-box">
			<table class="sp-table">
				<thead>
					<tr><th>#</th><th>姓名</th><th>性别</th><th>年龄</th><th>学院</th><th>专业</th></tr>
				</thead>
				<tbody>
					<tr><th>1</th><td>王飞凤</td><td>女</td><td>19</td><td>宇宙旅行学院</td><td>宇宙旅行中危险的预防与处理专业</td></tr>
					<tr><th>2</th><td>刘五金</td><td>男</td><td>18</td><td>材料学院</td><td>金属材料专业</td></tr>
				</tbody>
			</table>
		</div>
		<div class="code-box">
<pre><code>&lt;table class="sp-table"&gt;
    &lt;thead&gt;
        &lt;tr&gt;&lt;th&gt;#&lt;/th&gt;&lt;th&gt;姓名&lt;/th&gt;&lt;th&gt;性别&lt;/th&gt;&lt;th&gt;年龄&lt;/th&gt;&lt;th&gt;学院&lt;/th&gt;&lt;th&gt;专业&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;th&gt;1&lt;/th&gt;&lt;td&gt;王飞凤&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;19&lt;/td&gt;&lt;td&gt;宇宙旅行学院&lt;/td&gt;&lt;td&gt;宇宙旅行中危险的预防与处理专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;th&gt;2&lt;/th&gt;&lt;td&gt;刘五金&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;金属材料专业&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>表格边框</h3>
	<p>添加sp-table-bordered类</p>
	<div class="group">
		<div class="show-box">
			<table class="sp-table sp-table-bordered">
				<thead>
					<tr><th>#</th><th>姓名</th><th>性别</th><th>年龄</th><th>学院</th><th>专业</th></tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>王飞凤</td><td>女</td><td>19</td><td>宇宙旅行学院</td><td>宇宙旅行中危险的预防与处理专业</td></tr>
					<tr><td>2</td><td>刘五金</td><td>男</td><td>18</td><td>材料学院</td><td>金属材料专业</td></tr>
					<tr><td>3</td><td>王大柳</td><td>女</td><td>18</td><td>材料学院</td><td>机械制造</td></tr>
					<tr><td>4</td><td>庄生</td><td>男</td><td>18</td><td>电气学院</td><td>计算机科学</td></tr>
					<tr><td>5</td><td>尤峰</td><td>男</td><td>18</td><td>电气学院</td><td>物联网</td></tr>
				</tbody>
			</table>
		</div>
		<div class="code-box">
<pre><code>&lt;table class="sp-table sp-table-bordered"&gt;
    &lt;thead&gt;
        &lt;tr&gt;&lt;th&gt;#&lt;/th&gt;&lt;th&gt;姓名&lt;/th&gt;&lt;th&gt;性别&lt;/th&gt;&lt;th&gt;年龄&lt;/th&gt;&lt;th&gt;学院&lt;/th&gt;&lt;th&gt;专业&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;王飞凤&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;19&lt;/td&gt;&lt;td&gt;宇宙旅行学院&lt;/td&gt;&lt;td&gt;宇宙旅行中危险的预防与处理专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;刘五金&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;金属材料专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;王大柳&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;机械制造&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;庄生&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;计算机科学&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;尤峰&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;物联网&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>条纹状表格</h3>
	<p>添加sp-table-striped类，让tbody中的tr隔行换色</p>
	<div class="group">
		<div class="show-box">
			<table class="sp-table sp-table-striped">
				<thead>
					<tr><td>#</td><td>姓名</td><td>性别</td><td>年龄</td><td>学院</td><td>专业</td></tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>王飞凤</td><td>女</td><td>19</td><td>宇宙旅行学院</td><td>宇宙旅行中危险的预防与处理专业</td></tr>
					<tr><td>2</td><td>刘五金</td><td>男</td><td>18</td><td>材料学院</td><td>金属材料专业</td></tr>
					<tr><td>3</td><td>王大柳</td><td>女</td><td>18</td><td>材料学院</td><td>机械制造</td></tr>
					<tr><td>4</td><td>庄生</td><td>男</td><td>18</td><td>电气学院</td><td>计算机科学</td></tr>
					<tr><td>5</td><td>尤峰</td><td>男</td><td>18</td><td>电气学院</td><td>物联网</td></tr>
				</tbody>
			</table>
		</div>
		<div class="code-box">
<pre><code>&lt;table class="sp-table sp-table-striped"&gt;
    &lt;thead&gt;
        &lt;tr&gt;&lt;td&gt;#&lt;/td&gt;&lt;td&gt;姓名&lt;/td&gt;&lt;td&gt;性别&lt;/td&gt;&lt;td&gt;年龄&lt;/td&gt;&lt;td&gt;学院&lt;/td&gt;&lt;td&gt;专业&lt;/td&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;王飞凤&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;19&lt;/td&gt;&lt;td&gt;宇宙旅行学院&lt;/td&gt;&lt;td&gt;宇宙旅行中危险的预防与处理专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;刘五金&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;金属材料专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;王大柳&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;机械制造&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;庄生&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;计算机科学&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;尤峰&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;物联网&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>鼠标悬停</h3>
	<p>添加sp-table-hover类，让tbody中的tr在鼠标以上时变色</p>
	<div class="group">
		<div class="show-box">
			<table class="sp-table sp-table-hover">
				<thead>
					<tr><td>#</td><td>姓名</td><td>性别</td><td>年龄</td><td>学院</td><td>专业</td></tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>王飞凤</td><td>女</td><td>19</td><td>宇宙旅行学院</td><td>宇宙旅行中危险的预防与处理专业</td></tr>
					<tr><td>2</td><td>刘五金</td><td>男</td><td>18</td><td>材料学院</td><td>金属材料专业</td></tr>
					<tr><td>3</td><td>王大柳</td><td>女</td><td>18</td><td>材料学院</td><td>机械制造</td></tr>
					<tr><td>4</td><td>庄生</td><td>男</td><td>18</td><td>电气学院</td><td>计算机科学</td></tr>
					<tr><td>5</td><td>尤峰</td><td>男</td><td>18</td><td>电气学院</td><td>物联网</td></tr>
				</tbody>
			</table>
		</div>
		<div class="code-box">
<pre><code>&lt;table class="sp-table sp-table-hover"&gt;
    &lt;thead&gt;
        &lt;tr&gt;&lt;td&gt;#&lt;/td&gt;&lt;td&gt;姓名&lt;/td&gt;&lt;td&gt;性别&lt;/td&gt;&lt;td&gt;年龄&lt;/td&gt;&lt;td&gt;学院&lt;/td&gt;&lt;td&gt;专业&lt;/td&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;王飞凤&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;19&lt;/td&gt;&lt;td&gt;宇宙旅行学院&lt;/td&gt;&lt;td&gt;宇宙旅行中危险的预防与处理专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;刘五金&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;金属材料专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;王大柳&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;机械制造&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;庄生&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;计算机科学&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;尤峰&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;物联网&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
			<button class="tag-code-btn">显示代码&lt;/button>
		</div>
	</div>

	<h3>设置宽度</h3>
	<p>只需在每一列中选中一个td设置width属性，即可设置宽度，td默认为box-sizing</p>
	<div class="group">
		<div class="show-box">
			<table class="sp-table sp-table-hover">
				<thead>
					<tr><td width="100px">#</td><td>姓名</td><td>性别</td><td>年龄</td><td>学院</td><td>专业</td></tr>
				</thead>
				<tbody>
					<tr><td>1</td><td>王飞凤</td><td>女</td><td>19</td><td>宇宙旅行学院</td><td>宇宙旅行中危险的预防与处理专业</td></tr>
					<tr><td>2</td><td width="200px">刘五金</td><td>男</td><td>18</td><td>材料学院</td><td>金属材料专业</td></tr>
					<tr><td>3</td><td>王大柳</td><td>女</td><td>18</td><td>材料学院</td><td>机械制造</td></tr>
					<tr><td>4</td><td>庄生</td><td>男</td><td>18</td><td>电气学院</td><td>计算机科学</td></tr>
					<tr><td>5</td><td>尤峰</td><td>男</td><td>18</td><td>电气学院</td><td>物联网</td></tr>
				</tbody>
			</table>
		</div>
		<div class="code-box">
<pre><code>&lt;table class="sp-table sp-table-hover"&gt;
    &lt;thead&gt;
        &lt;tr&gt;&lt;td width="100px"&gt;#&lt;/td&gt;&lt;td&gt;姓名&lt;/td&gt;&lt;td&gt;性别&lt;/td&gt;&lt;td&gt;年龄&lt;/td&gt;&lt;td&gt;学院&lt;/td&gt;&lt;td&gt;专业&lt;/td&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;王飞凤&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;19&lt;/td&gt;&lt;td&gt;宇宙旅行学院&lt;/td&gt;&lt;td&gt;宇宙旅行中危险的预防与处理专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td width="200px"&gt;刘五金&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;金属材料专业&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;王大柳&lt;/td&gt;&lt;td&gt;女&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;材料学院&lt;/td&gt;&lt;td&gt;机械制造&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;庄生&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;计算机科学&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;尤峰&lt;/td&gt;&lt;td&gt;男&lt;/td&gt;&lt;td&gt;18&lt;/td&gt;&lt;td&gt;电气学院&lt;/td&gt;&lt;td&gt;物联网&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>
</div>
`;