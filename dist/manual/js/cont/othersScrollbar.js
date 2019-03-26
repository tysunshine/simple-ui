var othersScrollbar = `
<div class="scrollbar-box">
	<h3>Y滚动轴</h3>
	<p>包裹层需要设置overflow-y:hidden，以及max-height。</p>
	<div class="group gp1">
		<div class="show-box">
			<div id="sb1" style="overflow-y: hidden; max-height: 200px;">
				<div>
					<dl>
						<dt>第一章</dt>
						<dd style="height: 120px;">
							<p>道可道，非常道</p>
							<p>名可名，非常名</p>
							<p>无，名天地之始</p>
							<p>有，名万物之母</p>
						</dd>
					</dl>
					<dl>
						<dt>第二章</dt>
						<dd style="height: 240px;">
							<p>天下皆知美之为美，斯恶已</p>
							<p>皆知善之为善，斯不善已</p>
							<p>故有无相生</p>
							<p>难易相成</p>
							<p>长短相较</p>
							<p>高下相倾</p>
							<p>音声相和</p>
							<p>前后相随</p>
						</dd>
					</dl>
					<dl>
						<dt>第三章</dt>
						<dd style="height: 90px;">
							<p>不尚贤，使民不争</p>
							<p>不贵难得之货，使民不为盗</p>
							<p>不见可欲，使民心不乱</p>
						</dd>
					</dl>
				</div>
			</div>
			<div class="btn-handle">
				<button class="sp-btn get-btn">获取滚动距离</button>
				<div>滚动距离<span class="dis-text"></span></div>
			</div>
			<div class="btn-handle">
				<button class="sp-btn set-btn">设置滚动距离：200</button>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div id="sb1" style="overflow-y: hidden; max-height: 200px;"&gt;
  &lt;div&gt;
    &lt;dl&gt;
      &lt;dt&gt;第一章&lt;/dt&gt;
      &lt;dd style="height: 120px;"&gt;
        &lt;p&gt;道可道，非常道&lt;/p&gt;
        &lt;p&gt;名可名，非常名&lt;/p&gt;
        &lt;p&gt;无，名天地之始&lt;/p&gt;
        &lt;p&gt;有，名万物之母&lt;/p&gt;
      &lt;/dd&gt;
    &lt;/dl&gt;
    &lt;dl&gt;
      &lt;dt&gt;第二章&lt;/dt&gt;
      &lt;dd style="height: 240px;"&gt;
        &lt;p&gt;天下皆知美之为美，斯恶已&lt;/p&gt;
        &lt;p&gt;皆知善之为善，斯不善已&lt;/p&gt;
        &lt;p&gt;故有无相生&lt;/p&gt;
        &lt;p&gt;难易相成&lt;/p&gt;
        &lt;p&gt;长短相较&lt;/p&gt;
        &lt;p&gt;高下相倾&lt;/p&gt;
        &lt;p&gt;音声相和&lt;/p&gt;
        &lt;p&gt;前后相随&lt;/p&gt;
      &lt;/dd&gt;
    &lt;/dl&gt;
    &lt;dl&gt;
      &lt;dt&gt;第三章&lt;/dt&gt;
      &lt;dd style="height: 90px;"&gt;
        &lt;p&gt;不尚贤，使民不争&lt;/p&gt;
        &lt;p&gt;不贵难得之货，使民不为盗&lt;/p&gt;
        &lt;p&gt;不见可欲，使民心不乱&lt;/p&gt;
      &lt;/dd&gt;
    &lt;/dl&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="btn-handle"&gt;
  &lt;button class="sp-btn get-btn"&gt;获取滚动距离&lt;/button&gt;
  &lt;div&gt;滚动距离&lt;span class="dis-text"&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="btn-handle"&gt;
  &lt;button class="sp-btn set-btn"&gt;设置滚动距离：200&lt;/button&gt;
&lt;/div&gt;</code></pre>

<pre><code class="js">this.oSb = new SpScrollBar({
  el: '#sb1'
})
// 获取滚动距离
this.oGetBtn.onclick = function () {
  _this.oDisText.innerHTML = _this.oSb.scrollTop();
}
// 设置滚动距离
this.oSetBtn.onclick = function () {
  _this.oSb.scrollTop(200);
}</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>X滚动轴</h3>
	<p>包裹层需要设置overflow-x:hidden，以及max-width，以及滚动层的宽度。</p>
	<div class="group gp2">
		<div class="show-box">
			<div id="sb2" style="overflow-x: hidden; max-width: 400px;">
				<div class="scroll">
					<p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p>
					<p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p>
				</div>
			</div>
			<div class="btn-handle">
				<button class="sp-btn get-btn">获取滚动距离</button>
				<div>滚动距离<span class="dis-text"></span></div>
			</div>
			<div class="btn-handle">
				<button class="sp-btn set-btn">设置滚动距离：200</button>
			</div>
		</div>
		<div class="code-box">
<pre><code class="html">&lt;div id="sb2" style="overflow-x: hidden; max-width: 400px;"&gt;
  &lt;div class="scroll"&gt;
    &lt;p&gt;1&lt;/p&gt;&lt;p&gt;2&lt;/p&gt;&lt;p&gt;3&lt;/p&gt;&lt;p&gt;4&lt;/p&gt;&lt;p&gt;5&lt;/p&gt;&lt;p&gt;6&lt;/p&gt;&lt;p&gt;7&lt;/p&gt;&lt;p&gt;8&lt;/p&gt;&lt;p&gt;9&lt;/p&gt;
    &lt;p&gt;1&lt;/p&gt;&lt;p&gt;2&lt;/p&gt;&lt;p&gt;3&lt;/p&gt;&lt;p&gt;4&lt;/p&gt;&lt;p&gt;5&lt;/p&gt;&lt;p&gt;6&lt;/p&gt;&lt;p&gt;7&lt;/p&gt;&lt;p&gt;8&lt;/p&gt;&lt;p&gt;9&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="btn-handle"&gt;
  &lt;button class="sp-btn get-btn"&gt;获取滚动距离&lt;/button&gt;
  &lt;div&gt;滚动距离&lt;span class="dis-text"&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="btn-handle"&gt;
  &lt;button class="sp-btn set-btn"&gt;设置滚动距离：200&lt;/button&gt;
&lt;/div&gt;</code></pre>

<pre><code class="js">this.oSb = new SpScrollBar({
  el: '#sb2'
})
this.oGetBtn.onclick = function () {
  _this.oDisText.innerHTML = _this.oSb.scrollLeft();
}

this.oSetBtn.onclick = function () {
  _this.oSb.scrollLeft(200);
}</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

	<h3>默认配置参数</h3>
	<div class="group">
		<div class="code-box">
<pre><code class="js">new SpScrollBar({
  el: '#spScrollbar', // 必须，选择器（也可以是DOM对象）
  scrollTop: 0,
  scrollLeft: 0,
  time: 100,
  enterShow: true,    // 是否鼠标进入才显示

  // X滚动轴，默认值
  XAxis: {
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
    bgColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 0		
  },
  // X滚动条，默认值
  XBar: {
    bgColor: 'rgba(144,147,153,.3)',
    borderRadius: 0,
    enterColor: 'rgba(144,147,153,.3)'
  },

  // Y滚动轴，默认值
  YAxis: {
    top: 0,
    bottom: 0,
    left: 'auto',
    right: 0,
    width: 10,
    bgColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 0
  },
  // Y滚动条，默认值
  YBar: {
    bgColor: 'rgba(144,147,153,.3)',
    borderRadius: 0,
    enterColor: 'rgba(144,147,153,.3)'
  }
})</code></pre>
			<button class="tag-code-btn">显示代码</button>
		</div>
	</div>

</div>
`;