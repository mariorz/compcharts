goog.provide('compevent.core');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$$compound_finance$compound_js$dist$nodejs$index=shadow.js.require("module$node_modules$$compound_finance$compound_js$dist$nodejs$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
compevent.core.debug = true;
compevent.core.erc20_abi = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function decimals() view returns (uint8)","event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)"], null);
compevent.core.comp_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)","event LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address cTokenCollateral, uint seizeTokens)","event Mint(address minter, uint mintAmount, uint mintTokens)","event Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)","event Redeem(address redeemer, uint redeemAmount, uint redeemTokens)"], null);
compevent.core.lw_address = "0x909b443761bbd7fbb876ecde71a37e1433f6af6f";
compevent.core.lw_address2 = "0x189c2c1834b1414a6aee9eba5dc4b4d547c9a44c";
compevent.core.lw_address3 = "0xb1adceddb2941033a090dd166a462fe1c2029484";
compevent.core.cdai_init_block = (8983575);
compevent.core.cusdc_init_block = (7710760);
compevent.core.ceth_init_block = (7710758);
compevent.core.cusdt_init_block = (9879363);
compevent.core.wbtc_init_block = (6766284);
compevent.core.last_block = (11333300);
compevent.core.liquidation_hash = "0x53e09adb77d1e3ea593c933a85bd4472371e03da12e3fec853b5bc7fac50f3e4";
compevent.core.ctokens = cljs.core.PersistentHashMap.fromArrays(["0x35a18000230da775cac24873d00ff85bccded550","0xf5dce57282a584d2746faf1593d3121fcac444dc","0x39aa39c021dfbae8fac545936693ac917d5e7563","0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9","0x158079ee67fce2f58472a96584a73c7ab9ac95c1","0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4","0x5d3a536e4d6dbd6114cc1ead35777bab948e3643","0xc11b1268c1a384e55c48c2391d8d480264a3a7f4","0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407","0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e","0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5"],["UNI","SAI","USDC","USDT","REP","COMP","DAI","WBTC","ZRX","BAT","ETH"]);
/**
 * Takes a cToken address and returns
 *   underlying token symbol
 */
compevent.core.caddress__GT_token = (function compevent$core$caddress__GT_token(caddress){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(compevent.core.ctokens,caddress);
});
/**
 * Takes a token symbol and returns its corresponding
 *   address
 */
compevent.core.token__GT_address = (function compevent$core$token__GT_address(token){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 8, ["WETH","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","ETH","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","WBTC","0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","BAT","0x0d8775f648430679a709e98d2b0cb6250d2887ef","COMP","0xc00e94cb662c3520282e6f5717214004a7f26888","UNI","0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","ZRX","0xe41d2489571d322189246dafa5ebde1f4699f498","REP","0x221657776846890989a759ba2973e427dff5c9bb"], null),token);
});
compevent.core.comp_unitroller = "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B";
compevent.core.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
compevent.core.current_block = (11415254);
compevent.core.pre_event_block = (11333036);
compevent.core.block_step = (10000);
compevent.core.llw_start_block = ((10250758) - compevent.core.block_step);
compevent.core.llw_end_block = (compevent.core.pre_event_block + compevent.core.block_step);
compevent.core.latest_block = (11460849);
compevent.core.bn = (function compevent$core$bn(n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
compevent.core.ethfu = (function compevent$core$ethfu(n,u){
return module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(n,u);
});
compevent.core.ebn__GT_bn = (function compevent$core$ebn__GT_bn(n,u){
return compevent.core.bn(compevent.core.ethfu(n,u));
});
compevent.core.bn_min = (function compevent$core$bn_min(nums){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bignumber.core._LT_,nums));
});
compevent.core.bn_max = (function compevent$core$bn_max(nums){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bignumber.core._GT_,nums));
});
compevent.core.bn_QMARK_ = (function compevent$core$bn_QMARK_(n){
return module$node_modules$bignumber_DOT_js$bignumber.isBigNumber(n);
});
compevent.core.float_num_values = (function compevent$core$float_num_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function compevent$core$float_num_values_$_iter__54031(s__54032){
return (new cljs.core.LazySeq(null,(function (){
var s__54032__$1 = s__54032;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54032__$1);
if(temp__5735__auto__){
var s__54032__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54032__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__54032__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__54034 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__54033 = (0);
while(true){
if((i__54033 < size__4528__auto__)){
var vec__54035 = cljs.core._nth(c__4527__auto__,i__54033);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54035,(1),null);
cljs.core.chunk_append(b__54034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null));

var G__54829 = (i__54033 + (1));
i__54033 = G__54829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54034),compevent$core$float_num_values_$_iter__54031(cljs.core.chunk_rest(s__54032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54034),null);
}
} else {
var vec__54038 = cljs.core.first(s__54032__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54038,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null),compevent$core$float_num_values_$_iter__54031(cljs.core.rest(s__54032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
compevent.core.web3provider = module$node_modules$ethers$dist$ethers_umd.providers.Web3Provider;
compevent.core.provider = (new compevent.core.web3provider(window.ethereum));
compevent.core.comp_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(compevent.core.comp_abi)));
compevent.core.erc20_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(compevent.core.erc20_abi)));
compevent.core.make_contract = (function compevent$core$make_contract(abi,address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(abi),compevent.core.provider));
});
compevent.core.make_erc20 = (function compevent$core$make_erc20(address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(compevent.core.erc20_abi),compevent.core.provider));
});
compevent.core._LT_token_decimals = (function compevent$core$_LT_token_decimals(address){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54067){
var state_val_54068 = (state_54067[(1)]);
if((state_val_54068 === (7))){
var inst_54052 = (state_54067[(7)]);
var inst_54059 = (function(){throw inst_54052})();
var state_54067__$1 = state_54067;
var statearr_54069_54830 = state_54067__$1;
(statearr_54069_54830[(2)] = inst_54059);

(statearr_54069_54830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54068 === (1))){
var inst_54041 = compevent.core.make_erc20(address);
var state_54067__$1 = (function (){var statearr_54070 = state_54067;
(statearr_54070[(8)] = inst_54041);

return statearr_54070;
})();
var statearr_54071_54831 = state_54067__$1;
(statearr_54071_54831[(2)] = null);

(statearr_54071_54831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54068 === (4))){
var inst_54042 = (state_54067[(2)]);
var inst_54043 = console.log("No decimals method for:",address);
var state_54067__$1 = (function (){var statearr_54072 = state_54067;
(statearr_54072[(9)] = inst_54042);

(statearr_54072[(10)] = inst_54043);

return statearr_54072;
})();
var statearr_54073_54832 = state_54067__$1;
(statearr_54073_54832[(2)] = (18));

(statearr_54073_54832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54068 === (6))){
var inst_54052 = (state_54067[(7)]);
var inst_54052__$1 = (state_54067[(2)]);
var inst_54053 = (inst_54052__$1 instanceof cljs.core.ExceptionInfo);
var inst_54054 = cljs.core.ex_data(inst_54052__$1);
var inst_54055 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54054);
var inst_54056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54055,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54057 = ((inst_54053) && (inst_54056));
var state_54067__$1 = (function (){var statearr_54074 = state_54067;
(statearr_54074[(7)] = inst_54052__$1);

return statearr_54074;
})();
if(cljs.core.truth_(inst_54057)){
var statearr_54075_54833 = state_54067__$1;
(statearr_54075_54833[(1)] = (7));

} else {
var statearr_54076_54834 = state_54067__$1;
(statearr_54076_54834[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54068 === (3))){
var inst_54065 = (state_54067[(2)]);
var state_54067__$1 = state_54067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54067__$1,inst_54065);
} else {
if((state_val_54068 === (2))){
var inst_54041 = (state_54067[(8)]);
var _ = (function (){var statearr_54078 = state_54067;
(statearr_54078[(4)] = cljs.core.cons((5),(state_54067[(4)])));

return statearr_54078;
})();
var inst_54049 = inst_54041.decimals();
var inst_54050 = cljs.core.async.interop.p__GT_c(inst_54049);
var state_54067__$1 = state_54067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54067__$1,(6),inst_54050);
} else {
if((state_val_54068 === (9))){
var inst_54062 = (state_54067[(2)]);
var _ = (function (){var statearr_54079 = state_54067;
(statearr_54079[(4)] = cljs.core.rest((state_54067[(4)])));

return statearr_54079;
})();
var state_54067__$1 = state_54067;
var statearr_54080_54835 = state_54067__$1;
(statearr_54080_54835[(2)] = inst_54062);

(statearr_54080_54835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54068 === (5))){
var _ = (function (){var statearr_54081 = state_54067;
(statearr_54081[(4)] = cljs.core.rest((state_54067[(4)])));

return statearr_54081;
})();
var state_54067__$1 = state_54067;
var ex54077 = (state_54067__$1[(2)]);
var statearr_54082_54836 = state_54067__$1;
(statearr_54082_54836[(5)] = ex54077);


if((ex54077 instanceof Error)){
var statearr_54083_54837 = state_54067__$1;
(statearr_54083_54837[(1)] = (4));

(statearr_54083_54837[(5)] = null);

} else {
throw ex54077;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54068 === (8))){
var inst_54052 = (state_54067[(7)]);
var state_54067__$1 = state_54067;
var statearr_54084_54838 = state_54067__$1;
(statearr_54084_54838[(2)] = inst_54052);

(statearr_54084_54838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0 = (function (){
var statearr_54085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54085[(0)] = compevent$core$_LT_token_decimals_$_state_machine__38756__auto__);

(statearr_54085[(1)] = (1));

return statearr_54085;
});
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1 = (function (state_54067){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54067);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54086){var ex__38759__auto__ = e54086;
var statearr_54087_54839 = state_54067;
(statearr_54087_54839[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54067[(4)]))){
var statearr_54088_54840 = state_54067;
(statearr_54088_54840[(1)] = cljs.core.first((state_54067[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54841 = state_54067;
state_54067 = G__54841;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = function(state_54067){
switch(arguments.length){
case 0:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1.call(this,state_54067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0;
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1;
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54089 = f__38848__auto__();
(statearr_54089[(6)] = c__38847__auto__);

return statearr_54089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.make_token_tx = (function compevent$core$make_token_tx(tx,decimals){
var parsed_event = compevent.core.erc20_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var token = tx.address;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),tx_args.from,new cljs.core.Keyword(null,"to","to",192099007),tx_args.to,new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"amount","amount",364489504),compevent.core.ebn__GT_bn(tx_args.amount,decimals)], null);
});
compevent.core._LT_latest_block = (function compevent$core$_LT_latest_block(){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54106){
var state_val_54107 = (state_54106[(1)]);
if((state_val_54107 === (1))){
var inst_54090 = compevent.core.provider.getBlockNumber();
var inst_54091 = cljs.core.async.interop.p__GT_c(inst_54090);
var state_54106__$1 = state_54106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54106__$1,(2),inst_54091);
} else {
if((state_val_54107 === (2))){
var inst_54093 = (state_54106[(7)]);
var inst_54093__$1 = (state_54106[(2)]);
var inst_54094 = (inst_54093__$1 instanceof cljs.core.ExceptionInfo);
var inst_54095 = cljs.core.ex_data(inst_54093__$1);
var inst_54096 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54095);
var inst_54097 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54096,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54098 = ((inst_54094) && (inst_54097));
var state_54106__$1 = (function (){var statearr_54108 = state_54106;
(statearr_54108[(7)] = inst_54093__$1);

return statearr_54108;
})();
if(cljs.core.truth_(inst_54098)){
var statearr_54109_54842 = state_54106__$1;
(statearr_54109_54842[(1)] = (3));

} else {
var statearr_54110_54843 = state_54106__$1;
(statearr_54110_54843[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54107 === (3))){
var inst_54093 = (state_54106[(7)]);
var inst_54100 = (function(){throw inst_54093})();
var state_54106__$1 = state_54106;
var statearr_54111_54844 = state_54106__$1;
(statearr_54111_54844[(2)] = inst_54100);

(statearr_54111_54844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54107 === (4))){
var inst_54093 = (state_54106[(7)]);
var state_54106__$1 = state_54106;
var statearr_54112_54845 = state_54106__$1;
(statearr_54112_54845[(2)] = inst_54093);

(statearr_54112_54845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54107 === (5))){
var inst_54103 = (state_54106[(2)]);
var inst_54104 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_54103);
var state_54106__$1 = state_54106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54106__$1,inst_54104);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____0 = (function (){
var statearr_54113 = [null,null,null,null,null,null,null,null];
(statearr_54113[(0)] = compevent$core$_LT_latest_block_$_state_machine__38756__auto__);

(statearr_54113[(1)] = (1));

return statearr_54113;
});
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____1 = (function (state_54106){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54106);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54114){var ex__38759__auto__ = e54114;
var statearr_54115_54846 = state_54106;
(statearr_54115_54846[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54106[(4)]))){
var statearr_54116_54847 = state_54106;
(statearr_54116_54847[(1)] = cljs.core.first((state_54106[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54848 = state_54106;
state_54106 = G__54848;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = function(state_54106){
switch(arguments.length){
case 0:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____1.call(this,state_54106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____0;
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_latest_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54117 = f__38848__auto__();
(statearr_54117[(6)] = c__38847__auto__);

return statearr_54117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_block = (function compevent$core$_LT_get_block(block_num){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54134){
var state_val_54135 = (state_54134[(1)]);
if((state_val_54135 === (1))){
var inst_54118 = compevent.core.provider.getBlock(block_num);
var inst_54119 = cljs.core.async.interop.p__GT_c(inst_54118);
var state_54134__$1 = state_54134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54134__$1,(2),inst_54119);
} else {
if((state_val_54135 === (2))){
var inst_54121 = (state_54134[(7)]);
var inst_54121__$1 = (state_54134[(2)]);
var inst_54122 = (inst_54121__$1 instanceof cljs.core.ExceptionInfo);
var inst_54123 = cljs.core.ex_data(inst_54121__$1);
var inst_54124 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54123);
var inst_54125 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54124,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54126 = ((inst_54122) && (inst_54125));
var state_54134__$1 = (function (){var statearr_54136 = state_54134;
(statearr_54136[(7)] = inst_54121__$1);

return statearr_54136;
})();
if(cljs.core.truth_(inst_54126)){
var statearr_54137_54849 = state_54134__$1;
(statearr_54137_54849[(1)] = (3));

} else {
var statearr_54138_54850 = state_54134__$1;
(statearr_54138_54850[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54135 === (3))){
var inst_54121 = (state_54134[(7)]);
var inst_54128 = (function(){throw inst_54121})();
var state_54134__$1 = state_54134;
var statearr_54139_54851 = state_54134__$1;
(statearr_54139_54851[(2)] = inst_54128);

(statearr_54139_54851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54135 === (4))){
var inst_54121 = (state_54134[(7)]);
var state_54134__$1 = state_54134;
var statearr_54140_54852 = state_54134__$1;
(statearr_54140_54852[(2)] = inst_54121);

(statearr_54140_54852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54135 === (5))){
var inst_54131 = (state_54134[(2)]);
var inst_54132 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_54131);
var state_54134__$1 = state_54134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54134__$1,inst_54132);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_get_block_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_block_$_state_machine__38756__auto____0 = (function (){
var statearr_54141 = [null,null,null,null,null,null,null,null];
(statearr_54141[(0)] = compevent$core$_LT_get_block_$_state_machine__38756__auto__);

(statearr_54141[(1)] = (1));

return statearr_54141;
});
var compevent$core$_LT_get_block_$_state_machine__38756__auto____1 = (function (state_54134){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54134);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54142){var ex__38759__auto__ = e54142;
var statearr_54143_54853 = state_54134;
(statearr_54143_54853[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54134[(4)]))){
var statearr_54144_54854 = state_54134;
(statearr_54144_54854[(1)] = cljs.core.first((state_54134[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54855 = state_54134;
state_54134 = G__54855;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_block_$_state_machine__38756__auto__ = function(state_54134){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____1.call(this,state_54134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_block_$_state_machine__38756__auto____0;
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54145 = f__38848__auto__();
(statearr_54145[(6)] = c__38847__auto__);

return statearr_54145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_blocks = (function compevent$core$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54146_SHARP_){
return compevent.core._LT_get_block(p1__54146_SHARP_);
}),block_numbers)));
});
compevent.core._LT_user_token_transfers = (function compevent$core$_LT_user_token_transfers(var_args){
var G__54149 = arguments.length;
switch (G__54149) {
case 3:
return compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3 = (function (provider,token_address,out_address){
return compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(provider,token_address,out_address,null);
}));

(compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4 = (function (provider,token_address,out_address,in_address){
if((token_address == null)){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54152){
var state_val_54153 = (state_54152[(1)]);
if((state_val_54153 === (1))){
var inst_54150 = cljs.core.PersistentVector.EMPTY;
var state_54152__$1 = state_54152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54152__$1,inst_54150);
} else {
return null;
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_54154 = [null,null,null,null,null,null,null];
(statearr_54154[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_54154[(1)] = (1));

return statearr_54154;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_54152){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54152);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54155){var ex__38759__auto__ = e54155;
var statearr_54156_54857 = state_54152;
(statearr_54156_54857[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54152[(4)]))){
var statearr_54157_54858 = state_54152;
(statearr_54157_54858[(1)] = cljs.core.first((state_54152[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54859 = state_54152;
state_54152 = G__54859;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_54152){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_54152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54158 = f__38848__auto__();
(statearr_54158[(6)] = c__38847__auto__);

return statearr_54158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
} else {
var contract = compevent.core.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(out_address,in_address) : contract.filters.Transfer.call(null,out_address,in_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54190){
var state_val_54191 = (state_54190[(1)]);
if((state_val_54191 === (7))){
var inst_54170 = (state_54190[(7)]);
var inst_54177 = (function(){throw inst_54170})();
var state_54190__$1 = state_54190;
var statearr_54192_54860 = state_54190__$1;
(statearr_54192_54860[(2)] = inst_54177);

(statearr_54192_54860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54191 === (1))){
var state_54190__$1 = state_54190;
var statearr_54193_54861 = state_54190__$1;
(statearr_54193_54861[(2)] = null);

(statearr_54193_54861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54191 === (4))){
var inst_54159 = (state_54190[(2)]);
var inst_54160 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_54161 = cljs.core.PersistentVector.EMPTY;
var state_54190__$1 = (function (){var statearr_54194 = state_54190;
(statearr_54194[(8)] = inst_54159);

(statearr_54194[(9)] = inst_54160);

return statearr_54194;
})();
var statearr_54195_54862 = state_54190__$1;
(statearr_54195_54862[(2)] = inst_54161);

(statearr_54195_54862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54191 === (6))){
var inst_54170 = (state_54190[(7)]);
var inst_54170__$1 = (state_54190[(2)]);
var inst_54171 = (inst_54170__$1 instanceof cljs.core.ExceptionInfo);
var inst_54172 = cljs.core.ex_data(inst_54170__$1);
var inst_54173 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54172);
var inst_54174 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54173,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54175 = ((inst_54171) && (inst_54174));
var state_54190__$1 = (function (){var statearr_54196 = state_54190;
(statearr_54196[(7)] = inst_54170__$1);

return statearr_54196;
})();
if(cljs.core.truth_(inst_54175)){
var statearr_54197_54863 = state_54190__$1;
(statearr_54197_54863[(1)] = (7));

} else {
var statearr_54198_54864 = state_54190__$1;
(statearr_54198_54864[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54191 === (3))){
var inst_54188 = (state_54190[(2)]);
var state_54190__$1 = state_54190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54190__$1,inst_54188);
} else {
if((state_val_54191 === (2))){
var ___$2 = (function (){var statearr_54200 = state_54190;
(statearr_54200[(4)] = cljs.core.cons((5),(state_54190[(4)])));

return statearr_54200;
})();
var inst_54167 = provider.getLogs(user_filter);
var inst_54168 = cljs.core.async.interop.p__GT_c(inst_54167);
var state_54190__$1 = state_54190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54190__$1,(6),inst_54168);
} else {
if((state_val_54191 === (9))){
var inst_54180 = (state_54190[(2)]);
var inst_54181 = compevent.core._LT_token_decimals(token_address);
var state_54190__$1 = (function (){var statearr_54201 = state_54190;
(statearr_54201[(10)] = inst_54180);

return statearr_54201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54190__$1,(10),inst_54181);
} else {
if((state_val_54191 === (5))){
var ___$2 = (function (){var statearr_54202 = state_54190;
(statearr_54202[(4)] = cljs.core.rest((state_54190[(4)])));

return statearr_54202;
})();
var state_54190__$1 = state_54190;
var ex54199 = (state_54190__$1[(2)]);
var statearr_54203_54865 = state_54190__$1;
(statearr_54203_54865[(5)] = ex54199);


if((ex54199 instanceof Error)){
var statearr_54204_54866 = state_54190__$1;
(statearr_54204_54866[(1)] = (4));

(statearr_54204_54866[(5)] = null);

} else {
throw ex54199;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54191 === (10))){
var inst_54180 = (state_54190[(10)]);
var inst_54183 = (state_54190[(2)]);
var inst_54184 = (function (){var filtered_txs = inst_54180;
var decimals = inst_54183;
return (function (p1__54147_SHARP_){
return compevent.core.make_token_tx(p1__54147_SHARP_,decimals);
});
})();
var inst_54185 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_54184,inst_54180);
var ___$2 = (function (){var statearr_54205 = state_54190;
(statearr_54205[(4)] = cljs.core.rest((state_54190[(4)])));

return statearr_54205;
})();
var state_54190__$1 = state_54190;
var statearr_54206_54867 = state_54190__$1;
(statearr_54206_54867[(2)] = inst_54185);

(statearr_54206_54867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54191 === (8))){
var inst_54170 = (state_54190[(7)]);
var state_54190__$1 = state_54190;
var statearr_54207_54868 = state_54190__$1;
(statearr_54207_54868[(2)] = inst_54170);

(statearr_54207_54868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_54208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54208[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_54208[(1)] = (1));

return statearr_54208;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_54190){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54190);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54209){var ex__38759__auto__ = e54209;
var statearr_54210_54869 = state_54190;
(statearr_54210_54869[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54190[(4)]))){
var statearr_54211_54870 = state_54190;
(statearr_54211_54870[(1)] = cljs.core.first((state_54190[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54871 = state_54190;
state_54190 = G__54871;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_54190){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_54190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54212 = f__38848__auto__();
(statearr_54212[(6)] = c__38847__auto__);

return statearr_54212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}
}));

(compevent.core._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

compevent.core._LT_get_tx_receipt = (function compevent$core$_LT_get_tx_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54228){
var state_val_54229 = (state_54228[(1)]);
if((state_val_54229 === (1))){
var inst_54213 = compevent.core.provider.getTransactionReceipt(txhash);
var inst_54214 = cljs.core.async.interop.p__GT_c(inst_54213);
var state_54228__$1 = state_54228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54228__$1,(2),inst_54214);
} else {
if((state_val_54229 === (2))){
var inst_54216 = (state_54228[(7)]);
var inst_54216__$1 = (state_54228[(2)]);
var inst_54217 = (inst_54216__$1 instanceof cljs.core.ExceptionInfo);
var inst_54218 = cljs.core.ex_data(inst_54216__$1);
var inst_54219 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54218);
var inst_54220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54219,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54221 = ((inst_54217) && (inst_54220));
var state_54228__$1 = (function (){var statearr_54230 = state_54228;
(statearr_54230[(7)] = inst_54216__$1);

return statearr_54230;
})();
if(cljs.core.truth_(inst_54221)){
var statearr_54231_54872 = state_54228__$1;
(statearr_54231_54872[(1)] = (3));

} else {
var statearr_54232_54873 = state_54228__$1;
(statearr_54232_54873[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54229 === (3))){
var inst_54216 = (state_54228[(7)]);
var inst_54223 = (function(){throw inst_54216})();
var state_54228__$1 = state_54228;
var statearr_54233_54874 = state_54228__$1;
(statearr_54233_54874[(2)] = inst_54223);

(statearr_54233_54874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54229 === (4))){
var inst_54216 = (state_54228[(7)]);
var state_54228__$1 = state_54228;
var statearr_54234_54875 = state_54228__$1;
(statearr_54234_54875[(2)] = inst_54216);

(statearr_54234_54875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54229 === (5))){
var inst_54226 = (state_54228[(2)]);
var state_54228__$1 = state_54228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54228__$1,inst_54226);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_54235 = [null,null,null,null,null,null,null,null];
(statearr_54235[(0)] = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__);

(statearr_54235[(1)] = (1));

return statearr_54235;
});
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1 = (function (state_54228){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54228);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54236){var ex__38759__auto__ = e54236;
var statearr_54237_54876 = state_54228;
(statearr_54237_54876[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54228[(4)]))){
var statearr_54238_54877 = state_54228;
(statearr_54238_54877[(1)] = cljs.core.first((state_54228[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54878 = state_54228;
state_54228 = G__54878;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = function(state_54228){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1.call(this,state_54228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54239 = f__38848__auto__();
(statearr_54239[(6)] = c__38847__auto__);

return statearr_54239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx = (function compevent$core$_LT_get_tx(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54255){
var state_val_54256 = (state_54255[(1)]);
if((state_val_54256 === (1))){
var inst_54240 = compevent.core.provider.getTransaction(txhash);
var inst_54241 = cljs.core.async.interop.p__GT_c(inst_54240);
var state_54255__$1 = state_54255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54255__$1,(2),inst_54241);
} else {
if((state_val_54256 === (2))){
var inst_54243 = (state_54255[(7)]);
var inst_54243__$1 = (state_54255[(2)]);
var inst_54244 = (inst_54243__$1 instanceof cljs.core.ExceptionInfo);
var inst_54245 = cljs.core.ex_data(inst_54243__$1);
var inst_54246 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54245);
var inst_54247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54246,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54248 = ((inst_54244) && (inst_54247));
var state_54255__$1 = (function (){var statearr_54257 = state_54255;
(statearr_54257[(7)] = inst_54243__$1);

return statearr_54257;
})();
if(cljs.core.truth_(inst_54248)){
var statearr_54258_54879 = state_54255__$1;
(statearr_54258_54879[(1)] = (3));

} else {
var statearr_54259_54880 = state_54255__$1;
(statearr_54259_54880[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54256 === (3))){
var inst_54243 = (state_54255[(7)]);
var inst_54250 = (function(){throw inst_54243})();
var state_54255__$1 = state_54255;
var statearr_54260_54881 = state_54255__$1;
(statearr_54260_54881[(2)] = inst_54250);

(statearr_54260_54881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54256 === (4))){
var inst_54243 = (state_54255[(7)]);
var state_54255__$1 = state_54255;
var statearr_54261_54882 = state_54255__$1;
(statearr_54261_54882[(2)] = inst_54243);

(statearr_54261_54882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54256 === (5))){
var inst_54253 = (state_54255[(2)]);
var state_54255__$1 = state_54255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54255__$1,inst_54253);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____0 = (function (){
var statearr_54262 = [null,null,null,null,null,null,null,null];
(statearr_54262[(0)] = compevent$core$_LT_get_tx_$_state_machine__38756__auto__);

(statearr_54262[(1)] = (1));

return statearr_54262;
});
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____1 = (function (state_54255){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54255);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54263){var ex__38759__auto__ = e54263;
var statearr_54264_54883 = state_54255;
(statearr_54264_54883[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54255[(4)]))){
var statearr_54265_54884 = state_54255;
(statearr_54265_54884[(1)] = cljs.core.first((state_54255[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54885 = state_54255;
state_54255 = G__54885;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = function(state_54255){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____1.call(this,state_54255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54266 = f__38848__auto__();
(statearr_54266[(6)] = c__38847__auto__);

return statearr_54266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx_with_receipt = (function compevent$core$_LT_get_tx_with_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54277){
var state_val_54278 = (state_54277[(1)]);
if((state_val_54278 === (1))){
var inst_54267 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_54268 = compevent.core._LT_get_tx(txhash);
var state_54277__$1 = (function (){var statearr_54279 = state_54277;
(statearr_54279[(7)] = inst_54267);

return statearr_54279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54277__$1,(2),inst_54268);
} else {
if((state_val_54278 === (2))){
var inst_54270 = (state_54277[(2)]);
var inst_54271 = compevent.core._LT_get_tx_receipt(txhash);
var state_54277__$1 = (function (){var statearr_54280 = state_54277;
(statearr_54280[(8)] = inst_54270);

return statearr_54280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54277__$1,(3),inst_54271);
} else {
if((state_val_54278 === (3))){
var inst_54267 = (state_54277[(7)]);
var inst_54270 = (state_54277[(8)]);
var inst_54273 = (state_54277[(2)]);
var inst_54274 = [inst_54270,inst_54273];
var inst_54275 = cljs.core.PersistentHashMap.fromArrays(inst_54267,inst_54274);
var state_54277__$1 = state_54277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54277__$1,inst_54275);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_54281 = [null,null,null,null,null,null,null,null,null];
(statearr_54281[(0)] = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__);

(statearr_54281[(1)] = (1));

return statearr_54281;
});
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1 = (function (state_54277){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54277);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54282){var ex__38759__auto__ = e54282;
var statearr_54283_54886 = state_54277;
(statearr_54283_54886[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54277[(4)]))){
var statearr_54284_54887 = state_54277;
(statearr_54284_54887[(1)] = cljs.core.first((state_54277[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54888 = state_54277;
state_54277 = G__54888;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = function(state_54277){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1.call(this,state_54277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54285 = f__38848__auto__();
(statearr_54285[(6)] = c__38847__auto__);

return statearr_54285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_trxs = (function compevent$core$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54290){
var state_val_54291 = (state_54290[(1)]);
if((state_val_54291 === (1))){
var inst_54286 = compevent.core._LT_get_tx_with_receipt(x);
var state_54290__$1 = state_54290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54290__$1,(2),inst_54286);
} else {
if((state_val_54291 === (2))){
var inst_54288 = (state_54290[(2)]);
var state_54290__$1 = state_54290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54290__$1,inst_54288);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0 = (function (){
var statearr_54292 = [null,null,null,null,null,null,null];
(statearr_54292[(0)] = compevent$core$_LT_get_trxs_$_state_machine__38756__auto__);

(statearr_54292[(1)] = (1));

return statearr_54292;
});
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1 = (function (state_54290){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54290);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54293){var ex__38759__auto__ = e54293;
var statearr_54294_54889 = state_54290;
(statearr_54294_54889[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54290[(4)]))){
var statearr_54295_54890 = state_54290;
(statearr_54295_54890[(1)] = cljs.core.first((state_54290[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54891 = state_54290;
state_54290 = G__54891;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = function(state_54290){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1.call(this,state_54290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0;
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54296 = f__38848__auto__();
(statearr_54296[(6)] = c__38847__auto__);

return statearr_54296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
compevent.core.total_gas_paid = (function compevent$core$total_gas_paid(tx_with_receipt){
var tx = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_price = compevent.core.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx,"gasPrice"),(18));
var r = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_used = compevent.core.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"gasUsed"),(0));
var eth_spent = bignumber.core._STAR_(gas_price,gas_used);
return eth_spent;
});
if((typeof compevent !== 'undefined') && (typeof compevent.core !== 'undefined') && (typeof compevent.core.app_state !== 'undefined')){
} else {
compevent.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282),null,new cljs.core.Keyword(null,"pool-pnl-all","pool-pnl-all",1661313006),null,new cljs.core.Keyword(null,"rewards-all","rewards-all",-319230276),null], null));
}
compevent.core.start = (function compevent$core$start(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.app_main], null)], null),document.getElementById("app"));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.location.search,"")){
var G__54297 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1));
var G__54298 = false;
return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(G__54297,G__54298) : compevent.core.render_compound_history.call(null,G__54297,G__54298));
} else {
return null;
}
});
compevent.core.init = (function compevent$core$init(){
return compevent.core.start();
});
goog.exportSymbol('compevent.core.init', compevent.core.init);
compevent.core.stop = (function compevent$core$stop(){
return console.log("stop");
});
compevent.core.web3_connect = (function compevent$core$web3_connect(){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54328){
var state_val_54329 = (state_54328[(1)]);
if((state_val_54329 === (7))){
var inst_54310 = (state_54328[(7)]);
var inst_54317 = (function(){throw inst_54310})();
var state_54328__$1 = state_54328;
var statearr_54330_54892 = state_54328__$1;
(statearr_54330_54892[(2)] = inst_54317);

(statearr_54330_54892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54329 === (1))){
var state_54328__$1 = state_54328;
var statearr_54331_54893 = state_54328__$1;
(statearr_54331_54893[(2)] = null);

(statearr_54331_54893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54329 === (4))){
var inst_54299 = (state_54328[(2)]);
var inst_54300 = console.log("Could not enable web3 in browser",inst_54299);
var state_54328__$1 = state_54328;
var statearr_54332_54894 = state_54328__$1;
(statearr_54332_54894[(2)] = inst_54300);

(statearr_54332_54894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54329 === (6))){
var inst_54310 = (state_54328[(7)]);
var inst_54310__$1 = (state_54328[(2)]);
var inst_54311 = (inst_54310__$1 instanceof cljs.core.ExceptionInfo);
var inst_54312 = cljs.core.ex_data(inst_54310__$1);
var inst_54313 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54312);
var inst_54314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54313,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54315 = ((inst_54311) && (inst_54314));
var state_54328__$1 = (function (){var statearr_54333 = state_54328;
(statearr_54333[(7)] = inst_54310__$1);

return statearr_54333;
})();
if(cljs.core.truth_(inst_54315)){
var statearr_54334_54895 = state_54328__$1;
(statearr_54334_54895[(1)] = (7));

} else {
var statearr_54335_54896 = state_54328__$1;
(statearr_54335_54896[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54329 === (3))){
var inst_54326 = (state_54328[(2)]);
var state_54328__$1 = state_54328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54328__$1,inst_54326);
} else {
if((state_val_54329 === (2))){
var _ = (function (){var statearr_54337 = state_54328;
(statearr_54337[(4)] = cljs.core.cons((5),(state_54328[(4)])));

return statearr_54337;
})();
var inst_54306 = window.ethereum;
var inst_54307 = inst_54306.enable();
var inst_54308 = cljs.core.async.interop.p__GT_c(inst_54307);
var state_54328__$1 = state_54328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54328__$1,(6),inst_54308);
} else {
if((state_val_54329 === (9))){
var inst_54320 = (state_54328[(2)]);
var inst_54321 = cljs.core.first(inst_54320);
var inst_54322 = console.log("connected-account",inst_54321);
var inst_54323 = (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(inst_54321,true) : compevent.core.render_compound_history.call(null,inst_54321,true));
var _ = (function (){var statearr_54338 = state_54328;
(statearr_54338[(4)] = cljs.core.rest((state_54328[(4)])));

return statearr_54338;
})();
var state_54328__$1 = (function (){var statearr_54339 = state_54328;
(statearr_54339[(8)] = inst_54322);

return statearr_54339;
})();
var statearr_54340_54897 = state_54328__$1;
(statearr_54340_54897[(2)] = inst_54323);

(statearr_54340_54897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54329 === (5))){
var _ = (function (){var statearr_54341 = state_54328;
(statearr_54341[(4)] = cljs.core.rest((state_54328[(4)])));

return statearr_54341;
})();
var state_54328__$1 = state_54328;
var ex54336 = (state_54328__$1[(2)]);
var statearr_54342_54898 = state_54328__$1;
(statearr_54342_54898[(5)] = ex54336);


if((ex54336 instanceof Error)){
var statearr_54343_54899 = state_54328__$1;
(statearr_54343_54899[(1)] = (4));

(statearr_54343_54899[(5)] = null);

} else {
throw ex54336;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54329 === (8))){
var inst_54310 = (state_54328[(7)]);
var state_54328__$1 = state_54328;
var statearr_54344_54900 = state_54328__$1;
(statearr_54344_54900[(2)] = inst_54310);

(statearr_54344_54900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var compevent$core$web3_connect_$_state_machine__38756__auto__ = null;
var compevent$core$web3_connect_$_state_machine__38756__auto____0 = (function (){
var statearr_54345 = [null,null,null,null,null,null,null,null,null];
(statearr_54345[(0)] = compevent$core$web3_connect_$_state_machine__38756__auto__);

(statearr_54345[(1)] = (1));

return statearr_54345;
});
var compevent$core$web3_connect_$_state_machine__38756__auto____1 = (function (state_54328){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54328);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54346){var ex__38759__auto__ = e54346;
var statearr_54347_54901 = state_54328;
(statearr_54347_54901[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54328[(4)]))){
var statearr_54348_54902 = state_54328;
(statearr_54348_54902[(1)] = cljs.core.first((state_54328[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54903 = state_54328;
state_54328 = G__54903;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$web3_connect_$_state_machine__38756__auto__ = function(state_54328){
switch(arguments.length){
case 0:
return compevent$core$web3_connect_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$web3_connect_$_state_machine__38756__auto____1.call(this,state_54328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$web3_connect_$_state_machine__38756__auto____0;
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$web3_connect_$_state_machine__38756__auto____1;
return compevent$core$web3_connect_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54349 = f__38848__auto__();
(statearr_54349[(6)] = c__38847__auto__);

return statearr_54349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.connecting_component = (function compevent$core$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account",new cljs.core.Keyword(null,"class","class",-2030961996),"connect",new cljs.core.Keyword(null,"on-click","on-click",1632826543),compevent.core.web3_connect], null)], null)], null);
});
compevent.core.set_query_string_BANG_ = (function compevent$core$set_query_string_BANG_(v){
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname)].join('');
var url_SINGLEQUOTE_ = [url,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return window.history.pushState(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),url_SINGLEQUOTE_], null)),null,url_SINGLEQUOTE_);
});
compevent.core.fetch_external_account = (function compevent$core$fetch_external_account(account){
compevent.core.set_query_string_BANG_(account);

return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$1 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$1(account) : compevent.core.render_compound_history.call(null,account));
});
compevent.core.submit_component = (function compevent$core$submit_component(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return compevent.core.fetch_external_account(cljs.core.deref(value));
})], null)], null);
});
compevent.core.atom_input = (function compevent$core$atom_input(value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),"44",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter address",new cljs.core.Keyword(null,"default-value","default-value",232220170),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.location.search,""))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1)):null),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.key,"Enter")){
return compevent.core.fetch_external_account(cljs.core.deref(value));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (t){
return cljs.core.reset_BANG_(value,t.target.value);
})], null)], null),compevent.core.submit_component(value)], null);
});
var input_54904 = compevent.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""));
compevent.core.app_main = (function compevent$core$app_main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Compound account history charts",(((compevent.core.provider == null))?" Requires Web3":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((!((compevent.core.provider == null))))?input_54904:null),(((cljs.core.count(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))) > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),cljs.core.butlast(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-flicker"], null),cljs.core.last(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null):null),new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))], null);
});
compevent.core.block_num__GT_ts = (function compevent$core$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54350_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__54350_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
compevent.core.ts__GT_geckoprice = (function compevent$core$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54351_SHARP_){
return (cljs.core.first(p1__54351_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54352_SHARP_){
return (cljs.core.first(p1__54352_SHARP_) > ts);
}),day_prices_SINGLEQUOTE_));
if(cljs.core.truth_((function (){var and__4115__auto__ = prev_day;
if(cljs.core.truth_(and__4115__auto__)){
return next_day;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.second(prev_day);
} else {
return null;
}
});
compevent.core.blocknum__GT_geckoprice = (function compevent$core$blocknum__GT_geckoprice(day_prices,blocks,block_num){
var ts = ((1000) * compevent.core.block_num__GT_ts(blocks,block_num));
var price = compevent.core.ts__GT_geckoprice(day_prices,ts);
return compevent.core.bn(price);
});
compevent.core._LT_historic_gecko_prices = (function compevent$core$_LT_historic_gecko_prices(address){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54365){
var state_val_54366 = (state_54365[(1)]);
if((state_val_54366 === (1))){
var inst_54353 = (state_54365[(7)]);
var inst_54353__$1 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_54354 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_54355 = [false];
var inst_54356 = cljs.core.PersistentHashMap.fromArrays(inst_54354,inst_54355);
var inst_54357 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_54353__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54356], 0));
var state_54365__$1 = (function (){var statearr_54367 = state_54365;
(statearr_54367[(7)] = inst_54353__$1);

return statearr_54367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54365__$1,(2),inst_54357);
} else {
if((state_val_54366 === (2))){
var inst_54353 = (state_54365[(7)]);
var inst_54359 = (state_54365[(2)]);
var inst_54360 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_54359);
var inst_54361 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_54360);
var inst_54362 = (function (){var base_url = inst_54353;
var full_url = inst_54353;
var data = inst_54361;
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x),compevent.core.bn(cljs.core.second(x))], null);
});
})();
var inst_54363 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_54362,inst_54361);
var state_54365__$1 = state_54365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54365__$1,inst_54363);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0 = (function (){
var statearr_54368 = [null,null,null,null,null,null,null,null];
(statearr_54368[(0)] = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__);

(statearr_54368[(1)] = (1));

return statearr_54368;
});
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1 = (function (state_54365){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54365);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54369){var ex__38759__auto__ = e54369;
var statearr_54370_54905 = state_54365;
(statearr_54370_54905[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54365[(4)]))){
var statearr_54371_54906 = state_54365;
(statearr_54371_54906[(1)] = cljs.core.first((state_54365[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54907 = state_54365;
state_54365 = G__54907;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = function(state_54365){
switch(arguments.length){
case 0:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1.call(this,state_54365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0;
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1;
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54372 = f__38848__auto__();
(statearr_54372[(6)] = c__38847__auto__);

return statearr_54372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_dollarize_liquidations = (function compevent$core$_LT_dollarize_liquidations(liquidations,token){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54385){
var state_val_54386 = (state_54385[(1)]);
if((state_val_54386 === (1))){
var inst_54373 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_54374 = cljs.core.set(inst_54373);
var inst_54375 = compevent.core._LT_fetch_blocks(inst_54374);
var state_54385__$1 = state_54385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54385__$1,(2),inst_54375);
} else {
if((state_val_54386 === (2))){
var inst_54377 = (state_54385[(2)]);
var inst_54378 = compevent.core.token__GT_address(token);
var inst_54379 = compevent.core._LT_historic_gecko_prices(inst_54378);
var state_54385__$1 = (function (){var statearr_54387 = state_54385;
(statearr_54387[(7)] = inst_54377);

return statearr_54387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54385__$1,(3),inst_54379);
} else {
if((state_val_54386 === (3))){
var inst_54377 = (state_54385[(7)]);
var inst_54381 = (state_54385[(2)]);
var inst_54382 = (function (){var liq_blocks = inst_54377;
var day_prices = inst_54381;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),compevent.core.bn(compevent.core.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_54383 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_54382,liquidations);
var state_54385__$1 = state_54385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54385__$1,inst_54383);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_54388 = [null,null,null,null,null,null,null,null];
(statearr_54388[(0)] = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__);

(statearr_54388[(1)] = (1));

return statearr_54388;
});
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1 = (function (state_54385){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54385);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54389){var ex__38759__auto__ = e54389;
var statearr_54390_54908 = state_54385;
(statearr_54390_54908[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54385[(4)]))){
var statearr_54391_54909 = state_54385;
(statearr_54391_54909[(1)] = cljs.core.first((state_54385[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54910 = state_54385;
state_54385 = G__54910;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = function(state_54385){
switch(arguments.length){
case 0:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1.call(this,state_54385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54392 = f__38848__auto__();
(statearr_54392[(6)] = c__38847__auto__);

return statearr_54392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_repayments = (function compevent$core$_LT_comp_repayments(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var repay_filter = (comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.RepayBorrow.call(null));
var _ = (repay_filter.fromBlock = start_block);
var ___$1 = (repay_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54408){
var state_val_54409 = (state_54408[(1)]);
if((state_val_54409 === (1))){
var inst_54393 = compevent.core.provider.getLogs(repay_filter);
var inst_54394 = cljs.core.async.interop.p__GT_c(inst_54393);
var state_54408__$1 = state_54408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54408__$1,(2),inst_54394);
} else {
if((state_val_54409 === (2))){
var inst_54396 = (state_54408[(7)]);
var inst_54396__$1 = (state_54408[(2)]);
var inst_54397 = (inst_54396__$1 instanceof cljs.core.ExceptionInfo);
var inst_54398 = cljs.core.ex_data(inst_54396__$1);
var inst_54399 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54398);
var inst_54400 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54399,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54401 = ((inst_54397) && (inst_54400));
var state_54408__$1 = (function (){var statearr_54410 = state_54408;
(statearr_54410[(7)] = inst_54396__$1);

return statearr_54410;
})();
if(cljs.core.truth_(inst_54401)){
var statearr_54411_54911 = state_54408__$1;
(statearr_54411_54911[(1)] = (3));

} else {
var statearr_54412_54912 = state_54408__$1;
(statearr_54412_54912[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54409 === (3))){
var inst_54396 = (state_54408[(7)]);
var inst_54403 = (function(){throw inst_54396})();
var state_54408__$1 = state_54408;
var statearr_54413_54913 = state_54408__$1;
(statearr_54413_54913[(2)] = inst_54403);

(statearr_54413_54913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54409 === (4))){
var inst_54396 = (state_54408[(7)]);
var state_54408__$1 = state_54408;
var statearr_54414_54914 = state_54408__$1;
(statearr_54414_54914[(2)] = inst_54396);

(statearr_54414_54914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54409 === (5))){
var inst_54406 = (state_54408[(2)]);
var state_54408__$1 = state_54408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54408__$1,inst_54406);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_54415 = [null,null,null,null,null,null,null,null];
(statearr_54415[(0)] = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__);

(statearr_54415[(1)] = (1));

return statearr_54415;
});
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1 = (function (state_54408){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54408);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54416){var ex__38759__auto__ = e54416;
var statearr_54417_54915 = state_54408;
(statearr_54417_54915[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54408[(4)]))){
var statearr_54418_54916 = state_54408;
(statearr_54418_54916[(1)] = cljs.core.first((state_54408[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54917 = state_54408;
state_54408 = G__54917;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = function(state_54408){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1.call(this,state_54408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54419 = f__38848__auto__();
(statearr_54419[(6)] = c__38847__auto__);

return statearr_54419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_liquidations = (function compevent$core$_LT_comp_liquidations(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var liquidation_filter = (comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.LiquidateBorrow.call(null));
var _ = (liquidation_filter.fromBlock = start_block);
var ___$1 = (liquidation_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54435){
var state_val_54436 = (state_54435[(1)]);
if((state_val_54436 === (1))){
var inst_54420 = compevent.core.provider.getLogs(liquidation_filter);
var inst_54421 = cljs.core.async.interop.p__GT_c(inst_54420);
var state_54435__$1 = state_54435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54435__$1,(2),inst_54421);
} else {
if((state_val_54436 === (2))){
var inst_54423 = (state_54435[(7)]);
var inst_54423__$1 = (state_54435[(2)]);
var inst_54424 = (inst_54423__$1 instanceof cljs.core.ExceptionInfo);
var inst_54425 = cljs.core.ex_data(inst_54423__$1);
var inst_54426 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54425);
var inst_54427 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54426,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54428 = ((inst_54424) && (inst_54427));
var state_54435__$1 = (function (){var statearr_54437 = state_54435;
(statearr_54437[(7)] = inst_54423__$1);

return statearr_54437;
})();
if(cljs.core.truth_(inst_54428)){
var statearr_54438_54918 = state_54435__$1;
(statearr_54438_54918[(1)] = (3));

} else {
var statearr_54439_54919 = state_54435__$1;
(statearr_54439_54919[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (3))){
var inst_54423 = (state_54435[(7)]);
var inst_54430 = (function(){throw inst_54423})();
var state_54435__$1 = state_54435;
var statearr_54440_54920 = state_54435__$1;
(statearr_54440_54920[(2)] = inst_54430);

(statearr_54440_54920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (4))){
var inst_54423 = (state_54435[(7)]);
var state_54435__$1 = state_54435;
var statearr_54441_54921 = state_54435__$1;
(statearr_54441_54921[(2)] = inst_54423);

(statearr_54441_54921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (5))){
var inst_54433 = (state_54435[(2)]);
var state_54435__$1 = state_54435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54435__$1,inst_54433);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_54442 = [null,null,null,null,null,null,null,null];
(statearr_54442[(0)] = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__);

(statearr_54442[(1)] = (1));

return statearr_54442;
});
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_54435){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54435);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54443){var ex__38759__auto__ = e54443;
var statearr_54444_54922 = state_54435;
(statearr_54444_54922[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54435[(4)]))){
var statearr_54445_54923 = state_54435;
(statearr_54445_54923[(1)] = cljs.core.first((state_54435[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54924 = state_54435;
state_54435 = G__54924;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = function(state_54435){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_54435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54446 = f__38848__auto__();
(statearr_54446[(6)] = c__38847__auto__);

return statearr_54446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_mints = (function compevent$core$_LT_comp_mints(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var mint_filter = (comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Mint.call(null));
var _ = (mint_filter.fromBlock = start_block);
var ___$1 = (mint_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54462){
var state_val_54463 = (state_54462[(1)]);
if((state_val_54463 === (1))){
var inst_54447 = compevent.core.provider.getLogs(mint_filter);
var inst_54448 = cljs.core.async.interop.p__GT_c(inst_54447);
var state_54462__$1 = state_54462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54462__$1,(2),inst_54448);
} else {
if((state_val_54463 === (2))){
var inst_54450 = (state_54462[(7)]);
var inst_54450__$1 = (state_54462[(2)]);
var inst_54451 = (inst_54450__$1 instanceof cljs.core.ExceptionInfo);
var inst_54452 = cljs.core.ex_data(inst_54450__$1);
var inst_54453 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54452);
var inst_54454 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54453,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54455 = ((inst_54451) && (inst_54454));
var state_54462__$1 = (function (){var statearr_54464 = state_54462;
(statearr_54464[(7)] = inst_54450__$1);

return statearr_54464;
})();
if(cljs.core.truth_(inst_54455)){
var statearr_54465_54925 = state_54462__$1;
(statearr_54465_54925[(1)] = (3));

} else {
var statearr_54466_54926 = state_54462__$1;
(statearr_54466_54926[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (3))){
var inst_54450 = (state_54462[(7)]);
var inst_54457 = (function(){throw inst_54450})();
var state_54462__$1 = state_54462;
var statearr_54467_54927 = state_54462__$1;
(statearr_54467_54927[(2)] = inst_54457);

(statearr_54467_54927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (4))){
var inst_54450 = (state_54462[(7)]);
var state_54462__$1 = state_54462;
var statearr_54468_54928 = state_54462__$1;
(statearr_54468_54928[(2)] = inst_54450);

(statearr_54468_54928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (5))){
var inst_54460 = (state_54462[(2)]);
var state_54462__$1 = state_54462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54462__$1,inst_54460);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_54469 = [null,null,null,null,null,null,null,null];
(statearr_54469[(0)] = compevent$core$_LT_comp_mints_$_state_machine__38756__auto__);

(statearr_54469[(1)] = (1));

return statearr_54469;
});
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1 = (function (state_54462){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54462);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54470){var ex__38759__auto__ = e54470;
var statearr_54471_54929 = state_54462;
(statearr_54471_54929[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54462[(4)]))){
var statearr_54472_54930 = state_54462;
(statearr_54472_54930[(1)] = cljs.core.first((state_54462[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54931 = state_54462;
state_54462 = G__54931;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = function(state_54462){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1.call(this,state_54462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54473 = f__38848__auto__();
(statearr_54473[(6)] = c__38847__auto__);

return statearr_54473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_borrows = (function compevent$core$_LT_comp_borrows(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var borrow_filter = (comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Borrow.call(null));
var _ = (borrow_filter.fromBlock = start_block);
var ___$1 = (borrow_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54489){
var state_val_54490 = (state_54489[(1)]);
if((state_val_54490 === (1))){
var inst_54474 = compevent.core.provider.getLogs(borrow_filter);
var inst_54475 = cljs.core.async.interop.p__GT_c(inst_54474);
var state_54489__$1 = state_54489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54489__$1,(2),inst_54475);
} else {
if((state_val_54490 === (2))){
var inst_54477 = (state_54489[(7)]);
var inst_54477__$1 = (state_54489[(2)]);
var inst_54478 = (inst_54477__$1 instanceof cljs.core.ExceptionInfo);
var inst_54479 = cljs.core.ex_data(inst_54477__$1);
var inst_54480 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54479);
var inst_54481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54480,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54482 = ((inst_54478) && (inst_54481));
var state_54489__$1 = (function (){var statearr_54491 = state_54489;
(statearr_54491[(7)] = inst_54477__$1);

return statearr_54491;
})();
if(cljs.core.truth_(inst_54482)){
var statearr_54492_54932 = state_54489__$1;
(statearr_54492_54932[(1)] = (3));

} else {
var statearr_54493_54933 = state_54489__$1;
(statearr_54493_54933[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54490 === (3))){
var inst_54477 = (state_54489[(7)]);
var inst_54484 = (function(){throw inst_54477})();
var state_54489__$1 = state_54489;
var statearr_54494_54934 = state_54489__$1;
(statearr_54494_54934[(2)] = inst_54484);

(statearr_54494_54934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54490 === (4))){
var inst_54477 = (state_54489[(7)]);
var state_54489__$1 = state_54489;
var statearr_54495_54935 = state_54489__$1;
(statearr_54495_54935[(2)] = inst_54477);

(statearr_54495_54935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54490 === (5))){
var inst_54487 = (state_54489[(2)]);
var state_54489__$1 = state_54489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54489__$1,inst_54487);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_54496 = [null,null,null,null,null,null,null,null];
(statearr_54496[(0)] = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__);

(statearr_54496[(1)] = (1));

return statearr_54496;
});
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1 = (function (state_54489){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54489);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54497){var ex__38759__auto__ = e54497;
var statearr_54498_54936 = state_54489;
(statearr_54498_54936[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54489[(4)]))){
var statearr_54499_54937 = state_54489;
(statearr_54499_54937[(1)] = cljs.core.first((state_54489[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54938 = state_54489;
state_54489 = G__54938;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = function(state_54489){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1.call(this,state_54489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54500 = f__38848__auto__();
(statearr_54500[(6)] = c__38847__auto__);

return statearr_54500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_redeems = (function compevent$core$_LT_comp_redeems(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var redeem_filter = (comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Redeem.call(null));
var _ = (redeem_filter.fromBlock = start_block);
var ___$1 = (redeem_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54516){
var state_val_54517 = (state_54516[(1)]);
if((state_val_54517 === (1))){
var inst_54501 = compevent.core.provider.getLogs(redeem_filter);
var inst_54502 = cljs.core.async.interop.p__GT_c(inst_54501);
var state_54516__$1 = state_54516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54516__$1,(2),inst_54502);
} else {
if((state_val_54517 === (2))){
var inst_54504 = (state_54516[(7)]);
var inst_54504__$1 = (state_54516[(2)]);
var inst_54505 = (inst_54504__$1 instanceof cljs.core.ExceptionInfo);
var inst_54506 = cljs.core.ex_data(inst_54504__$1);
var inst_54507 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54506);
var inst_54508 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54507,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54509 = ((inst_54505) && (inst_54508));
var state_54516__$1 = (function (){var statearr_54518 = state_54516;
(statearr_54518[(7)] = inst_54504__$1);

return statearr_54518;
})();
if(cljs.core.truth_(inst_54509)){
var statearr_54519_54939 = state_54516__$1;
(statearr_54519_54939[(1)] = (3));

} else {
var statearr_54520_54940 = state_54516__$1;
(statearr_54520_54940[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54517 === (3))){
var inst_54504 = (state_54516[(7)]);
var inst_54511 = (function(){throw inst_54504})();
var state_54516__$1 = state_54516;
var statearr_54521_54941 = state_54516__$1;
(statearr_54521_54941[(2)] = inst_54511);

(statearr_54521_54941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54517 === (4))){
var inst_54504 = (state_54516[(7)]);
var state_54516__$1 = state_54516;
var statearr_54522_54942 = state_54516__$1;
(statearr_54522_54942[(2)] = inst_54504);

(statearr_54522_54942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54517 === (5))){
var inst_54514 = (state_54516[(2)]);
var state_54516__$1 = state_54516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54516__$1,inst_54514);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_54523 = [null,null,null,null,null,null,null,null];
(statearr_54523[(0)] = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__);

(statearr_54523[(1)] = (1));

return statearr_54523;
});
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1 = (function (state_54516){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54516);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54524){var ex__38759__auto__ = e54524;
var statearr_54525_54943 = state_54516;
(statearr_54525_54943[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54516[(4)]))){
var statearr_54526_54944 = state_54516;
(statearr_54526_54944[(1)] = cljs.core.first((state_54516[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54945 = state_54516;
state_54516 = G__54945;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = function(state_54516){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1.call(this,state_54516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54527 = f__38848__auto__();
(statearr_54527[(6)] = c__38847__auto__);

return statearr_54527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.make_comp_repayment = (function compevent$core$make_comp_repayment(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"account-borrrows","account-borrrows",-395615768),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"payer","payer",443929743),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603)],[tx_hash,caddress,compevent.core.ebn__GT_bn(tx_args.accountBorrows,decimals),"repayment",block_number,tx_args.payer,compevent.core.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.borrower,compevent.core.ebn__GT_bn(tx_args.totalBorrows,decimals)]);
});
compevent.core.make_comp_liquidation = (function compevent$core$make_comp_liquidation(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"seize-tokens","seize-tokens",-1982010893),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"liquidator","liquidator",676132375),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"c-token-collateral","c-token-collateral",1555321853)],[tx_hash,caddress,"liquidation",block_number,compevent.core.ebn__GT_bn(tx_args.seizeTokens,decimals),compevent.core.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.liquidator,tx_args.borrower,tx_args.cTokenCollateral]);
});
compevent.core.make_comp_mint = (function compevent$core$make_comp_mint(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"minter","minter",280863112),tx_args.minter,new cljs.core.Keyword(null,"mint-amount","mint-amount",961101419),compevent.core.ebn__GT_bn(tx_args.mintAmount,decimals),new cljs.core.Keyword(null,"mint-tokens","mint-tokens",1594108366),compevent.core.ebn__GT_bn(tx_args.mintTokens,decimals),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"type","type",1174270348),"mint",new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
compevent.core.make_comp_borrow = (function compevent$core$make_comp_borrow(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"borrower","borrower",1776622391),tx_args.borrower,new cljs.core.Keyword(null,"borrow-amount","borrow-amount",-909882063),compevent.core.ebn__GT_bn(tx_args.borrowAmount,decimals),new cljs.core.Keyword(null,"account-borrows","account-borrows",-286211829),compevent.core.ebn__GT_bn(tx_args.accountBorrows,decimals),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603),compevent.core.ebn__GT_bn(tx_args.totalBorrows,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"borrow",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
compevent.core.make_comp_redeem = (function compevent$core$make_comp_redeem(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"redeemer","redeemer",-319029372),tx_args.redeemer,new cljs.core.Keyword(null,"redeem-amount","redeem-amount",541522884),compevent.core.ebn__GT_bn(tx_args.redeemAmount,decimals),new cljs.core.Keyword(null,"redeem-tokens","redeem-tokens",1379041193),compevent.core.ebn__GT_bn(tx_args.redeemTokens,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"redeem",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
compevent.core._LT_fetch_comp_logs = (function compevent$core$_LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54528_SHARP_){
var G__54529 = caddress;
var G__54530 = p1__54528_SHARP_;
var G__54531 = (p1__54528_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__54529,G__54530,G__54531) : logsfn.call(null,G__54529,G__54530,G__54531));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
compevent.core._LT_pfetch_comp_logs = (function compevent$core$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54539){
var state_val_54540 = (state_54539[(1)]);
if((state_val_54540 === (1))){
var inst_54533 = compevent.core._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_54539__$1 = state_54539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54539__$1,(2),inst_54533);
} else {
if((state_val_54540 === (2))){
var inst_54535 = (state_54539[(2)]);
var inst_54536 = (function (){var fetched_logs = inst_54535;
return (function (p1__54532_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__54532_SHARP_,decimals) : parsefn.call(null,p1__54532_SHARP_,decimals));
});
})();
var inst_54537 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_54536,inst_54535);
var state_54539__$1 = state_54539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54539__$1,inst_54537);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0 = (function (){
var statearr_54541 = [null,null,null,null,null,null,null];
(statearr_54541[(0)] = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__);

(statearr_54541[(1)] = (1));

return statearr_54541;
});
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1 = (function (state_54539){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54539);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54542){var ex__38759__auto__ = e54542;
var statearr_54543_54946 = state_54539;
(statearr_54543_54946[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54539[(4)]))){
var statearr_54544_54947 = state_54539;
(statearr_54544_54947[(1)] = cljs.core.first((state_54539[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54948 = state_54539;
state_54539 = G__54948;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = function(state_54539){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1.call(this,state_54539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54545 = f__38848__auto__();
(statearr_54545[(6)] = c__38847__auto__);

return statearr_54545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_repayments = (function compevent$core$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54550){
var state_val_54551 = (state_54550[(1)]);
if((state_val_54551 === (1))){
var inst_54546 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_repayments,compevent.core.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54550__$1,(2),inst_54546);
} else {
if((state_val_54551 === (2))){
var inst_54548 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54550__$1,inst_54548);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_54552 = [null,null,null,null,null,null,null];
(statearr_54552[(0)] = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__);

(statearr_54552[(1)] = (1));

return statearr_54552;
});
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1 = (function (state_54550){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54550);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54553){var ex__38759__auto__ = e54553;
var statearr_54554_54949 = state_54550;
(statearr_54554_54949[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54550[(4)]))){
var statearr_54555_54950 = state_54550;
(statearr_54555_54950[(1)] = cljs.core.first((state_54550[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54951 = state_54550;
state_54550 = G__54951;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = function(state_54550){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1.call(this,state_54550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54556 = f__38848__auto__();
(statearr_54556[(6)] = c__38847__auto__);

return statearr_54556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_mints = (function compevent$core$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54561){
var state_val_54562 = (state_54561[(1)]);
if((state_val_54562 === (1))){
var inst_54557 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_mints,compevent.core.make_comp_mint,caddress,start_block,end_block,decimals);
var state_54561__$1 = state_54561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54561__$1,(2),inst_54557);
} else {
if((state_val_54562 === (2))){
var inst_54559 = (state_54561[(2)]);
var state_54561__$1 = state_54561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54561__$1,inst_54559);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_54563 = [null,null,null,null,null,null,null];
(statearr_54563[(0)] = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__);

(statearr_54563[(1)] = (1));

return statearr_54563;
});
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1 = (function (state_54561){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54561);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54564){var ex__38759__auto__ = e54564;
var statearr_54565_54952 = state_54561;
(statearr_54565_54952[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54561[(4)]))){
var statearr_54566_54953 = state_54561;
(statearr_54566_54953[(1)] = cljs.core.first((state_54561[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54954 = state_54561;
state_54561 = G__54954;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = function(state_54561){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1.call(this,state_54561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54567 = f__38848__auto__();
(statearr_54567[(6)] = c__38847__auto__);

return statearr_54567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_liquidations = (function compevent$core$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54572){
var state_val_54573 = (state_54572[(1)]);
if((state_val_54573 === (1))){
var inst_54568 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_liquidations,compevent.core.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_54572__$1 = state_54572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54572__$1,(2),inst_54568);
} else {
if((state_val_54573 === (2))){
var inst_54570 = (state_54572[(2)]);
var state_54572__$1 = state_54572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54572__$1,inst_54570);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_54574 = [null,null,null,null,null,null,null];
(statearr_54574[(0)] = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__);

(statearr_54574[(1)] = (1));

return statearr_54574;
});
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_54572){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54572);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54575){var ex__38759__auto__ = e54575;
var statearr_54576_54955 = state_54572;
(statearr_54576_54955[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54572[(4)]))){
var statearr_54577_54956 = state_54572;
(statearr_54577_54956[(1)] = cljs.core.first((state_54572[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54957 = state_54572;
state_54572 = G__54957;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = function(state_54572){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_54572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54578 = f__38848__auto__();
(statearr_54578[(6)] = c__38847__auto__);

return statearr_54578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_borrows = (function compevent$core$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54583){
var state_val_54584 = (state_54583[(1)]);
if((state_val_54584 === (1))){
var inst_54579 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_borrows,compevent.core.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_54583__$1 = state_54583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54583__$1,(2),inst_54579);
} else {
if((state_val_54584 === (2))){
var inst_54581 = (state_54583[(2)]);
var state_54583__$1 = state_54583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54583__$1,inst_54581);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_54585 = [null,null,null,null,null,null,null];
(statearr_54585[(0)] = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__);

(statearr_54585[(1)] = (1));

return statearr_54585;
});
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1 = (function (state_54583){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54583);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54586){var ex__38759__auto__ = e54586;
var statearr_54587_54958 = state_54583;
(statearr_54587_54958[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54583[(4)]))){
var statearr_54588_54959 = state_54583;
(statearr_54588_54959[(1)] = cljs.core.first((state_54583[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54960 = state_54583;
state_54583 = G__54960;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = function(state_54583){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1.call(this,state_54583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54589 = f__38848__auto__();
(statearr_54589[(6)] = c__38847__auto__);

return statearr_54589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_redeems = (function compevent$core$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54594){
var state_val_54595 = (state_54594[(1)]);
if((state_val_54595 === (1))){
var inst_54590 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_redeems,compevent.core.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_54594__$1 = state_54594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54594__$1,(2),inst_54590);
} else {
if((state_val_54595 === (2))){
var inst_54592 = (state_54594[(2)]);
var state_54594__$1 = state_54594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54594__$1,inst_54592);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_54596 = [null,null,null,null,null,null,null];
(statearr_54596[(0)] = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__);

(statearr_54596[(1)] = (1));

return statearr_54596;
});
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1 = (function (state_54594){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54594);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54597){var ex__38759__auto__ = e54597;
var statearr_54598_54961 = state_54594;
(statearr_54598_54961[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54594[(4)]))){
var statearr_54599_54962 = state_54594;
(statearr_54599_54962[(1)] = cljs.core.first((state_54594[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54963 = state_54594;
state_54594 = G__54963;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = function(state_54594){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1.call(this,state_54594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54600 = f__38848__auto__();
(statearr_54600[(6)] = c__38847__auto__);

return statearr_54600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_ctoken_events = (function compevent$core$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54619){
var state_val_54620 = (state_54619[(1)]);
if((state_val_54620 === (1))){
var inst_54601 = compevent.core._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_54619__$1 = state_54619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54619__$1,(2),inst_54601);
} else {
if((state_val_54620 === (2))){
var inst_54603 = (state_54619[(2)]);
var inst_54604 = compevent.core._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_54619__$1 = (function (){var statearr_54621 = state_54619;
(statearr_54621[(7)] = inst_54603);

return statearr_54621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54619__$1,(3),inst_54604);
} else {
if((state_val_54620 === (3))){
var inst_54606 = (state_54619[(2)]);
var inst_54607 = compevent.core._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_54619__$1 = (function (){var statearr_54622 = state_54619;
(statearr_54622[(8)] = inst_54606);

return statearr_54622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54619__$1,(4),inst_54607);
} else {
if((state_val_54620 === (4))){
var inst_54609 = (state_54619[(2)]);
var inst_54610 = compevent.core._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_54619__$1 = (function (){var statearr_54623 = state_54619;
(statearr_54623[(9)] = inst_54609);

return statearr_54623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54619__$1,(5),inst_54610);
} else {
if((state_val_54620 === (5))){
var inst_54612 = (state_54619[(2)]);
var inst_54613 = compevent.core._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_54619__$1 = (function (){var statearr_54624 = state_54619;
(statearr_54624[(10)] = inst_54612);

return statearr_54624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54619__$1,(6),inst_54613);
} else {
if((state_val_54620 === (6))){
var inst_54609 = (state_54619[(9)]);
var inst_54603 = (state_54619[(7)]);
var inst_54606 = (state_54619[(8)]);
var inst_54612 = (state_54619[(10)]);
var inst_54615 = (state_54619[(2)]);
var inst_54616 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_54603,inst_54606,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54609,inst_54612,inst_54615], 0));
var inst_54617 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_54616);
var state_54619__$1 = state_54619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54619__$1,inst_54617);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0 = (function (){
var statearr_54625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54625[(0)] = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__);

(statearr_54625[(1)] = (1));

return statearr_54625;
});
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1 = (function (state_54619){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54619);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54626){var ex__38759__auto__ = e54626;
var statearr_54627_54964 = state_54619;
(statearr_54627_54964[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54619[(4)]))){
var statearr_54628_54965 = state_54619;
(statearr_54628_54965[(1)] = cljs.core.first((state_54619[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54966 = state_54619;
state_54619 = G__54966;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = function(state_54619){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1.call(this,state_54619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54629 = f__38848__auto__();
(statearr_54629[(6)] = c__38847__auto__);

return statearr_54629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.account_ctoken_events = (function compevent$core$account_ctoken_events(ctoken_events,account){
var account_SINGLEQUOTE_ = clojure.string.lower_case(account);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (event){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"borrow")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account_SINGLEQUOTE_,clojure.string.lower_case(new cljs.core.Keyword(null,"borrower","borrower",1776622391).cljs$core$IFn$_invoke$arity$1(event)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"repayment")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account_SINGLEQUOTE_,(function (){var and__4115__auto__ = clojure.string.lower_case(new cljs.core.Keyword(null,"payer","payer",443929743).cljs$core$IFn$_invoke$arity$1(event));
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.lower_case(new cljs.core.Keyword(null,"borrower","borrower",1776622391).cljs$core$IFn$_invoke$arity$1(event));
} else {
return and__4115__auto__;
}
})())))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"mint")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account_SINGLEQUOTE_,clojure.string.lower_case(new cljs.core.Keyword(null,"minter","minter",280863112).cljs$core$IFn$_invoke$arity$1(event)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"redeem")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account,clojure.string.lower_case(new cljs.core.Keyword(null,"redeemer","redeemer",-319029372).cljs$core$IFn$_invoke$arity$1(event)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"liquidation")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account,clojure.string.lower_case(new cljs.core.Keyword(null,"borrower","borrower",1776622391).cljs$core$IFn$_invoke$arity$1(event)))))));
}),ctoken_events);
});
compevent.core.acc_health = (function compevent$core$acc_health(a){
return compevent.core.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"health"),"value"));
});
compevent.core.acc_address = (function compevent$core$acc_address(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"address");
});
compevent.core.total_borrow_eth = (function compevent$core$total_borrow_eth(a){
return compevent.core.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_borrow_value_in_eth"),"value"));
});
compevent.core.total_collateral_eth = (function compevent$core$total_collateral_eth(a){
return compevent.core.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_collateral_value_in_eth"),"value"));
});
compevent.core.block_number = (function compevent$core$block_number(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"block-number");
});
compevent.core.token_borrow_underlying = (function compevent$core$token_borrow_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54630_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__54630_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.token_supply_underlying = (function compevent$core$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54631_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__54631_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"supply_balance_underlying","supply_balance_underlying",1572069900).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.acc_state = (function compevent$core$acc_state(a){
var a_SINGLEQUOTE_ = clojure.walk.keywordize_keys(a);
var dai_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cDAI");
var dai_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cDAI");
var usdc_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdc_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdt_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDT");
var usdt_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cUSDT");
var eth_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cETH");
var eth_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cETH");
var sai_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cSAI");
var sai_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cSAI");
var bat_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cBAT");
var bat_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cBAT");
var comp_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cCOMP");
var comp_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cCOMP");
var uni_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cUNI");
var uni_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cUNI");
var wbtc_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cWBTC");
var wbtc_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cWBTC");
var zrx_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cZRX");
var zrx_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cZRX");
var rep_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cREP");
var rep_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cREP");
var usd_value_borrowed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dai_borrowed,usdc_borrowed,usdt_borrowed], null));
var usd_value_supplied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dai_supplied,usdc_supplied,usdt_supplied], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336),new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896),new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322),new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555)],[comp_supplied,zrx_supplied,uni_supplied,sai_supplied,usdt_supplied,wbtc_supplied,usdc_supplied,compevent.core.total_collateral_eth(a),sai_borrowed,compevent.core.total_borrow_eth(a),usdt_borrowed,compevent.core.block_number(a),rep_borrowed,comp_borrowed,usd_value_supplied,compevent.core.acc_address(a),eth_borrowed,dai_supplied,usdc_borrowed,rep_supplied,uni_borrowed,wbtc_borrowed,eth_supplied,zrx_borrowed,compevent.core.acc_health(a),usd_value_borrowed,bat_supplied,dai_borrowed,bat_borrowed]);
});
compevent.core._LT_account_state = (function compevent$core$_LT_account_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54967 = arguments.length;
var i__4737__auto___54968 = (0);
while(true){
if((i__4737__auto___54968 < len__4736__auto___54967)){
args__4742__auto__.push((arguments[i__4737__auto___54968]));

var G__54969 = (i__4737__auto___54968 + (1));
i__4737__auto___54968 = G__54969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__54634){
var map__54635 = p__54634;
var map__54635__$1 = (((((!((map__54635 == null))))?(((((map__54635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54635):map__54635);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54635__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54657){
var state_val_54658 = (state_54657[(1)]);
if((state_val_54658 === (1))){
var inst_54637 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_54638 = [address,block_number];
var inst_54639 = cljs.core.PersistentHashMap.fromArrays(inst_54637,inst_54638);
var inst_54640 = cljs.core.clj__GT_js(inst_54639);
var inst_54641 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_54640);
var inst_54642 = cljs.core.async.interop.p__GT_c(inst_54641);
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54657__$1,(2),inst_54642);
} else {
if((state_val_54658 === (2))){
var inst_54644 = (state_54657[(7)]);
var inst_54644__$1 = (state_54657[(2)]);
var inst_54645 = (inst_54644__$1 instanceof cljs.core.ExceptionInfo);
var inst_54646 = cljs.core.ex_data(inst_54644__$1);
var inst_54647 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54646);
var inst_54648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54647,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54649 = ((inst_54645) && (inst_54648));
var state_54657__$1 = (function (){var statearr_54659 = state_54657;
(statearr_54659[(7)] = inst_54644__$1);

return statearr_54659;
})();
if(cljs.core.truth_(inst_54649)){
var statearr_54660_54970 = state_54657__$1;
(statearr_54660_54970[(1)] = (3));

} else {
var statearr_54661_54971 = state_54657__$1;
(statearr_54661_54971[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (3))){
var inst_54644 = (state_54657[(7)]);
var inst_54651 = (function(){throw inst_54644})();
var state_54657__$1 = state_54657;
var statearr_54662_54972 = state_54657__$1;
(statearr_54662_54972[(2)] = inst_54651);

(statearr_54662_54972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (4))){
var inst_54644 = (state_54657[(7)]);
var state_54657__$1 = state_54657;
var statearr_54663_54973 = state_54657__$1;
(statearr_54663_54973[(2)] = inst_54644);

(statearr_54663_54973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (5))){
var inst_54654 = (state_54657[(2)]);
var inst_54655 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_54654);
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54657__$1,inst_54655);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_54664 = [null,null,null,null,null,null,null,null];
(statearr_54664[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_54664[(1)] = (1));

return statearr_54664;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_54657){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54657);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54665){var ex__38759__auto__ = e54665;
var statearr_54666_54974 = state_54657;
(statearr_54666_54974[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54657[(4)]))){
var statearr_54667_54975 = state_54657;
(statearr_54667_54975[(1)] = cljs.core.first((state_54657[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54976 = state_54657;
state_54657 = G__54976;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_54657){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_54657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54668 = f__38848__auto__();
(statearr_54668[(6)] = c__38847__auto__);

return statearr_54668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(compevent.core._LT_account_state.cljs$lang$applyTo = (function (seq54632){
var G__54633 = cljs.core.first(seq54632);
var seq54632__$1 = cljs.core.next(seq54632);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54633,seq54632__$1);
}));

compevent.core._LT_account_states = (function compevent$core$_LT_account_states(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54977 = arguments.length;
var i__4737__auto___54978 = (0);
while(true){
if((i__4737__auto___54978 < len__4736__auto___54977)){
args__4742__auto__.push((arguments[i__4737__auto___54978]));

var G__54979 = (i__4737__auto___54978 + (1));
i__4737__auto___54978 = G__54979;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic = (function (accounts,block_number,p__54673){
var map__54674 = p__54673;
var map__54674__$1 = (((((!((map__54674 == null))))?(((((map__54674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54674):map__54674);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54674__$1,new cljs.core.Keyword(null,"raw","raw",1604651272),false);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54704){
var state_val_54705 = (state_54704[(1)]);
if((state_val_54705 === (1))){
var inst_54676 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"page_size","page_size",-1574119768),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_54677 = [accounts,(1000),block_number];
var inst_54678 = cljs.core.PersistentHashMap.fromArrays(inst_54676,inst_54677);
var inst_54679 = cljs.core.clj__GT_js(inst_54678);
var inst_54680 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_54679);
var inst_54681 = cljs.core.async.interop.p__GT_c(inst_54680);
var state_54704__$1 = state_54704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54704__$1,(2),inst_54681);
} else {
if((state_val_54705 === (2))){
var inst_54683 = (state_54704[(7)]);
var inst_54683__$1 = (state_54704[(2)]);
var inst_54684 = (inst_54683__$1 instanceof cljs.core.ExceptionInfo);
var inst_54685 = cljs.core.ex_data(inst_54683__$1);
var inst_54686 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54685);
var inst_54687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54686,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_54688 = ((inst_54684) && (inst_54687));
var state_54704__$1 = (function (){var statearr_54706 = state_54704;
(statearr_54706[(7)] = inst_54683__$1);

return statearr_54706;
})();
if(cljs.core.truth_(inst_54688)){
var statearr_54707_54980 = state_54704__$1;
(statearr_54707_54980[(1)] = (3));

} else {
var statearr_54708_54981 = state_54704__$1;
(statearr_54708_54981[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54705 === (3))){
var inst_54683 = (state_54704[(7)]);
var inst_54690 = (function(){throw inst_54683})();
var state_54704__$1 = state_54704;
var statearr_54709_54982 = state_54704__$1;
(statearr_54709_54982[(2)] = inst_54690);

(statearr_54709_54982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54705 === (4))){
var inst_54683 = (state_54704[(7)]);
var state_54704__$1 = state_54704;
var statearr_54710_54983 = state_54704__$1;
(statearr_54710_54983[(2)] = inst_54683);

(statearr_54710_54983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54705 === (5))){
var inst_54693 = (state_54704[(2)]);
var inst_54694 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_54693);
var inst_54695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54694,"accounts");
var inst_54696 = (function (){var resp = inst_54694;
var account_resps = inst_54695;
return (function (p1__54669_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__54669_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_54697 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_54696,inst_54695);
var state_54704__$1 = (function (){var statearr_54711 = state_54704;
(statearr_54711[(8)] = inst_54697);

return statearr_54711;
})();
if(cljs.core.truth_(raw)){
var statearr_54712_54984 = state_54704__$1;
(statearr_54712_54984[(1)] = (6));

} else {
var statearr_54713_54985 = state_54704__$1;
(statearr_54713_54985[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54705 === (6))){
var state_54704__$1 = state_54704;
var statearr_54714_54986 = state_54704__$1;
(statearr_54714_54986[(2)] = cljs.core.identity);

(statearr_54714_54986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54705 === (7))){
var state_54704__$1 = state_54704;
var statearr_54715_54987 = state_54704__$1;
(statearr_54715_54987[(2)] = compevent.core.acc_state);

(statearr_54715_54987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54705 === (8))){
var inst_54697 = (state_54704[(8)]);
var inst_54701 = (state_54704[(2)]);
var inst_54702 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_54701,inst_54697);
var state_54704__$1 = state_54704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54704__$1,inst_54702);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_54716 = [null,null,null,null,null,null,null,null,null];
(statearr_54716[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_54716[(1)] = (1));

return statearr_54716;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_54704){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54704);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54717){var ex__38759__auto__ = e54717;
var statearr_54718_54988 = state_54704;
(statearr_54718_54988[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54704[(4)]))){
var statearr_54719_54989 = state_54704;
(statearr_54719_54989[(1)] = cljs.core.first((state_54704[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54990 = state_54704;
state_54704 = G__54990;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_54704){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_54704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54720 = f__38848__auto__();
(statearr_54720[(6)] = c__38847__auto__);

return statearr_54720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_states.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core._LT_account_states.cljs$lang$applyTo = (function (seq54670){
var G__54671 = cljs.core.first(seq54670);
var seq54670__$1 = cljs.core.next(seq54670);
var G__54672 = cljs.core.first(seq54670__$1);
var seq54670__$2 = cljs.core.next(seq54670__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54671,G__54672,seq54670__$2);
}));

compevent.core._LT_account_state_range = (function compevent$core$_LT_account_state_range(accounts,start_block,end_block,block_step){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54721_SHARP_){
return compevent.core._LT_account_states(accounts,p1__54721_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,block_step),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_block], null)))));
});
compevent.core.accum_comp_rewards = (function compevent$core$accum_comp_rewards(rewards_txs,data_points){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(rewards_txs))){
return data_points;
} else {
var current_tx = cljs.core.first(rewards_txs);
var prev_dp = cljs.core.last(data_points);
var prev_claimed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(data_points)))?(0):new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479).cljs$core$IFn$_invoke$arity$1(prev_dp));
var current_claim = parseFloat(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(current_tx));
var current_dp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),(prev_claimed + current_claim),new cljs.core.Keyword(null,"side","side",389652279),"Claimed Rewards",new cljs.core.Keyword(null,"comp-claim","comp-claim",-2135079250),current_claim,new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(current_tx)], null);
var G__54991 = cljs.core.rest(rewards_txs);
var G__54992 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__54991;
data_points = G__54992;
continue;
}
break;
}
});
compevent.core._LT_gov_account = (function compevent$core$_LT_gov_account(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54732){
var state_val_54733 = (state_54732[(1)]);
if((state_val_54733 === (1))){
var inst_54722 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_54723 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54722),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_54724 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_54725 = [false];
var inst_54726 = cljs.core.PersistentHashMap.fromArrays(inst_54724,inst_54725);
var inst_54727 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_54723,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54726], 0));
var state_54732__$1 = state_54732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54732__$1,(2),inst_54727);
} else {
if((state_val_54733 === (2))){
var inst_54729 = (state_54732[(2)]);
var inst_54730 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_54729);
var state_54732__$1 = state_54732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54732__$1,inst_54730);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____0 = (function (){
var statearr_54734 = [null,null,null,null,null,null,null];
(statearr_54734[(0)] = compevent$core$_LT_gov_account_$_state_machine__38756__auto__);

(statearr_54734[(1)] = (1));

return statearr_54734;
});
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____1 = (function (state_54732){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54732);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54735){var ex__38759__auto__ = e54735;
var statearr_54736_54993 = state_54732;
(statearr_54736_54993[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54732[(4)]))){
var statearr_54737_54994 = state_54732;
(statearr_54737_54994[(1)] = cljs.core.first((state_54732[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54995 = state_54732;
state_54732 = G__54995;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = function(state_54732){
switch(arguments.length){
case 0:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____1.call(this,state_54732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____0;
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____1;
return compevent$core$_LT_gov_account_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54738 = f__38848__auto__();
(statearr_54738[(6)] = c__38847__auto__);

return statearr_54738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_compound_history = (function compevent$core$_LT_fetch_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54762){
var state_val_54763 = (state_54762[(1)]);
if((state_val_54763 === (1))){
var inst_54740 = compevent.core._LT_latest_block();
var state_54762__$1 = state_54762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54762__$1,(2),inst_54740);
} else {
if((state_val_54763 === (2))){
var inst_54742 = (state_54762[(7)]);
var inst_54742__$1 = (state_54762[(2)]);
var inst_54743 = (inst_54742__$1 - (1000000));
var inst_54744 = compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(compevent.core.provider,compevent.core.comp_address,compevent.core.comp_unitroller,account);
var state_54762__$1 = (function (){var statearr_54764 = state_54762;
(statearr_54764[(8)] = inst_54743);

(statearr_54764[(7)] = inst_54742__$1);

return statearr_54764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54762__$1,(3),inst_54744);
} else {
if((state_val_54763 === (3))){
var inst_54743 = (state_54762[(8)]);
var inst_54746 = (state_54762[(9)]);
var inst_54748 = (state_54762[(10)]);
var inst_54742 = (state_54762[(7)]);
var inst_54746__$1 = (state_54762[(2)]);
var inst_54747 = cljs.core.PersistentVector.EMPTY;
var inst_54748__$1 = compevent.core.accum_comp_rewards(inst_54746__$1,inst_54747);
var inst_54749 = (function (){var latest_block = inst_54742;
var init_block = inst_54743;
var comp_rewards = inst_54746__$1;
var comp_rewards_SINGLEQUOTE_ = inst_54748__$1;
return (function (dp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(dp),"Supplied",new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600).cljs$core$IFn$_invoke$arity$1(dp)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(dp),"Borrowed",new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713).cljs$core$IFn$_invoke$arity$1(dp)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),"Account Health",new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(dp)], null)], null);
});
})();
var inst_54750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54751 = [account];
var inst_54752 = (new cljs.core.PersistentVector(null,1,(5),inst_54750,inst_54751,null));
var inst_54753 = compevent.core._LT_account_state_range(inst_54752,inst_54743,inst_54742,(10000));
var state_54762__$1 = (function (){var statearr_54765 = state_54762;
(statearr_54765[(9)] = inst_54746__$1);

(statearr_54765[(10)] = inst_54748__$1);

(statearr_54765[(11)] = inst_54749);

return statearr_54765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54762__$1,(4),inst_54753);
} else {
if((state_val_54763 === (4))){
var inst_54743 = (state_54762[(8)]);
var inst_54746 = (state_54762[(9)]);
var inst_54748 = (state_54762[(10)]);
var inst_54742 = (state_54762[(7)]);
var inst_54749 = (state_54762[(11)]);
var inst_54755 = (state_54762[(2)]);
var inst_54756 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_54749,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54755], 0));
var inst_54757 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_54756);
var inst_54758 = (function (){var latest_block = inst_54742;
var init_block = inst_54743;
var comp_rewards = inst_54746;
var comp_rewards_SINGLEQUOTE_ = inst_54748;
var acc_history = inst_54757;
return (function (p1__54739_SHARP_){
return (((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__54739_SHARP_) <= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc_history)))) && ((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__54739_SHARP_) >= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.first(acc_history)))));
});
})();
var inst_54759 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_54758,inst_54748);
var inst_54760 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_54757,inst_54759);
var state_54762__$1 = state_54762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54762__$1,inst_54760);
} else {
return null;
}
}
}
}
});
return (function() {
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_54766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54766[(0)] = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__);

(statearr_54766[(1)] = (1));

return statearr_54766;
});
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1 = (function (state_54762){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54762);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54767){var ex__38759__auto__ = e54767;
var statearr_54768_54996 = state_54762;
(statearr_54768_54996[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54762[(4)]))){
var statearr_54769_54997 = state_54762;
(statearr_54769_54997[(1)] = cljs.core.first((state_54762[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54998 = state_54762;
state_54762 = G__54998;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = function(state_54762){
switch(arguments.length){
case 0:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1.call(this,state_54762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0;
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1;
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54770 = f__38848__auto__();
(statearr_54770[(6)] = c__38847__auto__);

return statearr_54770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.historic_whale_layer = (function compevent$core$historic_whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54999 = arguments.length;
var i__4737__auto___55000 = (0);
while(true){
if((i__4737__auto___55000 < len__4736__auto___54999)){
args__4742__auto__.push((arguments[i__4737__auto___55000]));

var G__55001 = (i__4737__auto___55000 + (1));
i__4737__auto___55000 = G__55001;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__54775){
var map__54776 = p__54775;
var map__54776__$1 = (((((!((map__54776 == null))))?(((((map__54776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54776):map__54776);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54776__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54776__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54776__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54776__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
var show_rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54776__$1,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(75),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(10),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainMin","domainMin",1827225240),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"side",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Account Health","Supplied","Borrowed","Claimed Rewards"
], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","#706897","#fd3a69","#5aa469"
], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(compevent.core.historic_whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core.historic_whale_layer.cljs$lang$applyTo = (function (seq54772){
var G__54773 = cljs.core.first(seq54772);
var seq54772__$1 = cljs.core.next(seq54772);
var G__54774 = cljs.core.first(seq54772__$1);
var seq54772__$2 = cljs.core.next(seq54772__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54773,G__54774,seq54772__$2);
}));

compevent.core.make_whale_history_plot = (function compevent$core$make_whale_history_plot(line_points,address){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)," Compound history"].join(''),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"middle",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),2.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),"ETH Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(150000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dai","dai",659273042),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sai","sai",1975712840),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sai","sai",1975712840),"SAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat","bat",607903974),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"bat","bat",607903974),"BAT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),"WBTC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comp","comp",1191953630),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp","comp",1191953630),"COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uni","uni",-1194876440),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uni","uni",-1194876440),"UNI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zrx","zrx",955760380),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"zrx","zrx",955760380),"ZRX",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rep","rep",-1226820564),"REP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdc","usdc",-457089155),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdt","usdt",999447714),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdt","usdt",999447714),"USDT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eth","eth",1381694970),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth","eth",1381694970),"ETH",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),"Claimed COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true], 0))], null))], null);
});
compevent.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
compevent.core.render_compound_history = (function compevent$core$render_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_54812){
var state_val_54813 = (state_54812[(1)]);
if((state_val_54813 === (1))){
var inst_54778 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_54779 = [null];
var inst_54780 = cljs.core.PersistentHashMap.fromArrays(inst_54778,inst_54779);
var inst_54781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_54780);
var inst_54782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54783 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_54784 = (new cljs.core.PersistentVector(null,1,(5),inst_54782,inst_54783,null));
var inst_54785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54786 = ["Fetching data ..."];
var inst_54787 = (new cljs.core.PersistentVector(null,1,(5),inst_54785,inst_54786,null));
var inst_54788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(compevent.core.app_state,cljs.core.update_in,inst_54784,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54787], 0));
var inst_54789 = compevent.core._LT_fetch_compound_history(account);
var state_54812__$1 = (function (){var statearr_54814 = state_54812;
(statearr_54814[(7)] = inst_54788);

(statearr_54814[(8)] = inst_54781);

return statearr_54814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54812__$1,(2),inst_54789);
} else {
if((state_val_54813 === (2))){
var inst_54791 = (state_54812[(2)]);
var inst_54792 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(compevent.core.float_num_values,inst_54791);
var inst_54793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54794 = [compevent.core.separator_str];
var inst_54795 = (new cljs.core.PersistentVector(null,1,(5),inst_54793,inst_54794,null));
var inst_54796 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compevent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steps","steps",-128433302),inst_54795);
var inst_54797 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_54798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54801 = compevent.core.make_whale_history_plot(inst_54792,account);
var inst_54802 = [oz.core.vega_lite,inst_54801];
var inst_54803 = (new cljs.core.PersistentVector(null,2,(5),inst_54800,inst_54802,null));
var inst_54804 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_54803];
var inst_54805 = (new cljs.core.PersistentVector(null,2,(5),inst_54799,inst_54804,null));
var inst_54806 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_54805];
var inst_54807 = (new cljs.core.PersistentVector(null,2,(5),inst_54798,inst_54806,null));
var inst_54808 = [inst_54807];
var inst_54809 = cljs.core.PersistentHashMap.fromArrays(inst_54797,inst_54808);
var inst_54810 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_54809);
var state_54812__$1 = (function (){var statearr_54815 = state_54812;
(statearr_54815[(9)] = inst_54796);

return statearr_54815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54812__$1,inst_54810);
} else {
return null;
}
}
});
return (function() {
var compevent$core$render_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$render_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_54816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54816[(0)] = compevent$core$render_compound_history_$_state_machine__38756__auto__);

(statearr_54816[(1)] = (1));

return statearr_54816;
});
var compevent$core$render_compound_history_$_state_machine__38756__auto____1 = (function (state_54812){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_54812);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e54817){var ex__38759__auto__ = e54817;
var statearr_54818_55002 = state_54812;
(statearr_54818_55002[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_54812[(4)]))){
var statearr_54819_55003 = state_54812;
(statearr_54819_55003[(1)] = cljs.core.first((state_54812[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55004 = state_54812;
state_54812 = G__55004;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$render_compound_history_$_state_machine__38756__auto__ = function(state_54812){
switch(arguments.length){
case 0:
return compevent$core$render_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$render_compound_history_$_state_machine__38756__auto____1.call(this,state_54812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$render_compound_history_$_state_machine__38756__auto____0;
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$render_compound_history_$_state_machine__38756__auto____1;
return compevent$core$render_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_54820 = f__38848__auto__();
(statearr_54820[(6)] = c__38847__auto__);

return statearr_54820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.dai_loop_factor_old = (function compevent$core$dai_loop_factor_old(account_state){
var supplied_dai = new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed_dai = new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(account_state);
var supplied_usdc = new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed_usdc = new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed_usdt = new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(account_state);
var supplied_usd = (supplied_dai + supplied_usdc);
var borrowed_usd = ((borrowed_dai + borrowed_usdc) + borrowed_usdt);
var account = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(account_state);
var factor = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(supplied_usd,(0)))?(((borrowed_usd > supplied_usd))?(supplied_usd / borrowed_usd):(borrowed_usd / supplied_usd)):(0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"account","account",718006320),account,new cljs.core.Keyword(null,"borrowed-usd","borrowed-usd",-828495461),borrowed_usd,new cljs.core.Keyword(null,"supplied-usd","supplied-usd",1744175032),supplied_usd,new cljs.core.Keyword(null,"borrowed-dai","borrowed-dai",275544723),borrowed_dai,new cljs.core.Keyword(null,"loop-factor","loop-factor",-1795559064),factor], null);
});
compevent.core.make_edn_blob = (function compevent$core$make_edn_blob(coll){
return (new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/edn"], null)));
});
compevent.core.download_blob = (function compevent$core$download_blob(blob,filename){
var blob_url = URL.createObjectURL(blob);
var link = document.createElement("a");
var _ = (link.href = blob_url);
var ___$1 = (link.download = filename);
var ___$2 = document.body.appendChild(link);
var ev_params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["bubbles",true,"cancelable",true,"view",window], null));
var ev = (new MouseEvent("click",ev_params));
(link.dispatchEvent.cljs$core$IFn$_invoke$arity$1 ? link.dispatchEvent.cljs$core$IFn$_invoke$arity$1(ev) : link.dispatchEvent.call(null,ev));

return document.body.removeChild(link);
});
compevent.core.download_as_edn = (function compevent$core$download_as_edn(coll){
return URL.createObjectURL((new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),({"type": "text/edn"}))));
});

//# sourceMappingURL=compevent.core.js.map
