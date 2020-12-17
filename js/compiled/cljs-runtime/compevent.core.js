goog.provide('compevent.core');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$$compound_finance$compound_js$dist$nodejs$index=shadow.js.require("module$node_modules$$compound_finance$compound_js$dist$nodejs$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
compevent.core.debug = false;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function compevent$core$float_num_values_$_iter__52051(s__52052){
return (new cljs.core.LazySeq(null,(function (){
var s__52052__$1 = s__52052;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52052__$1);
if(temp__5735__auto__){
var s__52052__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52052__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52052__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52054 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52053 = (0);
while(true){
if((i__52053 < size__4528__auto__)){
var vec__52055 = cljs.core._nth(c__4527__auto__,i__52053);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52055,(1),null);
cljs.core.chunk_append(b__52054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null));

var G__52849 = (i__52053 + (1));
i__52053 = G__52849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52054),compevent$core$float_num_values_$_iter__52051(cljs.core.chunk_rest(s__52052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52054),null);
}
} else {
var vec__52058 = cljs.core.first(s__52052__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52058,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null),compevent$core$float_num_values_$_iter__52051(cljs.core.rest(s__52052__$2)));
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52087){
var state_val_52088 = (state_52087[(1)]);
if((state_val_52088 === (7))){
var inst_52072 = (state_52087[(7)]);
var inst_52079 = (function(){throw inst_52072})();
var state_52087__$1 = state_52087;
var statearr_52089_52850 = state_52087__$1;
(statearr_52089_52850[(2)] = inst_52079);

(statearr_52089_52850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52088 === (1))){
var inst_52061 = compevent.core.make_erc20(address);
var state_52087__$1 = (function (){var statearr_52090 = state_52087;
(statearr_52090[(8)] = inst_52061);

return statearr_52090;
})();
var statearr_52091_52851 = state_52087__$1;
(statearr_52091_52851[(2)] = null);

(statearr_52091_52851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52088 === (4))){
var inst_52062 = (state_52087[(2)]);
var inst_52063 = console.log("No decimals method for:",address);
var state_52087__$1 = (function (){var statearr_52092 = state_52087;
(statearr_52092[(9)] = inst_52062);

(statearr_52092[(10)] = inst_52063);

return statearr_52092;
})();
var statearr_52093_52852 = state_52087__$1;
(statearr_52093_52852[(2)] = (18));

(statearr_52093_52852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52088 === (6))){
var inst_52072 = (state_52087[(7)]);
var inst_52072__$1 = (state_52087[(2)]);
var inst_52073 = (inst_52072__$1 instanceof cljs.core.ExceptionInfo);
var inst_52074 = cljs.core.ex_data(inst_52072__$1);
var inst_52075 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52074);
var inst_52076 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52075,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52077 = ((inst_52073) && (inst_52076));
var state_52087__$1 = (function (){var statearr_52094 = state_52087;
(statearr_52094[(7)] = inst_52072__$1);

return statearr_52094;
})();
if(cljs.core.truth_(inst_52077)){
var statearr_52095_52853 = state_52087__$1;
(statearr_52095_52853[(1)] = (7));

} else {
var statearr_52096_52854 = state_52087__$1;
(statearr_52096_52854[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52088 === (3))){
var inst_52085 = (state_52087[(2)]);
var state_52087__$1 = state_52087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52087__$1,inst_52085);
} else {
if((state_val_52088 === (2))){
var inst_52061 = (state_52087[(8)]);
var _ = (function (){var statearr_52098 = state_52087;
(statearr_52098[(4)] = cljs.core.cons((5),(state_52087[(4)])));

return statearr_52098;
})();
var inst_52069 = inst_52061.decimals();
var inst_52070 = cljs.core.async.interop.p__GT_c(inst_52069);
var state_52087__$1 = state_52087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52087__$1,(6),inst_52070);
} else {
if((state_val_52088 === (9))){
var inst_52082 = (state_52087[(2)]);
var _ = (function (){var statearr_52099 = state_52087;
(statearr_52099[(4)] = cljs.core.rest((state_52087[(4)])));

return statearr_52099;
})();
var state_52087__$1 = state_52087;
var statearr_52100_52855 = state_52087__$1;
(statearr_52100_52855[(2)] = inst_52082);

(statearr_52100_52855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52088 === (5))){
var _ = (function (){var statearr_52101 = state_52087;
(statearr_52101[(4)] = cljs.core.rest((state_52087[(4)])));

return statearr_52101;
})();
var state_52087__$1 = state_52087;
var ex52097 = (state_52087__$1[(2)]);
var statearr_52102_52856 = state_52087__$1;
(statearr_52102_52856[(5)] = ex52097);


if((ex52097 instanceof Error)){
var statearr_52103_52857 = state_52087__$1;
(statearr_52103_52857[(1)] = (4));

(statearr_52103_52857[(5)] = null);

} else {
throw ex52097;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52088 === (8))){
var inst_52072 = (state_52087[(7)]);
var state_52087__$1 = state_52087;
var statearr_52104_52858 = state_52087__$1;
(statearr_52104_52858[(2)] = inst_52072);

(statearr_52104_52858[(1)] = (9));


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
var statearr_52105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52105[(0)] = compevent$core$_LT_token_decimals_$_state_machine__38756__auto__);

(statearr_52105[(1)] = (1));

return statearr_52105;
});
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1 = (function (state_52087){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52087);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52106){var ex__38759__auto__ = e52106;
var statearr_52107_52859 = state_52087;
(statearr_52107_52859[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52087[(4)]))){
var statearr_52108_52860 = state_52087;
(statearr_52108_52860[(1)] = cljs.core.first((state_52087[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52861 = state_52087;
state_52087 = G__52861;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = function(state_52087){
switch(arguments.length){
case 0:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1.call(this,state_52087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0;
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1;
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52109 = f__38848__auto__();
(statearr_52109[(6)] = c__38847__auto__);

return statearr_52109;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52126){
var state_val_52127 = (state_52126[(1)]);
if((state_val_52127 === (1))){
var inst_52110 = compevent.core.provider.getBlockNumber();
var inst_52111 = cljs.core.async.interop.p__GT_c(inst_52110);
var state_52126__$1 = state_52126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52126__$1,(2),inst_52111);
} else {
if((state_val_52127 === (2))){
var inst_52113 = (state_52126[(7)]);
var inst_52113__$1 = (state_52126[(2)]);
var inst_52114 = (inst_52113__$1 instanceof cljs.core.ExceptionInfo);
var inst_52115 = cljs.core.ex_data(inst_52113__$1);
var inst_52116 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52115);
var inst_52117 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52116,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52118 = ((inst_52114) && (inst_52117));
var state_52126__$1 = (function (){var statearr_52128 = state_52126;
(statearr_52128[(7)] = inst_52113__$1);

return statearr_52128;
})();
if(cljs.core.truth_(inst_52118)){
var statearr_52129_52862 = state_52126__$1;
(statearr_52129_52862[(1)] = (3));

} else {
var statearr_52130_52863 = state_52126__$1;
(statearr_52130_52863[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52127 === (3))){
var inst_52113 = (state_52126[(7)]);
var inst_52120 = (function(){throw inst_52113})();
var state_52126__$1 = state_52126;
var statearr_52131_52864 = state_52126__$1;
(statearr_52131_52864[(2)] = inst_52120);

(statearr_52131_52864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52127 === (4))){
var inst_52113 = (state_52126[(7)]);
var state_52126__$1 = state_52126;
var statearr_52132_52865 = state_52126__$1;
(statearr_52132_52865[(2)] = inst_52113);

(statearr_52132_52865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52127 === (5))){
var inst_52123 = (state_52126[(2)]);
var inst_52124 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52123);
var state_52126__$1 = state_52126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52126__$1,inst_52124);
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
var statearr_52133 = [null,null,null,null,null,null,null,null];
(statearr_52133[(0)] = compevent$core$_LT_latest_block_$_state_machine__38756__auto__);

(statearr_52133[(1)] = (1));

return statearr_52133;
});
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____1 = (function (state_52126){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52126);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52134){var ex__38759__auto__ = e52134;
var statearr_52135_52866 = state_52126;
(statearr_52135_52866[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52126[(4)]))){
var statearr_52136_52867 = state_52126;
(statearr_52136_52867[(1)] = cljs.core.first((state_52126[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52868 = state_52126;
state_52126 = G__52868;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = function(state_52126){
switch(arguments.length){
case 0:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____1.call(this,state_52126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____0;
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_latest_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52137 = f__38848__auto__();
(statearr_52137[(6)] = c__38847__auto__);

return statearr_52137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_block = (function compevent$core$_LT_get_block(block_num){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52154){
var state_val_52155 = (state_52154[(1)]);
if((state_val_52155 === (1))){
var inst_52138 = compevent.core.provider.getBlock(block_num);
var inst_52139 = cljs.core.async.interop.p__GT_c(inst_52138);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52154__$1,(2),inst_52139);
} else {
if((state_val_52155 === (2))){
var inst_52141 = (state_52154[(7)]);
var inst_52141__$1 = (state_52154[(2)]);
var inst_52142 = (inst_52141__$1 instanceof cljs.core.ExceptionInfo);
var inst_52143 = cljs.core.ex_data(inst_52141__$1);
var inst_52144 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52143);
var inst_52145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52144,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52146 = ((inst_52142) && (inst_52145));
var state_52154__$1 = (function (){var statearr_52156 = state_52154;
(statearr_52156[(7)] = inst_52141__$1);

return statearr_52156;
})();
if(cljs.core.truth_(inst_52146)){
var statearr_52157_52869 = state_52154__$1;
(statearr_52157_52869[(1)] = (3));

} else {
var statearr_52158_52870 = state_52154__$1;
(statearr_52158_52870[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (3))){
var inst_52141 = (state_52154[(7)]);
var inst_52148 = (function(){throw inst_52141})();
var state_52154__$1 = state_52154;
var statearr_52159_52871 = state_52154__$1;
(statearr_52159_52871[(2)] = inst_52148);

(statearr_52159_52871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (4))){
var inst_52141 = (state_52154[(7)]);
var state_52154__$1 = state_52154;
var statearr_52160_52872 = state_52154__$1;
(statearr_52160_52872[(2)] = inst_52141);

(statearr_52160_52872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52155 === (5))){
var inst_52151 = (state_52154[(2)]);
var inst_52152 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52151);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52154__$1,inst_52152);
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
var statearr_52161 = [null,null,null,null,null,null,null,null];
(statearr_52161[(0)] = compevent$core$_LT_get_block_$_state_machine__38756__auto__);

(statearr_52161[(1)] = (1));

return statearr_52161;
});
var compevent$core$_LT_get_block_$_state_machine__38756__auto____1 = (function (state_52154){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52154);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52162){var ex__38759__auto__ = e52162;
var statearr_52163_52873 = state_52154;
(statearr_52163_52873[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52154[(4)]))){
var statearr_52164_52874 = state_52154;
(statearr_52164_52874[(1)] = cljs.core.first((state_52154[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52875 = state_52154;
state_52154 = G__52875;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_block_$_state_machine__38756__auto__ = function(state_52154){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____1.call(this,state_52154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_block_$_state_machine__38756__auto____0;
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52165 = f__38848__auto__();
(statearr_52165[(6)] = c__38847__auto__);

return statearr_52165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_blocks = (function compevent$core$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52166_SHARP_){
return compevent.core._LT_get_block(p1__52166_SHARP_);
}),block_numbers)));
});
compevent.core._LT_user_token_transfers = (function compevent$core$_LT_user_token_transfers(var_args){
var G__52169 = arguments.length;
switch (G__52169) {
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52172){
var state_val_52173 = (state_52172[(1)]);
if((state_val_52173 === (1))){
var inst_52170 = cljs.core.PersistentVector.EMPTY;
var state_52172__$1 = state_52172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52172__$1,inst_52170);
} else {
return null;
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_52174 = [null,null,null,null,null,null,null];
(statearr_52174[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_52174[(1)] = (1));

return statearr_52174;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_52172){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52172);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52175){var ex__38759__auto__ = e52175;
var statearr_52176_52877 = state_52172;
(statearr_52176_52877[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52172[(4)]))){
var statearr_52177_52878 = state_52172;
(statearr_52177_52878[(1)] = cljs.core.first((state_52172[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52879 = state_52172;
state_52172 = G__52879;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_52172){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_52172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52178 = f__38848__auto__();
(statearr_52178[(6)] = c__38847__auto__);

return statearr_52178;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52210){
var state_val_52211 = (state_52210[(1)]);
if((state_val_52211 === (7))){
var inst_52190 = (state_52210[(7)]);
var inst_52197 = (function(){throw inst_52190})();
var state_52210__$1 = state_52210;
var statearr_52212_52880 = state_52210__$1;
(statearr_52212_52880[(2)] = inst_52197);

(statearr_52212_52880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (1))){
var state_52210__$1 = state_52210;
var statearr_52213_52881 = state_52210__$1;
(statearr_52213_52881[(2)] = null);

(statearr_52213_52881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (4))){
var inst_52179 = (state_52210[(2)]);
var inst_52180 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_52181 = cljs.core.PersistentVector.EMPTY;
var state_52210__$1 = (function (){var statearr_52214 = state_52210;
(statearr_52214[(8)] = inst_52179);

(statearr_52214[(9)] = inst_52180);

return statearr_52214;
})();
var statearr_52215_52882 = state_52210__$1;
(statearr_52215_52882[(2)] = inst_52181);

(statearr_52215_52882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (6))){
var inst_52190 = (state_52210[(7)]);
var inst_52190__$1 = (state_52210[(2)]);
var inst_52191 = (inst_52190__$1 instanceof cljs.core.ExceptionInfo);
var inst_52192 = cljs.core.ex_data(inst_52190__$1);
var inst_52193 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52192);
var inst_52194 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52193,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52195 = ((inst_52191) && (inst_52194));
var state_52210__$1 = (function (){var statearr_52216 = state_52210;
(statearr_52216[(7)] = inst_52190__$1);

return statearr_52216;
})();
if(cljs.core.truth_(inst_52195)){
var statearr_52217_52883 = state_52210__$1;
(statearr_52217_52883[(1)] = (7));

} else {
var statearr_52218_52884 = state_52210__$1;
(statearr_52218_52884[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (3))){
var inst_52208 = (state_52210[(2)]);
var state_52210__$1 = state_52210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52210__$1,inst_52208);
} else {
if((state_val_52211 === (2))){
var ___$2 = (function (){var statearr_52220 = state_52210;
(statearr_52220[(4)] = cljs.core.cons((5),(state_52210[(4)])));

return statearr_52220;
})();
var inst_52187 = provider.getLogs(user_filter);
var inst_52188 = cljs.core.async.interop.p__GT_c(inst_52187);
var state_52210__$1 = state_52210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52210__$1,(6),inst_52188);
} else {
if((state_val_52211 === (9))){
var inst_52200 = (state_52210[(2)]);
var inst_52201 = compevent.core._LT_token_decimals(token_address);
var state_52210__$1 = (function (){var statearr_52221 = state_52210;
(statearr_52221[(10)] = inst_52200);

return statearr_52221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52210__$1,(10),inst_52201);
} else {
if((state_val_52211 === (5))){
var ___$2 = (function (){var statearr_52222 = state_52210;
(statearr_52222[(4)] = cljs.core.rest((state_52210[(4)])));

return statearr_52222;
})();
var state_52210__$1 = state_52210;
var ex52219 = (state_52210__$1[(2)]);
var statearr_52223_52885 = state_52210__$1;
(statearr_52223_52885[(5)] = ex52219);


if((ex52219 instanceof Error)){
var statearr_52224_52886 = state_52210__$1;
(statearr_52224_52886[(1)] = (4));

(statearr_52224_52886[(5)] = null);

} else {
throw ex52219;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (10))){
var inst_52200 = (state_52210[(10)]);
var inst_52203 = (state_52210[(2)]);
var inst_52204 = (function (){var filtered_txs = inst_52200;
var decimals = inst_52203;
return (function (p1__52167_SHARP_){
return compevent.core.make_token_tx(p1__52167_SHARP_,decimals);
});
})();
var inst_52205 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52204,inst_52200);
var ___$2 = (function (){var statearr_52225 = state_52210;
(statearr_52225[(4)] = cljs.core.rest((state_52210[(4)])));

return statearr_52225;
})();
var state_52210__$1 = state_52210;
var statearr_52226_52887 = state_52210__$1;
(statearr_52226_52887[(2)] = inst_52205);

(statearr_52226_52887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (8))){
var inst_52190 = (state_52210[(7)]);
var state_52210__$1 = state_52210;
var statearr_52227_52888 = state_52210__$1;
(statearr_52227_52888[(2)] = inst_52190);

(statearr_52227_52888[(1)] = (9));


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
var statearr_52228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52228[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_52228[(1)] = (1));

return statearr_52228;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_52210){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52210);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52229){var ex__38759__auto__ = e52229;
var statearr_52230_52889 = state_52210;
(statearr_52230_52889[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52210[(4)]))){
var statearr_52231_52890 = state_52210;
(statearr_52231_52890[(1)] = cljs.core.first((state_52210[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52891 = state_52210;
state_52210 = G__52891;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_52210){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_52210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52232 = f__38848__auto__();
(statearr_52232[(6)] = c__38847__auto__);

return statearr_52232;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52248){
var state_val_52249 = (state_52248[(1)]);
if((state_val_52249 === (1))){
var inst_52233 = compevent.core.provider.getTransactionReceipt(txhash);
var inst_52234 = cljs.core.async.interop.p__GT_c(inst_52233);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52248__$1,(2),inst_52234);
} else {
if((state_val_52249 === (2))){
var inst_52236 = (state_52248[(7)]);
var inst_52236__$1 = (state_52248[(2)]);
var inst_52237 = (inst_52236__$1 instanceof cljs.core.ExceptionInfo);
var inst_52238 = cljs.core.ex_data(inst_52236__$1);
var inst_52239 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52238);
var inst_52240 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52239,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52241 = ((inst_52237) && (inst_52240));
var state_52248__$1 = (function (){var statearr_52250 = state_52248;
(statearr_52250[(7)] = inst_52236__$1);

return statearr_52250;
})();
if(cljs.core.truth_(inst_52241)){
var statearr_52251_52892 = state_52248__$1;
(statearr_52251_52892[(1)] = (3));

} else {
var statearr_52252_52893 = state_52248__$1;
(statearr_52252_52893[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (3))){
var inst_52236 = (state_52248[(7)]);
var inst_52243 = (function(){throw inst_52236})();
var state_52248__$1 = state_52248;
var statearr_52253_52894 = state_52248__$1;
(statearr_52253_52894[(2)] = inst_52243);

(statearr_52253_52894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (4))){
var inst_52236 = (state_52248[(7)]);
var state_52248__$1 = state_52248;
var statearr_52254_52895 = state_52248__$1;
(statearr_52254_52895[(2)] = inst_52236);

(statearr_52254_52895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (5))){
var inst_52246 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52248__$1,inst_52246);
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
var statearr_52255 = [null,null,null,null,null,null,null,null];
(statearr_52255[(0)] = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__);

(statearr_52255[(1)] = (1));

return statearr_52255;
});
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1 = (function (state_52248){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52248);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52256){var ex__38759__auto__ = e52256;
var statearr_52257_52896 = state_52248;
(statearr_52257_52896[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52248[(4)]))){
var statearr_52258_52897 = state_52248;
(statearr_52258_52897[(1)] = cljs.core.first((state_52248[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52898 = state_52248;
state_52248 = G__52898;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = function(state_52248){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1.call(this,state_52248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52259 = f__38848__auto__();
(statearr_52259[(6)] = c__38847__auto__);

return statearr_52259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx = (function compevent$core$_LT_get_tx(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52275){
var state_val_52276 = (state_52275[(1)]);
if((state_val_52276 === (1))){
var inst_52260 = compevent.core.provider.getTransaction(txhash);
var inst_52261 = cljs.core.async.interop.p__GT_c(inst_52260);
var state_52275__$1 = state_52275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52275__$1,(2),inst_52261);
} else {
if((state_val_52276 === (2))){
var inst_52263 = (state_52275[(7)]);
var inst_52263__$1 = (state_52275[(2)]);
var inst_52264 = (inst_52263__$1 instanceof cljs.core.ExceptionInfo);
var inst_52265 = cljs.core.ex_data(inst_52263__$1);
var inst_52266 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52265);
var inst_52267 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52266,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52268 = ((inst_52264) && (inst_52267));
var state_52275__$1 = (function (){var statearr_52277 = state_52275;
(statearr_52277[(7)] = inst_52263__$1);

return statearr_52277;
})();
if(cljs.core.truth_(inst_52268)){
var statearr_52278_52899 = state_52275__$1;
(statearr_52278_52899[(1)] = (3));

} else {
var statearr_52279_52900 = state_52275__$1;
(statearr_52279_52900[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52276 === (3))){
var inst_52263 = (state_52275[(7)]);
var inst_52270 = (function(){throw inst_52263})();
var state_52275__$1 = state_52275;
var statearr_52280_52901 = state_52275__$1;
(statearr_52280_52901[(2)] = inst_52270);

(statearr_52280_52901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52276 === (4))){
var inst_52263 = (state_52275[(7)]);
var state_52275__$1 = state_52275;
var statearr_52281_52902 = state_52275__$1;
(statearr_52281_52902[(2)] = inst_52263);

(statearr_52281_52902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52276 === (5))){
var inst_52273 = (state_52275[(2)]);
var state_52275__$1 = state_52275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52275__$1,inst_52273);
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
var statearr_52282 = [null,null,null,null,null,null,null,null];
(statearr_52282[(0)] = compevent$core$_LT_get_tx_$_state_machine__38756__auto__);

(statearr_52282[(1)] = (1));

return statearr_52282;
});
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____1 = (function (state_52275){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52275);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52283){var ex__38759__auto__ = e52283;
var statearr_52284_52903 = state_52275;
(statearr_52284_52903[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52275[(4)]))){
var statearr_52285_52904 = state_52275;
(statearr_52285_52904[(1)] = cljs.core.first((state_52275[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52905 = state_52275;
state_52275 = G__52905;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = function(state_52275){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____1.call(this,state_52275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52286 = f__38848__auto__();
(statearr_52286[(6)] = c__38847__auto__);

return statearr_52286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx_with_receipt = (function compevent$core$_LT_get_tx_with_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52297){
var state_val_52298 = (state_52297[(1)]);
if((state_val_52298 === (1))){
var inst_52287 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_52288 = compevent.core._LT_get_tx(txhash);
var state_52297__$1 = (function (){var statearr_52299 = state_52297;
(statearr_52299[(7)] = inst_52287);

return statearr_52299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52297__$1,(2),inst_52288);
} else {
if((state_val_52298 === (2))){
var inst_52290 = (state_52297[(2)]);
var inst_52291 = compevent.core._LT_get_tx_receipt(txhash);
var state_52297__$1 = (function (){var statearr_52300 = state_52297;
(statearr_52300[(8)] = inst_52290);

return statearr_52300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52297__$1,(3),inst_52291);
} else {
if((state_val_52298 === (3))){
var inst_52290 = (state_52297[(8)]);
var inst_52287 = (state_52297[(7)]);
var inst_52293 = (state_52297[(2)]);
var inst_52294 = [inst_52290,inst_52293];
var inst_52295 = cljs.core.PersistentHashMap.fromArrays(inst_52287,inst_52294);
var state_52297__$1 = state_52297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52297__$1,inst_52295);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_52301 = [null,null,null,null,null,null,null,null,null];
(statearr_52301[(0)] = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__);

(statearr_52301[(1)] = (1));

return statearr_52301;
});
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1 = (function (state_52297){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52297);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52302){var ex__38759__auto__ = e52302;
var statearr_52303_52906 = state_52297;
(statearr_52303_52906[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52297[(4)]))){
var statearr_52304_52907 = state_52297;
(statearr_52304_52907[(1)] = cljs.core.first((state_52297[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52908 = state_52297;
state_52297 = G__52908;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = function(state_52297){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1.call(this,state_52297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52305 = f__38848__auto__();
(statearr_52305[(6)] = c__38847__auto__);

return statearr_52305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_trxs = (function compevent$core$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52310){
var state_val_52311 = (state_52310[(1)]);
if((state_val_52311 === (1))){
var inst_52306 = compevent.core._LT_get_tx_with_receipt(x);
var state_52310__$1 = state_52310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52310__$1,(2),inst_52306);
} else {
if((state_val_52311 === (2))){
var inst_52308 = (state_52310[(2)]);
var state_52310__$1 = state_52310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52310__$1,inst_52308);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0 = (function (){
var statearr_52312 = [null,null,null,null,null,null,null];
(statearr_52312[(0)] = compevent$core$_LT_get_trxs_$_state_machine__38756__auto__);

(statearr_52312[(1)] = (1));

return statearr_52312;
});
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1 = (function (state_52310){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52310);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52313){var ex__38759__auto__ = e52313;
var statearr_52314_52909 = state_52310;
(statearr_52314_52909[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52310[(4)]))){
var statearr_52315_52910 = state_52310;
(statearr_52315_52910[(1)] = cljs.core.first((state_52310[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52911 = state_52310;
state_52310 = G__52911;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = function(state_52310){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1.call(this,state_52310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0;
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52316 = f__38848__auto__();
(statearr_52316[(6)] = c__38847__auto__);

return statearr_52316;
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
var G__52317 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1));
var G__52318 = false;
return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(G__52317,G__52318) : compevent.core.render_compound_history.call(null,G__52317,G__52318));
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52348){
var state_val_52349 = (state_52348[(1)]);
if((state_val_52349 === (7))){
var inst_52330 = (state_52348[(7)]);
var inst_52337 = (function(){throw inst_52330})();
var state_52348__$1 = state_52348;
var statearr_52350_52912 = state_52348__$1;
(statearr_52350_52912[(2)] = inst_52337);

(statearr_52350_52912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (1))){
var state_52348__$1 = state_52348;
var statearr_52351_52913 = state_52348__$1;
(statearr_52351_52913[(2)] = null);

(statearr_52351_52913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (4))){
var inst_52319 = (state_52348[(2)]);
var inst_52320 = console.log("Could not enable web3 in browser",inst_52319);
var state_52348__$1 = state_52348;
var statearr_52352_52914 = state_52348__$1;
(statearr_52352_52914[(2)] = inst_52320);

(statearr_52352_52914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (6))){
var inst_52330 = (state_52348[(7)]);
var inst_52330__$1 = (state_52348[(2)]);
var inst_52331 = (inst_52330__$1 instanceof cljs.core.ExceptionInfo);
var inst_52332 = cljs.core.ex_data(inst_52330__$1);
var inst_52333 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52332);
var inst_52334 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52333,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52335 = ((inst_52331) && (inst_52334));
var state_52348__$1 = (function (){var statearr_52353 = state_52348;
(statearr_52353[(7)] = inst_52330__$1);

return statearr_52353;
})();
if(cljs.core.truth_(inst_52335)){
var statearr_52354_52915 = state_52348__$1;
(statearr_52354_52915[(1)] = (7));

} else {
var statearr_52355_52916 = state_52348__$1;
(statearr_52355_52916[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (3))){
var inst_52346 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52348__$1,inst_52346);
} else {
if((state_val_52349 === (2))){
var _ = (function (){var statearr_52357 = state_52348;
(statearr_52357[(4)] = cljs.core.cons((5),(state_52348[(4)])));

return statearr_52357;
})();
var inst_52326 = window.ethereum;
var inst_52327 = inst_52326.enable();
var inst_52328 = cljs.core.async.interop.p__GT_c(inst_52327);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52348__$1,(6),inst_52328);
} else {
if((state_val_52349 === (9))){
var inst_52340 = (state_52348[(2)]);
var inst_52341 = cljs.core.first(inst_52340);
var inst_52342 = console.log("connected-account",inst_52341);
var inst_52343 = (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(inst_52341,true) : compevent.core.render_compound_history.call(null,inst_52341,true));
var _ = (function (){var statearr_52358 = state_52348;
(statearr_52358[(4)] = cljs.core.rest((state_52348[(4)])));

return statearr_52358;
})();
var state_52348__$1 = (function (){var statearr_52359 = state_52348;
(statearr_52359[(8)] = inst_52342);

return statearr_52359;
})();
var statearr_52360_52917 = state_52348__$1;
(statearr_52360_52917[(2)] = inst_52343);

(statearr_52360_52917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (5))){
var _ = (function (){var statearr_52361 = state_52348;
(statearr_52361[(4)] = cljs.core.rest((state_52348[(4)])));

return statearr_52361;
})();
var state_52348__$1 = state_52348;
var ex52356 = (state_52348__$1[(2)]);
var statearr_52362_52918 = state_52348__$1;
(statearr_52362_52918[(5)] = ex52356);


if((ex52356 instanceof Error)){
var statearr_52363_52919 = state_52348__$1;
(statearr_52363_52919[(1)] = (4));

(statearr_52363_52919[(5)] = null);

} else {
throw ex52356;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (8))){
var inst_52330 = (state_52348[(7)]);
var state_52348__$1 = state_52348;
var statearr_52364_52920 = state_52348__$1;
(statearr_52364_52920[(2)] = inst_52330);

(statearr_52364_52920[(1)] = (9));


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
var statearr_52365 = [null,null,null,null,null,null,null,null,null];
(statearr_52365[(0)] = compevent$core$web3_connect_$_state_machine__38756__auto__);

(statearr_52365[(1)] = (1));

return statearr_52365;
});
var compevent$core$web3_connect_$_state_machine__38756__auto____1 = (function (state_52348){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52348);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52366){var ex__38759__auto__ = e52366;
var statearr_52367_52921 = state_52348;
(statearr_52367_52921[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52348[(4)]))){
var statearr_52368_52922 = state_52348;
(statearr_52368_52922[(1)] = cljs.core.first((state_52348[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52923 = state_52348;
state_52348 = G__52923;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$web3_connect_$_state_machine__38756__auto__ = function(state_52348){
switch(arguments.length){
case 0:
return compevent$core$web3_connect_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$web3_connect_$_state_machine__38756__auto____1.call(this,state_52348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$web3_connect_$_state_machine__38756__auto____0;
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$web3_connect_$_state_machine__38756__auto____1;
return compevent$core$web3_connect_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52369 = f__38848__auto__();
(statearr_52369[(6)] = c__38847__auto__);

return statearr_52369;
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
var input_52924 = compevent.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""));
compevent.core.app_main = (function compevent$core$app_main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Compound account history charts",(((compevent.core.provider == null))?" Requires Web3":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((!((compevent.core.provider == null))))?input_52924:null),(((cljs.core.count(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))) > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),cljs.core.butlast(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-flicker"], null),cljs.core.last(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null):null),new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))], null);
});
compevent.core.block_num__GT_ts = (function compevent$core$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52370_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__52370_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
compevent.core.ts__GT_geckoprice = (function compevent$core$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52371_SHARP_){
return (cljs.core.first(p1__52371_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52372_SHARP_){
return (cljs.core.first(p1__52372_SHARP_) > ts);
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52385){
var state_val_52386 = (state_52385[(1)]);
if((state_val_52386 === (1))){
var inst_52373 = (state_52385[(7)]);
var inst_52373__$1 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_52374 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52375 = [false];
var inst_52376 = cljs.core.PersistentHashMap.fromArrays(inst_52374,inst_52375);
var inst_52377 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_52373__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52376], 0));
var state_52385__$1 = (function (){var statearr_52387 = state_52385;
(statearr_52387[(7)] = inst_52373__$1);

return statearr_52387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52385__$1,(2),inst_52377);
} else {
if((state_val_52386 === (2))){
var inst_52373 = (state_52385[(7)]);
var inst_52379 = (state_52385[(2)]);
var inst_52380 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_52379);
var inst_52381 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_52380);
var inst_52382 = (function (){var base_url = inst_52373;
var full_url = inst_52373;
var data = inst_52381;
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x),compevent.core.bn(cljs.core.second(x))], null);
});
})();
var inst_52383 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52382,inst_52381);
var state_52385__$1 = state_52385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52385__$1,inst_52383);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0 = (function (){
var statearr_52388 = [null,null,null,null,null,null,null,null];
(statearr_52388[(0)] = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__);

(statearr_52388[(1)] = (1));

return statearr_52388;
});
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1 = (function (state_52385){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52385);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52389){var ex__38759__auto__ = e52389;
var statearr_52390_52925 = state_52385;
(statearr_52390_52925[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52385[(4)]))){
var statearr_52391_52926 = state_52385;
(statearr_52391_52926[(1)] = cljs.core.first((state_52385[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52927 = state_52385;
state_52385 = G__52927;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = function(state_52385){
switch(arguments.length){
case 0:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1.call(this,state_52385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0;
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1;
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52392 = f__38848__auto__();
(statearr_52392[(6)] = c__38847__auto__);

return statearr_52392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_dollarize_liquidations = (function compevent$core$_LT_dollarize_liquidations(liquidations,token){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52405){
var state_val_52406 = (state_52405[(1)]);
if((state_val_52406 === (1))){
var inst_52393 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_52394 = cljs.core.set(inst_52393);
var inst_52395 = compevent.core._LT_fetch_blocks(inst_52394);
var state_52405__$1 = state_52405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52405__$1,(2),inst_52395);
} else {
if((state_val_52406 === (2))){
var inst_52397 = (state_52405[(2)]);
var inst_52398 = compevent.core.token__GT_address(token);
var inst_52399 = compevent.core._LT_historic_gecko_prices(inst_52398);
var state_52405__$1 = (function (){var statearr_52407 = state_52405;
(statearr_52407[(7)] = inst_52397);

return statearr_52407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52405__$1,(3),inst_52399);
} else {
if((state_val_52406 === (3))){
var inst_52397 = (state_52405[(7)]);
var inst_52401 = (state_52405[(2)]);
var inst_52402 = (function (){var liq_blocks = inst_52397;
var day_prices = inst_52401;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),compevent.core.bn(compevent.core.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_52403 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52402,liquidations);
var state_52405__$1 = state_52405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52405__$1,inst_52403);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_52408 = [null,null,null,null,null,null,null,null];
(statearr_52408[(0)] = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__);

(statearr_52408[(1)] = (1));

return statearr_52408;
});
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1 = (function (state_52405){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52405);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52409){var ex__38759__auto__ = e52409;
var statearr_52410_52928 = state_52405;
(statearr_52410_52928[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52405[(4)]))){
var statearr_52411_52929 = state_52405;
(statearr_52411_52929[(1)] = cljs.core.first((state_52405[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52930 = state_52405;
state_52405 = G__52930;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = function(state_52405){
switch(arguments.length){
case 0:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1.call(this,state_52405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52412 = f__38848__auto__();
(statearr_52412[(6)] = c__38847__auto__);

return statearr_52412;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52428){
var state_val_52429 = (state_52428[(1)]);
if((state_val_52429 === (1))){
var inst_52413 = compevent.core.provider.getLogs(repay_filter);
var inst_52414 = cljs.core.async.interop.p__GT_c(inst_52413);
var state_52428__$1 = state_52428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52428__$1,(2),inst_52414);
} else {
if((state_val_52429 === (2))){
var inst_52416 = (state_52428[(7)]);
var inst_52416__$1 = (state_52428[(2)]);
var inst_52417 = (inst_52416__$1 instanceof cljs.core.ExceptionInfo);
var inst_52418 = cljs.core.ex_data(inst_52416__$1);
var inst_52419 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52418);
var inst_52420 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52419,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52421 = ((inst_52417) && (inst_52420));
var state_52428__$1 = (function (){var statearr_52430 = state_52428;
(statearr_52430[(7)] = inst_52416__$1);

return statearr_52430;
})();
if(cljs.core.truth_(inst_52421)){
var statearr_52431_52931 = state_52428__$1;
(statearr_52431_52931[(1)] = (3));

} else {
var statearr_52432_52932 = state_52428__$1;
(statearr_52432_52932[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52429 === (3))){
var inst_52416 = (state_52428[(7)]);
var inst_52423 = (function(){throw inst_52416})();
var state_52428__$1 = state_52428;
var statearr_52433_52933 = state_52428__$1;
(statearr_52433_52933[(2)] = inst_52423);

(statearr_52433_52933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52429 === (4))){
var inst_52416 = (state_52428[(7)]);
var state_52428__$1 = state_52428;
var statearr_52434_52934 = state_52428__$1;
(statearr_52434_52934[(2)] = inst_52416);

(statearr_52434_52934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52429 === (5))){
var inst_52426 = (state_52428[(2)]);
var state_52428__$1 = state_52428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52428__$1,inst_52426);
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
var statearr_52435 = [null,null,null,null,null,null,null,null];
(statearr_52435[(0)] = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__);

(statearr_52435[(1)] = (1));

return statearr_52435;
});
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1 = (function (state_52428){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52428);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52436){var ex__38759__auto__ = e52436;
var statearr_52437_52935 = state_52428;
(statearr_52437_52935[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52428[(4)]))){
var statearr_52438_52936 = state_52428;
(statearr_52438_52936[(1)] = cljs.core.first((state_52428[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52937 = state_52428;
state_52428 = G__52937;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = function(state_52428){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1.call(this,state_52428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52439 = f__38848__auto__();
(statearr_52439[(6)] = c__38847__auto__);

return statearr_52439;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52455){
var state_val_52456 = (state_52455[(1)]);
if((state_val_52456 === (1))){
var inst_52440 = compevent.core.provider.getLogs(liquidation_filter);
var inst_52441 = cljs.core.async.interop.p__GT_c(inst_52440);
var state_52455__$1 = state_52455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52455__$1,(2),inst_52441);
} else {
if((state_val_52456 === (2))){
var inst_52443 = (state_52455[(7)]);
var inst_52443__$1 = (state_52455[(2)]);
var inst_52444 = (inst_52443__$1 instanceof cljs.core.ExceptionInfo);
var inst_52445 = cljs.core.ex_data(inst_52443__$1);
var inst_52446 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52445);
var inst_52447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52446,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52448 = ((inst_52444) && (inst_52447));
var state_52455__$1 = (function (){var statearr_52457 = state_52455;
(statearr_52457[(7)] = inst_52443__$1);

return statearr_52457;
})();
if(cljs.core.truth_(inst_52448)){
var statearr_52458_52938 = state_52455__$1;
(statearr_52458_52938[(1)] = (3));

} else {
var statearr_52459_52939 = state_52455__$1;
(statearr_52459_52939[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52456 === (3))){
var inst_52443 = (state_52455[(7)]);
var inst_52450 = (function(){throw inst_52443})();
var state_52455__$1 = state_52455;
var statearr_52460_52940 = state_52455__$1;
(statearr_52460_52940[(2)] = inst_52450);

(statearr_52460_52940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52456 === (4))){
var inst_52443 = (state_52455[(7)]);
var state_52455__$1 = state_52455;
var statearr_52461_52941 = state_52455__$1;
(statearr_52461_52941[(2)] = inst_52443);

(statearr_52461_52941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52456 === (5))){
var inst_52453 = (state_52455[(2)]);
var state_52455__$1 = state_52455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52455__$1,inst_52453);
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
var statearr_52462 = [null,null,null,null,null,null,null,null];
(statearr_52462[(0)] = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__);

(statearr_52462[(1)] = (1));

return statearr_52462;
});
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_52455){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52455);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52463){var ex__38759__auto__ = e52463;
var statearr_52464_52942 = state_52455;
(statearr_52464_52942[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52455[(4)]))){
var statearr_52465_52943 = state_52455;
(statearr_52465_52943[(1)] = cljs.core.first((state_52455[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52944 = state_52455;
state_52455 = G__52944;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = function(state_52455){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_52455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52466 = f__38848__auto__();
(statearr_52466[(6)] = c__38847__auto__);

return statearr_52466;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52482){
var state_val_52483 = (state_52482[(1)]);
if((state_val_52483 === (1))){
var inst_52467 = compevent.core.provider.getLogs(mint_filter);
var inst_52468 = cljs.core.async.interop.p__GT_c(inst_52467);
var state_52482__$1 = state_52482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52482__$1,(2),inst_52468);
} else {
if((state_val_52483 === (2))){
var inst_52470 = (state_52482[(7)]);
var inst_52470__$1 = (state_52482[(2)]);
var inst_52471 = (inst_52470__$1 instanceof cljs.core.ExceptionInfo);
var inst_52472 = cljs.core.ex_data(inst_52470__$1);
var inst_52473 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52472);
var inst_52474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52473,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52475 = ((inst_52471) && (inst_52474));
var state_52482__$1 = (function (){var statearr_52484 = state_52482;
(statearr_52484[(7)] = inst_52470__$1);

return statearr_52484;
})();
if(cljs.core.truth_(inst_52475)){
var statearr_52485_52945 = state_52482__$1;
(statearr_52485_52945[(1)] = (3));

} else {
var statearr_52486_52946 = state_52482__$1;
(statearr_52486_52946[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52483 === (3))){
var inst_52470 = (state_52482[(7)]);
var inst_52477 = (function(){throw inst_52470})();
var state_52482__$1 = state_52482;
var statearr_52487_52947 = state_52482__$1;
(statearr_52487_52947[(2)] = inst_52477);

(statearr_52487_52947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52483 === (4))){
var inst_52470 = (state_52482[(7)]);
var state_52482__$1 = state_52482;
var statearr_52488_52948 = state_52482__$1;
(statearr_52488_52948[(2)] = inst_52470);

(statearr_52488_52948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52483 === (5))){
var inst_52480 = (state_52482[(2)]);
var state_52482__$1 = state_52482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52482__$1,inst_52480);
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
var statearr_52489 = [null,null,null,null,null,null,null,null];
(statearr_52489[(0)] = compevent$core$_LT_comp_mints_$_state_machine__38756__auto__);

(statearr_52489[(1)] = (1));

return statearr_52489;
});
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1 = (function (state_52482){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52482);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52490){var ex__38759__auto__ = e52490;
var statearr_52491_52949 = state_52482;
(statearr_52491_52949[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52482[(4)]))){
var statearr_52492_52950 = state_52482;
(statearr_52492_52950[(1)] = cljs.core.first((state_52482[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52951 = state_52482;
state_52482 = G__52951;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = function(state_52482){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1.call(this,state_52482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52493 = f__38848__auto__();
(statearr_52493[(6)] = c__38847__auto__);

return statearr_52493;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52509){
var state_val_52510 = (state_52509[(1)]);
if((state_val_52510 === (1))){
var inst_52494 = compevent.core.provider.getLogs(borrow_filter);
var inst_52495 = cljs.core.async.interop.p__GT_c(inst_52494);
var state_52509__$1 = state_52509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52509__$1,(2),inst_52495);
} else {
if((state_val_52510 === (2))){
var inst_52497 = (state_52509[(7)]);
var inst_52497__$1 = (state_52509[(2)]);
var inst_52498 = (inst_52497__$1 instanceof cljs.core.ExceptionInfo);
var inst_52499 = cljs.core.ex_data(inst_52497__$1);
var inst_52500 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52499);
var inst_52501 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52500,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52502 = ((inst_52498) && (inst_52501));
var state_52509__$1 = (function (){var statearr_52511 = state_52509;
(statearr_52511[(7)] = inst_52497__$1);

return statearr_52511;
})();
if(cljs.core.truth_(inst_52502)){
var statearr_52512_52952 = state_52509__$1;
(statearr_52512_52952[(1)] = (3));

} else {
var statearr_52513_52953 = state_52509__$1;
(statearr_52513_52953[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (3))){
var inst_52497 = (state_52509[(7)]);
var inst_52504 = (function(){throw inst_52497})();
var state_52509__$1 = state_52509;
var statearr_52514_52954 = state_52509__$1;
(statearr_52514_52954[(2)] = inst_52504);

(statearr_52514_52954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (4))){
var inst_52497 = (state_52509[(7)]);
var state_52509__$1 = state_52509;
var statearr_52515_52955 = state_52509__$1;
(statearr_52515_52955[(2)] = inst_52497);

(statearr_52515_52955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (5))){
var inst_52507 = (state_52509[(2)]);
var state_52509__$1 = state_52509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52509__$1,inst_52507);
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
var statearr_52516 = [null,null,null,null,null,null,null,null];
(statearr_52516[(0)] = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__);

(statearr_52516[(1)] = (1));

return statearr_52516;
});
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1 = (function (state_52509){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52509);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52517){var ex__38759__auto__ = e52517;
var statearr_52518_52956 = state_52509;
(statearr_52518_52956[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52509[(4)]))){
var statearr_52519_52957 = state_52509;
(statearr_52519_52957[(1)] = cljs.core.first((state_52509[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52958 = state_52509;
state_52509 = G__52958;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = function(state_52509){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1.call(this,state_52509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52520 = f__38848__auto__();
(statearr_52520[(6)] = c__38847__auto__);

return statearr_52520;
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
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52536){
var state_val_52537 = (state_52536[(1)]);
if((state_val_52537 === (1))){
var inst_52521 = compevent.core.provider.getLogs(redeem_filter);
var inst_52522 = cljs.core.async.interop.p__GT_c(inst_52521);
var state_52536__$1 = state_52536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52536__$1,(2),inst_52522);
} else {
if((state_val_52537 === (2))){
var inst_52524 = (state_52536[(7)]);
var inst_52524__$1 = (state_52536[(2)]);
var inst_52525 = (inst_52524__$1 instanceof cljs.core.ExceptionInfo);
var inst_52526 = cljs.core.ex_data(inst_52524__$1);
var inst_52527 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52526);
var inst_52528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52527,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52529 = ((inst_52525) && (inst_52528));
var state_52536__$1 = (function (){var statearr_52538 = state_52536;
(statearr_52538[(7)] = inst_52524__$1);

return statearr_52538;
})();
if(cljs.core.truth_(inst_52529)){
var statearr_52539_52959 = state_52536__$1;
(statearr_52539_52959[(1)] = (3));

} else {
var statearr_52540_52960 = state_52536__$1;
(statearr_52540_52960[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (3))){
var inst_52524 = (state_52536[(7)]);
var inst_52531 = (function(){throw inst_52524})();
var state_52536__$1 = state_52536;
var statearr_52541_52961 = state_52536__$1;
(statearr_52541_52961[(2)] = inst_52531);

(statearr_52541_52961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (4))){
var inst_52524 = (state_52536[(7)]);
var state_52536__$1 = state_52536;
var statearr_52542_52962 = state_52536__$1;
(statearr_52542_52962[(2)] = inst_52524);

(statearr_52542_52962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52537 === (5))){
var inst_52534 = (state_52536[(2)]);
var state_52536__$1 = state_52536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52536__$1,inst_52534);
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
var statearr_52543 = [null,null,null,null,null,null,null,null];
(statearr_52543[(0)] = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__);

(statearr_52543[(1)] = (1));

return statearr_52543;
});
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1 = (function (state_52536){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52536);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52544){var ex__38759__auto__ = e52544;
var statearr_52545_52963 = state_52536;
(statearr_52545_52963[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52536[(4)]))){
var statearr_52546_52964 = state_52536;
(statearr_52546_52964[(1)] = cljs.core.first((state_52536[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52965 = state_52536;
state_52536 = G__52965;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = function(state_52536){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1.call(this,state_52536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52547 = f__38848__auto__();
(statearr_52547[(6)] = c__38847__auto__);

return statearr_52547;
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
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52548_SHARP_){
var G__52549 = caddress;
var G__52550 = p1__52548_SHARP_;
var G__52551 = (p1__52548_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__52549,G__52550,G__52551) : logsfn.call(null,G__52549,G__52550,G__52551));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
compevent.core._LT_pfetch_comp_logs = (function compevent$core$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52559){
var state_val_52560 = (state_52559[(1)]);
if((state_val_52560 === (1))){
var inst_52553 = compevent.core._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_52559__$1 = state_52559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52559__$1,(2),inst_52553);
} else {
if((state_val_52560 === (2))){
var inst_52555 = (state_52559[(2)]);
var inst_52556 = (function (){var fetched_logs = inst_52555;
return (function (p1__52552_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__52552_SHARP_,decimals) : parsefn.call(null,p1__52552_SHARP_,decimals));
});
})();
var inst_52557 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52556,inst_52555);
var state_52559__$1 = state_52559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52559__$1,inst_52557);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0 = (function (){
var statearr_52561 = [null,null,null,null,null,null,null];
(statearr_52561[(0)] = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__);

(statearr_52561[(1)] = (1));

return statearr_52561;
});
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1 = (function (state_52559){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52559);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52562){var ex__38759__auto__ = e52562;
var statearr_52563_52966 = state_52559;
(statearr_52563_52966[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52559[(4)]))){
var statearr_52564_52967 = state_52559;
(statearr_52564_52967[(1)] = cljs.core.first((state_52559[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52968 = state_52559;
state_52559 = G__52968;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = function(state_52559){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1.call(this,state_52559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52565 = f__38848__auto__();
(statearr_52565[(6)] = c__38847__auto__);

return statearr_52565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_repayments = (function compevent$core$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52570){
var state_val_52571 = (state_52570[(1)]);
if((state_val_52571 === (1))){
var inst_52566 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_repayments,compevent.core.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52570__$1,(2),inst_52566);
} else {
if((state_val_52571 === (2))){
var inst_52568 = (state_52570[(2)]);
var state_52570__$1 = state_52570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52570__$1,inst_52568);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_52572 = [null,null,null,null,null,null,null];
(statearr_52572[(0)] = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__);

(statearr_52572[(1)] = (1));

return statearr_52572;
});
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1 = (function (state_52570){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52570);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52573){var ex__38759__auto__ = e52573;
var statearr_52574_52969 = state_52570;
(statearr_52574_52969[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52570[(4)]))){
var statearr_52575_52970 = state_52570;
(statearr_52575_52970[(1)] = cljs.core.first((state_52570[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52971 = state_52570;
state_52570 = G__52971;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = function(state_52570){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1.call(this,state_52570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52576 = f__38848__auto__();
(statearr_52576[(6)] = c__38847__auto__);

return statearr_52576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_mints = (function compevent$core$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52581){
var state_val_52582 = (state_52581[(1)]);
if((state_val_52582 === (1))){
var inst_52577 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_mints,compevent.core.make_comp_mint,caddress,start_block,end_block,decimals);
var state_52581__$1 = state_52581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52581__$1,(2),inst_52577);
} else {
if((state_val_52582 === (2))){
var inst_52579 = (state_52581[(2)]);
var state_52581__$1 = state_52581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52581__$1,inst_52579);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_52583 = [null,null,null,null,null,null,null];
(statearr_52583[(0)] = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__);

(statearr_52583[(1)] = (1));

return statearr_52583;
});
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1 = (function (state_52581){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52581);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52584){var ex__38759__auto__ = e52584;
var statearr_52585_52972 = state_52581;
(statearr_52585_52972[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52581[(4)]))){
var statearr_52586_52973 = state_52581;
(statearr_52586_52973[(1)] = cljs.core.first((state_52581[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52974 = state_52581;
state_52581 = G__52974;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = function(state_52581){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1.call(this,state_52581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52587 = f__38848__auto__();
(statearr_52587[(6)] = c__38847__auto__);

return statearr_52587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_liquidations = (function compevent$core$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52592){
var state_val_52593 = (state_52592[(1)]);
if((state_val_52593 === (1))){
var inst_52588 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_liquidations,compevent.core.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_52592__$1 = state_52592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52592__$1,(2),inst_52588);
} else {
if((state_val_52593 === (2))){
var inst_52590 = (state_52592[(2)]);
var state_52592__$1 = state_52592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52592__$1,inst_52590);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_52594 = [null,null,null,null,null,null,null];
(statearr_52594[(0)] = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__);

(statearr_52594[(1)] = (1));

return statearr_52594;
});
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_52592){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52592);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52595){var ex__38759__auto__ = e52595;
var statearr_52596_52975 = state_52592;
(statearr_52596_52975[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52592[(4)]))){
var statearr_52597_52976 = state_52592;
(statearr_52597_52976[(1)] = cljs.core.first((state_52592[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52977 = state_52592;
state_52592 = G__52977;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = function(state_52592){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_52592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52598 = f__38848__auto__();
(statearr_52598[(6)] = c__38847__auto__);

return statearr_52598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_borrows = (function compevent$core$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52603){
var state_val_52604 = (state_52603[(1)]);
if((state_val_52604 === (1))){
var inst_52599 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_borrows,compevent.core.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_52603__$1 = state_52603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52603__$1,(2),inst_52599);
} else {
if((state_val_52604 === (2))){
var inst_52601 = (state_52603[(2)]);
var state_52603__$1 = state_52603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52603__$1,inst_52601);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_52605 = [null,null,null,null,null,null,null];
(statearr_52605[(0)] = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__);

(statearr_52605[(1)] = (1));

return statearr_52605;
});
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1 = (function (state_52603){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52603);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52606){var ex__38759__auto__ = e52606;
var statearr_52607_52978 = state_52603;
(statearr_52607_52978[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52603[(4)]))){
var statearr_52608_52979 = state_52603;
(statearr_52608_52979[(1)] = cljs.core.first((state_52603[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52980 = state_52603;
state_52603 = G__52980;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = function(state_52603){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1.call(this,state_52603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52609 = f__38848__auto__();
(statearr_52609[(6)] = c__38847__auto__);

return statearr_52609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_redeems = (function compevent$core$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52614){
var state_val_52615 = (state_52614[(1)]);
if((state_val_52615 === (1))){
var inst_52610 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_redeems,compevent.core.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_52614__$1 = state_52614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52614__$1,(2),inst_52610);
} else {
if((state_val_52615 === (2))){
var inst_52612 = (state_52614[(2)]);
var state_52614__$1 = state_52614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52614__$1,inst_52612);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_52616 = [null,null,null,null,null,null,null];
(statearr_52616[(0)] = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__);

(statearr_52616[(1)] = (1));

return statearr_52616;
});
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1 = (function (state_52614){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52614);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52617){var ex__38759__auto__ = e52617;
var statearr_52618_52981 = state_52614;
(statearr_52618_52981[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52614[(4)]))){
var statearr_52619_52982 = state_52614;
(statearr_52619_52982[(1)] = cljs.core.first((state_52614[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52983 = state_52614;
state_52614 = G__52983;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = function(state_52614){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1.call(this,state_52614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52620 = f__38848__auto__();
(statearr_52620[(6)] = c__38847__auto__);

return statearr_52620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_ctoken_events = (function compevent$core$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52639){
var state_val_52640 = (state_52639[(1)]);
if((state_val_52640 === (1))){
var inst_52621 = compevent.core._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_52639__$1 = state_52639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52639__$1,(2),inst_52621);
} else {
if((state_val_52640 === (2))){
var inst_52623 = (state_52639[(2)]);
var inst_52624 = compevent.core._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_52639__$1 = (function (){var statearr_52641 = state_52639;
(statearr_52641[(7)] = inst_52623);

return statearr_52641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52639__$1,(3),inst_52624);
} else {
if((state_val_52640 === (3))){
var inst_52626 = (state_52639[(2)]);
var inst_52627 = compevent.core._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_52639__$1 = (function (){var statearr_52642 = state_52639;
(statearr_52642[(8)] = inst_52626);

return statearr_52642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52639__$1,(4),inst_52627);
} else {
if((state_val_52640 === (4))){
var inst_52629 = (state_52639[(2)]);
var inst_52630 = compevent.core._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_52639__$1 = (function (){var statearr_52643 = state_52639;
(statearr_52643[(9)] = inst_52629);

return statearr_52643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52639__$1,(5),inst_52630);
} else {
if((state_val_52640 === (5))){
var inst_52632 = (state_52639[(2)]);
var inst_52633 = compevent.core._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_52639__$1 = (function (){var statearr_52644 = state_52639;
(statearr_52644[(10)] = inst_52632);

return statearr_52644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52639__$1,(6),inst_52633);
} else {
if((state_val_52640 === (6))){
var inst_52629 = (state_52639[(9)]);
var inst_52632 = (state_52639[(10)]);
var inst_52626 = (state_52639[(8)]);
var inst_52623 = (state_52639[(7)]);
var inst_52635 = (state_52639[(2)]);
var inst_52636 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_52623,inst_52626,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52629,inst_52632,inst_52635], 0));
var inst_52637 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_52636);
var state_52639__$1 = state_52639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52639__$1,inst_52637);
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
var statearr_52645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52645[(0)] = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__);

(statearr_52645[(1)] = (1));

return statearr_52645;
});
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1 = (function (state_52639){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52639);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52646){var ex__38759__auto__ = e52646;
var statearr_52647_52984 = state_52639;
(statearr_52647_52984[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52639[(4)]))){
var statearr_52648_52985 = state_52639;
(statearr_52648_52985[(1)] = cljs.core.first((state_52639[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52986 = state_52639;
state_52639 = G__52986;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = function(state_52639){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1.call(this,state_52639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52649 = f__38848__auto__();
(statearr_52649[(6)] = c__38847__auto__);

return statearr_52649;
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
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52650_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__52650_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.token_supply_underlying = (function compevent$core$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52651_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__52651_SHARP_),token);
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
var len__4736__auto___52987 = arguments.length;
var i__4737__auto___52988 = (0);
while(true){
if((i__4737__auto___52988 < len__4736__auto___52987)){
args__4742__auto__.push((arguments[i__4737__auto___52988]));

var G__52989 = (i__4737__auto___52988 + (1));
i__4737__auto___52988 = G__52989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__52654){
var map__52655 = p__52654;
var map__52655__$1 = (((((!((map__52655 == null))))?(((((map__52655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52655):map__52655);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52655__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52677){
var state_val_52678 = (state_52677[(1)]);
if((state_val_52678 === (1))){
var inst_52657 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_52658 = [address,block_number];
var inst_52659 = cljs.core.PersistentHashMap.fromArrays(inst_52657,inst_52658);
var inst_52660 = cljs.core.clj__GT_js(inst_52659);
var inst_52661 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_52660);
var inst_52662 = cljs.core.async.interop.p__GT_c(inst_52661);
var state_52677__$1 = state_52677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52677__$1,(2),inst_52662);
} else {
if((state_val_52678 === (2))){
var inst_52664 = (state_52677[(7)]);
var inst_52664__$1 = (state_52677[(2)]);
var inst_52665 = (inst_52664__$1 instanceof cljs.core.ExceptionInfo);
var inst_52666 = cljs.core.ex_data(inst_52664__$1);
var inst_52667 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52666);
var inst_52668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52667,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52669 = ((inst_52665) && (inst_52668));
var state_52677__$1 = (function (){var statearr_52679 = state_52677;
(statearr_52679[(7)] = inst_52664__$1);

return statearr_52679;
})();
if(cljs.core.truth_(inst_52669)){
var statearr_52680_52990 = state_52677__$1;
(statearr_52680_52990[(1)] = (3));

} else {
var statearr_52681_52991 = state_52677__$1;
(statearr_52681_52991[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52678 === (3))){
var inst_52664 = (state_52677[(7)]);
var inst_52671 = (function(){throw inst_52664})();
var state_52677__$1 = state_52677;
var statearr_52682_52992 = state_52677__$1;
(statearr_52682_52992[(2)] = inst_52671);

(statearr_52682_52992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52678 === (4))){
var inst_52664 = (state_52677[(7)]);
var state_52677__$1 = state_52677;
var statearr_52683_52993 = state_52677__$1;
(statearr_52683_52993[(2)] = inst_52664);

(statearr_52683_52993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52678 === (5))){
var inst_52674 = (state_52677[(2)]);
var inst_52675 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52674);
var state_52677__$1 = state_52677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52677__$1,inst_52675);
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
var statearr_52684 = [null,null,null,null,null,null,null,null];
(statearr_52684[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_52684[(1)] = (1));

return statearr_52684;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_52677){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52677);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52685){var ex__38759__auto__ = e52685;
var statearr_52686_52994 = state_52677;
(statearr_52686_52994[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52677[(4)]))){
var statearr_52687_52995 = state_52677;
(statearr_52687_52995[(1)] = cljs.core.first((state_52677[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52996 = state_52677;
state_52677 = G__52996;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_52677){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_52677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52688 = f__38848__auto__();
(statearr_52688[(6)] = c__38847__auto__);

return statearr_52688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(compevent.core._LT_account_state.cljs$lang$applyTo = (function (seq52652){
var G__52653 = cljs.core.first(seq52652);
var seq52652__$1 = cljs.core.next(seq52652);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52653,seq52652__$1);
}));

compevent.core._LT_account_states = (function compevent$core$_LT_account_states(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52997 = arguments.length;
var i__4737__auto___52998 = (0);
while(true){
if((i__4737__auto___52998 < len__4736__auto___52997)){
args__4742__auto__.push((arguments[i__4737__auto___52998]));

var G__52999 = (i__4737__auto___52998 + (1));
i__4737__auto___52998 = G__52999;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic = (function (accounts,block_number,p__52693){
var map__52694 = p__52693;
var map__52694__$1 = (((((!((map__52694 == null))))?(((((map__52694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52694):map__52694);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52694__$1,new cljs.core.Keyword(null,"raw","raw",1604651272),false);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52724){
var state_val_52725 = (state_52724[(1)]);
if((state_val_52725 === (1))){
var inst_52696 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"page_size","page_size",-1574119768),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_52697 = [accounts,(1000),block_number];
var inst_52698 = cljs.core.PersistentHashMap.fromArrays(inst_52696,inst_52697);
var inst_52699 = cljs.core.clj__GT_js(inst_52698);
var inst_52700 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_52699);
var inst_52701 = cljs.core.async.interop.p__GT_c(inst_52700);
var state_52724__$1 = state_52724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52724__$1,(2),inst_52701);
} else {
if((state_val_52725 === (2))){
var inst_52703 = (state_52724[(7)]);
var inst_52703__$1 = (state_52724[(2)]);
var inst_52704 = (inst_52703__$1 instanceof cljs.core.ExceptionInfo);
var inst_52705 = cljs.core.ex_data(inst_52703__$1);
var inst_52706 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52705);
var inst_52707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52706,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_52708 = ((inst_52704) && (inst_52707));
var state_52724__$1 = (function (){var statearr_52726 = state_52724;
(statearr_52726[(7)] = inst_52703__$1);

return statearr_52726;
})();
if(cljs.core.truth_(inst_52708)){
var statearr_52727_53000 = state_52724__$1;
(statearr_52727_53000[(1)] = (3));

} else {
var statearr_52728_53001 = state_52724__$1;
(statearr_52728_53001[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52725 === (3))){
var inst_52703 = (state_52724[(7)]);
var inst_52710 = (function(){throw inst_52703})();
var state_52724__$1 = state_52724;
var statearr_52729_53002 = state_52724__$1;
(statearr_52729_53002[(2)] = inst_52710);

(statearr_52729_53002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52725 === (4))){
var inst_52703 = (state_52724[(7)]);
var state_52724__$1 = state_52724;
var statearr_52730_53003 = state_52724__$1;
(statearr_52730_53003[(2)] = inst_52703);

(statearr_52730_53003[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52725 === (5))){
var inst_52713 = (state_52724[(2)]);
var inst_52714 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52713);
var inst_52715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52714,"accounts");
var inst_52716 = (function (){var resp = inst_52714;
var account_resps = inst_52715;
return (function (p1__52689_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__52689_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_52717 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52716,inst_52715);
var state_52724__$1 = (function (){var statearr_52731 = state_52724;
(statearr_52731[(8)] = inst_52717);

return statearr_52731;
})();
if(cljs.core.truth_(raw)){
var statearr_52732_53004 = state_52724__$1;
(statearr_52732_53004[(1)] = (6));

} else {
var statearr_52733_53005 = state_52724__$1;
(statearr_52733_53005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52725 === (6))){
var state_52724__$1 = state_52724;
var statearr_52734_53006 = state_52724__$1;
(statearr_52734_53006[(2)] = cljs.core.identity);

(statearr_52734_53006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52725 === (7))){
var state_52724__$1 = state_52724;
var statearr_52735_53007 = state_52724__$1;
(statearr_52735_53007[(2)] = compevent.core.acc_state);

(statearr_52735_53007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52725 === (8))){
var inst_52717 = (state_52724[(8)]);
var inst_52721 = (state_52724[(2)]);
var inst_52722 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52721,inst_52717);
var state_52724__$1 = state_52724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52724__$1,inst_52722);
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
var statearr_52736 = [null,null,null,null,null,null,null,null,null];
(statearr_52736[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_52736[(1)] = (1));

return statearr_52736;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_52724){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52724);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52737){var ex__38759__auto__ = e52737;
var statearr_52738_53008 = state_52724;
(statearr_52738_53008[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52724[(4)]))){
var statearr_52739_53009 = state_52724;
(statearr_52739_53009[(1)] = cljs.core.first((state_52724[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53010 = state_52724;
state_52724 = G__53010;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_52724){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_52724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52740 = f__38848__auto__();
(statearr_52740[(6)] = c__38847__auto__);

return statearr_52740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_states.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core._LT_account_states.cljs$lang$applyTo = (function (seq52690){
var G__52691 = cljs.core.first(seq52690);
var seq52690__$1 = cljs.core.next(seq52690);
var G__52692 = cljs.core.first(seq52690__$1);
var seq52690__$2 = cljs.core.next(seq52690__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52691,G__52692,seq52690__$2);
}));

compevent.core._LT_account_state_range = (function compevent$core$_LT_account_state_range(accounts,start_block,end_block,block_step){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52741_SHARP_){
return compevent.core._LT_account_states(accounts,p1__52741_SHARP_);
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
var G__53011 = cljs.core.rest(rewards_txs);
var G__53012 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__53011;
data_points = G__53012;
continue;
}
break;
}
});
compevent.core._LT_gov_account = (function compevent$core$_LT_gov_account(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52752){
var state_val_52753 = (state_52752[(1)]);
if((state_val_52753 === (1))){
var inst_52742 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_52743 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52742),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_52744 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52745 = [false];
var inst_52746 = cljs.core.PersistentHashMap.fromArrays(inst_52744,inst_52745);
var inst_52747 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_52743,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52746], 0));
var state_52752__$1 = state_52752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52752__$1,(2),inst_52747);
} else {
if((state_val_52753 === (2))){
var inst_52749 = (state_52752[(2)]);
var inst_52750 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_52749);
var state_52752__$1 = state_52752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52752__$1,inst_52750);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____0 = (function (){
var statearr_52754 = [null,null,null,null,null,null,null];
(statearr_52754[(0)] = compevent$core$_LT_gov_account_$_state_machine__38756__auto__);

(statearr_52754[(1)] = (1));

return statearr_52754;
});
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____1 = (function (state_52752){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52752);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52755){var ex__38759__auto__ = e52755;
var statearr_52756_53013 = state_52752;
(statearr_52756_53013[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52752[(4)]))){
var statearr_52757_53014 = state_52752;
(statearr_52757_53014[(1)] = cljs.core.first((state_52752[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53015 = state_52752;
state_52752 = G__53015;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = function(state_52752){
switch(arguments.length){
case 0:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____1.call(this,state_52752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____0;
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____1;
return compevent$core$_LT_gov_account_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52758 = f__38848__auto__();
(statearr_52758[(6)] = c__38847__auto__);

return statearr_52758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_compound_history = (function compevent$core$_LT_fetch_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52782){
var state_val_52783 = (state_52782[(1)]);
if((state_val_52783 === (1))){
var inst_52760 = compevent.core._LT_latest_block();
var state_52782__$1 = state_52782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52782__$1,(2),inst_52760);
} else {
if((state_val_52783 === (2))){
var inst_52762 = (state_52782[(7)]);
var inst_52762__$1 = (state_52782[(2)]);
var inst_52763 = (inst_52762__$1 - (1000000));
var inst_52764 = compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(compevent.core.provider,compevent.core.comp_address,compevent.core.comp_unitroller,account);
var state_52782__$1 = (function (){var statearr_52784 = state_52782;
(statearr_52784[(7)] = inst_52762__$1);

(statearr_52784[(8)] = inst_52763);

return statearr_52784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52782__$1,(3),inst_52764);
} else {
if((state_val_52783 === (3))){
var inst_52766 = (state_52782[(9)]);
var inst_52768 = (state_52782[(10)]);
var inst_52762 = (state_52782[(7)]);
var inst_52763 = (state_52782[(8)]);
var inst_52766__$1 = (state_52782[(2)]);
var inst_52767 = cljs.core.PersistentVector.EMPTY;
var inst_52768__$1 = compevent.core.accum_comp_rewards(inst_52766__$1,inst_52767);
var inst_52769 = (function (){var latest_block = inst_52762;
var init_block = inst_52763;
var comp_rewards = inst_52766__$1;
var comp_rewards_SINGLEQUOTE_ = inst_52768__$1;
return (function (dp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(dp),"Supplied",new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600).cljs$core$IFn$_invoke$arity$1(dp)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(dp),"Borrowed",new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713).cljs$core$IFn$_invoke$arity$1(dp)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),"Account Health",new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(dp)], null)], null);
});
})();
var inst_52770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52771 = [account];
var inst_52772 = (new cljs.core.PersistentVector(null,1,(5),inst_52770,inst_52771,null));
var inst_52773 = compevent.core._LT_account_state_range(inst_52772,inst_52763,inst_52762,(10000));
var state_52782__$1 = (function (){var statearr_52785 = state_52782;
(statearr_52785[(9)] = inst_52766__$1);

(statearr_52785[(11)] = inst_52769);

(statearr_52785[(10)] = inst_52768__$1);

return statearr_52785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52782__$1,(4),inst_52773);
} else {
if((state_val_52783 === (4))){
var inst_52766 = (state_52782[(9)]);
var inst_52769 = (state_52782[(11)]);
var inst_52768 = (state_52782[(10)]);
var inst_52762 = (state_52782[(7)]);
var inst_52763 = (state_52782[(8)]);
var inst_52775 = (state_52782[(2)]);
var inst_52776 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_52769,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52775], 0));
var inst_52777 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_52776);
var inst_52778 = (function (){var latest_block = inst_52762;
var init_block = inst_52763;
var comp_rewards = inst_52766;
var comp_rewards_SINGLEQUOTE_ = inst_52768;
var acc_history = inst_52777;
return (function (p1__52759_SHARP_){
return (((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__52759_SHARP_) <= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc_history)))) && ((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__52759_SHARP_) >= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.first(acc_history)))));
});
})();
var inst_52779 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_52778,inst_52768);
var inst_52780 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_52777,inst_52779);
var state_52782__$1 = state_52782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52782__$1,inst_52780);
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
var statearr_52786 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52786[(0)] = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__);

(statearr_52786[(1)] = (1));

return statearr_52786;
});
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1 = (function (state_52782){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52782);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52787){var ex__38759__auto__ = e52787;
var statearr_52788_53016 = state_52782;
(statearr_52788_53016[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52782[(4)]))){
var statearr_52789_53017 = state_52782;
(statearr_52789_53017[(1)] = cljs.core.first((state_52782[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53018 = state_52782;
state_52782 = G__53018;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = function(state_52782){
switch(arguments.length){
case 0:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1.call(this,state_52782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0;
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1;
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52790 = f__38848__auto__();
(statearr_52790[(6)] = c__38847__auto__);

return statearr_52790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.historic_whale_layer = (function compevent$core$historic_whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53019 = arguments.length;
var i__4737__auto___53020 = (0);
while(true){
if((i__4737__auto___53020 < len__4736__auto___53019)){
args__4742__auto__.push((arguments[i__4737__auto___53020]));

var G__53021 = (i__4737__auto___53020 + (1));
i__4737__auto___53020 = G__53021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__52795){
var map__52796 = p__52795;
var map__52796__$1 = (((((!((map__52796 == null))))?(((((map__52796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52796):map__52796);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52796__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52796__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52796__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52796__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
var show_rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52796__$1,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(75),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(10),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainMin","domainMin",1827225240),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"side",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Account Health","Supplied","Borrowed","Claimed Rewards"
], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","#706897","#fd3a69","#5aa469"
], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(compevent.core.historic_whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core.historic_whale_layer.cljs$lang$applyTo = (function (seq52792){
var G__52793 = cljs.core.first(seq52792);
var seq52792__$1 = cljs.core.next(seq52792);
var G__52794 = cljs.core.first(seq52792__$1);
var seq52792__$2 = cljs.core.next(seq52792__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52793,G__52794,seq52792__$2);
}));

compevent.core.make_whale_history_plot = (function compevent$core$make_whale_history_plot(line_points,address){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)," Compound history"].join(''),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"middle",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),2.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),"ETH Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(150000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dai","dai",659273042),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sai","sai",1975712840),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sai","sai",1975712840),"SAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat","bat",607903974),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"bat","bat",607903974),"BAT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),"WBTC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comp","comp",1191953630),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp","comp",1191953630),"COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uni","uni",-1194876440),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uni","uni",-1194876440),"UNI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zrx","zrx",955760380),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"zrx","zrx",955760380),"ZRX",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rep","rep",-1226820564),"REP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdc","usdc",-457089155),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdt","usdt",999447714),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdt","usdt",999447714),"USDT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eth","eth",1381694970),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth","eth",1381694970),"ETH",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),"Claimed COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true], 0))], null))], null);
});
compevent.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
compevent.core.render_compound_history = (function compevent$core$render_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_52832){
var state_val_52833 = (state_52832[(1)]);
if((state_val_52833 === (1))){
var inst_52798 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_52799 = [null];
var inst_52800 = cljs.core.PersistentHashMap.fromArrays(inst_52798,inst_52799);
var inst_52801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_52800);
var inst_52802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52803 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_52804 = (new cljs.core.PersistentVector(null,1,(5),inst_52802,inst_52803,null));
var inst_52805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52806 = ["Fetching data ..."];
var inst_52807 = (new cljs.core.PersistentVector(null,1,(5),inst_52805,inst_52806,null));
var inst_52808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(compevent.core.app_state,cljs.core.update_in,inst_52804,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52807], 0));
var inst_52809 = compevent.core._LT_fetch_compound_history(account);
var state_52832__$1 = (function (){var statearr_52834 = state_52832;
(statearr_52834[(7)] = inst_52808);

(statearr_52834[(8)] = inst_52801);

return statearr_52834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52832__$1,(2),inst_52809);
} else {
if((state_val_52833 === (2))){
var inst_52811 = (state_52832[(2)]);
var inst_52812 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(compevent.core.float_num_values,inst_52811);
var inst_52813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52814 = [compevent.core.separator_str];
var inst_52815 = (new cljs.core.PersistentVector(null,1,(5),inst_52813,inst_52814,null));
var inst_52816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compevent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steps","steps",-128433302),inst_52815);
var inst_52817 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_52818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52819 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52821 = compevent.core.make_whale_history_plot(inst_52812,account);
var inst_52822 = [oz.core.vega_lite,inst_52821];
var inst_52823 = (new cljs.core.PersistentVector(null,2,(5),inst_52820,inst_52822,null));
var inst_52824 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_52823];
var inst_52825 = (new cljs.core.PersistentVector(null,2,(5),inst_52819,inst_52824,null));
var inst_52826 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_52825];
var inst_52827 = (new cljs.core.PersistentVector(null,2,(5),inst_52818,inst_52826,null));
var inst_52828 = [inst_52827];
var inst_52829 = cljs.core.PersistentHashMap.fromArrays(inst_52817,inst_52828);
var inst_52830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_52829);
var state_52832__$1 = (function (){var statearr_52835 = state_52832;
(statearr_52835[(9)] = inst_52816);

return statearr_52835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52832__$1,inst_52830);
} else {
return null;
}
}
});
return (function() {
var compevent$core$render_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$render_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_52836 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52836[(0)] = compevent$core$render_compound_history_$_state_machine__38756__auto__);

(statearr_52836[(1)] = (1));

return statearr_52836;
});
var compevent$core$render_compound_history_$_state_machine__38756__auto____1 = (function (state_52832){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_52832);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e52837){var ex__38759__auto__ = e52837;
var statearr_52838_53022 = state_52832;
(statearr_52838_53022[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_52832[(4)]))){
var statearr_52839_53023 = state_52832;
(statearr_52839_53023[(1)] = cljs.core.first((state_52832[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53024 = state_52832;
state_52832 = G__53024;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$render_compound_history_$_state_machine__38756__auto__ = function(state_52832){
switch(arguments.length){
case 0:
return compevent$core$render_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$render_compound_history_$_state_machine__38756__auto____1.call(this,state_52832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$render_compound_history_$_state_machine__38756__auto____0;
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$render_compound_history_$_state_machine__38756__auto____1;
return compevent$core$render_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_52840 = f__38848__auto__();
(statearr_52840[(6)] = c__38847__auto__);

return statearr_52840;
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
