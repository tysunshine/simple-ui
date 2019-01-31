var formRadio = `
<div class="radio-box">
	<h3>基础用法</h3>
	<p>默认不分组，所以都可以选中，使用sp-radio类名，进行初始化，使用data-text属性设置文本。</p>
	<div class="group">
		<div class="show-box">
			<label class="sp-radio is-checked">
				<input type="radio" checked>篮球
			</label>
			<label class="sp-radio">
				<input type="radio">足球
			</label>
			<label class="sp-radio">
				<input type="radio">棒球
			</label>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;label class="sp-radio is-checked"&gt;
    &lt;input type="radio" checked&gt;篮球
&lt;/label&gt;
&lt;label class="sp-radio"&gt;
    &lt;input type="radio"&gt;足球
&lt;/label&gt;
&lt;label class="sp-radio"&gt;
    &lt;input type="radio"&gt;棒球
&lt;/label&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>单选框组</h3>
	<p>使用name属性对单选框进行分组，checked默认选中。</p>
	<div class="group">
		<div class="show-box">
			<div class="row">
				<label class="sp-radio">
					<input type="radio" name="hobby1">篮球
				</label>
				<label class="sp-radio is-checked">
					<input type="radio" name="hobby1" checked>足球
				</label>
				<label class="sp-radio">
					<input type="radio" name="hobby1">棒球
				</label>
			</div>
			<div class="row">
				<label class="sp-radio is-checked">
					<input type="radio" name="course" checked>数学
				</label>
				<label class="sp-radio">
					<input type="radio" name="course">语文
				</label>
				<label class="sp-radio">
					<input type="radio" name="course">英语
				</label>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="row"&gt;
    &lt;label class="sp-radio"&gt;
        &lt;input type="radio" name="hobby1"&gt;篮球
    &lt;/label&gt;
    &lt;label class="sp-radio is-checked"&gt;
        &lt;input type="radio" name="hobby1" checked&gt;足球
    &lt;/label&gt;
    &lt;label class="sp-radio"&gt;
        &lt;input type="radio" name="hobby1"&gt;棒球
    &lt;/label&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;label class="sp-radio is-checked"&gt;
        &lt;input type="radio" name="course" checked&gt;数学
    &lt;/label&gt;
    &lt;label class="sp-radio"&gt;
        &lt;input type="radio" name="course"&gt;语文
    &lt;/label&gt;
    &lt;label class="sp-radio"&gt;
        &lt;input type="radio" name="course"&gt;英语
    &lt;/label&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>重新初始化</h3>
	<p>将按钮冲none状态显示出来，直接就可以用。添加按钮时需要调用SimpleUi.radio.init</p>
	<div class="group">
		<div class="show-box init-box">
			<div class="init-box">
				<button class="sp-btn mini show-btn">显示隐藏爱好</button>
				<div class="init-radio-box">
					<label class="sp-radio">
						<input type="radio" name="hobby3">篮球
					</label>
					<label class="sp-radio init-hide-radio">
						<input type="radio" name="hobby3">足球
					</label>
				</div>
			</div>
			<div class="init-box">
				<button class="sp-btn mini add-btn">添加爱好</button>
				<div class="init-radio-box add-radio-box">
					<label class="sp-radio">
						<input type="radio" name="hobby4">篮球
					</label>
				</div>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="init-box"&gt;
    &lt;button class="sp-btn mini show-btn"&gt;显示隐藏爱好&lt;/button&gt;
    &lt;div class="init-radio-box"&gt;
        &lt;label class="sp-radio"&gt;
            &lt;input type="radio" name="hobby3"&gt;篮球
        &lt;/label&gt;
        &lt;label class="sp-radio init-hide-radio"&gt;
            &lt;input type="radio" name="hobby3"&gt;足球
        &lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="init-box"&gt;
    &lt;button class="sp-btn mini add-btn"&gt;添加爱好&lt;/button&gt;
    &lt;div class="init-radio-box add-radio-box"&gt;
        &lt;label class="sp-radio"&gt;
            &lt;input type="radio" name="hobby4"&gt;篮球
        &lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

<pre><code class="js">this.oShowBtn.onclick = function () {
    _this.oInitHideRadio.style.display = 'inline-block';
}

this.oAddBtn.onclick = function () {
    if ( _this.oAddRadioBox.children.length >= 3 ) {
        return false;
    }

    var oLabel = document.createElement('label');
    oLabel.className = 'sp-radio';
    oLabel.innerHTML = '&lt;input type="radio" name="hobby4"/&gt;按钮一个';

    _this.oAddRadioBox.appendChild(oLabel);
    SimpleUi.radio.init();
}</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁用状态</h3>
	<p>单选框不可用的状态，在.sp-radio上添加disabled属性，即可设置禁用状态。</p>
	<div class="group">
		<div class="show-box">
			<label class="sp-radio is-disabled">
				<input type="radio" disabled>篮球
			</label>
			<label class="sp-radio is-checked is-disabled">
				<input type="radio" disabled checked>足球
			</label>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;label class="sp-radio is-disabled"&gt;
    &lt;input type="radio" disabled&gt;篮球
&lt;/label&gt;
&lt;label class="sp-radio is-checked is-disabled"&gt;
    &lt;input type="radio" disabled checked&gt;足球
&lt;/label&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>获取选中的值</h3>
	<p>通过name与checked判断选中的是哪一个。</p>
	<div class="group">
		<div class="show-box">
			<p>喜欢的歌手：</p>
			<label class="sp-radio is-checked">
				<input type="radio" name="singer" value="周杰伦" checked/>周杰伦
			</label>
			<label class="sp-radio">
				<input type="radio" name="singer" value="张杰"/>张杰
			</label>
			<label class="sp-radio">
				<input type="radio" name="singer" value="刘欢"/>刘欢
			</label>
			<div class="mt10">
				<button class="sp-btn btn-mini show-singer-btn">我喜欢的歌手是：</button>
				<span class="show-singer-text"></span>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;p&gt;喜欢的歌手：&lt;/p&gt;
&lt;label class="sp-radio is-checked"&gt;
    &lt;input type="radio" name="singer" value="周杰伦" checked/&gt;周杰伦
&lt;/label&gt;
&lt;label class="sp-radio"&gt;
    &lt;input type="radio" name="singer" value="张杰"/&gt;张杰
&lt;/label&gt;
&lt;label class="sp-radio"&gt;
    &lt;input type="radio" name="singer" value="刘欢"/&gt;刘欢
&lt;/label&gt;
&lt;div class="mt10"&gt;
    &lt;button class="sp-btn btn-mini show-singer-btn"&gt;我喜欢的歌手是：&lt;/button&gt;
    &lt;span class="show-singer-text"&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
<pre><code class="js">this.oSingerBtn.onclick = function () {
    var oSinger = _this.oRadioBox.querySelectorAll('[type=radio][name=singer]');
    for ( var i = 0; i < oSinger.length; i++ ) {
        if ( oSinger[i].checked ) {
            _this.oSingerText.innerHTML = oSinger[i].value;
            break;
        }
    }
}</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<table class="sp-table border mt40">
		<thead>
			<tr><th>方法名</th><th>说明</th></tr>
		</thead>
		<tbody>
			<tr><td>setDisabled</td><td>设置是否可选，radio节点调用，也可以直接给label添加is-disabled类，给radio添加disabled属性</td></tr>
			<tr><td>setChecked</td><td>设置选中状态，同上</td></tr>
		</tbody>
	</table>
</div>
`