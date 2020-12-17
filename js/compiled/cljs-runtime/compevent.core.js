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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function compevent$core$float_num_values_$_iter__51063(s__51064){
return (new cljs.core.LazySeq(null,(function (){
var s__51064__$1 = s__51064;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51064__$1);
if(temp__5735__auto__){
var s__51064__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51064__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51064__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51066 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51065 = (0);
while(true){
if((i__51065 < size__4528__auto__)){
var vec__51067 = cljs.core._nth(c__4527__auto__,i__51065);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51067,(1),null);
cljs.core.chunk_append(b__51066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null));

var G__51861 = (i__51065 + (1));
i__51065 = G__51861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51066),compevent$core$float_num_values_$_iter__51063(cljs.core.chunk_rest(s__51064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51066),null);
}
} else {
var vec__51070 = cljs.core.first(s__51064__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51070,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null),compevent$core$float_num_values_$_iter__51063(cljs.core.rest(s__51064__$2)));
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51099){
var state_val_51100 = (state_51099[(1)]);
if((state_val_51100 === (7))){
var inst_51084 = (state_51099[(7)]);
var inst_51091 = (function(){throw inst_51084})();
var state_51099__$1 = state_51099;
var statearr_51101_51862 = state_51099__$1;
(statearr_51101_51862[(2)] = inst_51091);

(statearr_51101_51862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51100 === (1))){
var inst_51073 = compevent.core.make_erc20(address);
var state_51099__$1 = (function (){var statearr_51102 = state_51099;
(statearr_51102[(8)] = inst_51073);

return statearr_51102;
})();
var statearr_51103_51863 = state_51099__$1;
(statearr_51103_51863[(2)] = null);

(statearr_51103_51863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51100 === (4))){
var inst_51074 = (state_51099[(2)]);
var inst_51075 = console.log("No decimals method for:",address);
var state_51099__$1 = (function (){var statearr_51104 = state_51099;
(statearr_51104[(9)] = inst_51074);

(statearr_51104[(10)] = inst_51075);

return statearr_51104;
})();
var statearr_51105_51864 = state_51099__$1;
(statearr_51105_51864[(2)] = (18));

(statearr_51105_51864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51100 === (6))){
var inst_51084 = (state_51099[(7)]);
var inst_51084__$1 = (state_51099[(2)]);
var inst_51085 = (inst_51084__$1 instanceof cljs.core.ExceptionInfo);
var inst_51086 = cljs.core.ex_data(inst_51084__$1);
var inst_51087 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51086);
var inst_51088 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51087,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51089 = ((inst_51085) && (inst_51088));
var state_51099__$1 = (function (){var statearr_51106 = state_51099;
(statearr_51106[(7)] = inst_51084__$1);

return statearr_51106;
})();
if(cljs.core.truth_(inst_51089)){
var statearr_51107_51865 = state_51099__$1;
(statearr_51107_51865[(1)] = (7));

} else {
var statearr_51108_51866 = state_51099__$1;
(statearr_51108_51866[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51100 === (3))){
var inst_51097 = (state_51099[(2)]);
var state_51099__$1 = state_51099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51099__$1,inst_51097);
} else {
if((state_val_51100 === (2))){
var inst_51073 = (state_51099[(8)]);
var _ = (function (){var statearr_51110 = state_51099;
(statearr_51110[(4)] = cljs.core.cons((5),(state_51099[(4)])));

return statearr_51110;
})();
var inst_51081 = inst_51073.decimals();
var inst_51082 = cljs.core.async.interop.p__GT_c(inst_51081);
var state_51099__$1 = state_51099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51099__$1,(6),inst_51082);
} else {
if((state_val_51100 === (9))){
var inst_51094 = (state_51099[(2)]);
var _ = (function (){var statearr_51111 = state_51099;
(statearr_51111[(4)] = cljs.core.rest((state_51099[(4)])));

return statearr_51111;
})();
var state_51099__$1 = state_51099;
var statearr_51112_51867 = state_51099__$1;
(statearr_51112_51867[(2)] = inst_51094);

(statearr_51112_51867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51100 === (5))){
var _ = (function (){var statearr_51113 = state_51099;
(statearr_51113[(4)] = cljs.core.rest((state_51099[(4)])));

return statearr_51113;
})();
var state_51099__$1 = state_51099;
var ex51109 = (state_51099__$1[(2)]);
var statearr_51114_51868 = state_51099__$1;
(statearr_51114_51868[(5)] = ex51109);


if((ex51109 instanceof Error)){
var statearr_51115_51869 = state_51099__$1;
(statearr_51115_51869[(1)] = (4));

(statearr_51115_51869[(5)] = null);

} else {
throw ex51109;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51100 === (8))){
var inst_51084 = (state_51099[(7)]);
var state_51099__$1 = state_51099;
var statearr_51116_51870 = state_51099__$1;
(statearr_51116_51870[(2)] = inst_51084);

(statearr_51116_51870[(1)] = (9));


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
var statearr_51117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51117[(0)] = compevent$core$_LT_token_decimals_$_state_machine__38756__auto__);

(statearr_51117[(1)] = (1));

return statearr_51117;
});
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1 = (function (state_51099){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51099);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51118){var ex__38759__auto__ = e51118;
var statearr_51119_51871 = state_51099;
(statearr_51119_51871[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51099[(4)]))){
var statearr_51120_51872 = state_51099;
(statearr_51120_51872[(1)] = cljs.core.first((state_51099[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51873 = state_51099;
state_51099 = G__51873;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = function(state_51099){
switch(arguments.length){
case 0:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1.call(this,state_51099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0;
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1;
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51121 = f__38848__auto__();
(statearr_51121[(6)] = c__38847__auto__);

return statearr_51121;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51138){
var state_val_51139 = (state_51138[(1)]);
if((state_val_51139 === (1))){
var inst_51122 = compevent.core.provider.getBlockNumber();
var inst_51123 = cljs.core.async.interop.p__GT_c(inst_51122);
var state_51138__$1 = state_51138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51138__$1,(2),inst_51123);
} else {
if((state_val_51139 === (2))){
var inst_51125 = (state_51138[(7)]);
var inst_51125__$1 = (state_51138[(2)]);
var inst_51126 = (inst_51125__$1 instanceof cljs.core.ExceptionInfo);
var inst_51127 = cljs.core.ex_data(inst_51125__$1);
var inst_51128 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51127);
var inst_51129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51128,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51130 = ((inst_51126) && (inst_51129));
var state_51138__$1 = (function (){var statearr_51140 = state_51138;
(statearr_51140[(7)] = inst_51125__$1);

return statearr_51140;
})();
if(cljs.core.truth_(inst_51130)){
var statearr_51141_51874 = state_51138__$1;
(statearr_51141_51874[(1)] = (3));

} else {
var statearr_51142_51875 = state_51138__$1;
(statearr_51142_51875[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51139 === (3))){
var inst_51125 = (state_51138[(7)]);
var inst_51132 = (function(){throw inst_51125})();
var state_51138__$1 = state_51138;
var statearr_51143_51876 = state_51138__$1;
(statearr_51143_51876[(2)] = inst_51132);

(statearr_51143_51876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51139 === (4))){
var inst_51125 = (state_51138[(7)]);
var state_51138__$1 = state_51138;
var statearr_51144_51877 = state_51138__$1;
(statearr_51144_51877[(2)] = inst_51125);

(statearr_51144_51877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51139 === (5))){
var inst_51135 = (state_51138[(2)]);
var inst_51136 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_51135);
var state_51138__$1 = state_51138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51138__$1,inst_51136);
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
var statearr_51145 = [null,null,null,null,null,null,null,null];
(statearr_51145[(0)] = compevent$core$_LT_latest_block_$_state_machine__38756__auto__);

(statearr_51145[(1)] = (1));

return statearr_51145;
});
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____1 = (function (state_51138){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51138);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51146){var ex__38759__auto__ = e51146;
var statearr_51147_51878 = state_51138;
(statearr_51147_51878[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51138[(4)]))){
var statearr_51148_51879 = state_51138;
(statearr_51148_51879[(1)] = cljs.core.first((state_51138[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51880 = state_51138;
state_51138 = G__51880;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = function(state_51138){
switch(arguments.length){
case 0:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____1.call(this,state_51138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____0;
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_latest_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51149 = f__38848__auto__();
(statearr_51149[(6)] = c__38847__auto__);

return statearr_51149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_block = (function compevent$core$_LT_get_block(block_num){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51166){
var state_val_51167 = (state_51166[(1)]);
if((state_val_51167 === (1))){
var inst_51150 = compevent.core.provider.getBlock(block_num);
var inst_51151 = cljs.core.async.interop.p__GT_c(inst_51150);
var state_51166__$1 = state_51166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51166__$1,(2),inst_51151);
} else {
if((state_val_51167 === (2))){
var inst_51153 = (state_51166[(7)]);
var inst_51153__$1 = (state_51166[(2)]);
var inst_51154 = (inst_51153__$1 instanceof cljs.core.ExceptionInfo);
var inst_51155 = cljs.core.ex_data(inst_51153__$1);
var inst_51156 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51155);
var inst_51157 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51156,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51158 = ((inst_51154) && (inst_51157));
var state_51166__$1 = (function (){var statearr_51168 = state_51166;
(statearr_51168[(7)] = inst_51153__$1);

return statearr_51168;
})();
if(cljs.core.truth_(inst_51158)){
var statearr_51169_51881 = state_51166__$1;
(statearr_51169_51881[(1)] = (3));

} else {
var statearr_51170_51882 = state_51166__$1;
(statearr_51170_51882[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51167 === (3))){
var inst_51153 = (state_51166[(7)]);
var inst_51160 = (function(){throw inst_51153})();
var state_51166__$1 = state_51166;
var statearr_51171_51883 = state_51166__$1;
(statearr_51171_51883[(2)] = inst_51160);

(statearr_51171_51883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51167 === (4))){
var inst_51153 = (state_51166[(7)]);
var state_51166__$1 = state_51166;
var statearr_51172_51884 = state_51166__$1;
(statearr_51172_51884[(2)] = inst_51153);

(statearr_51172_51884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51167 === (5))){
var inst_51163 = (state_51166[(2)]);
var inst_51164 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_51163);
var state_51166__$1 = state_51166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51166__$1,inst_51164);
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
var statearr_51173 = [null,null,null,null,null,null,null,null];
(statearr_51173[(0)] = compevent$core$_LT_get_block_$_state_machine__38756__auto__);

(statearr_51173[(1)] = (1));

return statearr_51173;
});
var compevent$core$_LT_get_block_$_state_machine__38756__auto____1 = (function (state_51166){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51166);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51174){var ex__38759__auto__ = e51174;
var statearr_51175_51885 = state_51166;
(statearr_51175_51885[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51166[(4)]))){
var statearr_51176_51886 = state_51166;
(statearr_51176_51886[(1)] = cljs.core.first((state_51166[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51887 = state_51166;
state_51166 = G__51887;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_block_$_state_machine__38756__auto__ = function(state_51166){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____1.call(this,state_51166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_block_$_state_machine__38756__auto____0;
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51177 = f__38848__auto__();
(statearr_51177[(6)] = c__38847__auto__);

return statearr_51177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_blocks = (function compevent$core$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51178_SHARP_){
return compevent.core._LT_get_block(p1__51178_SHARP_);
}),block_numbers)));
});
compevent.core._LT_user_token_transfers = (function compevent$core$_LT_user_token_transfers(var_args){
var G__51181 = arguments.length;
switch (G__51181) {
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51184){
var state_val_51185 = (state_51184[(1)]);
if((state_val_51185 === (1))){
var inst_51182 = cljs.core.PersistentVector.EMPTY;
var state_51184__$1 = state_51184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51184__$1,inst_51182);
} else {
return null;
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_51186 = [null,null,null,null,null,null,null];
(statearr_51186[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_51186[(1)] = (1));

return statearr_51186;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_51184){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51184);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51187){var ex__38759__auto__ = e51187;
var statearr_51188_51889 = state_51184;
(statearr_51188_51889[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51184[(4)]))){
var statearr_51189_51890 = state_51184;
(statearr_51189_51890[(1)] = cljs.core.first((state_51184[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51891 = state_51184;
state_51184 = G__51891;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_51184){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_51184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51190 = f__38848__auto__();
(statearr_51190[(6)] = c__38847__auto__);

return statearr_51190;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51222){
var state_val_51223 = (state_51222[(1)]);
if((state_val_51223 === (7))){
var inst_51202 = (state_51222[(7)]);
var inst_51209 = (function(){throw inst_51202})();
var state_51222__$1 = state_51222;
var statearr_51224_51892 = state_51222__$1;
(statearr_51224_51892[(2)] = inst_51209);

(statearr_51224_51892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (1))){
var state_51222__$1 = state_51222;
var statearr_51225_51893 = state_51222__$1;
(statearr_51225_51893[(2)] = null);

(statearr_51225_51893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (4))){
var inst_51191 = (state_51222[(2)]);
var inst_51192 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_51193 = cljs.core.PersistentVector.EMPTY;
var state_51222__$1 = (function (){var statearr_51226 = state_51222;
(statearr_51226[(8)] = inst_51192);

(statearr_51226[(9)] = inst_51191);

return statearr_51226;
})();
var statearr_51227_51894 = state_51222__$1;
(statearr_51227_51894[(2)] = inst_51193);

(statearr_51227_51894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (6))){
var inst_51202 = (state_51222[(7)]);
var inst_51202__$1 = (state_51222[(2)]);
var inst_51203 = (inst_51202__$1 instanceof cljs.core.ExceptionInfo);
var inst_51204 = cljs.core.ex_data(inst_51202__$1);
var inst_51205 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51204);
var inst_51206 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51205,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51207 = ((inst_51203) && (inst_51206));
var state_51222__$1 = (function (){var statearr_51228 = state_51222;
(statearr_51228[(7)] = inst_51202__$1);

return statearr_51228;
})();
if(cljs.core.truth_(inst_51207)){
var statearr_51229_51895 = state_51222__$1;
(statearr_51229_51895[(1)] = (7));

} else {
var statearr_51230_51896 = state_51222__$1;
(statearr_51230_51896[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (3))){
var inst_51220 = (state_51222[(2)]);
var state_51222__$1 = state_51222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51222__$1,inst_51220);
} else {
if((state_val_51223 === (2))){
var ___$2 = (function (){var statearr_51232 = state_51222;
(statearr_51232[(4)] = cljs.core.cons((5),(state_51222[(4)])));

return statearr_51232;
})();
var inst_51199 = provider.getLogs(user_filter);
var inst_51200 = cljs.core.async.interop.p__GT_c(inst_51199);
var state_51222__$1 = state_51222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51222__$1,(6),inst_51200);
} else {
if((state_val_51223 === (9))){
var inst_51212 = (state_51222[(2)]);
var inst_51213 = compevent.core._LT_token_decimals(token_address);
var state_51222__$1 = (function (){var statearr_51233 = state_51222;
(statearr_51233[(10)] = inst_51212);

return statearr_51233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51222__$1,(10),inst_51213);
} else {
if((state_val_51223 === (5))){
var ___$2 = (function (){var statearr_51234 = state_51222;
(statearr_51234[(4)] = cljs.core.rest((state_51222[(4)])));

return statearr_51234;
})();
var state_51222__$1 = state_51222;
var ex51231 = (state_51222__$1[(2)]);
var statearr_51235_51897 = state_51222__$1;
(statearr_51235_51897[(5)] = ex51231);


if((ex51231 instanceof Error)){
var statearr_51236_51898 = state_51222__$1;
(statearr_51236_51898[(1)] = (4));

(statearr_51236_51898[(5)] = null);

} else {
throw ex51231;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (10))){
var inst_51212 = (state_51222[(10)]);
var inst_51215 = (state_51222[(2)]);
var inst_51216 = (function (){var filtered_txs = inst_51212;
var decimals = inst_51215;
return (function (p1__51179_SHARP_){
return compevent.core.make_token_tx(p1__51179_SHARP_,decimals);
});
})();
var inst_51217 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_51216,inst_51212);
var ___$2 = (function (){var statearr_51237 = state_51222;
(statearr_51237[(4)] = cljs.core.rest((state_51222[(4)])));

return statearr_51237;
})();
var state_51222__$1 = state_51222;
var statearr_51238_51899 = state_51222__$1;
(statearr_51238_51899[(2)] = inst_51217);

(statearr_51238_51899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51223 === (8))){
var inst_51202 = (state_51222[(7)]);
var state_51222__$1 = state_51222;
var statearr_51239_51900 = state_51222__$1;
(statearr_51239_51900[(2)] = inst_51202);

(statearr_51239_51900[(1)] = (9));


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
var statearr_51240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51240[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_51240[(1)] = (1));

return statearr_51240;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_51222){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51222);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51241){var ex__38759__auto__ = e51241;
var statearr_51242_51901 = state_51222;
(statearr_51242_51901[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51222[(4)]))){
var statearr_51243_51902 = state_51222;
(statearr_51243_51902[(1)] = cljs.core.first((state_51222[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51903 = state_51222;
state_51222 = G__51903;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_51222){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_51222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51244 = f__38848__auto__();
(statearr_51244[(6)] = c__38847__auto__);

return statearr_51244;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51260){
var state_val_51261 = (state_51260[(1)]);
if((state_val_51261 === (1))){
var inst_51245 = compevent.core.provider.getTransactionReceipt(txhash);
var inst_51246 = cljs.core.async.interop.p__GT_c(inst_51245);
var state_51260__$1 = state_51260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51260__$1,(2),inst_51246);
} else {
if((state_val_51261 === (2))){
var inst_51248 = (state_51260[(7)]);
var inst_51248__$1 = (state_51260[(2)]);
var inst_51249 = (inst_51248__$1 instanceof cljs.core.ExceptionInfo);
var inst_51250 = cljs.core.ex_data(inst_51248__$1);
var inst_51251 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51250);
var inst_51252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51251,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51253 = ((inst_51249) && (inst_51252));
var state_51260__$1 = (function (){var statearr_51262 = state_51260;
(statearr_51262[(7)] = inst_51248__$1);

return statearr_51262;
})();
if(cljs.core.truth_(inst_51253)){
var statearr_51263_51904 = state_51260__$1;
(statearr_51263_51904[(1)] = (3));

} else {
var statearr_51264_51905 = state_51260__$1;
(statearr_51264_51905[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51261 === (3))){
var inst_51248 = (state_51260[(7)]);
var inst_51255 = (function(){throw inst_51248})();
var state_51260__$1 = state_51260;
var statearr_51265_51906 = state_51260__$1;
(statearr_51265_51906[(2)] = inst_51255);

(statearr_51265_51906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51261 === (4))){
var inst_51248 = (state_51260[(7)]);
var state_51260__$1 = state_51260;
var statearr_51266_51907 = state_51260__$1;
(statearr_51266_51907[(2)] = inst_51248);

(statearr_51266_51907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51261 === (5))){
var inst_51258 = (state_51260[(2)]);
var state_51260__$1 = state_51260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51260__$1,inst_51258);
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
var statearr_51267 = [null,null,null,null,null,null,null,null];
(statearr_51267[(0)] = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__);

(statearr_51267[(1)] = (1));

return statearr_51267;
});
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1 = (function (state_51260){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51260);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51268){var ex__38759__auto__ = e51268;
var statearr_51269_51908 = state_51260;
(statearr_51269_51908[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51260[(4)]))){
var statearr_51270_51909 = state_51260;
(statearr_51270_51909[(1)] = cljs.core.first((state_51260[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51910 = state_51260;
state_51260 = G__51910;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = function(state_51260){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1.call(this,state_51260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51271 = f__38848__auto__();
(statearr_51271[(6)] = c__38847__auto__);

return statearr_51271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx = (function compevent$core$_LT_get_tx(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51287){
var state_val_51288 = (state_51287[(1)]);
if((state_val_51288 === (1))){
var inst_51272 = compevent.core.provider.getTransaction(txhash);
var inst_51273 = cljs.core.async.interop.p__GT_c(inst_51272);
var state_51287__$1 = state_51287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51287__$1,(2),inst_51273);
} else {
if((state_val_51288 === (2))){
var inst_51275 = (state_51287[(7)]);
var inst_51275__$1 = (state_51287[(2)]);
var inst_51276 = (inst_51275__$1 instanceof cljs.core.ExceptionInfo);
var inst_51277 = cljs.core.ex_data(inst_51275__$1);
var inst_51278 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51277);
var inst_51279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51278,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51280 = ((inst_51276) && (inst_51279));
var state_51287__$1 = (function (){var statearr_51289 = state_51287;
(statearr_51289[(7)] = inst_51275__$1);

return statearr_51289;
})();
if(cljs.core.truth_(inst_51280)){
var statearr_51290_51911 = state_51287__$1;
(statearr_51290_51911[(1)] = (3));

} else {
var statearr_51291_51912 = state_51287__$1;
(statearr_51291_51912[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51288 === (3))){
var inst_51275 = (state_51287[(7)]);
var inst_51282 = (function(){throw inst_51275})();
var state_51287__$1 = state_51287;
var statearr_51292_51913 = state_51287__$1;
(statearr_51292_51913[(2)] = inst_51282);

(statearr_51292_51913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51288 === (4))){
var inst_51275 = (state_51287[(7)]);
var state_51287__$1 = state_51287;
var statearr_51293_51914 = state_51287__$1;
(statearr_51293_51914[(2)] = inst_51275);

(statearr_51293_51914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51288 === (5))){
var inst_51285 = (state_51287[(2)]);
var state_51287__$1 = state_51287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51287__$1,inst_51285);
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
var statearr_51294 = [null,null,null,null,null,null,null,null];
(statearr_51294[(0)] = compevent$core$_LT_get_tx_$_state_machine__38756__auto__);

(statearr_51294[(1)] = (1));

return statearr_51294;
});
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____1 = (function (state_51287){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51287);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51295){var ex__38759__auto__ = e51295;
var statearr_51296_51915 = state_51287;
(statearr_51296_51915[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51287[(4)]))){
var statearr_51297_51916 = state_51287;
(statearr_51297_51916[(1)] = cljs.core.first((state_51287[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51917 = state_51287;
state_51287 = G__51917;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = function(state_51287){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____1.call(this,state_51287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51298 = f__38848__auto__();
(statearr_51298[(6)] = c__38847__auto__);

return statearr_51298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx_with_receipt = (function compevent$core$_LT_get_tx_with_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51309){
var state_val_51310 = (state_51309[(1)]);
if((state_val_51310 === (1))){
var inst_51299 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_51300 = compevent.core._LT_get_tx(txhash);
var state_51309__$1 = (function (){var statearr_51311 = state_51309;
(statearr_51311[(7)] = inst_51299);

return statearr_51311;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51309__$1,(2),inst_51300);
} else {
if((state_val_51310 === (2))){
var inst_51302 = (state_51309[(2)]);
var inst_51303 = compevent.core._LT_get_tx_receipt(txhash);
var state_51309__$1 = (function (){var statearr_51312 = state_51309;
(statearr_51312[(8)] = inst_51302);

return statearr_51312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51309__$1,(3),inst_51303);
} else {
if((state_val_51310 === (3))){
var inst_51299 = (state_51309[(7)]);
var inst_51302 = (state_51309[(8)]);
var inst_51305 = (state_51309[(2)]);
var inst_51306 = [inst_51302,inst_51305];
var inst_51307 = cljs.core.PersistentHashMap.fromArrays(inst_51299,inst_51306);
var state_51309__$1 = state_51309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51309__$1,inst_51307);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_51313 = [null,null,null,null,null,null,null,null,null];
(statearr_51313[(0)] = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__);

(statearr_51313[(1)] = (1));

return statearr_51313;
});
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1 = (function (state_51309){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51309);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51314){var ex__38759__auto__ = e51314;
var statearr_51315_51918 = state_51309;
(statearr_51315_51918[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51309[(4)]))){
var statearr_51316_51919 = state_51309;
(statearr_51316_51919[(1)] = cljs.core.first((state_51309[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51920 = state_51309;
state_51309 = G__51920;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = function(state_51309){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1.call(this,state_51309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51317 = f__38848__auto__();
(statearr_51317[(6)] = c__38847__auto__);

return statearr_51317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_trxs = (function compevent$core$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51322){
var state_val_51323 = (state_51322[(1)]);
if((state_val_51323 === (1))){
var inst_51318 = compevent.core._LT_get_tx_with_receipt(x);
var state_51322__$1 = state_51322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51322__$1,(2),inst_51318);
} else {
if((state_val_51323 === (2))){
var inst_51320 = (state_51322[(2)]);
var state_51322__$1 = state_51322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51322__$1,inst_51320);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0 = (function (){
var statearr_51324 = [null,null,null,null,null,null,null];
(statearr_51324[(0)] = compevent$core$_LT_get_trxs_$_state_machine__38756__auto__);

(statearr_51324[(1)] = (1));

return statearr_51324;
});
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1 = (function (state_51322){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51322);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51325){var ex__38759__auto__ = e51325;
var statearr_51326_51921 = state_51322;
(statearr_51326_51921[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51322[(4)]))){
var statearr_51327_51922 = state_51322;
(statearr_51327_51922[(1)] = cljs.core.first((state_51322[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51923 = state_51322;
state_51322 = G__51923;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = function(state_51322){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1.call(this,state_51322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0;
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51328 = f__38848__auto__();
(statearr_51328[(6)] = c__38847__auto__);

return statearr_51328;
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
var G__51329 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1));
var G__51330 = false;
return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(G__51329,G__51330) : compevent.core.render_compound_history.call(null,G__51329,G__51330));
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51360){
var state_val_51361 = (state_51360[(1)]);
if((state_val_51361 === (7))){
var inst_51342 = (state_51360[(7)]);
var inst_51349 = (function(){throw inst_51342})();
var state_51360__$1 = state_51360;
var statearr_51362_51924 = state_51360__$1;
(statearr_51362_51924[(2)] = inst_51349);

(statearr_51362_51924[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (1))){
var state_51360__$1 = state_51360;
var statearr_51363_51925 = state_51360__$1;
(statearr_51363_51925[(2)] = null);

(statearr_51363_51925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (4))){
var inst_51331 = (state_51360[(2)]);
var inst_51332 = console.log("Could not enable web3 in browser",inst_51331);
var state_51360__$1 = state_51360;
var statearr_51364_51926 = state_51360__$1;
(statearr_51364_51926[(2)] = inst_51332);

(statearr_51364_51926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (6))){
var inst_51342 = (state_51360[(7)]);
var inst_51342__$1 = (state_51360[(2)]);
var inst_51343 = (inst_51342__$1 instanceof cljs.core.ExceptionInfo);
var inst_51344 = cljs.core.ex_data(inst_51342__$1);
var inst_51345 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51344);
var inst_51346 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51345,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51347 = ((inst_51343) && (inst_51346));
var state_51360__$1 = (function (){var statearr_51365 = state_51360;
(statearr_51365[(7)] = inst_51342__$1);

return statearr_51365;
})();
if(cljs.core.truth_(inst_51347)){
var statearr_51366_51927 = state_51360__$1;
(statearr_51366_51927[(1)] = (7));

} else {
var statearr_51367_51928 = state_51360__$1;
(statearr_51367_51928[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (3))){
var inst_51358 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51360__$1,inst_51358);
} else {
if((state_val_51361 === (2))){
var _ = (function (){var statearr_51369 = state_51360;
(statearr_51369[(4)] = cljs.core.cons((5),(state_51360[(4)])));

return statearr_51369;
})();
var inst_51338 = window.ethereum;
var inst_51339 = inst_51338.enable();
var inst_51340 = cljs.core.async.interop.p__GT_c(inst_51339);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51360__$1,(6),inst_51340);
} else {
if((state_val_51361 === (9))){
var inst_51352 = (state_51360[(2)]);
var inst_51353 = cljs.core.first(inst_51352);
var inst_51354 = console.log("connected-account",inst_51353);
var inst_51355 = (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(inst_51353,true) : compevent.core.render_compound_history.call(null,inst_51353,true));
var _ = (function (){var statearr_51370 = state_51360;
(statearr_51370[(4)] = cljs.core.rest((state_51360[(4)])));

return statearr_51370;
})();
var state_51360__$1 = (function (){var statearr_51371 = state_51360;
(statearr_51371[(8)] = inst_51354);

return statearr_51371;
})();
var statearr_51372_51929 = state_51360__$1;
(statearr_51372_51929[(2)] = inst_51355);

(statearr_51372_51929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (5))){
var _ = (function (){var statearr_51373 = state_51360;
(statearr_51373[(4)] = cljs.core.rest((state_51360[(4)])));

return statearr_51373;
})();
var state_51360__$1 = state_51360;
var ex51368 = (state_51360__$1[(2)]);
var statearr_51374_51930 = state_51360__$1;
(statearr_51374_51930[(5)] = ex51368);


if((ex51368 instanceof Error)){
var statearr_51375_51931 = state_51360__$1;
(statearr_51375_51931[(1)] = (4));

(statearr_51375_51931[(5)] = null);

} else {
throw ex51368;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (8))){
var inst_51342 = (state_51360[(7)]);
var state_51360__$1 = state_51360;
var statearr_51376_51932 = state_51360__$1;
(statearr_51376_51932[(2)] = inst_51342);

(statearr_51376_51932[(1)] = (9));


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
var statearr_51377 = [null,null,null,null,null,null,null,null,null];
(statearr_51377[(0)] = compevent$core$web3_connect_$_state_machine__38756__auto__);

(statearr_51377[(1)] = (1));

return statearr_51377;
});
var compevent$core$web3_connect_$_state_machine__38756__auto____1 = (function (state_51360){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51360);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51378){var ex__38759__auto__ = e51378;
var statearr_51379_51933 = state_51360;
(statearr_51379_51933[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51360[(4)]))){
var statearr_51380_51934 = state_51360;
(statearr_51380_51934[(1)] = cljs.core.first((state_51360[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51935 = state_51360;
state_51360 = G__51935;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$web3_connect_$_state_machine__38756__auto__ = function(state_51360){
switch(arguments.length){
case 0:
return compevent$core$web3_connect_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$web3_connect_$_state_machine__38756__auto____1.call(this,state_51360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$web3_connect_$_state_machine__38756__auto____0;
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$web3_connect_$_state_machine__38756__auto____1;
return compevent$core$web3_connect_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51381 = f__38848__auto__();
(statearr_51381[(6)] = c__38847__auto__);

return statearr_51381;
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
var input_51936 = compevent.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""));
compevent.core.app_main = (function compevent$core$app_main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Compound account history charts",(((compevent.core.provider == null))?" Requires Web3":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((!((compevent.core.provider == null))))?input_51936:null),(((cljs.core.count(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))) > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),cljs.core.butlast(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-flicker"], null),cljs.core.last(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null):null),new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))], null);
});
compevent.core.block_num__GT_ts = (function compevent$core$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51382_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51382_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
compevent.core.ts__GT_geckoprice = (function compevent$core$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51383_SHARP_){
return (cljs.core.first(p1__51383_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51384_SHARP_){
return (cljs.core.first(p1__51384_SHARP_) > ts);
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51397){
var state_val_51398 = (state_51397[(1)]);
if((state_val_51398 === (1))){
var inst_51385 = (state_51397[(7)]);
var inst_51385__$1 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_51386 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51387 = [false];
var inst_51388 = cljs.core.PersistentHashMap.fromArrays(inst_51386,inst_51387);
var inst_51389 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51385__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51388], 0));
var state_51397__$1 = (function (){var statearr_51399 = state_51397;
(statearr_51399[(7)] = inst_51385__$1);

return statearr_51399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51397__$1,(2),inst_51389);
} else {
if((state_val_51398 === (2))){
var inst_51385 = (state_51397[(7)]);
var inst_51391 = (state_51397[(2)]);
var inst_51392 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51391);
var inst_51393 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_51392);
var inst_51394 = (function (){var base_url = inst_51385;
var full_url = inst_51385;
var data = inst_51393;
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x),compevent.core.bn(cljs.core.second(x))], null);
});
})();
var inst_51395 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_51394,inst_51393);
var state_51397__$1 = state_51397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51397__$1,inst_51395);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0 = (function (){
var statearr_51400 = [null,null,null,null,null,null,null,null];
(statearr_51400[(0)] = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__);

(statearr_51400[(1)] = (1));

return statearr_51400;
});
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1 = (function (state_51397){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51397);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51401){var ex__38759__auto__ = e51401;
var statearr_51402_51937 = state_51397;
(statearr_51402_51937[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51397[(4)]))){
var statearr_51403_51938 = state_51397;
(statearr_51403_51938[(1)] = cljs.core.first((state_51397[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51939 = state_51397;
state_51397 = G__51939;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = function(state_51397){
switch(arguments.length){
case 0:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1.call(this,state_51397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0;
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1;
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51404 = f__38848__auto__();
(statearr_51404[(6)] = c__38847__auto__);

return statearr_51404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_dollarize_liquidations = (function compevent$core$_LT_dollarize_liquidations(liquidations,token){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51417){
var state_val_51418 = (state_51417[(1)]);
if((state_val_51418 === (1))){
var inst_51405 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_51406 = cljs.core.set(inst_51405);
var inst_51407 = compevent.core._LT_fetch_blocks(inst_51406);
var state_51417__$1 = state_51417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51417__$1,(2),inst_51407);
} else {
if((state_val_51418 === (2))){
var inst_51409 = (state_51417[(2)]);
var inst_51410 = compevent.core.token__GT_address(token);
var inst_51411 = compevent.core._LT_historic_gecko_prices(inst_51410);
var state_51417__$1 = (function (){var statearr_51419 = state_51417;
(statearr_51419[(7)] = inst_51409);

return statearr_51419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51417__$1,(3),inst_51411);
} else {
if((state_val_51418 === (3))){
var inst_51409 = (state_51417[(7)]);
var inst_51413 = (state_51417[(2)]);
var inst_51414 = (function (){var liq_blocks = inst_51409;
var day_prices = inst_51413;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),compevent.core.bn(compevent.core.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_51415 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_51414,liquidations);
var state_51417__$1 = state_51417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51417__$1,inst_51415);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_51420 = [null,null,null,null,null,null,null,null];
(statearr_51420[(0)] = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__);

(statearr_51420[(1)] = (1));

return statearr_51420;
});
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1 = (function (state_51417){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51417);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51421){var ex__38759__auto__ = e51421;
var statearr_51422_51940 = state_51417;
(statearr_51422_51940[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51417[(4)]))){
var statearr_51423_51941 = state_51417;
(statearr_51423_51941[(1)] = cljs.core.first((state_51417[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51942 = state_51417;
state_51417 = G__51942;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = function(state_51417){
switch(arguments.length){
case 0:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1.call(this,state_51417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51424 = f__38848__auto__();
(statearr_51424[(6)] = c__38847__auto__);

return statearr_51424;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51440){
var state_val_51441 = (state_51440[(1)]);
if((state_val_51441 === (1))){
var inst_51425 = compevent.core.provider.getLogs(repay_filter);
var inst_51426 = cljs.core.async.interop.p__GT_c(inst_51425);
var state_51440__$1 = state_51440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51440__$1,(2),inst_51426);
} else {
if((state_val_51441 === (2))){
var inst_51428 = (state_51440[(7)]);
var inst_51428__$1 = (state_51440[(2)]);
var inst_51429 = (inst_51428__$1 instanceof cljs.core.ExceptionInfo);
var inst_51430 = cljs.core.ex_data(inst_51428__$1);
var inst_51431 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51430);
var inst_51432 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51431,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51433 = ((inst_51429) && (inst_51432));
var state_51440__$1 = (function (){var statearr_51442 = state_51440;
(statearr_51442[(7)] = inst_51428__$1);

return statearr_51442;
})();
if(cljs.core.truth_(inst_51433)){
var statearr_51443_51943 = state_51440__$1;
(statearr_51443_51943[(1)] = (3));

} else {
var statearr_51444_51944 = state_51440__$1;
(statearr_51444_51944[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51441 === (3))){
var inst_51428 = (state_51440[(7)]);
var inst_51435 = (function(){throw inst_51428})();
var state_51440__$1 = state_51440;
var statearr_51445_51945 = state_51440__$1;
(statearr_51445_51945[(2)] = inst_51435);

(statearr_51445_51945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51441 === (4))){
var inst_51428 = (state_51440[(7)]);
var state_51440__$1 = state_51440;
var statearr_51446_51946 = state_51440__$1;
(statearr_51446_51946[(2)] = inst_51428);

(statearr_51446_51946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51441 === (5))){
var inst_51438 = (state_51440[(2)]);
var state_51440__$1 = state_51440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51440__$1,inst_51438);
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
var statearr_51447 = [null,null,null,null,null,null,null,null];
(statearr_51447[(0)] = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__);

(statearr_51447[(1)] = (1));

return statearr_51447;
});
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1 = (function (state_51440){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51440);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51448){var ex__38759__auto__ = e51448;
var statearr_51449_51947 = state_51440;
(statearr_51449_51947[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51440[(4)]))){
var statearr_51450_51948 = state_51440;
(statearr_51450_51948[(1)] = cljs.core.first((state_51440[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51949 = state_51440;
state_51440 = G__51949;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = function(state_51440){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1.call(this,state_51440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51451 = f__38848__auto__();
(statearr_51451[(6)] = c__38847__auto__);

return statearr_51451;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51467){
var state_val_51468 = (state_51467[(1)]);
if((state_val_51468 === (1))){
var inst_51452 = compevent.core.provider.getLogs(liquidation_filter);
var inst_51453 = cljs.core.async.interop.p__GT_c(inst_51452);
var state_51467__$1 = state_51467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51467__$1,(2),inst_51453);
} else {
if((state_val_51468 === (2))){
var inst_51455 = (state_51467[(7)]);
var inst_51455__$1 = (state_51467[(2)]);
var inst_51456 = (inst_51455__$1 instanceof cljs.core.ExceptionInfo);
var inst_51457 = cljs.core.ex_data(inst_51455__$1);
var inst_51458 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51457);
var inst_51459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51458,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51460 = ((inst_51456) && (inst_51459));
var state_51467__$1 = (function (){var statearr_51469 = state_51467;
(statearr_51469[(7)] = inst_51455__$1);

return statearr_51469;
})();
if(cljs.core.truth_(inst_51460)){
var statearr_51470_51950 = state_51467__$1;
(statearr_51470_51950[(1)] = (3));

} else {
var statearr_51471_51951 = state_51467__$1;
(statearr_51471_51951[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51468 === (3))){
var inst_51455 = (state_51467[(7)]);
var inst_51462 = (function(){throw inst_51455})();
var state_51467__$1 = state_51467;
var statearr_51472_51952 = state_51467__$1;
(statearr_51472_51952[(2)] = inst_51462);

(statearr_51472_51952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51468 === (4))){
var inst_51455 = (state_51467[(7)]);
var state_51467__$1 = state_51467;
var statearr_51473_51953 = state_51467__$1;
(statearr_51473_51953[(2)] = inst_51455);

(statearr_51473_51953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51468 === (5))){
var inst_51465 = (state_51467[(2)]);
var state_51467__$1 = state_51467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51467__$1,inst_51465);
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
var statearr_51474 = [null,null,null,null,null,null,null,null];
(statearr_51474[(0)] = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__);

(statearr_51474[(1)] = (1));

return statearr_51474;
});
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_51467){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51467);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51475){var ex__38759__auto__ = e51475;
var statearr_51476_51954 = state_51467;
(statearr_51476_51954[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51467[(4)]))){
var statearr_51477_51955 = state_51467;
(statearr_51477_51955[(1)] = cljs.core.first((state_51467[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51956 = state_51467;
state_51467 = G__51956;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = function(state_51467){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_51467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51478 = f__38848__auto__();
(statearr_51478[(6)] = c__38847__auto__);

return statearr_51478;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51494){
var state_val_51495 = (state_51494[(1)]);
if((state_val_51495 === (1))){
var inst_51479 = compevent.core.provider.getLogs(mint_filter);
var inst_51480 = cljs.core.async.interop.p__GT_c(inst_51479);
var state_51494__$1 = state_51494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51494__$1,(2),inst_51480);
} else {
if((state_val_51495 === (2))){
var inst_51482 = (state_51494[(7)]);
var inst_51482__$1 = (state_51494[(2)]);
var inst_51483 = (inst_51482__$1 instanceof cljs.core.ExceptionInfo);
var inst_51484 = cljs.core.ex_data(inst_51482__$1);
var inst_51485 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51484);
var inst_51486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51485,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51487 = ((inst_51483) && (inst_51486));
var state_51494__$1 = (function (){var statearr_51496 = state_51494;
(statearr_51496[(7)] = inst_51482__$1);

return statearr_51496;
})();
if(cljs.core.truth_(inst_51487)){
var statearr_51497_51957 = state_51494__$1;
(statearr_51497_51957[(1)] = (3));

} else {
var statearr_51498_51958 = state_51494__$1;
(statearr_51498_51958[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51495 === (3))){
var inst_51482 = (state_51494[(7)]);
var inst_51489 = (function(){throw inst_51482})();
var state_51494__$1 = state_51494;
var statearr_51499_51959 = state_51494__$1;
(statearr_51499_51959[(2)] = inst_51489);

(statearr_51499_51959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51495 === (4))){
var inst_51482 = (state_51494[(7)]);
var state_51494__$1 = state_51494;
var statearr_51500_51960 = state_51494__$1;
(statearr_51500_51960[(2)] = inst_51482);

(statearr_51500_51960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51495 === (5))){
var inst_51492 = (state_51494[(2)]);
var state_51494__$1 = state_51494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51494__$1,inst_51492);
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
var statearr_51501 = [null,null,null,null,null,null,null,null];
(statearr_51501[(0)] = compevent$core$_LT_comp_mints_$_state_machine__38756__auto__);

(statearr_51501[(1)] = (1));

return statearr_51501;
});
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1 = (function (state_51494){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51494);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51502){var ex__38759__auto__ = e51502;
var statearr_51503_51961 = state_51494;
(statearr_51503_51961[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51494[(4)]))){
var statearr_51504_51962 = state_51494;
(statearr_51504_51962[(1)] = cljs.core.first((state_51494[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51963 = state_51494;
state_51494 = G__51963;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = function(state_51494){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1.call(this,state_51494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51505 = f__38848__auto__();
(statearr_51505[(6)] = c__38847__auto__);

return statearr_51505;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51521){
var state_val_51522 = (state_51521[(1)]);
if((state_val_51522 === (1))){
var inst_51506 = compevent.core.provider.getLogs(borrow_filter);
var inst_51507 = cljs.core.async.interop.p__GT_c(inst_51506);
var state_51521__$1 = state_51521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51521__$1,(2),inst_51507);
} else {
if((state_val_51522 === (2))){
var inst_51509 = (state_51521[(7)]);
var inst_51509__$1 = (state_51521[(2)]);
var inst_51510 = (inst_51509__$1 instanceof cljs.core.ExceptionInfo);
var inst_51511 = cljs.core.ex_data(inst_51509__$1);
var inst_51512 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51511);
var inst_51513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51512,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51514 = ((inst_51510) && (inst_51513));
var state_51521__$1 = (function (){var statearr_51523 = state_51521;
(statearr_51523[(7)] = inst_51509__$1);

return statearr_51523;
})();
if(cljs.core.truth_(inst_51514)){
var statearr_51524_51964 = state_51521__$1;
(statearr_51524_51964[(1)] = (3));

} else {
var statearr_51525_51965 = state_51521__$1;
(statearr_51525_51965[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (3))){
var inst_51509 = (state_51521[(7)]);
var inst_51516 = (function(){throw inst_51509})();
var state_51521__$1 = state_51521;
var statearr_51526_51966 = state_51521__$1;
(statearr_51526_51966[(2)] = inst_51516);

(statearr_51526_51966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (4))){
var inst_51509 = (state_51521[(7)]);
var state_51521__$1 = state_51521;
var statearr_51527_51967 = state_51521__$1;
(statearr_51527_51967[(2)] = inst_51509);

(statearr_51527_51967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51522 === (5))){
var inst_51519 = (state_51521[(2)]);
var state_51521__$1 = state_51521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51521__$1,inst_51519);
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
var statearr_51528 = [null,null,null,null,null,null,null,null];
(statearr_51528[(0)] = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__);

(statearr_51528[(1)] = (1));

return statearr_51528;
});
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1 = (function (state_51521){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51521);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51529){var ex__38759__auto__ = e51529;
var statearr_51530_51968 = state_51521;
(statearr_51530_51968[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51521[(4)]))){
var statearr_51531_51969 = state_51521;
(statearr_51531_51969[(1)] = cljs.core.first((state_51521[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51970 = state_51521;
state_51521 = G__51970;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = function(state_51521){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1.call(this,state_51521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51532 = f__38848__auto__();
(statearr_51532[(6)] = c__38847__auto__);

return statearr_51532;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51548){
var state_val_51549 = (state_51548[(1)]);
if((state_val_51549 === (1))){
var inst_51533 = compevent.core.provider.getLogs(redeem_filter);
var inst_51534 = cljs.core.async.interop.p__GT_c(inst_51533);
var state_51548__$1 = state_51548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51548__$1,(2),inst_51534);
} else {
if((state_val_51549 === (2))){
var inst_51536 = (state_51548[(7)]);
var inst_51536__$1 = (state_51548[(2)]);
var inst_51537 = (inst_51536__$1 instanceof cljs.core.ExceptionInfo);
var inst_51538 = cljs.core.ex_data(inst_51536__$1);
var inst_51539 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51538);
var inst_51540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51539,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51541 = ((inst_51537) && (inst_51540));
var state_51548__$1 = (function (){var statearr_51550 = state_51548;
(statearr_51550[(7)] = inst_51536__$1);

return statearr_51550;
})();
if(cljs.core.truth_(inst_51541)){
var statearr_51551_51971 = state_51548__$1;
(statearr_51551_51971[(1)] = (3));

} else {
var statearr_51552_51972 = state_51548__$1;
(statearr_51552_51972[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (3))){
var inst_51536 = (state_51548[(7)]);
var inst_51543 = (function(){throw inst_51536})();
var state_51548__$1 = state_51548;
var statearr_51553_51973 = state_51548__$1;
(statearr_51553_51973[(2)] = inst_51543);

(statearr_51553_51973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (4))){
var inst_51536 = (state_51548[(7)]);
var state_51548__$1 = state_51548;
var statearr_51554_51974 = state_51548__$1;
(statearr_51554_51974[(2)] = inst_51536);

(statearr_51554_51974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51549 === (5))){
var inst_51546 = (state_51548[(2)]);
var state_51548__$1 = state_51548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51548__$1,inst_51546);
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
var statearr_51555 = [null,null,null,null,null,null,null,null];
(statearr_51555[(0)] = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__);

(statearr_51555[(1)] = (1));

return statearr_51555;
});
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1 = (function (state_51548){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51548);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51556){var ex__38759__auto__ = e51556;
var statearr_51557_51975 = state_51548;
(statearr_51557_51975[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51548[(4)]))){
var statearr_51558_51976 = state_51548;
(statearr_51558_51976[(1)] = cljs.core.first((state_51548[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51977 = state_51548;
state_51548 = G__51977;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = function(state_51548){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1.call(this,state_51548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51559 = f__38848__auto__();
(statearr_51559[(6)] = c__38847__auto__);

return statearr_51559;
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
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51560_SHARP_){
var G__51561 = caddress;
var G__51562 = p1__51560_SHARP_;
var G__51563 = (p1__51560_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__51561,G__51562,G__51563) : logsfn.call(null,G__51561,G__51562,G__51563));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
compevent.core._LT_pfetch_comp_logs = (function compevent$core$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51571){
var state_val_51572 = (state_51571[(1)]);
if((state_val_51572 === (1))){
var inst_51565 = compevent.core._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_51571__$1 = state_51571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51571__$1,(2),inst_51565);
} else {
if((state_val_51572 === (2))){
var inst_51567 = (state_51571[(2)]);
var inst_51568 = (function (){var fetched_logs = inst_51567;
return (function (p1__51564_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__51564_SHARP_,decimals) : parsefn.call(null,p1__51564_SHARP_,decimals));
});
})();
var inst_51569 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_51568,inst_51567);
var state_51571__$1 = state_51571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51571__$1,inst_51569);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0 = (function (){
var statearr_51573 = [null,null,null,null,null,null,null];
(statearr_51573[(0)] = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__);

(statearr_51573[(1)] = (1));

return statearr_51573;
});
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1 = (function (state_51571){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51571);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51574){var ex__38759__auto__ = e51574;
var statearr_51575_51978 = state_51571;
(statearr_51575_51978[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51571[(4)]))){
var statearr_51576_51979 = state_51571;
(statearr_51576_51979[(1)] = cljs.core.first((state_51571[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51980 = state_51571;
state_51571 = G__51980;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = function(state_51571){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1.call(this,state_51571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51577 = f__38848__auto__();
(statearr_51577[(6)] = c__38847__auto__);

return statearr_51577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_repayments = (function compevent$core$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51582){
var state_val_51583 = (state_51582[(1)]);
if((state_val_51583 === (1))){
var inst_51578 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_repayments,compevent.core.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_51582__$1 = state_51582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51582__$1,(2),inst_51578);
} else {
if((state_val_51583 === (2))){
var inst_51580 = (state_51582[(2)]);
var state_51582__$1 = state_51582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51582__$1,inst_51580);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_51584 = [null,null,null,null,null,null,null];
(statearr_51584[(0)] = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__);

(statearr_51584[(1)] = (1));

return statearr_51584;
});
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1 = (function (state_51582){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51582);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51585){var ex__38759__auto__ = e51585;
var statearr_51586_51981 = state_51582;
(statearr_51586_51981[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51582[(4)]))){
var statearr_51587_51982 = state_51582;
(statearr_51587_51982[(1)] = cljs.core.first((state_51582[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51983 = state_51582;
state_51582 = G__51983;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = function(state_51582){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1.call(this,state_51582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51588 = f__38848__auto__();
(statearr_51588[(6)] = c__38847__auto__);

return statearr_51588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_mints = (function compevent$core$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51593){
var state_val_51594 = (state_51593[(1)]);
if((state_val_51594 === (1))){
var inst_51589 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_mints,compevent.core.make_comp_mint,caddress,start_block,end_block,decimals);
var state_51593__$1 = state_51593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51593__$1,(2),inst_51589);
} else {
if((state_val_51594 === (2))){
var inst_51591 = (state_51593[(2)]);
var state_51593__$1 = state_51593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51593__$1,inst_51591);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_51595 = [null,null,null,null,null,null,null];
(statearr_51595[(0)] = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__);

(statearr_51595[(1)] = (1));

return statearr_51595;
});
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1 = (function (state_51593){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51593);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51596){var ex__38759__auto__ = e51596;
var statearr_51597_51984 = state_51593;
(statearr_51597_51984[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51593[(4)]))){
var statearr_51598_51985 = state_51593;
(statearr_51598_51985[(1)] = cljs.core.first((state_51593[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51986 = state_51593;
state_51593 = G__51986;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = function(state_51593){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1.call(this,state_51593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51599 = f__38848__auto__();
(statearr_51599[(6)] = c__38847__auto__);

return statearr_51599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_liquidations = (function compevent$core$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51604){
var state_val_51605 = (state_51604[(1)]);
if((state_val_51605 === (1))){
var inst_51600 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_liquidations,compevent.core.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51604__$1,(2),inst_51600);
} else {
if((state_val_51605 === (2))){
var inst_51602 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51604__$1,inst_51602);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_51606 = [null,null,null,null,null,null,null];
(statearr_51606[(0)] = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__);

(statearr_51606[(1)] = (1));

return statearr_51606;
});
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_51604){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51604);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51607){var ex__38759__auto__ = e51607;
var statearr_51608_51987 = state_51604;
(statearr_51608_51987[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51604[(4)]))){
var statearr_51609_51988 = state_51604;
(statearr_51609_51988[(1)] = cljs.core.first((state_51604[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51989 = state_51604;
state_51604 = G__51989;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = function(state_51604){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_51604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51610 = f__38848__auto__();
(statearr_51610[(6)] = c__38847__auto__);

return statearr_51610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_borrows = (function compevent$core$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51615){
var state_val_51616 = (state_51615[(1)]);
if((state_val_51616 === (1))){
var inst_51611 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_borrows,compevent.core.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_51615__$1 = state_51615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51615__$1,(2),inst_51611);
} else {
if((state_val_51616 === (2))){
var inst_51613 = (state_51615[(2)]);
var state_51615__$1 = state_51615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51615__$1,inst_51613);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_51617 = [null,null,null,null,null,null,null];
(statearr_51617[(0)] = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__);

(statearr_51617[(1)] = (1));

return statearr_51617;
});
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1 = (function (state_51615){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51615);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51618){var ex__38759__auto__ = e51618;
var statearr_51619_51990 = state_51615;
(statearr_51619_51990[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51615[(4)]))){
var statearr_51620_51991 = state_51615;
(statearr_51620_51991[(1)] = cljs.core.first((state_51615[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51992 = state_51615;
state_51615 = G__51992;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = function(state_51615){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1.call(this,state_51615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51621 = f__38848__auto__();
(statearr_51621[(6)] = c__38847__auto__);

return statearr_51621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_redeems = (function compevent$core$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51626){
var state_val_51627 = (state_51626[(1)]);
if((state_val_51627 === (1))){
var inst_51622 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_redeems,compevent.core.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51626__$1,(2),inst_51622);
} else {
if((state_val_51627 === (2))){
var inst_51624 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51626__$1,inst_51624);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_51628 = [null,null,null,null,null,null,null];
(statearr_51628[(0)] = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__);

(statearr_51628[(1)] = (1));

return statearr_51628;
});
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1 = (function (state_51626){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51626);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51629){var ex__38759__auto__ = e51629;
var statearr_51630_51993 = state_51626;
(statearr_51630_51993[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51626[(4)]))){
var statearr_51631_51994 = state_51626;
(statearr_51631_51994[(1)] = cljs.core.first((state_51626[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51995 = state_51626;
state_51626 = G__51995;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = function(state_51626){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1.call(this,state_51626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51632 = f__38848__auto__();
(statearr_51632[(6)] = c__38847__auto__);

return statearr_51632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_ctoken_events = (function compevent$core$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51651){
var state_val_51652 = (state_51651[(1)]);
if((state_val_51652 === (1))){
var inst_51633 = compevent.core._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_51651__$1 = state_51651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51651__$1,(2),inst_51633);
} else {
if((state_val_51652 === (2))){
var inst_51635 = (state_51651[(2)]);
var inst_51636 = compevent.core._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_51651__$1 = (function (){var statearr_51653 = state_51651;
(statearr_51653[(7)] = inst_51635);

return statearr_51653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51651__$1,(3),inst_51636);
} else {
if((state_val_51652 === (3))){
var inst_51638 = (state_51651[(2)]);
var inst_51639 = compevent.core._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_51651__$1 = (function (){var statearr_51654 = state_51651;
(statearr_51654[(8)] = inst_51638);

return statearr_51654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51651__$1,(4),inst_51639);
} else {
if((state_val_51652 === (4))){
var inst_51641 = (state_51651[(2)]);
var inst_51642 = compevent.core._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_51651__$1 = (function (){var statearr_51655 = state_51651;
(statearr_51655[(9)] = inst_51641);

return statearr_51655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51651__$1,(5),inst_51642);
} else {
if((state_val_51652 === (5))){
var inst_51644 = (state_51651[(2)]);
var inst_51645 = compevent.core._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_51651__$1 = (function (){var statearr_51656 = state_51651;
(statearr_51656[(10)] = inst_51644);

return statearr_51656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51651__$1,(6),inst_51645);
} else {
if((state_val_51652 === (6))){
var inst_51638 = (state_51651[(8)]);
var inst_51635 = (state_51651[(7)]);
var inst_51641 = (state_51651[(9)]);
var inst_51644 = (state_51651[(10)]);
var inst_51647 = (state_51651[(2)]);
var inst_51648 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_51635,inst_51638,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51641,inst_51644,inst_51647], 0));
var inst_51649 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_51648);
var state_51651__$1 = state_51651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51651__$1,inst_51649);
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
var statearr_51657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51657[(0)] = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__);

(statearr_51657[(1)] = (1));

return statearr_51657;
});
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1 = (function (state_51651){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51651);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51658){var ex__38759__auto__ = e51658;
var statearr_51659_51996 = state_51651;
(statearr_51659_51996[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51651[(4)]))){
var statearr_51660_51997 = state_51651;
(statearr_51660_51997[(1)] = cljs.core.first((state_51651[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51998 = state_51651;
state_51651 = G__51998;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = function(state_51651){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1.call(this,state_51651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51661 = f__38848__auto__();
(statearr_51661[(6)] = c__38847__auto__);

return statearr_51661;
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
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51662_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__51662_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.token_supply_underlying = (function compevent$core$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51663_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__51663_SHARP_),token);
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
var len__4736__auto___51999 = arguments.length;
var i__4737__auto___52000 = (0);
while(true){
if((i__4737__auto___52000 < len__4736__auto___51999)){
args__4742__auto__.push((arguments[i__4737__auto___52000]));

var G__52001 = (i__4737__auto___52000 + (1));
i__4737__auto___52000 = G__52001;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__51666){
var map__51667 = p__51666;
var map__51667__$1 = (((((!((map__51667 == null))))?(((((map__51667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51667):map__51667);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51667__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51689){
var state_val_51690 = (state_51689[(1)]);
if((state_val_51690 === (1))){
var inst_51669 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_51670 = [address,block_number];
var inst_51671 = cljs.core.PersistentHashMap.fromArrays(inst_51669,inst_51670);
var inst_51672 = cljs.core.clj__GT_js(inst_51671);
var inst_51673 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_51672);
var inst_51674 = cljs.core.async.interop.p__GT_c(inst_51673);
var state_51689__$1 = state_51689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51689__$1,(2),inst_51674);
} else {
if((state_val_51690 === (2))){
var inst_51676 = (state_51689[(7)]);
var inst_51676__$1 = (state_51689[(2)]);
var inst_51677 = (inst_51676__$1 instanceof cljs.core.ExceptionInfo);
var inst_51678 = cljs.core.ex_data(inst_51676__$1);
var inst_51679 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51678);
var inst_51680 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51679,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51681 = ((inst_51677) && (inst_51680));
var state_51689__$1 = (function (){var statearr_51691 = state_51689;
(statearr_51691[(7)] = inst_51676__$1);

return statearr_51691;
})();
if(cljs.core.truth_(inst_51681)){
var statearr_51692_52002 = state_51689__$1;
(statearr_51692_52002[(1)] = (3));

} else {
var statearr_51693_52003 = state_51689__$1;
(statearr_51693_52003[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51690 === (3))){
var inst_51676 = (state_51689[(7)]);
var inst_51683 = (function(){throw inst_51676})();
var state_51689__$1 = state_51689;
var statearr_51694_52004 = state_51689__$1;
(statearr_51694_52004[(2)] = inst_51683);

(statearr_51694_52004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51690 === (4))){
var inst_51676 = (state_51689[(7)]);
var state_51689__$1 = state_51689;
var statearr_51695_52005 = state_51689__$1;
(statearr_51695_52005[(2)] = inst_51676);

(statearr_51695_52005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51690 === (5))){
var inst_51686 = (state_51689[(2)]);
var inst_51687 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_51686);
var state_51689__$1 = state_51689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51689__$1,inst_51687);
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
var statearr_51696 = [null,null,null,null,null,null,null,null];
(statearr_51696[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_51696[(1)] = (1));

return statearr_51696;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_51689){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51689);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51697){var ex__38759__auto__ = e51697;
var statearr_51698_52006 = state_51689;
(statearr_51698_52006[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51689[(4)]))){
var statearr_51699_52007 = state_51689;
(statearr_51699_52007[(1)] = cljs.core.first((state_51689[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52008 = state_51689;
state_51689 = G__52008;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_51689){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_51689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51700 = f__38848__auto__();
(statearr_51700[(6)] = c__38847__auto__);

return statearr_51700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(compevent.core._LT_account_state.cljs$lang$applyTo = (function (seq51664){
var G__51665 = cljs.core.first(seq51664);
var seq51664__$1 = cljs.core.next(seq51664);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51665,seq51664__$1);
}));

compevent.core._LT_account_states = (function compevent$core$_LT_account_states(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52009 = arguments.length;
var i__4737__auto___52010 = (0);
while(true){
if((i__4737__auto___52010 < len__4736__auto___52009)){
args__4742__auto__.push((arguments[i__4737__auto___52010]));

var G__52011 = (i__4737__auto___52010 + (1));
i__4737__auto___52010 = G__52011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic = (function (accounts,block_number,p__51705){
var map__51706 = p__51705;
var map__51706__$1 = (((((!((map__51706 == null))))?(((((map__51706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51706):map__51706);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51706__$1,new cljs.core.Keyword(null,"raw","raw",1604651272),false);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51736){
var state_val_51737 = (state_51736[(1)]);
if((state_val_51737 === (1))){
var inst_51708 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"page_size","page_size",-1574119768),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_51709 = [accounts,(1000),block_number];
var inst_51710 = cljs.core.PersistentHashMap.fromArrays(inst_51708,inst_51709);
var inst_51711 = cljs.core.clj__GT_js(inst_51710);
var inst_51712 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_51711);
var inst_51713 = cljs.core.async.interop.p__GT_c(inst_51712);
var state_51736__$1 = state_51736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51736__$1,(2),inst_51713);
} else {
if((state_val_51737 === (2))){
var inst_51715 = (state_51736[(7)]);
var inst_51715__$1 = (state_51736[(2)]);
var inst_51716 = (inst_51715__$1 instanceof cljs.core.ExceptionInfo);
var inst_51717 = cljs.core.ex_data(inst_51715__$1);
var inst_51718 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51717);
var inst_51719 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51718,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_51720 = ((inst_51716) && (inst_51719));
var state_51736__$1 = (function (){var statearr_51738 = state_51736;
(statearr_51738[(7)] = inst_51715__$1);

return statearr_51738;
})();
if(cljs.core.truth_(inst_51720)){
var statearr_51739_52012 = state_51736__$1;
(statearr_51739_52012[(1)] = (3));

} else {
var statearr_51740_52013 = state_51736__$1;
(statearr_51740_52013[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (3))){
var inst_51715 = (state_51736[(7)]);
var inst_51722 = (function(){throw inst_51715})();
var state_51736__$1 = state_51736;
var statearr_51741_52014 = state_51736__$1;
(statearr_51741_52014[(2)] = inst_51722);

(statearr_51741_52014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (4))){
var inst_51715 = (state_51736[(7)]);
var state_51736__$1 = state_51736;
var statearr_51742_52015 = state_51736__$1;
(statearr_51742_52015[(2)] = inst_51715);

(statearr_51742_52015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (5))){
var inst_51725 = (state_51736[(2)]);
var inst_51726 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_51725);
var inst_51727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51726,"accounts");
var inst_51728 = (function (){var resp = inst_51726;
var account_resps = inst_51727;
return (function (p1__51701_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__51701_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_51729 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_51728,inst_51727);
var state_51736__$1 = (function (){var statearr_51743 = state_51736;
(statearr_51743[(8)] = inst_51729);

return statearr_51743;
})();
if(cljs.core.truth_(raw)){
var statearr_51744_52016 = state_51736__$1;
(statearr_51744_52016[(1)] = (6));

} else {
var statearr_51745_52017 = state_51736__$1;
(statearr_51745_52017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (6))){
var state_51736__$1 = state_51736;
var statearr_51746_52018 = state_51736__$1;
(statearr_51746_52018[(2)] = cljs.core.identity);

(statearr_51746_52018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (7))){
var state_51736__$1 = state_51736;
var statearr_51747_52019 = state_51736__$1;
(statearr_51747_52019[(2)] = compevent.core.acc_state);

(statearr_51747_52019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (8))){
var inst_51729 = (state_51736[(8)]);
var inst_51733 = (state_51736[(2)]);
var inst_51734 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_51733,inst_51729);
var state_51736__$1 = state_51736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51736__$1,inst_51734);
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
var statearr_51748 = [null,null,null,null,null,null,null,null,null];
(statearr_51748[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_51748[(1)] = (1));

return statearr_51748;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_51736){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51736);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51749){var ex__38759__auto__ = e51749;
var statearr_51750_52020 = state_51736;
(statearr_51750_52020[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51736[(4)]))){
var statearr_51751_52021 = state_51736;
(statearr_51751_52021[(1)] = cljs.core.first((state_51736[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52022 = state_51736;
state_51736 = G__52022;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_51736){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_51736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51752 = f__38848__auto__();
(statearr_51752[(6)] = c__38847__auto__);

return statearr_51752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_states.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core._LT_account_states.cljs$lang$applyTo = (function (seq51702){
var G__51703 = cljs.core.first(seq51702);
var seq51702__$1 = cljs.core.next(seq51702);
var G__51704 = cljs.core.first(seq51702__$1);
var seq51702__$2 = cljs.core.next(seq51702__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51703,G__51704,seq51702__$2);
}));

compevent.core._LT_account_state_range = (function compevent$core$_LT_account_state_range(accounts,start_block,end_block,block_step){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51753_SHARP_){
return compevent.core._LT_account_states(accounts,p1__51753_SHARP_);
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
var G__52023 = cljs.core.rest(rewards_txs);
var G__52024 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__52023;
data_points = G__52024;
continue;
}
break;
}
});
compevent.core._LT_gov_account = (function compevent$core$_LT_gov_account(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51764){
var state_val_51765 = (state_51764[(1)]);
if((state_val_51765 === (1))){
var inst_51754 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_51755 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51754),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_51756 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51757 = [false];
var inst_51758 = cljs.core.PersistentHashMap.fromArrays(inst_51756,inst_51757);
var inst_51759 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51755,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51758], 0));
var state_51764__$1 = state_51764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51764__$1,(2),inst_51759);
} else {
if((state_val_51765 === (2))){
var inst_51761 = (state_51764[(2)]);
var inst_51762 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51761);
var state_51764__$1 = state_51764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51764__$1,inst_51762);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____0 = (function (){
var statearr_51766 = [null,null,null,null,null,null,null];
(statearr_51766[(0)] = compevent$core$_LT_gov_account_$_state_machine__38756__auto__);

(statearr_51766[(1)] = (1));

return statearr_51766;
});
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____1 = (function (state_51764){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51764);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51767){var ex__38759__auto__ = e51767;
var statearr_51768_52025 = state_51764;
(statearr_51768_52025[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51764[(4)]))){
var statearr_51769_52026 = state_51764;
(statearr_51769_52026[(1)] = cljs.core.first((state_51764[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52027 = state_51764;
state_51764 = G__52027;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = function(state_51764){
switch(arguments.length){
case 0:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____1.call(this,state_51764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____0;
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____1;
return compevent$core$_LT_gov_account_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51770 = f__38848__auto__();
(statearr_51770[(6)] = c__38847__auto__);

return statearr_51770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_compound_history = (function compevent$core$_LT_fetch_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51794){
var state_val_51795 = (state_51794[(1)]);
if((state_val_51795 === (1))){
var inst_51772 = compevent.core._LT_latest_block();
var state_51794__$1 = state_51794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51794__$1,(2),inst_51772);
} else {
if((state_val_51795 === (2))){
var inst_51774 = (state_51794[(7)]);
var inst_51774__$1 = (state_51794[(2)]);
var inst_51775 = (inst_51774__$1 - (1000000));
var inst_51776 = compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(compevent.core.provider,compevent.core.comp_address,compevent.core.comp_unitroller,account);
var state_51794__$1 = (function (){var statearr_51796 = state_51794;
(statearr_51796[(7)] = inst_51774__$1);

(statearr_51796[(8)] = inst_51775);

return statearr_51796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51794__$1,(3),inst_51776);
} else {
if((state_val_51795 === (3))){
var inst_51780 = (state_51794[(9)]);
var inst_51778 = (state_51794[(10)]);
var inst_51774 = (state_51794[(7)]);
var inst_51775 = (state_51794[(8)]);
var inst_51778__$1 = (state_51794[(2)]);
var inst_51779 = cljs.core.PersistentVector.EMPTY;
var inst_51780__$1 = compevent.core.accum_comp_rewards(inst_51778__$1,inst_51779);
var inst_51781 = (function (){var latest_block = inst_51774;
var init_block = inst_51775;
var comp_rewards = inst_51778__$1;
var comp_rewards_SINGLEQUOTE_ = inst_51780__$1;
return (function (dp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(dp),"Supplied",new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600).cljs$core$IFn$_invoke$arity$1(dp)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(dp),"Borrowed",new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713).cljs$core$IFn$_invoke$arity$1(dp)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),"Account Health",new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(dp)], null)], null);
});
})();
var inst_51782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51783 = [account];
var inst_51784 = (new cljs.core.PersistentVector(null,1,(5),inst_51782,inst_51783,null));
var inst_51785 = compevent.core._LT_account_state_range(inst_51784,inst_51775,inst_51774,(10000));
var state_51794__$1 = (function (){var statearr_51797 = state_51794;
(statearr_51797[(9)] = inst_51780__$1);

(statearr_51797[(10)] = inst_51778__$1);

(statearr_51797[(11)] = inst_51781);

return statearr_51797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51794__$1,(4),inst_51785);
} else {
if((state_val_51795 === (4))){
var inst_51780 = (state_51794[(9)]);
var inst_51778 = (state_51794[(10)]);
var inst_51781 = (state_51794[(11)]);
var inst_51774 = (state_51794[(7)]);
var inst_51775 = (state_51794[(8)]);
var inst_51787 = (state_51794[(2)]);
var inst_51788 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_51781,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51787], 0));
var inst_51789 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_51788);
var inst_51790 = (function (){var latest_block = inst_51774;
var init_block = inst_51775;
var comp_rewards = inst_51778;
var comp_rewards_SINGLEQUOTE_ = inst_51780;
var acc_history = inst_51789;
return (function (p1__51771_SHARP_){
return (((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__51771_SHARP_) <= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc_history)))) && ((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__51771_SHARP_) >= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.first(acc_history)))));
});
})();
var inst_51791 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_51790,inst_51780);
var inst_51792 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_51789,inst_51791);
var state_51794__$1 = state_51794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51794__$1,inst_51792);
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
var statearr_51798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51798[(0)] = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__);

(statearr_51798[(1)] = (1));

return statearr_51798;
});
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1 = (function (state_51794){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51794);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51799){var ex__38759__auto__ = e51799;
var statearr_51800_52028 = state_51794;
(statearr_51800_52028[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51794[(4)]))){
var statearr_51801_52029 = state_51794;
(statearr_51801_52029[(1)] = cljs.core.first((state_51794[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52030 = state_51794;
state_51794 = G__52030;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = function(state_51794){
switch(arguments.length){
case 0:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1.call(this,state_51794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0;
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1;
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51802 = f__38848__auto__();
(statearr_51802[(6)] = c__38847__auto__);

return statearr_51802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.historic_whale_layer = (function compevent$core$historic_whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52031 = arguments.length;
var i__4737__auto___52032 = (0);
while(true){
if((i__4737__auto___52032 < len__4736__auto___52031)){
args__4742__auto__.push((arguments[i__4737__auto___52032]));

var G__52033 = (i__4737__auto___52032 + (1));
i__4737__auto___52032 = G__52033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__51807){
var map__51808 = p__51807;
var map__51808__$1 = (((((!((map__51808 == null))))?(((((map__51808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51808):map__51808);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51808__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51808__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51808__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51808__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
var show_rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51808__$1,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(75),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(10),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainMin","domainMin",1827225240),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"side",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Account Health","Supplied","Borrowed","Claimed Rewards"
], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","#706897","#fd3a69","#5aa469"
], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(compevent.core.historic_whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core.historic_whale_layer.cljs$lang$applyTo = (function (seq51804){
var G__51805 = cljs.core.first(seq51804);
var seq51804__$1 = cljs.core.next(seq51804);
var G__51806 = cljs.core.first(seq51804__$1);
var seq51804__$2 = cljs.core.next(seq51804__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51805,G__51806,seq51804__$2);
}));

compevent.core.make_whale_history_plot = (function compevent$core$make_whale_history_plot(line_points,address){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)," Compound history"].join(''),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"middle",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),2.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),"ETH Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(150000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dai","dai",659273042),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sai","sai",1975712840),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sai","sai",1975712840),"SAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat","bat",607903974),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"bat","bat",607903974),"BAT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),"WBTC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comp","comp",1191953630),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp","comp",1191953630),"COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uni","uni",-1194876440),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uni","uni",-1194876440),"UNI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zrx","zrx",955760380),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"zrx","zrx",955760380),"ZRX",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rep","rep",-1226820564),"REP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdc","usdc",-457089155),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdt","usdt",999447714),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdt","usdt",999447714),"USDT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eth","eth",1381694970),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth","eth",1381694970),"ETH",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),"Claimed COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true], 0))], null))], null);
});
compevent.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
compevent.core.render_compound_history = (function compevent$core$render_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_51844){
var state_val_51845 = (state_51844[(1)]);
if((state_val_51845 === (1))){
var inst_51810 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_51811 = [null];
var inst_51812 = cljs.core.PersistentHashMap.fromArrays(inst_51810,inst_51811);
var inst_51813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_51812);
var inst_51814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51815 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_51816 = (new cljs.core.PersistentVector(null,1,(5),inst_51814,inst_51815,null));
var inst_51817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51818 = ["Fetching data ..."];
var inst_51819 = (new cljs.core.PersistentVector(null,1,(5),inst_51817,inst_51818,null));
var inst_51820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(compevent.core.app_state,cljs.core.update_in,inst_51816,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51819], 0));
var inst_51821 = compevent.core._LT_fetch_compound_history(account);
var state_51844__$1 = (function (){var statearr_51846 = state_51844;
(statearr_51846[(7)] = inst_51813);

(statearr_51846[(8)] = inst_51820);

return statearr_51846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51844__$1,(2),inst_51821);
} else {
if((state_val_51845 === (2))){
var inst_51823 = (state_51844[(2)]);
var inst_51824 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(compevent.core.float_num_values,inst_51823);
var inst_51825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51826 = [compevent.core.separator_str];
var inst_51827 = (new cljs.core.PersistentVector(null,1,(5),inst_51825,inst_51826,null));
var inst_51828 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compevent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steps","steps",-128433302),inst_51827);
var inst_51829 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_51830 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51833 = compevent.core.make_whale_history_plot(inst_51824,account);
var inst_51834 = [oz.core.vega_lite,inst_51833];
var inst_51835 = (new cljs.core.PersistentVector(null,2,(5),inst_51832,inst_51834,null));
var inst_51836 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_51835];
var inst_51837 = (new cljs.core.PersistentVector(null,2,(5),inst_51831,inst_51836,null));
var inst_51838 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_51837];
var inst_51839 = (new cljs.core.PersistentVector(null,2,(5),inst_51830,inst_51838,null));
var inst_51840 = [inst_51839];
var inst_51841 = cljs.core.PersistentHashMap.fromArrays(inst_51829,inst_51840);
var inst_51842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_51841);
var state_51844__$1 = (function (){var statearr_51847 = state_51844;
(statearr_51847[(9)] = inst_51828);

return statearr_51847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51844__$1,inst_51842);
} else {
return null;
}
}
});
return (function() {
var compevent$core$render_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$render_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_51848 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51848[(0)] = compevent$core$render_compound_history_$_state_machine__38756__auto__);

(statearr_51848[(1)] = (1));

return statearr_51848;
});
var compevent$core$render_compound_history_$_state_machine__38756__auto____1 = (function (state_51844){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_51844);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e51849){var ex__38759__auto__ = e51849;
var statearr_51850_52034 = state_51844;
(statearr_51850_52034[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_51844[(4)]))){
var statearr_51851_52035 = state_51844;
(statearr_51851_52035[(1)] = cljs.core.first((state_51844[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52036 = state_51844;
state_51844 = G__52036;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$render_compound_history_$_state_machine__38756__auto__ = function(state_51844){
switch(arguments.length){
case 0:
return compevent$core$render_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$render_compound_history_$_state_machine__38756__auto____1.call(this,state_51844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$render_compound_history_$_state_machine__38756__auto____0;
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$render_compound_history_$_state_machine__38756__auto____1;
return compevent$core$render_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_51852 = f__38848__auto__();
(statearr_51852[(6)] = c__38847__auto__);

return statearr_51852;
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
