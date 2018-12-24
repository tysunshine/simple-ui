var contTmp = `
<div class="radio-box">
	<h3>基础用法</h3>
	<p>默认不分组，所以都可以选中，使用sp-radio类名，进行初始化，使用data-text属性设置文本。</p>
	<div class="group">
		<div class="show-box">
			<input class="sp-radio" type="radio" data-text="篮球">
			<input class="sp-radio" type="radio" data-text="足球">
			<input class="sp-radio" type="radio" data-text="棒球">
		</div>
		<div class="code-box">
<pre><code>&lt;input class="sp-radio" type="radio" data-text="篮球"&gt;
&lt;input class="sp-radio" type="radio" data-text="足球"&gt;
&lt;input class="sp-radio" type="radio" data-text="棒球"&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>禁用状态</h3>
	<p>单选框不可用的状态，在.sp-radio上添加disabled属性，即可设置禁用状态。</p>
	<div class="group">
		<div class="show-box">
			<input class="sp-radio" type="radio" data-text="篮球" disabled/>
			<input class="sp-radio" type="radio" data-text="足球" disabled checked/>
		</div>
		<div class="code-box">
<pre><code>&lt;input class="sp-radio" type="radio" data-text="篮球" disabled/&gt;
&lt;input class="sp-radio" type="radio" data-text="足球" disabled checked/&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>单选框组</h3>
	<p>使用name属性对单选框进行分组，checked默认选中。</p>
	<div class="group">
		<div class="show-box">
			<div class="row">
				<input class="sp-radio" type="radio" name="hobby" checked data-text="篮球">
				<input class="sp-radio" type="radio" name="hobby" data-text="足球">
				<input class="sp-radio" type="radio" name="hobby" data-text="棒球">
			</div>
			<div class="row">
				<input class="sp-radio" type="radio" name="course" data-text="数学">
				<input class="sp-radio" type="radio" name="course" checked data-text="语文">
				<input class="sp-radio" type="radio" name="course" data-text="英语">
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="row"&gt;
    &lt;input class="sp-radio" type="radio" name="hobby" checked data-text="篮球"&gt;
    &lt;input class="sp-radio" type="radio" name="hobby" data-text="足球"&gt;
    &lt;input class="sp-radio" type="radio" name="hobby" data-text="棒球"&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;input class="sp-radio" type="radio" name="course" data-text="数学"&gt;
    &lt;input class="sp-radio" type="radio" name="course" checked data-text="语文"&gt;
    &lt;input class="sp-radio" type="radio" name="course" data-text="英语"&gt;
&lt;/div&gt;</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>重新初始化</h3>
	<p>在页面单选按钮数量改变时，需要调用init函数重新初始化。</p>
	<div class="group">
		<div class="show-box">
			<div class="sp-row">
				<div class="sp-col-2">爱好：</div>
				<div class="sp-col-22 hoby-radio-box">
					<input class="sp-radio" type="radio" name="hoby" checked data-text="篮球">
					<input class="sp-radio" type="radio" name="hoby" data-text="足球">
					<input class="sp-radio" type="radio" name="hoby" data-text="棒球">
				</div>
			</div>
			<br><br>
			<div class="sp-row">
				<div class="sp-col-8">
					<input class="hoby-ipt" type="text">
				</div>
				<div class="sp-col-4">
					<button class="sp-btn btn-mini is-block add-hoby-btn">添加</button>
				</div>
				<div class="sp-col-4 sp-col-offset-1">
					<button class="sp-btn btn-mini is-block show-hoby-btn">显示爱好</button>
				</div>
			</div>
			<div class="row">
				我的爱好：<span class="show-hoby-box"></span>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-2"&gt;爱好：&lt;/div&gt;
    &lt;div class="sp-col-22 hoby-radio-box"&gt;
        &lt;input class="sp-radio" type="radio" name="hoby" checked data-text="篮球"&gt;
        &lt;input class="sp-radio" type="radio" name="hoby" data-text="足球"&gt;
        &lt;input class="sp-radio" type="radio" name="hoby" data-text="棒球"&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;br&gt;&lt;br&gt;
&lt;div class="sp-row"&gt;
    &lt;div class="sp-col-8"&gt;
        &lt;input class="hoby-ipt" type="text"&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4"&gt;
        &lt;button class="sp-btn btn-mini is-block add-hoby-btn"&gt;添加&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="sp-col-4 sp-col-offset-1"&gt;
        &lt;button class="sp-btn btn-mini is-block show-hoby-btn"&gt;显示爱好&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
    我的爱好：&lt;span class="show-hoby-box"&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>

<pre><code class="js">// 添加单选按钮
var oIpt = document.createElement('input');
oIpt.className = 'sp-radio';
oIpt.type = 'radio';
oIpt.name = 'hoby';
oIpt.setAttribute('data-text', this.oHobyIpt.value);
this.oHobyRadioBox.appendChild(oIpt);
SimpleUi.radio.init();</code></pre>

<pre><code class="js">// 获取单选按钮值
oHobyRadio = document.getElementsByName('hoby');
for ( var i = 0; i < oHobyRadio.length; i++ ) {
    var item = oHobyRadio[i];
    if ( item.checked ) {
        oShowHobyBox.innerHTML = item.getAttribute('data-text');
        break;
    }
}</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>
</div>
`