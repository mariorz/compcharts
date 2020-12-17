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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function compevent$core$float_num_values_$_iter__56011(s__56012){
return (new cljs.core.LazySeq(null,(function (){
var s__56012__$1 = s__56012;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56012__$1);
if(temp__5735__auto__){
var s__56012__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56012__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56012__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56014 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56013 = (0);
while(true){
if((i__56013 < size__4528__auto__)){
var vec__56015 = cljs.core._nth(c__4527__auto__,i__56013);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56015,(1),null);
cljs.core.chunk_append(b__56014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null));

var G__56809 = (i__56013 + (1));
i__56013 = G__56809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56014),compevent$core$float_num_values_$_iter__56011(cljs.core.chunk_rest(s__56012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56014),null);
}
} else {
var vec__56018 = cljs.core.first(s__56012__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56018,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null),compevent$core$float_num_values_$_iter__56011(cljs.core.rest(s__56012__$2)));
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56047){
var state_val_56048 = (state_56047[(1)]);
if((state_val_56048 === (7))){
var inst_56032 = (state_56047[(7)]);
var inst_56039 = (function(){throw inst_56032})();
var state_56047__$1 = state_56047;
var statearr_56049_56810 = state_56047__$1;
(statearr_56049_56810[(2)] = inst_56039);

(statearr_56049_56810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (1))){
var inst_56021 = compevent.core.make_erc20(address);
var state_56047__$1 = (function (){var statearr_56050 = state_56047;
(statearr_56050[(8)] = inst_56021);

return statearr_56050;
})();
var statearr_56051_56811 = state_56047__$1;
(statearr_56051_56811[(2)] = null);

(statearr_56051_56811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (4))){
var inst_56022 = (state_56047[(2)]);
var inst_56023 = console.log("No decimals method for:",address);
var state_56047__$1 = (function (){var statearr_56052 = state_56047;
(statearr_56052[(9)] = inst_56022);

(statearr_56052[(10)] = inst_56023);

return statearr_56052;
})();
var statearr_56053_56812 = state_56047__$1;
(statearr_56053_56812[(2)] = (18));

(statearr_56053_56812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (6))){
var inst_56032 = (state_56047[(7)]);
var inst_56032__$1 = (state_56047[(2)]);
var inst_56033 = (inst_56032__$1 instanceof cljs.core.ExceptionInfo);
var inst_56034 = cljs.core.ex_data(inst_56032__$1);
var inst_56035 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56034);
var inst_56036 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56035,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56037 = ((inst_56033) && (inst_56036));
var state_56047__$1 = (function (){var statearr_56054 = state_56047;
(statearr_56054[(7)] = inst_56032__$1);

return statearr_56054;
})();
if(cljs.core.truth_(inst_56037)){
var statearr_56055_56813 = state_56047__$1;
(statearr_56055_56813[(1)] = (7));

} else {
var statearr_56056_56814 = state_56047__$1;
(statearr_56056_56814[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (3))){
var inst_56045 = (state_56047[(2)]);
var state_56047__$1 = state_56047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56047__$1,inst_56045);
} else {
if((state_val_56048 === (2))){
var inst_56021 = (state_56047[(8)]);
var _ = (function (){var statearr_56058 = state_56047;
(statearr_56058[(4)] = cljs.core.cons((5),(state_56047[(4)])));

return statearr_56058;
})();
var inst_56029 = inst_56021.decimals();
var inst_56030 = cljs.core.async.interop.p__GT_c(inst_56029);
var state_56047__$1 = state_56047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56047__$1,(6),inst_56030);
} else {
if((state_val_56048 === (9))){
var inst_56042 = (state_56047[(2)]);
var _ = (function (){var statearr_56059 = state_56047;
(statearr_56059[(4)] = cljs.core.rest((state_56047[(4)])));

return statearr_56059;
})();
var state_56047__$1 = state_56047;
var statearr_56060_56815 = state_56047__$1;
(statearr_56060_56815[(2)] = inst_56042);

(statearr_56060_56815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (5))){
var _ = (function (){var statearr_56061 = state_56047;
(statearr_56061[(4)] = cljs.core.rest((state_56047[(4)])));

return statearr_56061;
})();
var state_56047__$1 = state_56047;
var ex56057 = (state_56047__$1[(2)]);
var statearr_56062_56816 = state_56047__$1;
(statearr_56062_56816[(5)] = ex56057);


if((ex56057 instanceof Error)){
var statearr_56063_56817 = state_56047__$1;
(statearr_56063_56817[(1)] = (4));

(statearr_56063_56817[(5)] = null);

} else {
throw ex56057;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (8))){
var inst_56032 = (state_56047[(7)]);
var state_56047__$1 = state_56047;
var statearr_56064_56818 = state_56047__$1;
(statearr_56064_56818[(2)] = inst_56032);

(statearr_56064_56818[(1)] = (9));


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
var statearr_56065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56065[(0)] = compevent$core$_LT_token_decimals_$_state_machine__38756__auto__);

(statearr_56065[(1)] = (1));

return statearr_56065;
});
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1 = (function (state_56047){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56047);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56066){var ex__38759__auto__ = e56066;
var statearr_56067_56819 = state_56047;
(statearr_56067_56819[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56047[(4)]))){
var statearr_56068_56820 = state_56047;
(statearr_56068_56820[(1)] = cljs.core.first((state_56047[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56821 = state_56047;
state_56047 = G__56821;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = function(state_56047){
switch(arguments.length){
case 0:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1.call(this,state_56047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0;
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1;
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56069 = f__38848__auto__();
(statearr_56069[(6)] = c__38847__auto__);

return statearr_56069;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56086){
var state_val_56087 = (state_56086[(1)]);
if((state_val_56087 === (1))){
var inst_56070 = compevent.core.provider.getBlockNumber();
var inst_56071 = cljs.core.async.interop.p__GT_c(inst_56070);
var state_56086__$1 = state_56086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56086__$1,(2),inst_56071);
} else {
if((state_val_56087 === (2))){
var inst_56073 = (state_56086[(7)]);
var inst_56073__$1 = (state_56086[(2)]);
var inst_56074 = (inst_56073__$1 instanceof cljs.core.ExceptionInfo);
var inst_56075 = cljs.core.ex_data(inst_56073__$1);
var inst_56076 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56075);
var inst_56077 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56076,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56078 = ((inst_56074) && (inst_56077));
var state_56086__$1 = (function (){var statearr_56088 = state_56086;
(statearr_56088[(7)] = inst_56073__$1);

return statearr_56088;
})();
if(cljs.core.truth_(inst_56078)){
var statearr_56089_56822 = state_56086__$1;
(statearr_56089_56822[(1)] = (3));

} else {
var statearr_56090_56823 = state_56086__$1;
(statearr_56090_56823[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56087 === (3))){
var inst_56073 = (state_56086[(7)]);
var inst_56080 = (function(){throw inst_56073})();
var state_56086__$1 = state_56086;
var statearr_56091_56824 = state_56086__$1;
(statearr_56091_56824[(2)] = inst_56080);

(statearr_56091_56824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56087 === (4))){
var inst_56073 = (state_56086[(7)]);
var state_56086__$1 = state_56086;
var statearr_56092_56825 = state_56086__$1;
(statearr_56092_56825[(2)] = inst_56073);

(statearr_56092_56825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56087 === (5))){
var inst_56083 = (state_56086[(2)]);
var inst_56084 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_56083);
var state_56086__$1 = state_56086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56086__$1,inst_56084);
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
var statearr_56093 = [null,null,null,null,null,null,null,null];
(statearr_56093[(0)] = compevent$core$_LT_latest_block_$_state_machine__38756__auto__);

(statearr_56093[(1)] = (1));

return statearr_56093;
});
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____1 = (function (state_56086){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56086);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56094){var ex__38759__auto__ = e56094;
var statearr_56095_56826 = state_56086;
(statearr_56095_56826[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56086[(4)]))){
var statearr_56096_56827 = state_56086;
(statearr_56096_56827[(1)] = cljs.core.first((state_56086[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56828 = state_56086;
state_56086 = G__56828;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = function(state_56086){
switch(arguments.length){
case 0:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____1.call(this,state_56086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____0;
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_latest_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56097 = f__38848__auto__();
(statearr_56097[(6)] = c__38847__auto__);

return statearr_56097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_block = (function compevent$core$_LT_get_block(block_num){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56114){
var state_val_56115 = (state_56114[(1)]);
if((state_val_56115 === (1))){
var inst_56098 = compevent.core.provider.getBlock(block_num);
var inst_56099 = cljs.core.async.interop.p__GT_c(inst_56098);
var state_56114__$1 = state_56114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56114__$1,(2),inst_56099);
} else {
if((state_val_56115 === (2))){
var inst_56101 = (state_56114[(7)]);
var inst_56101__$1 = (state_56114[(2)]);
var inst_56102 = (inst_56101__$1 instanceof cljs.core.ExceptionInfo);
var inst_56103 = cljs.core.ex_data(inst_56101__$1);
var inst_56104 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56103);
var inst_56105 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56104,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56106 = ((inst_56102) && (inst_56105));
var state_56114__$1 = (function (){var statearr_56116 = state_56114;
(statearr_56116[(7)] = inst_56101__$1);

return statearr_56116;
})();
if(cljs.core.truth_(inst_56106)){
var statearr_56117_56829 = state_56114__$1;
(statearr_56117_56829[(1)] = (3));

} else {
var statearr_56118_56830 = state_56114__$1;
(statearr_56118_56830[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56115 === (3))){
var inst_56101 = (state_56114[(7)]);
var inst_56108 = (function(){throw inst_56101})();
var state_56114__$1 = state_56114;
var statearr_56119_56831 = state_56114__$1;
(statearr_56119_56831[(2)] = inst_56108);

(statearr_56119_56831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56115 === (4))){
var inst_56101 = (state_56114[(7)]);
var state_56114__$1 = state_56114;
var statearr_56120_56832 = state_56114__$1;
(statearr_56120_56832[(2)] = inst_56101);

(statearr_56120_56832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56115 === (5))){
var inst_56111 = (state_56114[(2)]);
var inst_56112 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_56111);
var state_56114__$1 = state_56114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56114__$1,inst_56112);
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
var statearr_56121 = [null,null,null,null,null,null,null,null];
(statearr_56121[(0)] = compevent$core$_LT_get_block_$_state_machine__38756__auto__);

(statearr_56121[(1)] = (1));

return statearr_56121;
});
var compevent$core$_LT_get_block_$_state_machine__38756__auto____1 = (function (state_56114){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56114);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56122){var ex__38759__auto__ = e56122;
var statearr_56123_56833 = state_56114;
(statearr_56123_56833[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56114[(4)]))){
var statearr_56124_56834 = state_56114;
(statearr_56124_56834[(1)] = cljs.core.first((state_56114[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56835 = state_56114;
state_56114 = G__56835;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_block_$_state_machine__38756__auto__ = function(state_56114){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____1.call(this,state_56114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_block_$_state_machine__38756__auto____0;
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56125 = f__38848__auto__();
(statearr_56125[(6)] = c__38847__auto__);

return statearr_56125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_blocks = (function compevent$core$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56126_SHARP_){
return compevent.core._LT_get_block(p1__56126_SHARP_);
}),block_numbers)));
});
compevent.core._LT_user_token_transfers = (function compevent$core$_LT_user_token_transfers(var_args){
var G__56129 = arguments.length;
switch (G__56129) {
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56132){
var state_val_56133 = (state_56132[(1)]);
if((state_val_56133 === (1))){
var inst_56130 = cljs.core.PersistentVector.EMPTY;
var state_56132__$1 = state_56132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56132__$1,inst_56130);
} else {
return null;
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_56134 = [null,null,null,null,null,null,null];
(statearr_56134[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_56134[(1)] = (1));

return statearr_56134;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_56132){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56132);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56135){var ex__38759__auto__ = e56135;
var statearr_56136_56837 = state_56132;
(statearr_56136_56837[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56132[(4)]))){
var statearr_56137_56838 = state_56132;
(statearr_56137_56838[(1)] = cljs.core.first((state_56132[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56839 = state_56132;
state_56132 = G__56839;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_56132){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_56132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56138 = f__38848__auto__();
(statearr_56138[(6)] = c__38847__auto__);

return statearr_56138;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56170){
var state_val_56171 = (state_56170[(1)]);
if((state_val_56171 === (7))){
var inst_56150 = (state_56170[(7)]);
var inst_56157 = (function(){throw inst_56150})();
var state_56170__$1 = state_56170;
var statearr_56172_56840 = state_56170__$1;
(statearr_56172_56840[(2)] = inst_56157);

(statearr_56172_56840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56171 === (1))){
var state_56170__$1 = state_56170;
var statearr_56173_56841 = state_56170__$1;
(statearr_56173_56841[(2)] = null);

(statearr_56173_56841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56171 === (4))){
var inst_56139 = (state_56170[(2)]);
var inst_56140 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_56141 = cljs.core.PersistentVector.EMPTY;
var state_56170__$1 = (function (){var statearr_56174 = state_56170;
(statearr_56174[(8)] = inst_56140);

(statearr_56174[(9)] = inst_56139);

return statearr_56174;
})();
var statearr_56175_56842 = state_56170__$1;
(statearr_56175_56842[(2)] = inst_56141);

(statearr_56175_56842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56171 === (6))){
var inst_56150 = (state_56170[(7)]);
var inst_56150__$1 = (state_56170[(2)]);
var inst_56151 = (inst_56150__$1 instanceof cljs.core.ExceptionInfo);
var inst_56152 = cljs.core.ex_data(inst_56150__$1);
var inst_56153 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56152);
var inst_56154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56153,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56155 = ((inst_56151) && (inst_56154));
var state_56170__$1 = (function (){var statearr_56176 = state_56170;
(statearr_56176[(7)] = inst_56150__$1);

return statearr_56176;
})();
if(cljs.core.truth_(inst_56155)){
var statearr_56177_56843 = state_56170__$1;
(statearr_56177_56843[(1)] = (7));

} else {
var statearr_56178_56844 = state_56170__$1;
(statearr_56178_56844[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56171 === (3))){
var inst_56168 = (state_56170[(2)]);
var state_56170__$1 = state_56170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56170__$1,inst_56168);
} else {
if((state_val_56171 === (2))){
var ___$2 = (function (){var statearr_56180 = state_56170;
(statearr_56180[(4)] = cljs.core.cons((5),(state_56170[(4)])));

return statearr_56180;
})();
var inst_56147 = provider.getLogs(user_filter);
var inst_56148 = cljs.core.async.interop.p__GT_c(inst_56147);
var state_56170__$1 = state_56170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56170__$1,(6),inst_56148);
} else {
if((state_val_56171 === (9))){
var inst_56160 = (state_56170[(2)]);
var inst_56161 = compevent.core._LT_token_decimals(token_address);
var state_56170__$1 = (function (){var statearr_56181 = state_56170;
(statearr_56181[(10)] = inst_56160);

return statearr_56181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56170__$1,(10),inst_56161);
} else {
if((state_val_56171 === (5))){
var ___$2 = (function (){var statearr_56182 = state_56170;
(statearr_56182[(4)] = cljs.core.rest((state_56170[(4)])));

return statearr_56182;
})();
var state_56170__$1 = state_56170;
var ex56179 = (state_56170__$1[(2)]);
var statearr_56183_56845 = state_56170__$1;
(statearr_56183_56845[(5)] = ex56179);


if((ex56179 instanceof Error)){
var statearr_56184_56846 = state_56170__$1;
(statearr_56184_56846[(1)] = (4));

(statearr_56184_56846[(5)] = null);

} else {
throw ex56179;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56171 === (10))){
var inst_56160 = (state_56170[(10)]);
var inst_56163 = (state_56170[(2)]);
var inst_56164 = (function (){var filtered_txs = inst_56160;
var decimals = inst_56163;
return (function (p1__56127_SHARP_){
return compevent.core.make_token_tx(p1__56127_SHARP_,decimals);
});
})();
var inst_56165 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56164,inst_56160);
var ___$2 = (function (){var statearr_56185 = state_56170;
(statearr_56185[(4)] = cljs.core.rest((state_56170[(4)])));

return statearr_56185;
})();
var state_56170__$1 = state_56170;
var statearr_56186_56847 = state_56170__$1;
(statearr_56186_56847[(2)] = inst_56165);

(statearr_56186_56847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56171 === (8))){
var inst_56150 = (state_56170[(7)]);
var state_56170__$1 = state_56170;
var statearr_56187_56848 = state_56170__$1;
(statearr_56187_56848[(2)] = inst_56150);

(statearr_56187_56848[(1)] = (9));


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
var statearr_56188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56188[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_56188[(1)] = (1));

return statearr_56188;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_56170){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56170);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56189){var ex__38759__auto__ = e56189;
var statearr_56190_56849 = state_56170;
(statearr_56190_56849[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56170[(4)]))){
var statearr_56191_56850 = state_56170;
(statearr_56191_56850[(1)] = cljs.core.first((state_56170[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56851 = state_56170;
state_56170 = G__56851;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_56170){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_56170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56192 = f__38848__auto__();
(statearr_56192[(6)] = c__38847__auto__);

return statearr_56192;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56208){
var state_val_56209 = (state_56208[(1)]);
if((state_val_56209 === (1))){
var inst_56193 = compevent.core.provider.getTransactionReceipt(txhash);
var inst_56194 = cljs.core.async.interop.p__GT_c(inst_56193);
var state_56208__$1 = state_56208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56208__$1,(2),inst_56194);
} else {
if((state_val_56209 === (2))){
var inst_56196 = (state_56208[(7)]);
var inst_56196__$1 = (state_56208[(2)]);
var inst_56197 = (inst_56196__$1 instanceof cljs.core.ExceptionInfo);
var inst_56198 = cljs.core.ex_data(inst_56196__$1);
var inst_56199 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56198);
var inst_56200 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56199,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56201 = ((inst_56197) && (inst_56200));
var state_56208__$1 = (function (){var statearr_56210 = state_56208;
(statearr_56210[(7)] = inst_56196__$1);

return statearr_56210;
})();
if(cljs.core.truth_(inst_56201)){
var statearr_56211_56852 = state_56208__$1;
(statearr_56211_56852[(1)] = (3));

} else {
var statearr_56212_56853 = state_56208__$1;
(statearr_56212_56853[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56209 === (3))){
var inst_56196 = (state_56208[(7)]);
var inst_56203 = (function(){throw inst_56196})();
var state_56208__$1 = state_56208;
var statearr_56213_56854 = state_56208__$1;
(statearr_56213_56854[(2)] = inst_56203);

(statearr_56213_56854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56209 === (4))){
var inst_56196 = (state_56208[(7)]);
var state_56208__$1 = state_56208;
var statearr_56214_56855 = state_56208__$1;
(statearr_56214_56855[(2)] = inst_56196);

(statearr_56214_56855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56209 === (5))){
var inst_56206 = (state_56208[(2)]);
var state_56208__$1 = state_56208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56208__$1,inst_56206);
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
var statearr_56215 = [null,null,null,null,null,null,null,null];
(statearr_56215[(0)] = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__);

(statearr_56215[(1)] = (1));

return statearr_56215;
});
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1 = (function (state_56208){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56208);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56216){var ex__38759__auto__ = e56216;
var statearr_56217_56856 = state_56208;
(statearr_56217_56856[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56208[(4)]))){
var statearr_56218_56857 = state_56208;
(statearr_56218_56857[(1)] = cljs.core.first((state_56208[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56858 = state_56208;
state_56208 = G__56858;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = function(state_56208){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1.call(this,state_56208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56219 = f__38848__auto__();
(statearr_56219[(6)] = c__38847__auto__);

return statearr_56219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx = (function compevent$core$_LT_get_tx(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56235){
var state_val_56236 = (state_56235[(1)]);
if((state_val_56236 === (1))){
var inst_56220 = compevent.core.provider.getTransaction(txhash);
var inst_56221 = cljs.core.async.interop.p__GT_c(inst_56220);
var state_56235__$1 = state_56235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56235__$1,(2),inst_56221);
} else {
if((state_val_56236 === (2))){
var inst_56223 = (state_56235[(7)]);
var inst_56223__$1 = (state_56235[(2)]);
var inst_56224 = (inst_56223__$1 instanceof cljs.core.ExceptionInfo);
var inst_56225 = cljs.core.ex_data(inst_56223__$1);
var inst_56226 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56225);
var inst_56227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56226,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56228 = ((inst_56224) && (inst_56227));
var state_56235__$1 = (function (){var statearr_56237 = state_56235;
(statearr_56237[(7)] = inst_56223__$1);

return statearr_56237;
})();
if(cljs.core.truth_(inst_56228)){
var statearr_56238_56859 = state_56235__$1;
(statearr_56238_56859[(1)] = (3));

} else {
var statearr_56239_56860 = state_56235__$1;
(statearr_56239_56860[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (3))){
var inst_56223 = (state_56235[(7)]);
var inst_56230 = (function(){throw inst_56223})();
var state_56235__$1 = state_56235;
var statearr_56240_56861 = state_56235__$1;
(statearr_56240_56861[(2)] = inst_56230);

(statearr_56240_56861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (4))){
var inst_56223 = (state_56235[(7)]);
var state_56235__$1 = state_56235;
var statearr_56241_56862 = state_56235__$1;
(statearr_56241_56862[(2)] = inst_56223);

(statearr_56241_56862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (5))){
var inst_56233 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56235__$1,inst_56233);
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
var statearr_56242 = [null,null,null,null,null,null,null,null];
(statearr_56242[(0)] = compevent$core$_LT_get_tx_$_state_machine__38756__auto__);

(statearr_56242[(1)] = (1));

return statearr_56242;
});
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____1 = (function (state_56235){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56235);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56243){var ex__38759__auto__ = e56243;
var statearr_56244_56863 = state_56235;
(statearr_56244_56863[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56235[(4)]))){
var statearr_56245_56864 = state_56235;
(statearr_56245_56864[(1)] = cljs.core.first((state_56235[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56865 = state_56235;
state_56235 = G__56865;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = function(state_56235){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____1.call(this,state_56235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56246 = f__38848__auto__();
(statearr_56246[(6)] = c__38847__auto__);

return statearr_56246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx_with_receipt = (function compevent$core$_LT_get_tx_with_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56257){
var state_val_56258 = (state_56257[(1)]);
if((state_val_56258 === (1))){
var inst_56247 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_56248 = compevent.core._LT_get_tx(txhash);
var state_56257__$1 = (function (){var statearr_56259 = state_56257;
(statearr_56259[(7)] = inst_56247);

return statearr_56259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56257__$1,(2),inst_56248);
} else {
if((state_val_56258 === (2))){
var inst_56250 = (state_56257[(2)]);
var inst_56251 = compevent.core._LT_get_tx_receipt(txhash);
var state_56257__$1 = (function (){var statearr_56260 = state_56257;
(statearr_56260[(8)] = inst_56250);

return statearr_56260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56257__$1,(3),inst_56251);
} else {
if((state_val_56258 === (3))){
var inst_56250 = (state_56257[(8)]);
var inst_56247 = (state_56257[(7)]);
var inst_56253 = (state_56257[(2)]);
var inst_56254 = [inst_56250,inst_56253];
var inst_56255 = cljs.core.PersistentHashMap.fromArrays(inst_56247,inst_56254);
var state_56257__$1 = state_56257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56257__$1,inst_56255);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_56261 = [null,null,null,null,null,null,null,null,null];
(statearr_56261[(0)] = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__);

(statearr_56261[(1)] = (1));

return statearr_56261;
});
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1 = (function (state_56257){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56257);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56262){var ex__38759__auto__ = e56262;
var statearr_56263_56866 = state_56257;
(statearr_56263_56866[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56257[(4)]))){
var statearr_56264_56867 = state_56257;
(statearr_56264_56867[(1)] = cljs.core.first((state_56257[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56868 = state_56257;
state_56257 = G__56868;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = function(state_56257){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1.call(this,state_56257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56265 = f__38848__auto__();
(statearr_56265[(6)] = c__38847__auto__);

return statearr_56265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_trxs = (function compevent$core$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56270){
var state_val_56271 = (state_56270[(1)]);
if((state_val_56271 === (1))){
var inst_56266 = compevent.core._LT_get_tx_with_receipt(x);
var state_56270__$1 = state_56270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56270__$1,(2),inst_56266);
} else {
if((state_val_56271 === (2))){
var inst_56268 = (state_56270[(2)]);
var state_56270__$1 = state_56270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56270__$1,inst_56268);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0 = (function (){
var statearr_56272 = [null,null,null,null,null,null,null];
(statearr_56272[(0)] = compevent$core$_LT_get_trxs_$_state_machine__38756__auto__);

(statearr_56272[(1)] = (1));

return statearr_56272;
});
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1 = (function (state_56270){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56270);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56273){var ex__38759__auto__ = e56273;
var statearr_56274_56869 = state_56270;
(statearr_56274_56869[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56270[(4)]))){
var statearr_56275_56870 = state_56270;
(statearr_56275_56870[(1)] = cljs.core.first((state_56270[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56871 = state_56270;
state_56270 = G__56871;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = function(state_56270){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1.call(this,state_56270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0;
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56276 = f__38848__auto__();
(statearr_56276[(6)] = c__38847__auto__);

return statearr_56276;
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
var G__56277 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1));
var G__56278 = false;
return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(G__56277,G__56278) : compevent.core.render_compound_history.call(null,G__56277,G__56278));
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56308){
var state_val_56309 = (state_56308[(1)]);
if((state_val_56309 === (7))){
var inst_56290 = (state_56308[(7)]);
var inst_56297 = (function(){throw inst_56290})();
var state_56308__$1 = state_56308;
var statearr_56310_56872 = state_56308__$1;
(statearr_56310_56872[(2)] = inst_56297);

(statearr_56310_56872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56309 === (1))){
var state_56308__$1 = state_56308;
var statearr_56311_56873 = state_56308__$1;
(statearr_56311_56873[(2)] = null);

(statearr_56311_56873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56309 === (4))){
var inst_56279 = (state_56308[(2)]);
var inst_56280 = console.log("Could not enable web3 in browser",inst_56279);
var state_56308__$1 = state_56308;
var statearr_56312_56874 = state_56308__$1;
(statearr_56312_56874[(2)] = inst_56280);

(statearr_56312_56874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56309 === (6))){
var inst_56290 = (state_56308[(7)]);
var inst_56290__$1 = (state_56308[(2)]);
var inst_56291 = (inst_56290__$1 instanceof cljs.core.ExceptionInfo);
var inst_56292 = cljs.core.ex_data(inst_56290__$1);
var inst_56293 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56292);
var inst_56294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56293,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56295 = ((inst_56291) && (inst_56294));
var state_56308__$1 = (function (){var statearr_56313 = state_56308;
(statearr_56313[(7)] = inst_56290__$1);

return statearr_56313;
})();
if(cljs.core.truth_(inst_56295)){
var statearr_56314_56875 = state_56308__$1;
(statearr_56314_56875[(1)] = (7));

} else {
var statearr_56315_56876 = state_56308__$1;
(statearr_56315_56876[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56309 === (3))){
var inst_56306 = (state_56308[(2)]);
var state_56308__$1 = state_56308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56308__$1,inst_56306);
} else {
if((state_val_56309 === (2))){
var _ = (function (){var statearr_56317 = state_56308;
(statearr_56317[(4)] = cljs.core.cons((5),(state_56308[(4)])));

return statearr_56317;
})();
var inst_56286 = window.ethereum;
var inst_56287 = inst_56286.enable();
var inst_56288 = cljs.core.async.interop.p__GT_c(inst_56287);
var state_56308__$1 = state_56308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56308__$1,(6),inst_56288);
} else {
if((state_val_56309 === (9))){
var inst_56300 = (state_56308[(2)]);
var inst_56301 = cljs.core.first(inst_56300);
var inst_56302 = console.log("connected-account",inst_56301);
var inst_56303 = (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(inst_56301,true) : compevent.core.render_compound_history.call(null,inst_56301,true));
var _ = (function (){var statearr_56318 = state_56308;
(statearr_56318[(4)] = cljs.core.rest((state_56308[(4)])));

return statearr_56318;
})();
var state_56308__$1 = (function (){var statearr_56319 = state_56308;
(statearr_56319[(8)] = inst_56302);

return statearr_56319;
})();
var statearr_56320_56877 = state_56308__$1;
(statearr_56320_56877[(2)] = inst_56303);

(statearr_56320_56877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56309 === (5))){
var _ = (function (){var statearr_56321 = state_56308;
(statearr_56321[(4)] = cljs.core.rest((state_56308[(4)])));

return statearr_56321;
})();
var state_56308__$1 = state_56308;
var ex56316 = (state_56308__$1[(2)]);
var statearr_56322_56878 = state_56308__$1;
(statearr_56322_56878[(5)] = ex56316);


if((ex56316 instanceof Error)){
var statearr_56323_56879 = state_56308__$1;
(statearr_56323_56879[(1)] = (4));

(statearr_56323_56879[(5)] = null);

} else {
throw ex56316;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56309 === (8))){
var inst_56290 = (state_56308[(7)]);
var state_56308__$1 = state_56308;
var statearr_56324_56880 = state_56308__$1;
(statearr_56324_56880[(2)] = inst_56290);

(statearr_56324_56880[(1)] = (9));


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
var statearr_56325 = [null,null,null,null,null,null,null,null,null];
(statearr_56325[(0)] = compevent$core$web3_connect_$_state_machine__38756__auto__);

(statearr_56325[(1)] = (1));

return statearr_56325;
});
var compevent$core$web3_connect_$_state_machine__38756__auto____1 = (function (state_56308){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56308);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56326){var ex__38759__auto__ = e56326;
var statearr_56327_56881 = state_56308;
(statearr_56327_56881[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56308[(4)]))){
var statearr_56328_56882 = state_56308;
(statearr_56328_56882[(1)] = cljs.core.first((state_56308[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56883 = state_56308;
state_56308 = G__56883;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$web3_connect_$_state_machine__38756__auto__ = function(state_56308){
switch(arguments.length){
case 0:
return compevent$core$web3_connect_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$web3_connect_$_state_machine__38756__auto____1.call(this,state_56308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$web3_connect_$_state_machine__38756__auto____0;
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$web3_connect_$_state_machine__38756__auto____1;
return compevent$core$web3_connect_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56329 = f__38848__auto__();
(statearr_56329[(6)] = c__38847__auto__);

return statearr_56329;
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
var input_56884 = compevent.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""));
compevent.core.app_main = (function compevent$core$app_main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Compound account history charts",(((compevent.core.provider == null))?" Requires Web3":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((!((compevent.core.provider == null))))?input_56884:null),(((cljs.core.count(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))) > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),cljs.core.butlast(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-flicker"], null),cljs.core.last(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null):null),new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))], null);
});
compevent.core.block_num__GT_ts = (function compevent$core$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56330_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__56330_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
compevent.core.ts__GT_geckoprice = (function compevent$core$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56331_SHARP_){
return (cljs.core.first(p1__56331_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56332_SHARP_){
return (cljs.core.first(p1__56332_SHARP_) > ts);
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56345){
var state_val_56346 = (state_56345[(1)]);
if((state_val_56346 === (1))){
var inst_56333 = (state_56345[(7)]);
var inst_56333__$1 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_56334 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_56335 = [false];
var inst_56336 = cljs.core.PersistentHashMap.fromArrays(inst_56334,inst_56335);
var inst_56337 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_56333__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56336], 0));
var state_56345__$1 = (function (){var statearr_56347 = state_56345;
(statearr_56347[(7)] = inst_56333__$1);

return statearr_56347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56345__$1,(2),inst_56337);
} else {
if((state_val_56346 === (2))){
var inst_56333 = (state_56345[(7)]);
var inst_56339 = (state_56345[(2)]);
var inst_56340 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_56339);
var inst_56341 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_56340);
var inst_56342 = (function (){var base_url = inst_56333;
var full_url = inst_56333;
var data = inst_56341;
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x),compevent.core.bn(cljs.core.second(x))], null);
});
})();
var inst_56343 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56342,inst_56341);
var state_56345__$1 = state_56345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56345__$1,inst_56343);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0 = (function (){
var statearr_56348 = [null,null,null,null,null,null,null,null];
(statearr_56348[(0)] = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__);

(statearr_56348[(1)] = (1));

return statearr_56348;
});
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1 = (function (state_56345){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56345);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56349){var ex__38759__auto__ = e56349;
var statearr_56350_56885 = state_56345;
(statearr_56350_56885[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56345[(4)]))){
var statearr_56351_56886 = state_56345;
(statearr_56351_56886[(1)] = cljs.core.first((state_56345[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56887 = state_56345;
state_56345 = G__56887;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = function(state_56345){
switch(arguments.length){
case 0:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1.call(this,state_56345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0;
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1;
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56352 = f__38848__auto__();
(statearr_56352[(6)] = c__38847__auto__);

return statearr_56352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_dollarize_liquidations = (function compevent$core$_LT_dollarize_liquidations(liquidations,token){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56365){
var state_val_56366 = (state_56365[(1)]);
if((state_val_56366 === (1))){
var inst_56353 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_56354 = cljs.core.set(inst_56353);
var inst_56355 = compevent.core._LT_fetch_blocks(inst_56354);
var state_56365__$1 = state_56365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56365__$1,(2),inst_56355);
} else {
if((state_val_56366 === (2))){
var inst_56357 = (state_56365[(2)]);
var inst_56358 = compevent.core.token__GT_address(token);
var inst_56359 = compevent.core._LT_historic_gecko_prices(inst_56358);
var state_56365__$1 = (function (){var statearr_56367 = state_56365;
(statearr_56367[(7)] = inst_56357);

return statearr_56367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56365__$1,(3),inst_56359);
} else {
if((state_val_56366 === (3))){
var inst_56357 = (state_56365[(7)]);
var inst_56361 = (state_56365[(2)]);
var inst_56362 = (function (){var liq_blocks = inst_56357;
var day_prices = inst_56361;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),compevent.core.bn(compevent.core.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_56363 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56362,liquidations);
var state_56365__$1 = state_56365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56365__$1,inst_56363);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_56368 = [null,null,null,null,null,null,null,null];
(statearr_56368[(0)] = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__);

(statearr_56368[(1)] = (1));

return statearr_56368;
});
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1 = (function (state_56365){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56365);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56369){var ex__38759__auto__ = e56369;
var statearr_56370_56888 = state_56365;
(statearr_56370_56888[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56365[(4)]))){
var statearr_56371_56889 = state_56365;
(statearr_56371_56889[(1)] = cljs.core.first((state_56365[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56890 = state_56365;
state_56365 = G__56890;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = function(state_56365){
switch(arguments.length){
case 0:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1.call(this,state_56365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56372 = f__38848__auto__();
(statearr_56372[(6)] = c__38847__auto__);

return statearr_56372;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56388){
var state_val_56389 = (state_56388[(1)]);
if((state_val_56389 === (1))){
var inst_56373 = compevent.core.provider.getLogs(repay_filter);
var inst_56374 = cljs.core.async.interop.p__GT_c(inst_56373);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56388__$1,(2),inst_56374);
} else {
if((state_val_56389 === (2))){
var inst_56376 = (state_56388[(7)]);
var inst_56376__$1 = (state_56388[(2)]);
var inst_56377 = (inst_56376__$1 instanceof cljs.core.ExceptionInfo);
var inst_56378 = cljs.core.ex_data(inst_56376__$1);
var inst_56379 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56378);
var inst_56380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56379,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56381 = ((inst_56377) && (inst_56380));
var state_56388__$1 = (function (){var statearr_56390 = state_56388;
(statearr_56390[(7)] = inst_56376__$1);

return statearr_56390;
})();
if(cljs.core.truth_(inst_56381)){
var statearr_56391_56891 = state_56388__$1;
(statearr_56391_56891[(1)] = (3));

} else {
var statearr_56392_56892 = state_56388__$1;
(statearr_56392_56892[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (3))){
var inst_56376 = (state_56388[(7)]);
var inst_56383 = (function(){throw inst_56376})();
var state_56388__$1 = state_56388;
var statearr_56393_56893 = state_56388__$1;
(statearr_56393_56893[(2)] = inst_56383);

(statearr_56393_56893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (4))){
var inst_56376 = (state_56388[(7)]);
var state_56388__$1 = state_56388;
var statearr_56394_56894 = state_56388__$1;
(statearr_56394_56894[(2)] = inst_56376);

(statearr_56394_56894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (5))){
var inst_56386 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56388__$1,inst_56386);
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
var statearr_56395 = [null,null,null,null,null,null,null,null];
(statearr_56395[(0)] = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__);

(statearr_56395[(1)] = (1));

return statearr_56395;
});
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1 = (function (state_56388){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56388);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56396){var ex__38759__auto__ = e56396;
var statearr_56397_56895 = state_56388;
(statearr_56397_56895[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56388[(4)]))){
var statearr_56398_56896 = state_56388;
(statearr_56398_56896[(1)] = cljs.core.first((state_56388[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56897 = state_56388;
state_56388 = G__56897;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = function(state_56388){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1.call(this,state_56388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56399 = f__38848__auto__();
(statearr_56399[(6)] = c__38847__auto__);

return statearr_56399;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56415){
var state_val_56416 = (state_56415[(1)]);
if((state_val_56416 === (1))){
var inst_56400 = compevent.core.provider.getLogs(liquidation_filter);
var inst_56401 = cljs.core.async.interop.p__GT_c(inst_56400);
var state_56415__$1 = state_56415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56415__$1,(2),inst_56401);
} else {
if((state_val_56416 === (2))){
var inst_56403 = (state_56415[(7)]);
var inst_56403__$1 = (state_56415[(2)]);
var inst_56404 = (inst_56403__$1 instanceof cljs.core.ExceptionInfo);
var inst_56405 = cljs.core.ex_data(inst_56403__$1);
var inst_56406 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56405);
var inst_56407 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56406,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56408 = ((inst_56404) && (inst_56407));
var state_56415__$1 = (function (){var statearr_56417 = state_56415;
(statearr_56417[(7)] = inst_56403__$1);

return statearr_56417;
})();
if(cljs.core.truth_(inst_56408)){
var statearr_56418_56898 = state_56415__$1;
(statearr_56418_56898[(1)] = (3));

} else {
var statearr_56419_56899 = state_56415__$1;
(statearr_56419_56899[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (3))){
var inst_56403 = (state_56415[(7)]);
var inst_56410 = (function(){throw inst_56403})();
var state_56415__$1 = state_56415;
var statearr_56420_56900 = state_56415__$1;
(statearr_56420_56900[(2)] = inst_56410);

(statearr_56420_56900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (4))){
var inst_56403 = (state_56415[(7)]);
var state_56415__$1 = state_56415;
var statearr_56421_56901 = state_56415__$1;
(statearr_56421_56901[(2)] = inst_56403);

(statearr_56421_56901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (5))){
var inst_56413 = (state_56415[(2)]);
var state_56415__$1 = state_56415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56415__$1,inst_56413);
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
var statearr_56422 = [null,null,null,null,null,null,null,null];
(statearr_56422[(0)] = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__);

(statearr_56422[(1)] = (1));

return statearr_56422;
});
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_56415){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56415);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56423){var ex__38759__auto__ = e56423;
var statearr_56424_56902 = state_56415;
(statearr_56424_56902[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56415[(4)]))){
var statearr_56425_56903 = state_56415;
(statearr_56425_56903[(1)] = cljs.core.first((state_56415[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56904 = state_56415;
state_56415 = G__56904;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = function(state_56415){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_56415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56426 = f__38848__auto__();
(statearr_56426[(6)] = c__38847__auto__);

return statearr_56426;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56442){
var state_val_56443 = (state_56442[(1)]);
if((state_val_56443 === (1))){
var inst_56427 = compevent.core.provider.getLogs(mint_filter);
var inst_56428 = cljs.core.async.interop.p__GT_c(inst_56427);
var state_56442__$1 = state_56442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56442__$1,(2),inst_56428);
} else {
if((state_val_56443 === (2))){
var inst_56430 = (state_56442[(7)]);
var inst_56430__$1 = (state_56442[(2)]);
var inst_56431 = (inst_56430__$1 instanceof cljs.core.ExceptionInfo);
var inst_56432 = cljs.core.ex_data(inst_56430__$1);
var inst_56433 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56432);
var inst_56434 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56433,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56435 = ((inst_56431) && (inst_56434));
var state_56442__$1 = (function (){var statearr_56444 = state_56442;
(statearr_56444[(7)] = inst_56430__$1);

return statearr_56444;
})();
if(cljs.core.truth_(inst_56435)){
var statearr_56445_56905 = state_56442__$1;
(statearr_56445_56905[(1)] = (3));

} else {
var statearr_56446_56906 = state_56442__$1;
(statearr_56446_56906[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56443 === (3))){
var inst_56430 = (state_56442[(7)]);
var inst_56437 = (function(){throw inst_56430})();
var state_56442__$1 = state_56442;
var statearr_56447_56907 = state_56442__$1;
(statearr_56447_56907[(2)] = inst_56437);

(statearr_56447_56907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56443 === (4))){
var inst_56430 = (state_56442[(7)]);
var state_56442__$1 = state_56442;
var statearr_56448_56908 = state_56442__$1;
(statearr_56448_56908[(2)] = inst_56430);

(statearr_56448_56908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56443 === (5))){
var inst_56440 = (state_56442[(2)]);
var state_56442__$1 = state_56442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56442__$1,inst_56440);
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
var statearr_56449 = [null,null,null,null,null,null,null,null];
(statearr_56449[(0)] = compevent$core$_LT_comp_mints_$_state_machine__38756__auto__);

(statearr_56449[(1)] = (1));

return statearr_56449;
});
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1 = (function (state_56442){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56442);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56450){var ex__38759__auto__ = e56450;
var statearr_56451_56909 = state_56442;
(statearr_56451_56909[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56442[(4)]))){
var statearr_56452_56910 = state_56442;
(statearr_56452_56910[(1)] = cljs.core.first((state_56442[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56911 = state_56442;
state_56442 = G__56911;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = function(state_56442){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1.call(this,state_56442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56453 = f__38848__auto__();
(statearr_56453[(6)] = c__38847__auto__);

return statearr_56453;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56469){
var state_val_56470 = (state_56469[(1)]);
if((state_val_56470 === (1))){
var inst_56454 = compevent.core.provider.getLogs(borrow_filter);
var inst_56455 = cljs.core.async.interop.p__GT_c(inst_56454);
var state_56469__$1 = state_56469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56469__$1,(2),inst_56455);
} else {
if((state_val_56470 === (2))){
var inst_56457 = (state_56469[(7)]);
var inst_56457__$1 = (state_56469[(2)]);
var inst_56458 = (inst_56457__$1 instanceof cljs.core.ExceptionInfo);
var inst_56459 = cljs.core.ex_data(inst_56457__$1);
var inst_56460 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56459);
var inst_56461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56460,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56462 = ((inst_56458) && (inst_56461));
var state_56469__$1 = (function (){var statearr_56471 = state_56469;
(statearr_56471[(7)] = inst_56457__$1);

return statearr_56471;
})();
if(cljs.core.truth_(inst_56462)){
var statearr_56472_56912 = state_56469__$1;
(statearr_56472_56912[(1)] = (3));

} else {
var statearr_56473_56913 = state_56469__$1;
(statearr_56473_56913[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (3))){
var inst_56457 = (state_56469[(7)]);
var inst_56464 = (function(){throw inst_56457})();
var state_56469__$1 = state_56469;
var statearr_56474_56914 = state_56469__$1;
(statearr_56474_56914[(2)] = inst_56464);

(statearr_56474_56914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (4))){
var inst_56457 = (state_56469[(7)]);
var state_56469__$1 = state_56469;
var statearr_56475_56915 = state_56469__$1;
(statearr_56475_56915[(2)] = inst_56457);

(statearr_56475_56915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56470 === (5))){
var inst_56467 = (state_56469[(2)]);
var state_56469__$1 = state_56469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56469__$1,inst_56467);
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
var statearr_56476 = [null,null,null,null,null,null,null,null];
(statearr_56476[(0)] = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__);

(statearr_56476[(1)] = (1));

return statearr_56476;
});
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1 = (function (state_56469){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56469);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56477){var ex__38759__auto__ = e56477;
var statearr_56478_56916 = state_56469;
(statearr_56478_56916[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56469[(4)]))){
var statearr_56479_56917 = state_56469;
(statearr_56479_56917[(1)] = cljs.core.first((state_56469[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56918 = state_56469;
state_56469 = G__56918;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = function(state_56469){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1.call(this,state_56469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56480 = f__38848__auto__();
(statearr_56480[(6)] = c__38847__auto__);

return statearr_56480;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56496){
var state_val_56497 = (state_56496[(1)]);
if((state_val_56497 === (1))){
var inst_56481 = compevent.core.provider.getLogs(redeem_filter);
var inst_56482 = cljs.core.async.interop.p__GT_c(inst_56481);
var state_56496__$1 = state_56496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56496__$1,(2),inst_56482);
} else {
if((state_val_56497 === (2))){
var inst_56484 = (state_56496[(7)]);
var inst_56484__$1 = (state_56496[(2)]);
var inst_56485 = (inst_56484__$1 instanceof cljs.core.ExceptionInfo);
var inst_56486 = cljs.core.ex_data(inst_56484__$1);
var inst_56487 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56486);
var inst_56488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56487,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56489 = ((inst_56485) && (inst_56488));
var state_56496__$1 = (function (){var statearr_56498 = state_56496;
(statearr_56498[(7)] = inst_56484__$1);

return statearr_56498;
})();
if(cljs.core.truth_(inst_56489)){
var statearr_56499_56919 = state_56496__$1;
(statearr_56499_56919[(1)] = (3));

} else {
var statearr_56500_56920 = state_56496__$1;
(statearr_56500_56920[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56497 === (3))){
var inst_56484 = (state_56496[(7)]);
var inst_56491 = (function(){throw inst_56484})();
var state_56496__$1 = state_56496;
var statearr_56501_56921 = state_56496__$1;
(statearr_56501_56921[(2)] = inst_56491);

(statearr_56501_56921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56497 === (4))){
var inst_56484 = (state_56496[(7)]);
var state_56496__$1 = state_56496;
var statearr_56502_56922 = state_56496__$1;
(statearr_56502_56922[(2)] = inst_56484);

(statearr_56502_56922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56497 === (5))){
var inst_56494 = (state_56496[(2)]);
var state_56496__$1 = state_56496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56496__$1,inst_56494);
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
var statearr_56503 = [null,null,null,null,null,null,null,null];
(statearr_56503[(0)] = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__);

(statearr_56503[(1)] = (1));

return statearr_56503;
});
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1 = (function (state_56496){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56496);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56504){var ex__38759__auto__ = e56504;
var statearr_56505_56923 = state_56496;
(statearr_56505_56923[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56496[(4)]))){
var statearr_56506_56924 = state_56496;
(statearr_56506_56924[(1)] = cljs.core.first((state_56496[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56925 = state_56496;
state_56496 = G__56925;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = function(state_56496){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1.call(this,state_56496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56507 = f__38848__auto__();
(statearr_56507[(6)] = c__38847__auto__);

return statearr_56507;
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
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56508_SHARP_){
var G__56509 = caddress;
var G__56510 = p1__56508_SHARP_;
var G__56511 = (p1__56508_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__56509,G__56510,G__56511) : logsfn.call(null,G__56509,G__56510,G__56511));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
compevent.core._LT_pfetch_comp_logs = (function compevent$core$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56519){
var state_val_56520 = (state_56519[(1)]);
if((state_val_56520 === (1))){
var inst_56513 = compevent.core._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_56519__$1 = state_56519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56519__$1,(2),inst_56513);
} else {
if((state_val_56520 === (2))){
var inst_56515 = (state_56519[(2)]);
var inst_56516 = (function (){var fetched_logs = inst_56515;
return (function (p1__56512_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__56512_SHARP_,decimals) : parsefn.call(null,p1__56512_SHARP_,decimals));
});
})();
var inst_56517 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56516,inst_56515);
var state_56519__$1 = state_56519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56519__$1,inst_56517);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0 = (function (){
var statearr_56521 = [null,null,null,null,null,null,null];
(statearr_56521[(0)] = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__);

(statearr_56521[(1)] = (1));

return statearr_56521;
});
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1 = (function (state_56519){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56519);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56522){var ex__38759__auto__ = e56522;
var statearr_56523_56926 = state_56519;
(statearr_56523_56926[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56519[(4)]))){
var statearr_56524_56927 = state_56519;
(statearr_56524_56927[(1)] = cljs.core.first((state_56519[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56928 = state_56519;
state_56519 = G__56928;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = function(state_56519){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1.call(this,state_56519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56525 = f__38848__auto__();
(statearr_56525[(6)] = c__38847__auto__);

return statearr_56525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_repayments = (function compevent$core$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56530){
var state_val_56531 = (state_56530[(1)]);
if((state_val_56531 === (1))){
var inst_56526 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_repayments,compevent.core.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_56530__$1 = state_56530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56530__$1,(2),inst_56526);
} else {
if((state_val_56531 === (2))){
var inst_56528 = (state_56530[(2)]);
var state_56530__$1 = state_56530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56530__$1,inst_56528);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_56532 = [null,null,null,null,null,null,null];
(statearr_56532[(0)] = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__);

(statearr_56532[(1)] = (1));

return statearr_56532;
});
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1 = (function (state_56530){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56530);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56533){var ex__38759__auto__ = e56533;
var statearr_56534_56929 = state_56530;
(statearr_56534_56929[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56530[(4)]))){
var statearr_56535_56930 = state_56530;
(statearr_56535_56930[(1)] = cljs.core.first((state_56530[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56931 = state_56530;
state_56530 = G__56931;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = function(state_56530){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1.call(this,state_56530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56536 = f__38848__auto__();
(statearr_56536[(6)] = c__38847__auto__);

return statearr_56536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_mints = (function compevent$core$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56541){
var state_val_56542 = (state_56541[(1)]);
if((state_val_56542 === (1))){
var inst_56537 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_mints,compevent.core.make_comp_mint,caddress,start_block,end_block,decimals);
var state_56541__$1 = state_56541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56541__$1,(2),inst_56537);
} else {
if((state_val_56542 === (2))){
var inst_56539 = (state_56541[(2)]);
var state_56541__$1 = state_56541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56541__$1,inst_56539);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_56543 = [null,null,null,null,null,null,null];
(statearr_56543[(0)] = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__);

(statearr_56543[(1)] = (1));

return statearr_56543;
});
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1 = (function (state_56541){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56541);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56544){var ex__38759__auto__ = e56544;
var statearr_56545_56932 = state_56541;
(statearr_56545_56932[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56541[(4)]))){
var statearr_56546_56933 = state_56541;
(statearr_56546_56933[(1)] = cljs.core.first((state_56541[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56934 = state_56541;
state_56541 = G__56934;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = function(state_56541){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1.call(this,state_56541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56547 = f__38848__auto__();
(statearr_56547[(6)] = c__38847__auto__);

return statearr_56547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_liquidations = (function compevent$core$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56552){
var state_val_56553 = (state_56552[(1)]);
if((state_val_56553 === (1))){
var inst_56548 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_liquidations,compevent.core.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_56552__$1 = state_56552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56552__$1,(2),inst_56548);
} else {
if((state_val_56553 === (2))){
var inst_56550 = (state_56552[(2)]);
var state_56552__$1 = state_56552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56552__$1,inst_56550);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_56554 = [null,null,null,null,null,null,null];
(statearr_56554[(0)] = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__);

(statearr_56554[(1)] = (1));

return statearr_56554;
});
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_56552){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56552);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56555){var ex__38759__auto__ = e56555;
var statearr_56556_56935 = state_56552;
(statearr_56556_56935[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56552[(4)]))){
var statearr_56557_56936 = state_56552;
(statearr_56557_56936[(1)] = cljs.core.first((state_56552[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56937 = state_56552;
state_56552 = G__56937;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = function(state_56552){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_56552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56558 = f__38848__auto__();
(statearr_56558[(6)] = c__38847__auto__);

return statearr_56558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_borrows = (function compevent$core$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56563){
var state_val_56564 = (state_56563[(1)]);
if((state_val_56564 === (1))){
var inst_56559 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_borrows,compevent.core.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_56563__$1 = state_56563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56563__$1,(2),inst_56559);
} else {
if((state_val_56564 === (2))){
var inst_56561 = (state_56563[(2)]);
var state_56563__$1 = state_56563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56563__$1,inst_56561);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_56565 = [null,null,null,null,null,null,null];
(statearr_56565[(0)] = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__);

(statearr_56565[(1)] = (1));

return statearr_56565;
});
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1 = (function (state_56563){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56563);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56566){var ex__38759__auto__ = e56566;
var statearr_56567_56938 = state_56563;
(statearr_56567_56938[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56563[(4)]))){
var statearr_56568_56939 = state_56563;
(statearr_56568_56939[(1)] = cljs.core.first((state_56563[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56940 = state_56563;
state_56563 = G__56940;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = function(state_56563){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1.call(this,state_56563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56569 = f__38848__auto__();
(statearr_56569[(6)] = c__38847__auto__);

return statearr_56569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_redeems = (function compevent$core$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56574){
var state_val_56575 = (state_56574[(1)]);
if((state_val_56575 === (1))){
var inst_56570 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_redeems,compevent.core.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_56574__$1 = state_56574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56574__$1,(2),inst_56570);
} else {
if((state_val_56575 === (2))){
var inst_56572 = (state_56574[(2)]);
var state_56574__$1 = state_56574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56574__$1,inst_56572);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_56576 = [null,null,null,null,null,null,null];
(statearr_56576[(0)] = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__);

(statearr_56576[(1)] = (1));

return statearr_56576;
});
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1 = (function (state_56574){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56574);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56577){var ex__38759__auto__ = e56577;
var statearr_56578_56941 = state_56574;
(statearr_56578_56941[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56574[(4)]))){
var statearr_56579_56942 = state_56574;
(statearr_56579_56942[(1)] = cljs.core.first((state_56574[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56943 = state_56574;
state_56574 = G__56943;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = function(state_56574){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1.call(this,state_56574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56580 = f__38848__auto__();
(statearr_56580[(6)] = c__38847__auto__);

return statearr_56580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_ctoken_events = (function compevent$core$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56599){
var state_val_56600 = (state_56599[(1)]);
if((state_val_56600 === (1))){
var inst_56581 = compevent.core._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_56599__$1 = state_56599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56599__$1,(2),inst_56581);
} else {
if((state_val_56600 === (2))){
var inst_56583 = (state_56599[(2)]);
var inst_56584 = compevent.core._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_56599__$1 = (function (){var statearr_56601 = state_56599;
(statearr_56601[(7)] = inst_56583);

return statearr_56601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56599__$1,(3),inst_56584);
} else {
if((state_val_56600 === (3))){
var inst_56586 = (state_56599[(2)]);
var inst_56587 = compevent.core._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_56599__$1 = (function (){var statearr_56602 = state_56599;
(statearr_56602[(8)] = inst_56586);

return statearr_56602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56599__$1,(4),inst_56587);
} else {
if((state_val_56600 === (4))){
var inst_56589 = (state_56599[(2)]);
var inst_56590 = compevent.core._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_56599__$1 = (function (){var statearr_56603 = state_56599;
(statearr_56603[(9)] = inst_56589);

return statearr_56603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56599__$1,(5),inst_56590);
} else {
if((state_val_56600 === (5))){
var inst_56592 = (state_56599[(2)]);
var inst_56593 = compevent.core._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_56599__$1 = (function (){var statearr_56604 = state_56599;
(statearr_56604[(10)] = inst_56592);

return statearr_56604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56599__$1,(6),inst_56593);
} else {
if((state_val_56600 === (6))){
var inst_56583 = (state_56599[(7)]);
var inst_56586 = (state_56599[(8)]);
var inst_56589 = (state_56599[(9)]);
var inst_56592 = (state_56599[(10)]);
var inst_56595 = (state_56599[(2)]);
var inst_56596 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_56583,inst_56586,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56589,inst_56592,inst_56595], 0));
var inst_56597 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_56596);
var state_56599__$1 = state_56599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56599__$1,inst_56597);
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
var statearr_56605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56605[(0)] = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__);

(statearr_56605[(1)] = (1));

return statearr_56605;
});
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1 = (function (state_56599){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56599);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56606){var ex__38759__auto__ = e56606;
var statearr_56607_56944 = state_56599;
(statearr_56607_56944[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56599[(4)]))){
var statearr_56608_56945 = state_56599;
(statearr_56608_56945[(1)] = cljs.core.first((state_56599[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56946 = state_56599;
state_56599 = G__56946;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = function(state_56599){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1.call(this,state_56599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56609 = f__38848__auto__();
(statearr_56609[(6)] = c__38847__auto__);

return statearr_56609;
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
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56610_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__56610_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.token_supply_underlying = (function compevent$core$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56611_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__56611_SHARP_),token);
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
var len__4736__auto___56947 = arguments.length;
var i__4737__auto___56948 = (0);
while(true){
if((i__4737__auto___56948 < len__4736__auto___56947)){
args__4742__auto__.push((arguments[i__4737__auto___56948]));

var G__56949 = (i__4737__auto___56948 + (1));
i__4737__auto___56948 = G__56949;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__56614){
var map__56615 = p__56614;
var map__56615__$1 = (((((!((map__56615 == null))))?(((((map__56615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56615):map__56615);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56615__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56637){
var state_val_56638 = (state_56637[(1)]);
if((state_val_56638 === (1))){
var inst_56617 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_56618 = [address,block_number];
var inst_56619 = cljs.core.PersistentHashMap.fromArrays(inst_56617,inst_56618);
var inst_56620 = cljs.core.clj__GT_js(inst_56619);
var inst_56621 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_56620);
var inst_56622 = cljs.core.async.interop.p__GT_c(inst_56621);
var state_56637__$1 = state_56637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56637__$1,(2),inst_56622);
} else {
if((state_val_56638 === (2))){
var inst_56624 = (state_56637[(7)]);
var inst_56624__$1 = (state_56637[(2)]);
var inst_56625 = (inst_56624__$1 instanceof cljs.core.ExceptionInfo);
var inst_56626 = cljs.core.ex_data(inst_56624__$1);
var inst_56627 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56626);
var inst_56628 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56627,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56629 = ((inst_56625) && (inst_56628));
var state_56637__$1 = (function (){var statearr_56639 = state_56637;
(statearr_56639[(7)] = inst_56624__$1);

return statearr_56639;
})();
if(cljs.core.truth_(inst_56629)){
var statearr_56640_56950 = state_56637__$1;
(statearr_56640_56950[(1)] = (3));

} else {
var statearr_56641_56951 = state_56637__$1;
(statearr_56641_56951[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56638 === (3))){
var inst_56624 = (state_56637[(7)]);
var inst_56631 = (function(){throw inst_56624})();
var state_56637__$1 = state_56637;
var statearr_56642_56952 = state_56637__$1;
(statearr_56642_56952[(2)] = inst_56631);

(statearr_56642_56952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56638 === (4))){
var inst_56624 = (state_56637[(7)]);
var state_56637__$1 = state_56637;
var statearr_56643_56953 = state_56637__$1;
(statearr_56643_56953[(2)] = inst_56624);

(statearr_56643_56953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56638 === (5))){
var inst_56634 = (state_56637[(2)]);
var inst_56635 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_56634);
var state_56637__$1 = state_56637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56637__$1,inst_56635);
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
var statearr_56644 = [null,null,null,null,null,null,null,null];
(statearr_56644[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_56644[(1)] = (1));

return statearr_56644;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_56637){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56637);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56645){var ex__38759__auto__ = e56645;
var statearr_56646_56954 = state_56637;
(statearr_56646_56954[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56637[(4)]))){
var statearr_56647_56955 = state_56637;
(statearr_56647_56955[(1)] = cljs.core.first((state_56637[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56956 = state_56637;
state_56637 = G__56956;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_56637){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_56637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56648 = f__38848__auto__();
(statearr_56648[(6)] = c__38847__auto__);

return statearr_56648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(compevent.core._LT_account_state.cljs$lang$applyTo = (function (seq56612){
var G__56613 = cljs.core.first(seq56612);
var seq56612__$1 = cljs.core.next(seq56612);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56613,seq56612__$1);
}));

compevent.core._LT_account_states = (function compevent$core$_LT_account_states(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56957 = arguments.length;
var i__4737__auto___56958 = (0);
while(true){
if((i__4737__auto___56958 < len__4736__auto___56957)){
args__4742__auto__.push((arguments[i__4737__auto___56958]));

var G__56959 = (i__4737__auto___56958 + (1));
i__4737__auto___56958 = G__56959;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic = (function (accounts,block_number,p__56653){
var map__56654 = p__56653;
var map__56654__$1 = (((((!((map__56654 == null))))?(((((map__56654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56654):map__56654);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56654__$1,new cljs.core.Keyword(null,"raw","raw",1604651272),false);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56684){
var state_val_56685 = (state_56684[(1)]);
if((state_val_56685 === (1))){
var inst_56656 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"page_size","page_size",-1574119768),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_56657 = [accounts,(1000),block_number];
var inst_56658 = cljs.core.PersistentHashMap.fromArrays(inst_56656,inst_56657);
var inst_56659 = cljs.core.clj__GT_js(inst_56658);
var inst_56660 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_56659);
var inst_56661 = cljs.core.async.interop.p__GT_c(inst_56660);
var state_56684__$1 = state_56684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56684__$1,(2),inst_56661);
} else {
if((state_val_56685 === (2))){
var inst_56663 = (state_56684[(7)]);
var inst_56663__$1 = (state_56684[(2)]);
var inst_56664 = (inst_56663__$1 instanceof cljs.core.ExceptionInfo);
var inst_56665 = cljs.core.ex_data(inst_56663__$1);
var inst_56666 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_56665);
var inst_56667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56666,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_56668 = ((inst_56664) && (inst_56667));
var state_56684__$1 = (function (){var statearr_56686 = state_56684;
(statearr_56686[(7)] = inst_56663__$1);

return statearr_56686;
})();
if(cljs.core.truth_(inst_56668)){
var statearr_56687_56960 = state_56684__$1;
(statearr_56687_56960[(1)] = (3));

} else {
var statearr_56688_56961 = state_56684__$1;
(statearr_56688_56961[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56685 === (3))){
var inst_56663 = (state_56684[(7)]);
var inst_56670 = (function(){throw inst_56663})();
var state_56684__$1 = state_56684;
var statearr_56689_56962 = state_56684__$1;
(statearr_56689_56962[(2)] = inst_56670);

(statearr_56689_56962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56685 === (4))){
var inst_56663 = (state_56684[(7)]);
var state_56684__$1 = state_56684;
var statearr_56690_56963 = state_56684__$1;
(statearr_56690_56963[(2)] = inst_56663);

(statearr_56690_56963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56685 === (5))){
var inst_56673 = (state_56684[(2)]);
var inst_56674 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_56673);
var inst_56675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56674,"accounts");
var inst_56676 = (function (){var resp = inst_56674;
var account_resps = inst_56675;
return (function (p1__56649_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56649_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_56677 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56676,inst_56675);
var state_56684__$1 = (function (){var statearr_56691 = state_56684;
(statearr_56691[(8)] = inst_56677);

return statearr_56691;
})();
if(cljs.core.truth_(raw)){
var statearr_56692_56964 = state_56684__$1;
(statearr_56692_56964[(1)] = (6));

} else {
var statearr_56693_56965 = state_56684__$1;
(statearr_56693_56965[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56685 === (6))){
var state_56684__$1 = state_56684;
var statearr_56694_56966 = state_56684__$1;
(statearr_56694_56966[(2)] = cljs.core.identity);

(statearr_56694_56966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56685 === (7))){
var state_56684__$1 = state_56684;
var statearr_56695_56967 = state_56684__$1;
(statearr_56695_56967[(2)] = compevent.core.acc_state);

(statearr_56695_56967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56685 === (8))){
var inst_56677 = (state_56684[(8)]);
var inst_56681 = (state_56684[(2)]);
var inst_56682 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56681,inst_56677);
var state_56684__$1 = state_56684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56684__$1,inst_56682);
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
var statearr_56696 = [null,null,null,null,null,null,null,null,null];
(statearr_56696[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_56696[(1)] = (1));

return statearr_56696;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_56684){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56684);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56697){var ex__38759__auto__ = e56697;
var statearr_56698_56968 = state_56684;
(statearr_56698_56968[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56684[(4)]))){
var statearr_56699_56969 = state_56684;
(statearr_56699_56969[(1)] = cljs.core.first((state_56684[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56970 = state_56684;
state_56684 = G__56970;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_56684){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_56684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56700 = f__38848__auto__();
(statearr_56700[(6)] = c__38847__auto__);

return statearr_56700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_states.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core._LT_account_states.cljs$lang$applyTo = (function (seq56650){
var G__56651 = cljs.core.first(seq56650);
var seq56650__$1 = cljs.core.next(seq56650);
var G__56652 = cljs.core.first(seq56650__$1);
var seq56650__$2 = cljs.core.next(seq56650__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56651,G__56652,seq56650__$2);
}));

compevent.core._LT_account_state_range = (function compevent$core$_LT_account_state_range(accounts,start_block,end_block,block_step){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56701_SHARP_){
return compevent.core._LT_account_states(accounts,p1__56701_SHARP_);
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
var G__56971 = cljs.core.rest(rewards_txs);
var G__56972 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__56971;
data_points = G__56972;
continue;
}
break;
}
});
compevent.core._LT_gov_account = (function compevent$core$_LT_gov_account(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56712){
var state_val_56713 = (state_56712[(1)]);
if((state_val_56713 === (1))){
var inst_56702 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_56703 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56702),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_56704 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_56705 = [false];
var inst_56706 = cljs.core.PersistentHashMap.fromArrays(inst_56704,inst_56705);
var inst_56707 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_56703,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56706], 0));
var state_56712__$1 = state_56712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56712__$1,(2),inst_56707);
} else {
if((state_val_56713 === (2))){
var inst_56709 = (state_56712[(2)]);
var inst_56710 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_56709);
var state_56712__$1 = state_56712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56712__$1,inst_56710);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____0 = (function (){
var statearr_56714 = [null,null,null,null,null,null,null];
(statearr_56714[(0)] = compevent$core$_LT_gov_account_$_state_machine__38756__auto__);

(statearr_56714[(1)] = (1));

return statearr_56714;
});
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____1 = (function (state_56712){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56712);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56715){var ex__38759__auto__ = e56715;
var statearr_56716_56973 = state_56712;
(statearr_56716_56973[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56712[(4)]))){
var statearr_56717_56974 = state_56712;
(statearr_56717_56974[(1)] = cljs.core.first((state_56712[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56975 = state_56712;
state_56712 = G__56975;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = function(state_56712){
switch(arguments.length){
case 0:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____1.call(this,state_56712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____0;
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____1;
return compevent$core$_LT_gov_account_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56718 = f__38848__auto__();
(statearr_56718[(6)] = c__38847__auto__);

return statearr_56718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_compound_history = (function compevent$core$_LT_fetch_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56742){
var state_val_56743 = (state_56742[(1)]);
if((state_val_56743 === (1))){
var inst_56720 = compevent.core._LT_latest_block();
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56742__$1,(2),inst_56720);
} else {
if((state_val_56743 === (2))){
var inst_56722 = (state_56742[(7)]);
var inst_56722__$1 = (state_56742[(2)]);
var inst_56723 = (inst_56722__$1 - (1000000));
var inst_56724 = compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(compevent.core.provider,compevent.core.comp_address,compevent.core.comp_unitroller,account);
var state_56742__$1 = (function (){var statearr_56744 = state_56742;
(statearr_56744[(8)] = inst_56723);

(statearr_56744[(7)] = inst_56722__$1);

return statearr_56744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56742__$1,(3),inst_56724);
} else {
if((state_val_56743 === (3))){
var inst_56726 = (state_56742[(9)]);
var inst_56723 = (state_56742[(8)]);
var inst_56728 = (state_56742[(10)]);
var inst_56722 = (state_56742[(7)]);
var inst_56726__$1 = (state_56742[(2)]);
var inst_56727 = cljs.core.PersistentVector.EMPTY;
var inst_56728__$1 = compevent.core.accum_comp_rewards(inst_56726__$1,inst_56727);
var inst_56729 = (function (){var latest_block = inst_56722;
var init_block = inst_56723;
var comp_rewards = inst_56726__$1;
var comp_rewards_SINGLEQUOTE_ = inst_56728__$1;
return (function (dp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(dp),"Supplied",new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600).cljs$core$IFn$_invoke$arity$1(dp)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(dp),"Borrowed",new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713).cljs$core$IFn$_invoke$arity$1(dp)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),"Account Health",new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(dp)], null)], null);
});
})();
var inst_56730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56731 = [account];
var inst_56732 = (new cljs.core.PersistentVector(null,1,(5),inst_56730,inst_56731,null));
var inst_56733 = compevent.core._LT_account_state_range(inst_56732,inst_56723,inst_56722,(10000));
var state_56742__$1 = (function (){var statearr_56745 = state_56742;
(statearr_56745[(11)] = inst_56729);

(statearr_56745[(9)] = inst_56726__$1);

(statearr_56745[(10)] = inst_56728__$1);

return statearr_56745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56742__$1,(4),inst_56733);
} else {
if((state_val_56743 === (4))){
var inst_56729 = (state_56742[(11)]);
var inst_56726 = (state_56742[(9)]);
var inst_56723 = (state_56742[(8)]);
var inst_56728 = (state_56742[(10)]);
var inst_56722 = (state_56742[(7)]);
var inst_56735 = (state_56742[(2)]);
var inst_56736 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_56729,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56735], 0));
var inst_56737 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_56736);
var inst_56738 = (function (){var latest_block = inst_56722;
var init_block = inst_56723;
var comp_rewards = inst_56726;
var comp_rewards_SINGLEQUOTE_ = inst_56728;
var acc_history = inst_56737;
return (function (p1__56719_SHARP_){
return (((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__56719_SHARP_) <= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc_history)))) && ((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__56719_SHARP_) >= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.first(acc_history)))));
});
})();
var inst_56739 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_56738,inst_56728);
var inst_56740 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_56737,inst_56739);
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56742__$1,inst_56740);
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
var statearr_56746 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56746[(0)] = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__);

(statearr_56746[(1)] = (1));

return statearr_56746;
});
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1 = (function (state_56742){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56742);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56747){var ex__38759__auto__ = e56747;
var statearr_56748_56976 = state_56742;
(statearr_56748_56976[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56742[(4)]))){
var statearr_56749_56977 = state_56742;
(statearr_56749_56977[(1)] = cljs.core.first((state_56742[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56978 = state_56742;
state_56742 = G__56978;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = function(state_56742){
switch(arguments.length){
case 0:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1.call(this,state_56742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0;
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1;
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56750 = f__38848__auto__();
(statearr_56750[(6)] = c__38847__auto__);

return statearr_56750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.historic_whale_layer = (function compevent$core$historic_whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56979 = arguments.length;
var i__4737__auto___56980 = (0);
while(true){
if((i__4737__auto___56980 < len__4736__auto___56979)){
args__4742__auto__.push((arguments[i__4737__auto___56980]));

var G__56981 = (i__4737__auto___56980 + (1));
i__4737__auto___56980 = G__56981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__56755){
var map__56756 = p__56755;
var map__56756__$1 = (((((!((map__56756 == null))))?(((((map__56756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56756):map__56756);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56756__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56756__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56756__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56756__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
var show_rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56756__$1,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(75),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(10),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainMin","domainMin",1827225240),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"side",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Account Health","Supplied","Borrowed","Claimed Rewards"
], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","#706897","#fd3a69","#5aa469"
], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(compevent.core.historic_whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core.historic_whale_layer.cljs$lang$applyTo = (function (seq56752){
var G__56753 = cljs.core.first(seq56752);
var seq56752__$1 = cljs.core.next(seq56752);
var G__56754 = cljs.core.first(seq56752__$1);
var seq56752__$2 = cljs.core.next(seq56752__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56753,G__56754,seq56752__$2);
}));

compevent.core.make_whale_history_plot = (function compevent$core$make_whale_history_plot(line_points,address){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)," Compound history"].join(''),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"middle",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),2.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),"ETH Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(150000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dai","dai",659273042),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sai","sai",1975712840),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sai","sai",1975712840),"SAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat","bat",607903974),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"bat","bat",607903974),"BAT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),"WBTC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comp","comp",1191953630),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp","comp",1191953630),"COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uni","uni",-1194876440),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uni","uni",-1194876440),"UNI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zrx","zrx",955760380),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"zrx","zrx",955760380),"ZRX",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rep","rep",-1226820564),"REP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdc","usdc",-457089155),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdt","usdt",999447714),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdt","usdt",999447714),"USDT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eth","eth",1381694970),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth","eth",1381694970),"ETH",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),"Claimed COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true], 0))], null))], null);
});
compevent.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
compevent.core.render_compound_history = (function compevent$core$render_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_56792){
var state_val_56793 = (state_56792[(1)]);
if((state_val_56793 === (1))){
var inst_56758 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_56759 = [null];
var inst_56760 = cljs.core.PersistentHashMap.fromArrays(inst_56758,inst_56759);
var inst_56761 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_56760);
var inst_56762 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56763 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_56764 = (new cljs.core.PersistentVector(null,1,(5),inst_56762,inst_56763,null));
var inst_56765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56766 = ["Fetching data ..."];
var inst_56767 = (new cljs.core.PersistentVector(null,1,(5),inst_56765,inst_56766,null));
var inst_56768 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(compevent.core.app_state,cljs.core.update_in,inst_56764,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56767], 0));
var inst_56769 = compevent.core._LT_fetch_compound_history(account);
var state_56792__$1 = (function (){var statearr_56794 = state_56792;
(statearr_56794[(7)] = inst_56768);

(statearr_56794[(8)] = inst_56761);

return statearr_56794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56792__$1,(2),inst_56769);
} else {
if((state_val_56793 === (2))){
var inst_56771 = (state_56792[(2)]);
var inst_56772 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(compevent.core.float_num_values,inst_56771);
var inst_56773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56774 = [compevent.core.separator_str];
var inst_56775 = (new cljs.core.PersistentVector(null,1,(5),inst_56773,inst_56774,null));
var inst_56776 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compevent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steps","steps",-128433302),inst_56775);
var inst_56777 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_56778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56779 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56781 = compevent.core.make_whale_history_plot(inst_56772,account);
var inst_56782 = [oz.core.vega_lite,inst_56781];
var inst_56783 = (new cljs.core.PersistentVector(null,2,(5),inst_56780,inst_56782,null));
var inst_56784 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_56783];
var inst_56785 = (new cljs.core.PersistentVector(null,2,(5),inst_56779,inst_56784,null));
var inst_56786 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_56785];
var inst_56787 = (new cljs.core.PersistentVector(null,2,(5),inst_56778,inst_56786,null));
var inst_56788 = [inst_56787];
var inst_56789 = cljs.core.PersistentHashMap.fromArrays(inst_56777,inst_56788);
var inst_56790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_56789);
var state_56792__$1 = (function (){var statearr_56795 = state_56792;
(statearr_56795[(9)] = inst_56776);

return statearr_56795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56792__$1,inst_56790);
} else {
return null;
}
}
});
return (function() {
var compevent$core$render_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$render_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_56796 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56796[(0)] = compevent$core$render_compound_history_$_state_machine__38756__auto__);

(statearr_56796[(1)] = (1));

return statearr_56796;
});
var compevent$core$render_compound_history_$_state_machine__38756__auto____1 = (function (state_56792){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_56792);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e56797){var ex__38759__auto__ = e56797;
var statearr_56798_56982 = state_56792;
(statearr_56798_56982[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_56792[(4)]))){
var statearr_56799_56983 = state_56792;
(statearr_56799_56983[(1)] = cljs.core.first((state_56792[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56984 = state_56792;
state_56792 = G__56984;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$render_compound_history_$_state_machine__38756__auto__ = function(state_56792){
switch(arguments.length){
case 0:
return compevent$core$render_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$render_compound_history_$_state_machine__38756__auto____1.call(this,state_56792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$render_compound_history_$_state_machine__38756__auto____0;
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$render_compound_history_$_state_machine__38756__auto____1;
return compevent$core$render_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_56800 = f__38848__auto__();
(statearr_56800[(6)] = c__38847__auto__);

return statearr_56800;
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
