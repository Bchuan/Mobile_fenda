<template>
	<div class="validate">
		<mt-header fixed title="全部头条">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="range">
			<div class=" step step_1">
				<img src="../../../assets/11.png"/>
				<p>验证原号码</p>
			</div>
			<span class="line"></span>
			<div class="step step_2">
				<img src="../../../assets/22.png"/>
				<p>验证新号码</p>	
			</div>
		</div>
		<form action="" method="post">
			<div class="text">
			<span>将向原手机号码 </span>
			<span>13123419543</span>
			<span>发送验证码</span>
		</div>
		<div class="item">
			<label for="captcha">图形验证码</label>
			<input type="text" name="" id="captcha" value="" />
			<img src="../../../assets/xiao.png"/>
		</div>
		<div class="item">
			<label for="verification_code">手机验证码</label>
			<input type="text" name="verification_code" id="verification_code" value="" />
			<span class="clickit">点击获取</span>
		</div>
		<a class="btn" @click="jump">
			下一步
		</a>
			
		</form>
		
		<div class="practice">
			<p>若原手机号码无法收取验证码，可<span class="vali" @click="service">联系分答客服</span></p>
			<div class="service" v-show="tip">
				<p>电话：4000-691-791（工作日10点－19点）</p>
				<p>邮箱：service@zaih.com</p>
				<p>微信服务号：分答（微信号：zaihang360）</p>
			</div>
		</div>
		
	</div>
</template>

<script type="es6">
	export default{
		data(){
			return{
				tip:false
			}
		},
		methods:{
			service:function(){
				this.tip = !this.tip
			},
			jump:function(){
				this.$router.push('/binding')
			}
		}
	}
	
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	p{
		font-size: 0.8rem;
	}
	.validate{
		padding: 1rem;
		.range{
			margin-top: 1rem;
		    padding: 1.75rem 0rem 0rem;
		    text-align: center;
		    .step{
	    	    box-sizing: border-box;
			    width: 4rem;
			    display: inline-block;
			    white-space: wrap;
			    margin-left: .1rem;
			    img{
			    	width: 3rem;
			    	height: 3rem;
			    }
				p{
					font-size: .65rem;
				}			    
		    }
		    .step_1{
		    	    color: #1ccda6;
		    }
		     .step_2{
		    	    color: #999;
		    }
		    .line{
	    	    border-top: .15rem solid #999;
			    width: 3rem;
			    height: 1rem;
			    display: inline-block;
			    margin: 1rem -.75rem 0;
			    vertical-align: top;
		    }
		}
		.text{
			margin-top: 2rem;
		    line-height: 1.75rem;
		    font-size: 0.7rem;
		    span{
		    	text-align:left;
		    }
		}
		.item{
			display: flex;
			 font-size: 0.7rem;
			 height: 2.5rem;
			 line-height: 2.5rem;
			 input{
			 	width: 5rem;
			 	border: none;
			 	outline: none;
			 	margin-left: 1rem;
			 	    box-shadow: none;
			 }
			 .clickit{
			 	color: red;
			 	font-size: 0.7rem;
			 }
		}
		.btn{
			width: 90%;
			margin:2rem 5% 2rem;
			height: 2rem;
			background: red;
			color: #fff;
			line-height: 2rem;
			display: block;
			text-align: center;
			border-radius: 0.5rem;
		}
		.practice{
		    text-align: left;
		    font-size: .7rem;
		    line-height: 1.3;
		    color: #999;
		    .vali{
		    	color: red;
		    }
		    .service{
		    	margin-top:0.5rem;
		    	font-size:0.6rem;
		    	line-height: 1rem;
		    }
		}
	}
</style>